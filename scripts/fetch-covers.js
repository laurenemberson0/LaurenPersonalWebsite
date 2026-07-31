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
async function getCover(m) {
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
    await sleep(300); // be polite to Wikipedia
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
