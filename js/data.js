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
    image: "images/slideshow/photo1.jpg",
    sidebarColor: "#565B61",
    textColor: "#D9CBAA"
  },
  {
    image: "images/slideshow/photo2.jpg",
    sidebarColor: "#d2e1acff",
    textColor: "#406663"
  },
  {
    image: "images/slideshow/photo3.jpg",
    sidebarColor: "#E9E8E7",
    textColor: "#6F96AC"
  },
  {
    image: "images/slideshow/photo4.jpg",
    sidebarColor: "#797588",
    textColor: "#b9c0d0ff"
  },
  {
    image: "images/slideshow/photo5.jpg",
    sidebarColor: "#6293BF",
    textColor: "#f8efdeff"
  },
  {
    image: "images/slideshow/photo6.jpg",
    sidebarColor: "#95aeb2ff",
    textColor: "#48697F"
  },
  {
    image: "images/slideshow/photo7.jpg",
    sidebarColor: "#3a4a63",
    textColor: "#000000ff"
  },
  {
    image: "images/slideshow/photo8.jpg",
    sidebarColor: "#b1c5e2ff",
    textColor: "#5c7dacff"
  },
  {
    image: "images/slideshow/photo9.jpg",
    sidebarColor: "#a1b9c3ff",
    textColor: "#4e5c27ff"
  },
  {
    image: "images/slideshow/photo10.jpg",
    sidebarColor: "#6d5a7a",
    textColor: "#496f78ff"
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
const PHOTO_URL = "https://laurenembersonphotography.com";


/* ----------------------------------------------------------------------------
   3) "SEND ME AWAY" — RANDOM LINK LIST
   ----------------------------------------------------------------------------
   When someone clicks "Send Me Away", they get taken to ONE of these websites,
   chosen at random. Add as many as you like.
---------------------------------------------------------------------------- */
const SEND_ME_AWAY = [
  "https://rotating.parts/",
  "https://randoma11y.com/",
  "https://www.aldaily.com/",
  "https://neal.fun/",
  "https://90s.myretrotvs.com/",
  "https://jspaint.app/#local:14066bffee5df",
  "https://sandspiel.club/",
  "https://radio.garden/",
  "https://www.thisiscolossal.com",
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
    cover: "images/albums/alvvays-alvvays.jpg",
    title: "Alvvays",
    artist: "Alvvays",
    rating: 4,
    apple: "",
    spotify: "",
    wikipedia: ""
  },
  {
    cover: "images/albums/arcticmonkey-whatever-people-say-i-am.jpeg",
    title: "Whatever People Say I Am, That's What I'm Not",
    artist: "Arctic Monkeys",
    rating: 4.5,
    apple: "",
    spotify: "",
    wikipedia: ""
  },
  {
    cover: "images/albums/Alanis_Morissette_Jagged_Little_Pill.jpg",
    title: "Jagged Little Pill",
    artist: "Alanis Morissette",
    rating: 4.5,
    apple: "",
    spotify: "",
    wikipedia: ""
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
    cover: "images/books/football-chuck.jpg",
    title: "Football",
    author: "Chuck Klosterman",
    rating: 4,
    goodreads: "",
    wikipedia: ""
  },
  {
    cover: "images/books/alphabeticaldiaries-sheila.jpg",
    title: "Alphabetical Diaries",
    author: "Sheila Heti",
    rating: 4,
    goodreads: "",
    wikipedia: ""
  },
    {
    cover: "images/books/goodmaterial-dolly.jpg",
    title: "Good Material",
    author: "Dolly Alderton",
    rating: 3,
    goodreads: "",
    wikipedia: ""
  },
  {
    cover: "images/books/artislife-jerry.jpg",
    title: "Art Is Life",
    author: "Jerry Saltz",
    rating: 4,
    goodreads: "",
    wikipedia: ""
  },
    {
    cover: "images/books/lifeform-jenny.jpg",
    title: "Life Form",
    author: "Jenny Slate",
    rating: 3.5,
    goodreads: "",
    wikipedia: ""
  },
    {
    cover: "images/books/perfection-vincenzo.jpg",
    title: "Perfection",
    author: "Vincenzo Latronico",
    rating: 4,
    goodreads: "",
    wikipedia: ""
  },
  {
    cover: "images/books/myyearofrest-ottessa.jpg",
    title: "My Year Of Rest And Relaxation",
    author: "Ottessa Moshfegh",
    rating: 4,
    goodreads: "",
    wikipedia: ""
  },
  {
    cover: "images/books/famesick-lena.jpg",
    title: "Famesick",
    author: "Lena Dunham",
    rating: 4.5,
    goodreads: "",
    wikipedia: ""
  }
];


/* ----------------------------------------------------------------------------
   7) LIBRARY — MOVIES
   ----------------------------------------------------------------------------
   Each movie has:
     cover      -> movie poster image (put files in "images/movies/")
     title      -> movie title
     director   -> director's name (optional — leave "" to hide it)
     rating     -> your rating from 0 to 5 (half numbers like 4.5 are fine)
     letterboxd -> Letterboxd link  (leave "" to hide this button)
     wikipedia  -> Wikipedia link   (leave "" to hide this button)
---------------------------------------------------------------------------- */
const MOVIES = [
  // Your 5-star films. cover is left "" for now, so each shows a title tile
  // until posters are added. director is blank until we fill it in.
  { cover: "", title: "Aftersun", director: "", rating: 5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Licorice Pizza", director: "", rating: 5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Boyhood", director: "", rating: 5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "C'mon C'mon", director: "", rating: 5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Bo Burnham: Inside", director: "", rating: 5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Sound of Metal", director: "", rating: 5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Meet the Robinsons", director: "", rating: 5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Singin' in the Rain", director: "", rating: 5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Trainspotting", director: "", rating: 5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Fantastic Mr. Fox", director: "", rating: 5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Submarine", director: "", rating: 5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Whiplash", director: "", rating: 5, letterboxd: "", wikipedia: "" }
];
