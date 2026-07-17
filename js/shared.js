/* ============================================================================
   shared.js  —  little helpers used on every page.
   You should not need to edit this file. Edit js/data.js instead.
============================================================================ */

/* Wire up the "Photo" button to the link you set in data.js */
(function setUpPhotoButton() {
  const photoBtn = document.getElementById("photo-btn");
  if (photoBtn && typeof PHOTO_URL === "string") {
    photoBtn.href = PHOTO_URL;
  }
})();

/* Wire up "Send Me Away" to pick a random site from your list in data.js */
(function setUpSendMeAway() {
  const btn = document.getElementById("send-me-away-btn");
  if (btn && Array.isArray(SEND_ME_AWAY) && SEND_ME_AWAY.length > 0) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const pick = SEND_ME_AWAY[Math.floor(Math.random() * SEND_ME_AWAY.length)];
      window.open(pick, "_blank", "noopener");
    });
  }
})();

/* Keep the navigation buttons visible: if the sidebar's content is too tall to
   fit (because the screen is short OR narrow enough that text wraps), hide the
   long "interests" paragraph. Re-checks whenever the window is resized. */
(function keepButtonsVisible() {
  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;

  function fit() {
    // Always start by showing the paragraph, then measure.
    sidebar.classList.remove("is-cramped");
    // If the content is taller than the space available, it overflows —
    // so hide the paragraph to make room for the buttons.
    if (sidebar.scrollHeight > sidebar.clientHeight + 1) {
      sidebar.classList.add("is-cramped");
    }
  }

  window.addEventListener("resize", fit);
  window.addEventListener("load", fit);
  fit();
})();

/* Given a background hex colour, decide whether black or white text reads best.
   Used so the sidebar text is always legible on any colour you choose. */
function readableTextColor(hex) {
  const c = hex.replace("#", "");
  const full = c.length === 3
    ? c.split("").map(ch => ch + ch).join("")
    : c;
  const r = parseInt(full.substring(0, 2), 16);
  const g = parseInt(full.substring(2, 4), 16);
  const b = parseInt(full.substring(4, 6), 16);
  // standard brightness formula
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 140 ? "#1c1c1c" : "#ffffff";
}

/* Build a row of star characters for a rating out of 5 (supports halves). */
function starString(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  let stars = "★".repeat(full);
  if (half) stars += "½";
  const empty = 5 - full - (half ? 1 : 0);
  stars += "☆".repeat(Math.max(0, empty));
  return stars;
}
