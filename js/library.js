/* ============================================================================
   library.js  —  builds the Music, Books, and Movies rows with hover ratings
   + links, and wires up the left/right scroll arrows.
   You should not need to edit this file. Edit js/data.js instead.
============================================================================ */

/* Simple, single-colour white brand logos (they inherit white via CSS).
   Each is an inline SVG so there are no external files to manage. */
const ICONS = {
  apple:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>',
  spotify:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.56.3z"/></svg>',
  wikipedia:
    '<svg class="icon--stroke" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="5" y1="6.5" x2="19" y2="6.5"/><line x1="5" y1="17.5" x2="19" y2="17.5"/></svg>',
  goodreads:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.4 23.3c-1.2-.1-2.3-.5-3.2-1.2-.9-.7-1.5-1.6-1.7-2.7h1.9c.3.7.7 1.3 1.4 1.7.6.4 1.4.6 2.3.6 1.4 0 2.5-.5 3.2-1.4.7-.9 1-2.4 1-4.4v-1.3h-.1c-.5.9-1.1 1.5-1.9 2-.8.4-1.7.6-2.7.6-1.2 0-2.3-.3-3.2-.9-.9-.6-1.6-1.4-2.1-2.5-.5-1.1-.7-2.3-.7-3.6 0-1.4.2-2.6.7-3.6.5-1.1 1.2-1.9 2.1-2.5.9-.6 2-.9 3.2-.9 1 0 1.9.2 2.7.6.8.4 1.4 1.1 1.9 2h.1V3.2h1.9v12.8c0 2.5-.5 4.4-1.5 5.6-1 1.2-2.5 1.7-4.6 1.7h-.1zm.6-8.6c1.2 0 2.2-.4 2.9-1.3.7-.9 1.1-2.1 1.1-3.7s-.4-2.8-1.1-3.7c-.7-.9-1.7-1.3-2.9-1.3s-2.2.4-2.9 1.3c-.7.9-1.1 2.1-1.1 3.7s.4 2.8 1.1 3.7c.7.9 1.7 1.3 2.9 1.3z"/></svg>',
  letterboxd:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="12" r="3.2"/><circle cx="12" cy="12" r="3.2"/><circle cx="19" cy="12" r="3.2"/></svg>'
};

/* Build one cover card. `kind` is "music", "book", or "movie". */
function makeCard(item, kind) {
  const card = document.createElement("div");
  // Books and movies use tall (poster) covers; music stays square.
  card.className = "cover-card" + (kind === "music" ? "" : " cover-card--poster");

  // The image + hover overlay live inside a fixed-size media box.
  const media = document.createElement("div");
  media.className = "cover-card__media";

  const img = document.createElement("img");
  img.className = "cover-card__img";
  img.src = item.cover;
  img.alt = item.title;
  img.loading = "lazy";

  // Caption under the cover (always visible)
  const caption = document.createElement("div");
  caption.className = "cover-card__caption";
  const who = kind === "music" ? item.artist
            : kind === "movie" ? (item.director || "")
            : item.author;
  caption.innerHTML =
    '<div class="title">' + item.title + "</div>" +
    (who ? '<div class="by">' + who + "</div>" : "");

  // Hover overlay: star rating + link buttons
  const overlay = document.createElement("div");
  overlay.className = "cover-card__overlay";

  const stars = document.createElement("div");
  stars.className = "stars";
  stars.textContent = starString(item.rating);
  overlay.appendChild(stars);

  const links = document.createElement("div");
  links.className = "overlay-links";

  // Which link buttons to show depends on the kind.
  let linkDefs;
  if (kind === "music") {
    linkDefs = [
      { label: "Apple Music", icon: ICONS.apple, url: item.apple },
      { label: "Spotify", icon: ICONS.spotify, url: item.spotify },
      { label: "Wikipedia", icon: ICONS.wikipedia, url: item.wikipedia }
    ];
  } else if (kind === "movie") {
    linkDefs = [
      { label: "Letterboxd", icon: ICONS.letterboxd, url: item.letterboxd },
      { label: "Wikipedia", icon: ICONS.wikipedia, url: item.wikipedia }
    ];
  } else {
    linkDefs = [
      { label: "Goodreads", icon: ICONS.goodreads, url: item.goodreads },
      { label: "Wikipedia", icon: ICONS.wikipedia, url: item.wikipedia }
    ];
  }

  linkDefs.forEach(function (def) {
    if (def.url && def.url.trim() !== "") {
      const a = document.createElement("a");
      a.href = def.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.title = def.label;              // hover tooltip shows the name
      a.setAttribute("aria-label", def.label);
      a.innerHTML = def.icon;           // the white logo
      links.appendChild(a);
    }
  });

  overlay.appendChild(links);

  media.appendChild(img);
  media.appendChild(overlay);
  card.appendChild(media);
  card.appendChild(caption);
  return card;
}

/* Fill a row element with cards from a data list. */
function fillRow(rowId, dataList, kind) {
  const row = document.getElementById(rowId);
  if (!row || !Array.isArray(dataList)) return;
  dataList.forEach(function (item) {
    row.appendChild(makeCard(item, kind));
  });
}

fillRow("music-row", typeof MUSIC !== "undefined" ? MUSIC : [], "music");
fillRow("books-row", typeof BOOKS !== "undefined" ? BOOKS : [], "book");

/* Movies: prefer the auto-synced Letterboxd list when it has entries,
   otherwise fall back to the manual list in data.js. */
var movieList =
  (typeof MOVIES_AUTO !== "undefined" && Array.isArray(MOVIES_AUTO) && MOVIES_AUTO.length)
    ? MOVIES_AUTO
    : (typeof MOVIES !== "undefined" ? MOVIES : []);
fillRow("movies-row", movieList, "movie");

/* --- Left/right scroll arrows -------------------------------------------- */
(function setUpScrollArrows() {
  const scrollers = document.querySelectorAll(".cover-scroller");

  scrollers.forEach(function (scroller) {
    const row = scroller.querySelector(".cover-row");
    const leftBtn = scroller.querySelector(".scroll-btn--left");
    const rightBtn = scroller.querySelector(".scroll-btn--right");
    if (!row || !leftBtn || !rightBtn) return;

    // Scroll by most of the visible width when an arrow is clicked.
    function step() { return Math.max(row.clientWidth * 0.8, 200); }
    leftBtn.addEventListener("click", function () {
      row.scrollBy({ left: -step(), behavior: "smooth" });
    });
    rightBtn.addEventListener("click", function () {
      row.scrollBy({ left: step(), behavior: "smooth" });
    });

    // Fade out an arrow when there's nothing more to scroll that way.
    function updateArrows() {
      const maxScroll = row.scrollWidth - row.clientWidth - 1;
      leftBtn.disabled = row.scrollLeft <= 0;
      rightBtn.disabled = row.scrollLeft >= maxScroll;
    }
    row.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);
    window.addEventListener("load", updateArrows);
    updateArrows();
  });
})();
