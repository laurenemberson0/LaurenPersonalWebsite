/* ============================================================================
   fetch-posters.js
   ----------------------------------------------------------------------------
   For every movie in data.js, look it up on Apple's public iTunes Search API
   (no key needed), download the poster artwork into images/movies/, and write
   a title -> image-path map into js/movie-posters.js.

   Resumable: films that already have a saved poster are skipped, so you can
   re-run it (from the Actions tab) to fill in anything that was missed.

   Run by .github/workflows/fetch-posters.yml.
============================================================================ */

const fs = require("fs");
const path = require("path");

const OUT_DIR = "images/movies";
const MAP_FILE = "js/movie-posters.js";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Load the MOVIES array out of data.js without needing it to be a module.
const dataSrc = fs.readFileSync("js/data.js", "utf8");
const MOVIES = new Function(
  dataSrc + '\n;return typeof MOVIES !== "undefined" ? MOVIES : [];'
)();

fs.mkdirSync(OUT_DIR, { recursive: true });

function slugify(t) {
  return t
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

// Resume from any existing map.
let map = {};
try {
  const prev = fs.readFileSync(MAP_FILE, "utf8");
  const j = prev.slice(prev.indexOf("{"), prev.lastIndexOf("}") + 1);
  if (j) map = JSON.parse(j);
} catch (e) { /* first run */ }

async function searchArtwork(title) {
  // Drop a trailing "(year)" we may have added for disambiguation.
  const q = title.replace(/\s*\(\d{4}\)\s*$/, "");
  const url =
    "https://itunes.apple.com/search?term=" +
    encodeURIComponent(q) +
    "&media=movie&entity=movie&limit=1&country=US";
  for (let attempt = 0; attempt < 5; attempt++) {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (res.status === 403 || res.status === 429) {
      await sleep(2500 * (attempt + 1)); // backoff on throttling
      continue;
    }
    if (!res.ok) throw new Error("search HTTP " + res.status);
    const data = await res.json();
    return data.results && data.results[0] ? data.results[0].artworkUrl100 : null;
  }
  throw new Error("throttled");
}

(async () => {
  const usedFiles = new Set(Object.values(map).map((p) => path.basename(p)));
  let done = 0, skipped = 0, missing = 0, failed = 0;

  for (const m of MOVIES) {
    const title = m.title;
    if (map[title] && fs.existsSync(map[title])) { skipped++; continue; }

    // Pick a unique filename.
    let base = slugify(title), file = base + ".jpg", n = 2;
    while (usedFiles.has(file)) { file = base + "-" + n + ".jpg"; n++; }

    try {
      const art = await searchArtwork(title);
      if (!art) { missing++; console.log("no match: " + title); await sleep(200); continue; }
      const big = art.replace(/\/\d+x\d+bb\.(jpg|png)/, "/600x600bb.jpg");
      const img = await fetch(big);
      if (!img.ok) throw new Error("image HTTP " + img.status);
      const buf = Buffer.from(await img.arrayBuffer());
      fs.writeFileSync(path.join(OUT_DIR, file), buf);
      usedFiles.add(file);
      map[title] = OUT_DIR + "/" + file;
      done++;
      if (done % 25 === 0) console.log(done + " posters fetched so far…");
    } catch (e) {
      failed++;
      console.log("fail: " + title + " — " + e.message);
    }
    await sleep(200);
  }

  const header =
    "/* ============================================================\n" +
    "   AUTO-GENERATED movie posters (Apple iTunes). DO NOT EDIT.\n" +
    "   Maps movie title -> downloaded poster image path.\n" +
    "   ============================================================ */\n";
  fs.writeFileSync(MAP_FILE, header + "window.MOVIE_POSTERS = " + JSON.stringify(map) + ";\n");

  console.log(
    "DONE — new: " + done + ", skipped(existing): " + skipped +
    ", no-match: " + missing + ", failed: " + failed +
    ", total mapped: " + Object.keys(map).length + " / " + MOVIES.length
  );
})().catch((e) => { console.error("Fatal: " + e.message); process.exit(1); });
