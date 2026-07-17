/* ============================================================================
   data.js  —  THIS IS THE ONLY FILE YOU NEED TO EDIT.
   ============================================================================

   Everything on your website is controlled from this one file:
     • the rotating landing-page images + their matching sidebar colours
     • your writing entries
     • your music library (albums, ratings, links)
     • your book library (books, ratings, links)
     • the "Send Me Away" random link list
     • the "Photo" button link

   HOW TO EDIT:
     - Anything inside "quotes" is text you can change.
     - Keep the commas, brackets { } and [ ] exactly where they are.
     - To add another item, copy one whole block (from { to },) and paste it
       right below, then change the text inside.
     - Hex codes look like "#a83254". You can get them from any colour picker.

   Nothing here needs coding knowledge — you're just filling in blanks.
============================================================================ */


/* ----------------------------------------------------------------------------
   1) LANDING PAGE SLIDESHOW
   ----------------------------------------------------------------------------
   Each slide has:
     image        -> the photo shown on the right of the screen
     sidebarColor -> the background colour of the left sidebar for this photo
     textColor    -> (optional) the colour of the sidebar text.
                     If you leave it as "", the site auto-picks black or white
                     for you so it's always readable.

   The images and sidebar colours cross-fade together every 5 seconds.

   To use YOUR photos: put them in the "images/slideshow/" folder and change
   the file name below (e.g. "images/slideshow/my-photo.jpg").
---------------------------------------------------------------------------- */
const SLIDES = [
  {
    image: "images/slideshow/slide1.svg",
    sidebarColor: "#2e3a2f",   // muted forest green
    textColor: ""
  },
  {
    image: "images/slideshow/slide2.svg",
    sidebarColor: "#7a3b2e",   // warm terracotta
    textColor: ""
  },
  {
    image: "images/slideshow/slide3.svg",
    sidebarColor: "#3a4a63",   // dusty blue
    textColor: ""
  },
  {
    image: "images/slideshow/slide4.svg",
    sidebarColor: "#6d5a7a",   // soft plum
    textColor: ""
  }
];

// How long each image stays before fading to the next one (in milliseconds).
// 5000 = 5 seconds.
const SLIDE_DURATION = 5000;


/* ----------------------------------------------------------------------------
   2) THE "PHOTO" BUTTON LINK
   ----------------------------------------------------------------------------
   This button sends visitors to your photography website.
   Replace the address below with your real photo site.
---------------------------------------------------------------------------- */
const PHOTO_URL = "https://example.com/your-photography";


/* ----------------------------------------------------------------------------
   3) "SEND ME AWAY" — RANDOM LINK LIST
   ----------------------------------------------------------------------------
   When someone clicks "Send Me Away", they get taken to ONE of these websites,
   chosen at random. Add as many as you like.
---------------------------------------------------------------------------- */
const SEND_ME_AWAY = [
  "https://www.atlasobscura.com",
  "https://www.openculture.com",
  "https://www.thisiscolossal.com",
  "https://radio.garden",
  "https://www.pointerpointer.com"
];


/* ----------------------------------------------------------------------------
   4) WRITING PAGE
   ----------------------------------------------------------------------------
   Each entry has a title and body. Click the title (+ / -) to expand/collapse.
   For paragraphs, just press Enter to start a new line inside the quotes,
   OR write it as one long string — both work.
---------------------------------------------------------------------------- */
const WRITING = [
  {
    title: "on collecting coffee mugs",
    date: "spring 2026",
    body: `there is something honest about a coffee mug. it holds exactly what
you need and nothing more. this is a placeholder — replace it with your own
writing by editing this block in data.js.

you can write as many paragraphs as you like. just keep everything between the
back-tick marks (the slanted quotes at the start and end).`
  },
  {
    title: "a short note on snail mail",
    date: "winter 2025",
    body: `placeholder text. tell the story of the last letter you sent, or the
best postcard you ever received. delete this and make it yours.`
  }
];


/* ----------------------------------------------------------------------------
   5) LIBRARY — MUSIC
   ----------------------------------------------------------------------------
   Each album has:
     cover     -> album cover image (put files in "images/albums/")
     title     -> album name
     artist    -> artist name
     rating    -> your rating from 0 to 5 (half numbers like 4.5 are fine)
     apple     -> Apple Music link  (leave "" to hide this button)
     spotify   -> Spotify link      (leave "" to hide this button)
     wikipedia -> Wikipedia link    (leave "" to hide this button)
---------------------------------------------------------------------------- */
const MUSIC = [
  {
    cover: "images/albums/album1.svg",
    title: "Placeholder Album One",
    artist: "An Artist",
    rating: 5,
    apple: "https://music.apple.com",
    spotify: "https://open.spotify.com",
    wikipedia: "https://en.wikipedia.org"
  },
  {
    cover: "images/albums/album2.svg",
    title: "Placeholder Album Two",
    artist: "Another Artist",
    rating: 4,
    apple: "https://music.apple.com",
    spotify: "https://open.spotify.com",
    wikipedia: ""
  },
  {
    cover: "images/albums/album3.svg",
    title: "Placeholder Album Three",
    artist: "Someone Else",
    rating: 3.5,
    apple: "",
    spotify: "https://open.spotify.com",
    wikipedia: "https://en.wikipedia.org"
  }
];


/* ----------------------------------------------------------------------------
   6) LIBRARY — BOOKS
   ----------------------------------------------------------------------------
   Each book has:
     cover     -> book cover image (put files in "images/books/")
     title     -> book title
     author    -> author name
     rating    -> your rating from 0 to 5 (half numbers like 4.5 are fine)
     goodreads -> Goodreads link  (leave "" to hide this button)
     wikipedia -> Wikipedia link  (leave "" to hide this button)
---------------------------------------------------------------------------- */
const BOOKS = [
  {
    cover: "images/books/book1.svg",
    title: "Placeholder Book One",
    author: "An Author",
    rating: 5,
    goodreads: "https://www.goodreads.com",
    wikipedia: "https://en.wikipedia.org"
  },
  {
    cover: "images/books/book2.svg",
    title: "Placeholder Book Two",
    author: "Another Author",
    rating: 4.5,
    goodreads: "https://www.goodreads.com",
    wikipedia: ""
  },
  {
    cover: "images/books/book3.svg",
    title: "Placeholder Book Three",
    author: "A Third Author",
    rating: 4,
    goodreads: "",
    wikipedia: "https://en.wikipedia.org"
  }
];
