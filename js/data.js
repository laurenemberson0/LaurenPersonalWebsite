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
     date      -> month + year you read it, e.g. "January 2026" (shown on hover;
                  leave "" or remove to hide it)
---------------------------------------------------------------------------- */
const BOOKS = [
  {
    cover: "images/books/football-chuck.jpg",
    title: "Football",
    author: "Chuck Klosterman",
    rating: 4,
    goodreads: "",
    wikipedia: "",
    date: "January 2026"
  },
  {
    cover: "images/books/alphabeticaldiaries-sheila.jpg",
    title: "Alphabetical Diaries",
    author: "Sheila Heti",
    rating: 4,
    goodreads: "",
    wikipedia: "",
    date: "January 2026"
  },
    {
    cover: "images/books/goodmaterial-dolly.jpg",
    title: "Good Material",
    author: "Dolly Alderton",
    rating: 3,
    goodreads: "",
    wikipedia: "",
    date: "January 2026"
  },
  {
    cover: "images/books/artislife-jerry.jpg",
    title: "Art Is Life",
    author: "Jerry Saltz",
    rating: 4,
    goodreads: "",
    wikipedia: "",
    date: "January 2026"
  },
    {
    cover: "images/books/lifeform-jenny.jpg",
    title: "Life Form",
    author: "Jenny Slate",
    rating: 3.5,
    goodreads: "",
    wikipedia: "",
    date: "January 2026"
  },
    {
    cover: "images/books/perfection-vincenzo.jpg",
    title: "Perfection",
    author: "Vincenzo Latronico",
    rating: 4,
    goodreads: "",
    wikipedia: "",
    date: "January 2026"
  },
  {
    cover: "images/books/myyearofrest-ottessa.jpg",
    title: "My Year Of Rest And Relaxation",
    author: "Ottessa Moshfegh",
    rating: 4,
    goodreads: "",
    wikipedia: "",
    date: "January 2026"
  },
  {
    cover: "images/books/famesick-lena.jpg",
    title: "Famesick",
    author: "Lena Dunham",
    rating: 4.5,
    goodreads: "",
    wikipedia: "",
    date: "January 2026"
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
     date       -> month + year you watched it, e.g. "March 2026" (shown on
                   hover; add it per movie, or leave out to hide it)
---------------------------------------------------------------------------- */
const MOVIES = [
  // Transcribed from your Letterboxd screenshots, sorted by your rating.
  // cover is "" for now (each shows a title tile); posters can be added later.
  // Skim for the occasional misread title — easy to fix right here.

  // ---- 5 stars ----
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
  { cover: "", title: "Whiplash", director: "", rating: 5, letterboxd: "", wikipedia: "" },

  // ---- 4.5 stars ----
  { cover: "", title: "Free Solo", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "mid90s", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Fox and the Hound 2", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "A Complete Unknown", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "10 Things I Hate About You", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Asteroid City", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "How to Lose a Guy in 10 Days", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "There's Something About Mary", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Paddington 2", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Women Talking", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Koyaanisqatsi", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Dirty Dancing", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Darjeeling Limited", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The French Dispatch", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Worst Person in the World", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Before Sunset", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "A Cinderella Story", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Stand By Me", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Good Will Hunting", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Booksmart", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Punch-Drunk Love", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Forrest Gump", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Bo Burnham: what.", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Lion", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Jojo Rabbit", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Being Elmo: A Puppeteer's Journey", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Harry Styles: Behind the Album", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Edith+Eddie", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Knock Down the House", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Into the Wild", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Won't You Be My Neighbor?", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "August Rush", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Dead Poets Society", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Fight Club", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Kill Bill: Vol. 1", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Eternal Sunshine of the Spotless Mind", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Kill Bill: Vol. 2", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Mean Girls", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Little Miss Sunshine", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Boy in the Striped Pyjamas", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Slumdog Millionaire", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Up", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "(500) Days of Summer", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Scott Pilgrim vs. the World", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Moonrise Kingdom", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Frances Ha", director: "", rating: 4.5, letterboxd: "", wikipedia: "" },

  // ---- 4 stars ----
  { cover: "", title: "Amanda Knox", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Nathan for You: Finding Frances", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Dawn Wall", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Eighth Grade", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Isle of Dogs", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Everything Everywhere All at Once", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Last Waltz", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Clueless", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Turbo", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Ocean's Eleven", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Holdovers", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Big Night", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Pink Panther", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Happy Gilmore", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Big Daddy", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Magic Mike's Last Dance", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "I Heart Huckabees", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Baraka", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Forgetting Sarah Marshall", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Adam Sandler: 100% Fresh", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Being John Malkovich", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Klaus", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Miss Congeniality", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "27 Dresses", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Beautiful Boy", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Raising Arizona", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Paddington", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The SpongeBob Movie: Sponge Out of Water", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Nirvana: MTV Unplugged in New York", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Where the Wild Things Are", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Lost in Translation", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Royal Tenenbaums", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Disaster Artist", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Nomadland", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Speed Cubers", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Palm Springs", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Bo Burnham: Make Happy", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "White Christmas", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Shrek 2", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Grand Budapest Hotel", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Florida Project", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Heaven Is a Traffic Jam on the 405", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "SLC Punk!", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Skate Kitchen", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Doctor Who: The Time of the Doctor", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Halloweentown", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Get Me Roger Stone", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Incredible Mr. Limpet", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "A Beautiful Day in the Neighborhood", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "1917", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Coco", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Edward Scissorhands", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Princess Mononoke", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Big Lebowski", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Truman Show", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Matrix", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Memento", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Donnie Darko", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Spirited Away", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "School of Rock", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Elf", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Juno", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Coraline", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Inglourious Basterds", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Whip It", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Lovely Bones", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Black Swan", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The King's Speech", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "It's Kind of a Funny Story", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Art of Getting By", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Wolf of Wall Street", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Me and Earl and the Dying Girl", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Big Short", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "La La Land", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "mother!", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Sorry to Bother You", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Parasite", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Marriage Story", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Rest of Us", director: "", rating: 4, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Bring It On", director: "", rating: 4, letterboxd: "", wikipedia: "" },

  // ---- 3.5 stars ----
  { cover: "", title: "A Real Pain", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Dune", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Almost Famous", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Challenge", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Bridget Jones's Diary", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Don't Worry Darling", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Luck-Key", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Synecdoche, New York", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Akeelah and the Bee", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Ella Enchanted", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Middleditch & Schwartz", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "tick, tick... BOOM!", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Sound of Music", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Back to the Future", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Princess Bride", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Adventures of Sharkboy and Lavagirl", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Corpse Bride", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "High School Musical", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Polka King", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Trial of the Chicago 7", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Peanut Butter Falcon", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Adaptation", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Halloweentown II: Kalabar's Revenge", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Athlete A", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Janis: Little Girl Blue", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Knife Skills", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Doctor Who: A Christmas Carol", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Heroin(e)", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Shakiest Gun in the West", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Reluctant Astronaut", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Bean", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Fargo", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Legally Blonde", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Bridge to Terabithia", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Camp Rock", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "13th", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "WALL·E", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Matilda", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Parent Trap", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Wizard of Oz", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Casablanca", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Vertigo", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Psycho", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Willy Wonka & the Chocolate Factory", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Monty Python and the Holy Grail", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Raiders of the Lost Ark", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Blue Velvet", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "My Neighbor Totoro", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Kiki's Delivery Service", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Titanic", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Austin Powers: The Spy Who Shagged Me", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Emperor's New Groove", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Catch Me If You Can", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Howl's Moving Castle", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Brokeback Mountain", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "V for Vendetta", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Hot Fuzz", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Superbad", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Orphan", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Inception", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Easy A", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Social Network", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Drive", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "50/50", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Zootopia", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Get Out", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Phantom Thread", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "A Star Is Born", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Bohemian Rhapsody", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Chungking Express", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Made of Honor", director: "", rating: 3.5, letterboxd: "", wikipedia: "" },

  // ---- 3 stars ----
  { cover: "", title: "The Wedding Singer", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Turning Red", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Crazy, Stupid, Love", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Notting Hill", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Proposal", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Banshees of Inisherin", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Carts of Darkness", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Happiest Season", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Love Actually", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Set It Up", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Falling for Christmas", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "You've Got Mail", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Basic Instinct", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Youth in Revolt", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Inside Llewyn Davis", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Muppet Movie", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Fantasia", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Jaws", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Say Anything...", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "A Goofy Movie", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Princess Diaries", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Zoolander", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Freaky Friday", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "National Theatre Live: Fleabag", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Joker", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Normal People", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Knives Out", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Objectified", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Urbanized", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "To All the Boys I've Loved Before", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Ferris Bueller's Day Off", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Hot Rod", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Cats Don't Dance", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Ghost and Mr. Chicken", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Fundamentals of Caring", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Free Willy", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Notebook", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Amy", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Jackie", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Rear Window", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Citizen Kane", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Rocky Horror Picture Show", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "A Clockwork Orange", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Grease", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Breakfast Club", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Do the Right Thing", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Nightmare Before Christmas", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Before Sunrise", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Saving Private Ryan", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Virgin Suicides", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Requiem for a Dream", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Shrek", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Big Fish", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Kick-Ass", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Silver Linings Playbook", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Life of Pi", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Blue Is the Warmest Color", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "About Time", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Gravity", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Palo Alto", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Her", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Lobster", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Moana", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Three Billboards Outside Ebbing, Missouri", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Black Mirror: Bandersnatch", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Homecoming", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "New Year's Eve", director: "", rating: 3, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Amadeus", director: "", rating: 3, letterboxd: "", wikipedia: "" },

  // ---- 2.5 stars ----
  { cover: "", title: "The Ugly Truth", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Interstellar", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "CODA", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Don't Look Up", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "I Am Patrick Swayze", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Fahrenheit 9/11", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Jump In!", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Big", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Land Before Time", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Bend It Like Beckham", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Cheaper by the Dozen", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Kicking & Screaming", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Planet Earth", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Bewitched", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Frankenweenie", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Between Two Ferns: The Movie", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Fyre Fraud", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "We'll Take Manhattan", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Minutemen", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Cheetah Girls", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Pretty in Pink", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Home Alone", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Birdman", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "McMillion$", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Sixteen Candles", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Mary Poppins", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Secret Life of Walter Mitty", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Skeleton Dance", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "An Extremely Goofy Movie", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Loving Vincent", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Herbie Goes to Monte Carlo", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Mr. Bean", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Earth", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Blue Planet II", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Spy Kids", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Who Took Johnny", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Tiger King", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Cinderella", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Jungle Book", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "An American in Paris", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The 40-Year-Old Virgin", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Nick & Norah's Infinite Playlist", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Walk the Line", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "2001: A Space Odyssey", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "A Nightmare on Elm Street", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Stuart Little", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "She's the Man", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Mamma Mia!", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Insidious", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Kings of Summer", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Now You See Me", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "This Is the End", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Gone Girl", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Ex Machina", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Suicide Squad", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Call Me by Your Name", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Shape of Water", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Incredibles 2", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Fyre", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "It Chapter Two", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Steve Jobs", director: "", rating: 2.5, letterboxd: "", wikipedia: "" },

  // ---- 2 stars ----
  { cover: "", title: "Anora", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Magnolia", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Another Round", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Oppenheimer", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Candy Cane Lane", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Magic Mike XXL", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Magic Mike", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Ice Princess", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Avatar: The Way of Water", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Emily the Criminal", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Idiocracy", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Uncut Gems", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Charlotte's Web", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Shaggy Dog", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Gaga: Five Foot Two", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Sword in the Stone", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Honey, I Shrunk the Kids", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Aladdin", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Sandlot", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Lion King", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Santa Clause", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "50 First Dates", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Princess Diaries 2: Royal Engagement", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Madagascar", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Lars and the Real Girl", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Horton Hears a Who!", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Salt", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Woman in Black", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Social Dilemma", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The War with Grandpa", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Eric Andre: Legalize Everything", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Snowden", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Zenon: Girl of the 21st Century", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Night at the Museum", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Planes, Trains and Automobiles", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Great Hack", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Cadet Kelly", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Hitchhiker's Guide to the Galaxy", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Adventureland", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Napoleon Dynamite", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Rudolph the Red-Nosed Reindeer", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Paperman", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Scooby-Doo", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Confessions of a Teenage Drama Queen", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Ponyo", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "High School Musical 2", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "One Hundred and One Dalmatians", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Alice in Wonderland", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Pocahontas", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Tarzan", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Hotel Rwanda", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Mrs. Doubtfire", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Julie & Julia", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "13 Going on 30", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Birds", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Aristocats", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Pulp Fiction", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "American History X", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Finding Nemo", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Incredibles", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Dear John", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Friends with Benefits", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Django Unchained", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Spectacular Now", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The To Do List", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Imitation Game", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Inside Out", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Finding Dory", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Baby Driver", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Blade Runner 2049", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Jumanji: Welcome to the Jungle", director: "", rating: 2, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Love, Simon", director: "", rating: 2, letterboxd: "", wikipedia: "" },

  // ---- 1.5 stars ----
  { cover: "", title: "Crazy Rich Asians", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "I'm Not There", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "A Christmas Story", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Uptown Girls", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Holiday", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Barbie", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Elvis", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Unbearable Weight of Massive Talent", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Glass Onion", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "A Bad Moms Christmas", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "John Tucker Must Die", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Minions: The Rise of Gru", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Step Brothers", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Bring It On: In It to Win It", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Bring It On Again", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Bring It On: All or Nothing", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Freaky Friday (1976)", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Switching Goals", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Pixel Perfect", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Ice Age", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Cow Belles", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Lego Movie", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Chicken Little", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Doctor Strange", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Sisterhood of the Traveling Pants", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Just My Luck", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "101 Dalmatians", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Hunchback of Notre Dame", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Dumbo", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Bambi", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Lemonade Mouth", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Mask", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Charlie and the Chocolate Factory", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Ratatouille", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Bee Movie", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Definitely, Maybe", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Another Cinderella Story", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Hangover", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Alice in Wonderland (2010)", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Brave", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Wreck-It Ralph", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "We're the Millers", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Big Sick", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Bombshell", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Lady Bird", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Sleeping Beauty", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Lady and the Tramp", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Beauty and the Beast", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Harry Potter and the Chamber of Secrets", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Marley & Me", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Project X", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Halloween 4: The Return of Michael Myers", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Great Gatsby", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Avalon High", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Read It and Weep", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Twitches", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "RV", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Jerry Before Seinfeld", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "March of the Penguins", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Super Size Me", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Miss Americana", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Trainwreck", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "All Dogs Go to Heaven", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Pinocchio", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Snow White and the Seven Dwarfs", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Rango", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Lemony Snicket's A Series of Unfortunate Events", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Robots", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Hairspray", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Hannah Montana: The Movie", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "A Bug's Life", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Monsters, Inc.", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Lilo & Stitch", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Avatar", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Last Song", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Cabin in the Woods", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "LOL", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Perks of Being a Wallflower", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "World War Z", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Frozen", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Fault in Our Stars", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "22 Jump Street", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Twilight", director: "", rating: 1.5, letterboxd: "", wikipedia: "" },

  // ---- 1 star ----
  { cover: "", title: "Sky High", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Deadpool", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Anacondas: The Hunt for the Blood Orchid", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Cloud 9", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "For the Birds", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Over the Hedge", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Bolt", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Megamind", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Last Exorcism", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Bridesmaids", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Black Mirror: The National Anthem", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Cars", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Valentine's Day", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Despicable Me", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Mean Girls 2", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Just Go with It", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Horrible Bosses", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Vow", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "21 Jump Street", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Hunger Games", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Spring Breakers", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "American Sniper", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Paper Towns", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "We Are Your Friends", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "No Strings Attached", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Toy Story", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Harry Potter and the Philosopher's Stone", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Little Mermaid", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Looper", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Toy Story 2", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Indiana Jones and the Last Crusade", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Harry Potter and the Order of the Phoenix", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Guardians of the Galaxy Vol. 2", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Insidious: Chapter 2", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Halloween", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Dear White People", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Pirates of the Caribbean: Dead Men Tell No Tales", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Hunger Games: Catching Fire", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "A Walk to Remember", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Star Wars: The Force Awakens", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Spy Kids 2: The Island of Lost Dreams", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "The Hobbit: An Unexpected Journey", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Harry Potter and the Deathly Hallows: Part 2", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Guardians of the Galaxy", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Paul Blart: Mall Cop", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Harry Potter and the Half-Blood Prince", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Limitless", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Mad Max: Fury Road", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "Shrek Forever After", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "17 Again", director: "", rating: 1, letterboxd: "", wikipedia: "" },
  { cover: "", title: "He's Just Not That Into You", director: "", rating: 1, letterboxd: "", wikipedia: "" },

  // ---- 0.5 stars ----
  { cover: "", title: "Materialists", director: "", rating: 0.5, letterboxd: "", wikipedia: "" }
];
