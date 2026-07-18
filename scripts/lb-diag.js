/* TEMPORARY diagnostic: probe which Letterboxd endpoints/headers get through
   from a GitHub Actions runner. Safe to delete after we settle the approach. */

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

const targets = [
  ["films", "https://letterboxd.com/laurenemberson/films/by/entry-rating/page/1/"],
  ["rss", "https://letterboxd.com/laurenemberson/rss/"],
  ["profile", "https://letterboxd.com/laurenemberson/"]
];

const headerSets = {
  minimal: { "User-Agent": UA },
  full: {
    "User-Agent": UA,
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
    "Cache-Control": "no-cache",
    "Upgrade-Insecure-Requests": "1"
  }
};

async function main() {
  for (const [tname, url] of targets) {
    for (const hname of Object.keys(headerSets)) {
      try {
        const res = await fetch(url, { headers: headerSets[hname] });
        const body = await res.text();
        const cf = /just a moment|cloudflare|cf-browser-verification/i.test(body);
        console.log(
          `[${tname}/${hname}] status=${res.status} len=${body.length} cloudflare=${cf}`
        );
      } catch (e) {
        console.log(`[${tname}/${hname}] ERROR ${e.message}`);
      }
      await new Promise((r) => setTimeout(r, 500));
    }
  }
}
main();
