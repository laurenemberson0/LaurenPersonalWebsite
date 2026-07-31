/* ============================================================================
   fetch-covers.js
   ----------------------------------------------------------------------------
   For every album in data.js (the MUSIC list), find its Wikipedia article
   (searching for the album title + artist + year) and download that article's
   lead image (the album cover) into images/albums/. Writes an
   "artist::title::year" -> image-path map into js/album-covers.js.

   Mirrors scripts/fetch-posters.js. Wikipedia's API is public (no key) and
   doesn't block servers, so this runs quickly on GitHub Actions. Resumable:
   albums that already have a saved cover are skipped, so it can be re-run to
   fill in anything missed. Albums that already ship a manual cover in data.js
   are left alone.

   Run by .github/workflows/fetch-covers.yml.
============================================================================ */

const fs = require("fs");
const path = require("path");

const OUT_DIR = "images/albums";
const MAP_FILE = "js/album-covers.js";
const UA = "LaurenEmbersonSite/1.0 (https://laurenemberson.ca; personal library cover fetcher)";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const dataSrc = fs.readFileSync("js/data.js", "utf8");
const MUSIC = new Function(
  dataSrc + '\n;return typeof MUSIC !== "undefined" ? MUSIC : [];'
)();

fs.mkdirSync(OUT_DIR, { recursive: true });

function keyFor(m) { return m.artist + "::" + m.title + "::" + m.year; }
function slugify(t) {
  return t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 70);
}
function extFromUrl(u) {
  const m = u.toLowerCase().match(/\.(jpe?g|png|gif)(?:$|\?)/);
  return m ? (m[1] === "jpeg" ? "jpg" : m[1]) : "jpg";
}

let map = {};
try {
  const prev = fs.readFileSync(MAP_FILE, "utf8");
  const j = prev.slice(prev.indexOf("{"), prev.lastIndexOf("}") + 1);
  if (j) map = JSON.parse(j);
} catch (e) { /* first run */ }

// Two Wikipedia calls: (1) find the album's article, (2) pull its lead image
// (the infobox cover) from the page-summary endpoint.
async function getWikipediaCover(m) {
  const q = '"' + m.title + '" ' + m.artist + " " + m.year + " album";

  const searchUrl =
    "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srlimit=1" +
    "&srsearch=" + encodeURIComponent(q);
  const r1 = await fetch(searchUrl, { headers: { "User-Agent": UA } });
  if (r1.status === 429) { const e = new Error("throttled"); e.throttled = true; throw e; }
  if (!r1.ok) throw new Error("search HTTP " + r1.status);
  const d1 = await r1.json();
  const hit = d1.query && d1.query.search && d1.query.search[0];
  if (!hit) return null;

  await sleep(150);

  const sumUrl =
    "https://en.wikipedia.org/api/rest_v1/page/summary/" +
    encodeURIComponent(hit.title.replace(/ /g, "_"));
  const r2 = await fetch(sumUrl, { headers: { "User-Agent": UA } });
  if (r2.status === 429) { const e = new Error("throttled"); e.throttled = true; throw e; }
  if (!r2.ok) throw new Error("summary HTTP " + r2.status);
  const d2 = await r2.json();
  if (d2.thumbnail && d2.thumbnail.source) return d2.thumbnail.source;
  if (d2.originalimage && d2.originalimage.source) return d2.originalimage.source;
  return null;
}

// Apple's iTunes Search API — returns the real album ARTWORK (not a band
// photo), so it's our primary source. We pull several candidates and pick the
// one whose album title AND release year actually match, because a bare
// limit=1 search happily returns an artist's most popular album instead.
function norm(s) {
  return (s || "").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "")
    .replace(/\b(deluxe|expanded|remaster(ed)?|anniversary|special|explicit|bonus|edition|version)\b.*$/i, "")
    .replace(/[^a-z0-9]+/g, " ").trim();
}
async function getItunesCover(m) {
  const url = "https://itunes.apple.com/search?media=music&entity=album&limit=50&term=" +
    encodeURIComponent(m.artist + " " + m.title);
  let results = null;
  for (let attempt = 0; attempt < 6 && results === null; attempt++) {
    const r = await fetch(url, { headers: { "User-Agent": UA } });
    if (r.status === 403 || r.status === 429) { await sleep(5000); continue; }  // throttled: back off
    if (!r.ok) return null;
    results = (await r.json()).results || [];
  }
  if (!results || !results.length) return null;

  const nt = norm(m.title), na = norm(m.artist);
  let best = null, bestScore = 0;
  for (const r of results) {
    if (!r.artworkUrl100) continue;
    const cn = norm(r.collectionName), an = norm(r.artistName);
    const artistOk = an && (an.includes(na) || na.includes(an));
    let score = 0;
    if (cn === nt) score = 3;
    else if (cn.startsWith(nt) || nt.startsWith(cn)) score = 2;
    else if (cn.includes(nt) || nt.includes(cn)) score = 1;
    if (!artistOk) score -= 3;                       // wrong artist: reject
    const yr = (r.releaseDate || "").slice(0, 4);
    if (yr && String(m.year) === yr) score += 1;     // exact-year tiebreaker
    if (score > bestScore) { bestScore = score; best = r; }
  }
  if (!best || bestScore < 1) return null;            // no confident title match
  return best.artworkUrl100.replace("100x100bb", "600x600bb");
}

// Deezer's public API — no key, lenient rate limits, and broad indie coverage.
// Returns real cover artwork (cover_xl is ~1000x1000).
async function deezerSearch(q) {
  const url = "https://api.deezer.com/search/album?limit=25&q=" + encodeURIComponent(q);
  for (let attempt = 0; attempt < 4; attempt++) {
    const r = await fetch(url, { headers: { "User-Agent": UA } });
    if (r.status === 429) { await sleep(4000); continue; }  // throttled
    if (!r.ok) return null;
    const d = await r.json();
    if (d && d.error && d.error.code === 4) { await sleep(4000); continue; }  // quota
    return d;
  }
  return null;
}
function pickDeezer(results, m) {
  const nt = norm(m.title), na = norm(m.artist);
  let best = null, bestScore = 0;
  for (const a of results || []) {
    const cn = norm(a.title), an = norm(a.artist && a.artist.name);
    const artistOk = an && (an.includes(na) || na.includes(an));
    let score = 0;
    if (cn === nt) score = 3;
    else if (cn.startsWith(nt) || nt.startsWith(cn)) score = 2;
    else if (cn.includes(nt) || nt.includes(cn)) score = 1;
    if (!artistOk) score -= 3;
    if (score > bestScore) { bestScore = score; best = a; }
  }
  if (!best || bestScore < 1) return null;
  return best.cover_xl || best.cover_big || best.cover_medium || null;
}
async function getDeezerCover(m) {
  // Try a precise field query first, then a looser free-text one.
  const strict = 'artist:"' + m.artist.replace(/"/g, "") + '" album:"' + m.title.replace(/"/g, "") + '"';
  const loose = m.artist + " " + m.title;
  for (const q of [strict, loose]) {
    const d = await deezerSearch(q);
    const cover = d && pickDeezer(d.data, m);
    if (cover) return cover;
    await sleep(200);
  }
  return null;
}

// MusicBrainz release-group lookup -> Cover Art Archive front image. Slower
// (MB asks for <=1 req/s) but a reliable last resort for anything Deezer and
// Apple miss.
async function getMusicBrainzCover(m) {
  const q = 'releasegroup:"' + m.title.replace(/"/g, "") + '" AND artist:"' + m.artist.replace(/"/g, "") + '"';
  const url = "https://musicbrainz.org/ws/2/release-group?fmt=json&limit=10&query=" + encodeURIComponent(q);
  const r = await fetch(url, { headers: { "User-Agent": UA } });
  if (!r.ok) return null;
  const d = await r.json();
  const groups = d["release-groups"] || [];
  const nt = norm(m.title), na = norm(m.artist);
  let best = null, bestScore = 0;
  for (const g of groups) {
    const cn = norm(g.title);
    const an = norm((g["artist-credit"] || []).map((a) => a.name).join(" "));
    const artistOk = an && (an.includes(na) || na.includes(an));
    let score = 0;
    if (cn === nt) score = 3;
    else if (cn.startsWith(nt) || nt.startsWith(cn)) score = 2;
    else if (cn.includes(nt) || nt.includes(cn)) score = 1;
    if (!artistOk) score -= 3;
    if (score > bestScore) { bestScore = score; best = g; }
  }
  if (!best || bestScore < 1) return null;
  // Cover Art Archive redirects /front to the actual image; the download
  // step's fetch follows the redirect. Returns 404 if the group has no art.
  const caa = "https://coverartarchive.org/release-group/" + best.id + "/front-500";
  const head = await fetch(caa, { method: "HEAD", headers: { "User-Agent": UA } });
  if (!head.ok) return null;
  return caa;
}

// Try Deezer first (lenient limits), then Apple, then MusicBrainz/CAA. Never
// Wikipedia — its lead image is usually a live band photo, so a miss stays a
// clean text tile.
async function getCover(m) {
  const dz = await getDeezerCover(m);
  if (dz) return dz;
  await sleep(200);
  const it = await getItunesCover(m);
  if (it) return it;
  await sleep(1100);   // MusicBrainz asks for <=1 req/s
  return await getMusicBrainzCover(m);
}

(async () => {
  const usedFiles = new Set(Object.values(map).map((p) => path.basename(p)));
  let done = 0, skipped = 0, missing = 0, failed = 0, throttled = 0;

  for (const m of MUSIC) {
    // Leave albums that already have a manually-set cover in data.js alone.
    if (m.cover && m.cover.trim() !== "") { skipped++; continue; }
    const key = keyFor(m);
    if (map[key] && fs.existsSync(map[key])) { skipped++; continue; }

    try {
      const coverUrl = await getCover(m);
      if (!coverUrl) { missing++; console.log("no image: " + key); await sleep(250); continue; }
      const ext = extFromUrl(coverUrl);
      let base = slugify(m.artist + "-" + m.title + "-" + m.year), file = base + "." + ext, n = 2;
      while (usedFiles.has(file)) { file = base + "-" + n + "." + ext; n++; }
      const img = await fetch(coverUrl, { headers: { "User-Agent": UA } });
      if (!img.ok) throw new Error("image HTTP " + img.status);
      const buf = Buffer.from(await img.arrayBuffer());
      fs.writeFileSync(path.join(OUT_DIR, file), buf);
      usedFiles.add(file);
      map[key] = OUT_DIR + "/" + file;
      done++;
      if (done % 25 === 0) console.log(done + " covers fetched so far…");
    } catch (e) {
      if (e.throttled) { throttled++; }
      else { failed++; console.log("fail: " + key + " — " + e.message); }
    }
    await sleep(1500); // gentle pacing; Deezer's limits are generous
  }

  const header =
    "/* ============================================================\n" +
    "   AUTO-GENERATED album covers (Wikipedia). DO NOT EDIT.\n" +
    "   Maps \"artist::title::year\" -> downloaded cover image path.\n" +
    "   ============================================================ */\n";
  fs.writeFileSync(MAP_FILE, header + "window.ALBUM_COVERS = " + JSON.stringify(map) + ";\n");

  console.log(
    "DONE — new: " + done + ", skipped: " + skipped +
    ", no-image: " + missing + ", throttled: " + throttled + ", failed: " + failed +
    ", total mapped: " + Object.keys(map).length + " / " + MUSIC.length
  );
})().catch((e) => { console.error("Fatal: " + e.message); process.exit(1); });
