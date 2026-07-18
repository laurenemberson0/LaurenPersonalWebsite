/* ============================================================================
   sync-letterboxd.js
   ----------------------------------------------------------------------------
   Reads your PUBLIC Letterboxd RSS feed (the list of films you've logged) and
   writes the ones you've rated into js/movies-auto.js — sorted highest rating
   first — for the Library page's Movies section.

   Why the RSS feed? Letterboxd's normal profile pages are behind bot
   protection that blocks automated servers, but the RSS feed is open. The
   feed contains each film's title, year, your star rating, and a poster image.
   (It does NOT include the director, so we show the year instead.)

   Note: the feed only carries recently-logged films, so this shows your recent
   watches (highest-rated first), not your entire all-time history.

   Run automatically by .github/workflows/letterboxd-sync.yml. You never need
   to run or edit this yourself.
============================================================================ */

const fs = require("fs");

const USER = process.env.LETTERBOXD_USER;
const MAX_MOVIES = 50;
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

if (!USER) {
  console.error("No LETTERBOXD_USER set. Aborting.");
  process.exit(1);
}

/* Pull the first captured group of a regex out of a chunk of text. */
function grab(text, re) {
  const m = text.match(re);
  return m ? m[1].trim() : "";
}

async function main() {
  const url = "https://letterboxd.com/" + USER + "/rss/";
  console.log("Reading RSS for @" + USER);

  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) {
    console.error("RSS fetch failed: " + res.status + ". Not writing.");
    process.exit(1);
  }
  const xml = await res.text();

  // Split into <item> blocks and pull the fields out of each.
  const blocks = xml.split("<item>").slice(1);
  const movies = [];

  for (const block of blocks) {
    const item = block.split("</item>")[0];

    const ratingStr = grab(item, /<letterboxd:memberRating>([^<]+)<\/letterboxd:memberRating>/);
    if (ratingStr === "") continue; // skip films you logged without a rating

    const title = grab(item, /<letterboxd:filmTitle>([^<]+)<\/letterboxd:filmTitle>/);
    const year = grab(item, /<letterboxd:filmYear>([^<]+)<\/letterboxd:filmYear>/);
    const link = grab(item, /<link>([^<]+)<\/link>/);
    const poster = grab(item, /<img src="([^"]+)"/);

    if (!title) continue;

    movies.push({
      cover: poster,
      title: decodeEntities(title),
      director: year, // the feed has no director, so the subtitle shows the year
      rating: parseFloat(ratingStr),
      letterboxd: link,
      wikipedia: ""
    });
  }

  if (movies.length === 0) {
    console.error("No rated films found in the feed. Not overwriting existing file.");
    process.exit(1);
  }

  // Highest rating first; ties keep feed order (most recent first).
  movies.sort((a, b) => b.rating - a.rating);
  const top = movies.slice(0, MAX_MOVIES);

  top.forEach((m) => console.log("  " + m.rating + "★  " + m.title + " (" + m.director + ")"));

  const header =
    "/* ============================================================\n" +
    "   AUTO-GENERATED from Letterboxd (@" + USER + "). DO NOT EDIT.\n" +
    "   Updated automatically by the letterboxd-sync GitHub Action.\n" +
    "   ============================================================ */\n";
  const body = "window.MOVIES_AUTO = " + JSON.stringify(top, null, 2) + ";\n";
  fs.writeFileSync("js/movies-auto.js", header + body);
  console.log("Wrote js/movies-auto.js with " + top.length + " movies.");
}

/* Turn common XML/HTML entities back into normal characters. */
function decodeEntities(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

main().catch((e) => {
  console.error("Sync failed: " + e.message);
  process.exit(1);
});
