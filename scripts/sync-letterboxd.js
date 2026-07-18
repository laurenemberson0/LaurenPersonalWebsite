/* ============================================================================
   sync-letterboxd.js
   ----------------------------------------------------------------------------
   Reads your PUBLIC Letterboxd profile, grabs your highest-rated films (up to
   50), looks up each film's title / director / year / poster, and writes them
   into js/movies-auto.js. That file is what the Library page's Movies section
   displays.

   This is run automatically by GitHub (see .github/workflows/letterboxd-sync.yml)
   a couple of times a day. You never need to run or edit this yourself.
============================================================================ */

const fs = require("fs");

const USER = process.env.LETTERBOXD_USER;
const MAX_MOVIES = 50;
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/124.0 Safari/537.36";

if (!USER) {
  console.error("No LETTERBOXD_USER set. Aborting.");
  process.exit(1);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getHtml(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error("Fetch failed " + res.status + " for " + url);
  return res.text();
}

/* Pull (film-slug, your-rating) pairs off a "films by rating" grid page.
   Letterboxd marks a rating with a class like "rated-9" where the number is
   out of 10, so rated-9 = 4.5 stars, rated-10 = 5 stars. */
function parseGrid(html) {
  const out = [];
  const parts = html.split('data-film-slug="');
  for (let i = 1; i < parts.length; i++) {
    const chunk = parts[i];
    const slug = chunk.slice(0, chunk.indexOf('"'));
    if (!slug) continue;
    // The rating span for this film appears before the next film's slug.
    const m = chunk.slice(0, 1500).match(/rated-(\d+)/);
    if (m) out.push({ slug: slug, rating: parseInt(m[1], 10) / 2 });
  }
  return out;
}

/* Pull title / director / year / poster from a single film page's JSON-LD. */
function parseFilmPage(html) {
  const marker = "application/ld+json";
  const idx = html.indexOf(marker);
  if (idx === -1) return null;
  const start = html.indexOf(">", idx) + 1;
  const end = html.indexOf("</script>", start);
  if (start === 0 || end === -1) return null;

  let raw = html.slice(start, end).trim();
  // Letterboxd wraps the JSON in /* <![CDATA[ */ ... /* ]]> */ — strip those.
  raw = raw.replace(/\/\*\s*<!\[CDATA\[\s*\*\//, "");
  raw = raw.replace(/\/\*\s*\]\]>\s*\*\//, "");
  raw = raw.trim();

  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    return null;
  }

  const title = data.name || "";
  let year = "";
  if (Array.isArray(data.releasedEvent) && data.releasedEvent[0]) {
    year = String(data.releasedEvent[0].startDate || "").slice(0, 4);
  } else if (data.datePublished) {
    year = String(data.datePublished).slice(0, 4);
  }
  let director = "";
  if (Array.isArray(data.director)) {
    director = data.director.map((d) => d.name).filter(Boolean).join(", ");
  } else if (data.director && data.director.name) {
    director = data.director.name;
  }
  const poster = data.image || "";

  return { title: title, year: year, director: director, poster: poster };
}

async function main() {
  console.log("Syncing highest-rated films for @" + USER);

  // 1) Collect rated films from the by-rating grid (highest first), across
  //    however many pages are needed to reach MAX_MOVIES.
  const rated = [];
  const seen = new Set();
  for (let page = 1; page <= 4 && rated.length < MAX_MOVIES; page++) {
    const url =
      "https://letterboxd.com/" + USER + "/films/by/entry-rating/page/" + page + "/";
    let html;
    try {
      html = await getHtml(url);
    } catch (e) {
      console.log("Stopped paging at page " + page + ": " + e.message);
      break;
    }
    const found = parseGrid(html);
    if (found.length === 0) break;
    for (const f of found) {
      if (!seen.has(f.slug)) {
        seen.add(f.slug);
        rated.push(f);
      }
    }
    await sleep(400);
  }

  const top = rated.slice(0, MAX_MOVIES);
  console.log("Found " + top.length + " rated films to detail.");
  if (top.length === 0) {
    console.error("No rated films found — is the profile public? Not writing.");
    process.exit(1);
  }

  // 2) Look up each film's details.
  const movies = [];
  for (const f of top) {
    const url = "https://letterboxd.com/film/" + f.slug + "/";
    try {
      const html = await getHtml(url);
      const info = parseFilmPage(html);
      if (info && info.title) {
        movies.push({
          cover: info.poster,
          title: info.title,
          director: info.director || info.year || "",
          rating: f.rating,
          letterboxd: url,
          wikipedia: ""
        });
        console.log("  ✓ " + info.title + " — " + f.rating + "★");
      } else {
        console.log("  ! could not read details for " + f.slug);
      }
    } catch (e) {
      console.log("  ! " + f.slug + ": " + e.message);
    }
    await sleep(350);
  }

  if (movies.length === 0) {
    console.error("Got film slugs but no details — not overwriting existing file.");
    process.exit(1);
  }

  // 3) Write js/movies-auto.js
  const header =
    "/* ============================================================\n" +
    "   AUTO-GENERATED from Letterboxd (@" + USER + "). DO NOT EDIT.\n" +
    "   Updated automatically by the letterboxd-sync GitHub Action.\n" +
    "   ============================================================ */\n";
  const body = "window.MOVIES_AUTO = " + JSON.stringify(movies, null, 2) + ";\n";
  fs.writeFileSync("js/movies-auto.js", header + body);
  console.log("Wrote js/movies-auto.js with " + movies.length + " movies.");
}

main().catch((e) => {
  console.error("Sync failed: " + e.message);
  process.exit(1);
});
