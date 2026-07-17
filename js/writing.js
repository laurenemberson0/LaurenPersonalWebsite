/* ============================================================================
   writing.js  —  builds the collapsible writing entries.
   You should not need to edit this file. Edit js/data.js instead.
============================================================================ */

(function buildWriting() {
  const list = document.getElementById("writing-list");
  if (!list || typeof WRITING === "undefined") return;

  WRITING.forEach(function (item) {
    const entry = document.createElement("article");
    entry.className = "entry";

    // Header is a button so it's clickable + keyboard-friendly.
    const header = document.createElement("button");
    header.className = "entry__header";
    header.innerHTML =
      '<span class="entry__toggle">+</span>' +
      '<span class="entry__name">' + item.title + "</span>" +
      (item.date ? '<span class="entry__date">' + item.date + "</span>" : "");

    const body = document.createElement("div");
    body.className = "entry__body";
    const inner = document.createElement("div");
    inner.className = "entry__body-inner";
    inner.textContent = item.body;
    body.appendChild(inner);

    // Click the title to expand (+) or collapse (-).
    header.addEventListener("click", function () {
      const isOpen = entry.classList.toggle("is-open");
      header.querySelector(".entry__toggle").textContent = isOpen ? "–" : "+";
    });

    entry.appendChild(header);
    entry.appendChild(body);
    list.appendChild(entry);
  });
})();
