/* ============================================================================
   library.js  —  builds the Music and Books rows with hover ratings + links.
   You should not need to edit this file. Edit js/data.js instead.
============================================================================ */

/* Build one cover card (works for both albums and books). */
function makeCard(item, kind) {
  const card = document.createElement("div");
  card.className = "cover-card";

  // Cover image
  const img = document.createElement("img");
  img.className = "cover-card__img";
  img.src = item.cover;
  img.alt = item.title;
  img.loading = "lazy";

  // Caption under the cover (always visible)
  const caption = document.createElement("div");
  caption.className = "cover-card__caption";
  const who = kind === "music" ? item.artist : item.author;
  caption.innerHTML =
    '<div class="title">' + item.title + "</div>" +
    '<div class="by">' + who + "</div>";

  // Hover overlay: star rating + link buttons
  const overlay = document.createElement("div");
  overlay.className = "cover-card__overlay";

  const stars = document.createElement("div");
  stars.className = "stars";
  stars.textContent = starString(item.rating);
  overlay.appendChild(stars);

  const links = document.createElement("div");
  links.className = "overlay-links";

  // Which link buttons to show depends on the kind (music vs book).
  const linkDefs = kind === "music"
    ? [
        { label: "Apple Music", url: item.apple },
        { label: "Spotify", url: item.spotify },
        { label: "Wikipedia", url: item.wikipedia }
      ]
    : [
        { label: "Goodreads", url: item.goodreads },
        { label: "Wikipedia", url: item.wikipedia }
      ];

  linkDefs.forEach(function (def) {
    if (def.url && def.url.trim() !== "") {
      const a = document.createElement("a");
      a.href = def.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = def.label;
      links.appendChild(a);
    }
  });

  overlay.appendChild(links);

  card.appendChild(img);
  card.appendChild(overlay);
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
