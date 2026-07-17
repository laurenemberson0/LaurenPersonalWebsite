/* ============================================================================
   main.js  —  the landing-page slideshow + synchronised sidebar colour.
   You should not need to edit this file. Edit js/data.js instead.
============================================================================ */

(function runSlideshow() {
  const slideshow = document.getElementById("slideshow");
  const root = document.documentElement;

  if (!slideshow || typeof SLIDES === "undefined" || SLIDES.length === 0) {
    return;
  }

  // 1) Create one layered element per slide (stacked on top of each other).
  const slideEls = SLIDES.map(function (slide) {
    const el = document.createElement("div");
    el.className = "slide";
    el.style.backgroundImage = 'url("' + slide.image + '")';
    slideshow.appendChild(el);
    return el;
  });

  // Helper: set the sidebar colour + auto-pick readable text colour.
  function applyColors(slide) {
    root.style.setProperty("--sidebar-color", slide.sidebarColor);
    const text = slide.textColor && slide.textColor.trim() !== ""
      ? slide.textColor
      : readableTextColor(slide.sidebarColor);
    root.style.setProperty("--sidebar-text", text);
  }

  // 2) Show the first slide immediately.
  let current = 0;
  slideEls[0].classList.add("is-active");
  applyColors(SLIDES[0]);

  // 3) If there's only one slide, stop here (nothing to rotate).
  if (SLIDES.length === 1) return;

  // 4) Every SLIDE_DURATION, cross-fade to the next slide + its colours.
  setInterval(function () {
    const next = (current + 1) % SLIDES.length;
    slideEls[current].classList.remove("is-active");
    slideEls[next].classList.add("is-active");
    applyColors(SLIDES[next]);
    current = next;
  }, SLIDE_DURATION);
})();
