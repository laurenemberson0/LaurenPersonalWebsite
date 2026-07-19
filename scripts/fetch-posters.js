/* ============================================================================
   fetch-posters.js
   ----------------------------------------------------------------------------
   For every movie in data.js, find its Wikipedia article (searching for the
   title + "film") and download that article's lead image (the poster) into
   images/movies/. Writes a title -> image-path map into js/movie-posters.js.

   Wikipedia's API is public (no key) and doesn't block servers, so this runs
   quickly. Resumable: films that already have a saved poster are skipped, so
   you can re-run it to fill in anything missed.

   Run by .github/workflows/fetch-posters.yml.
============================================================================ */

const fs = require("fs");
const path = require("path");

const OUT_DIR = "images/movies";
const MAP_FILE = "js/movie-posters.js";
const UA = "LaurenEmbersonSite/1.0 (https://laurenemberson.ca; personal library poster fetcher)";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const dataSrc = fs.readFileSync("js/data.js", "utf8");
const MOVIES = new Function(
  dataSrc + '\n;return typeof MOVIES !== "undefined" ? MOVIES : [];'
)();

fs.mkdirSync(OUT_DIR, { recursive: true });

function slugify(t) {
  return t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
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

// Two Wikipedia calls: (1) find the film's article, (2) pull its lead image
// (the infobox poster) from the page-summary endpoint.
async function getPoster(title) {
  const q = title.replace(/\s*\(\d{4}\)\s*$/, "") + " film";

  // 1) Search for the article title.
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

  // 2) Get that article's lead image from the summary endpoint.
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

  for (const m of MOVIES) {
    const title = m.title;
    if (map[title] && fs.existsSync(map[title])) { skipped++; continue; }

    try {
      const posterUrl = await getPoster(title);
      if (!posterUrl) { missing++; console.log("no image: " + title); await sleep(250); continue; }
      const ext = extFromUrl(posterUrl);
      let base = slugify(title), file = base + "." + ext, n = 2;
      while (usedFiles.has(file)) { file = base + "-" + n + "." + ext; n++; }
      const img = await fetch(posterUrl, { headers: { "User-Agent": UA } });
      if (!img.ok) throw new Error("image HTTP " + img.status);
      const buf = Buffer.from(await img.arrayBuffer());
      fs.writeFileSync(path.join(OUT_DIR, file), buf);
      usedFiles.add(file);
      map[title] = OUT_DIR + "/" + file;
      done++;
      if (done % 25 === 0) console.log(done + " posters fetched so far…");
    } catch (e) {
      if (e.throttled) { throttled++; }
      else { failed++; console.log("fail: " + title + " — " + e.message); }
    }
    await sleep(300); // be polite to Wikipedia
  }

  const header =
    "/* ============================================================\n" +
    "   AUTO-GENERATED movie posters (Wikipedia). DO NOT EDIT.\n" +
    "   Maps movie title -> downloaded poster image path.\n" +
    "   ============================================================ */\n";
  fs.writeFileSync(MAP_FILE, header + "window.MOVIE_POSTERS = " + JSON.stringify(map) + ";\n");

  console.log(
    "DONE — new: " + done + ", skipped(existing): " + skipped +
    ", no-image: " + missing + ", throttled: " + throttled + ", failed: " + failed +
    ", total mapped: " + Object.keys(map).length + " / " + MOVIES.length
  );
})().catch((e) => { console.error("Fatal: " + e.message); process.exit(1); });
