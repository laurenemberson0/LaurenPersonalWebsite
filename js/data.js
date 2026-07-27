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
    sidebarColor: "rgb(178, 201, 205)",
    textColor: "#48697F"
  },
  {
    image: "images/slideshow/photo7.jpg",
    sidebarColor: "#797979",
    textColor: "#dedede"
  },
  {
    image: "images/slideshow/photo8.jpg",
    sidebarColor: "#b1c5e2ff",
    textColor: "#5c7dacff"
  },
  {
    image: "images/slideshow/photo9.jpg",
    sidebarColor: "rgb(215, 217, 228)",
    textColor: "rgb(109, 137, 31)"
  },
  {
    image: "images/slideshow/photo10.jpg",
    sidebarColor: "#6d5a7a",
    textColor: "rgb(228, 225, 210)"
  }
];

// How long each image stays before fading to the next one (in milliseconds).
// 5000 = 5 seconds.
const SLIDE_DURATION = 7000;


/* ----------------------------------------------------------------------------
   2) THE "PHOTO" BUTTON LINK
   ----------------------------------------------------------------------------
   This button sends visitors to your photography website.
   Replace the address below with your real photo site.
---------------------------------------------------------------------------- */
const PHOTO_URL = "https://www.laurenembersonphotography.com";


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
  "https://thetorontoreview.ca/",
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
    title: "piece 1",
    date: "spring 2026",
    body: `Time flies when you're having fun.`
  },
  {
    title: "piece 2",
    date: "winter 2025",
    body: `No time like the present.`
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
    date: "March 2026"
  },
    {
    cover: "images/books/goodmaterial-dolly.jpg",
    title: "Good Material",
    author: "Dolly Alderton",
    rating: 3,
    goodreads: "",
    wikipedia: "",
    date: "February 2026"
  },
  {
    cover: "images/books/artislife-jerry.jpg",
    title: "Art Is Life",
    author: "Jerry Saltz",
    rating: 4,
    goodreads: "",
    wikipedia: "",
    date: "April 2026"
  },
    {
    cover: "images/books/lifeform-jenny.jpg",
    title: "Life Form",
    author: "Jenny Slate",
    rating: 3.5,
    goodreads: "",
    wikipedia: "",
    date: "March 2026"
  },
    {
    cover: "images/books/perfection-vincenzo.jpg",
    title: "Perfection",
    author: "Vincenzo Latronico",
    rating: 4,
    goodreads: "",
    wikipedia: "",
    date: "July 2026"
  },
  {
    cover: "images/books/myyearofrest-ottessa.jpg",
    title: "My Year Of Rest And Relaxation",
    author: "Ottessa Moshfegh",
    rating: 4,
    goodreads: "",
    wikipedia: "",
    date: "March 2026"
  },
  {
    cover: "images/books/famesick-lena.jpg",
    title: "Famesick",
    author: "Lena Dunham",
    rating: 4.5,
    goodreads: "",
    wikipedia: "",
    date: "April 2026"
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
  { cover: "", title: "Aftersun", director: "", rating: 5, date: "January 2023", letterboxd: "https://boxd.it/Arw0", wikipedia: "" },
  { cover: "", title: "Bo Burnham: Inside", director: "", rating: 5, date: "May 2021", letterboxd: "https://boxd.it/v2uy", wikipedia: "" },
  { cover: "", title: "Boyhood", director: "", rating: 5, date: "April 2022", letterboxd: "https://boxd.it/3178", wikipedia: "" },
  { cover: "", title: "C'mon C'mon", director: "", rating: 5, date: "January 2022", letterboxd: "https://boxd.it/nrI0", wikipedia: "" },
  { cover: "", title: "Fantastic Mr. Fox", director: "", rating: 5, date: "~2010", letterboxd: "https://boxd.it/1WyQ", wikipedia: "" },
  { cover: "", title: "Free Solo", director: "", rating: 5, date: "May 2020", letterboxd: "https://boxd.it/iEEq", wikipedia: "" },
  { cover: "", title: "Licorice Pizza", director: "", rating: 5, date: "February 2022", letterboxd: "https://boxd.it/qTKY", wikipedia: "" },
  { cover: "", title: "Meet the Robinsons", director: "", rating: 5, date: "~2010", letterboxd: "https://boxd.it/28Ym", wikipedia: "" },
  { cover: "", title: "mid90s", director: "", rating: 5, date: "November 2018", letterboxd: "https://boxd.it/fxIa", wikipedia: "" },
  { cover: "", title: "Singin' in the Rain", director: "", rating: 5, date: "May 2020", letterboxd: "https://boxd.it/29oY", wikipedia: "" },
  { cover: "", title: "Sound of Metal", director: "", rating: 5, date: "January 2021", letterboxd: "https://boxd.it/i7Q4", wikipedia: "" },
  { cover: "", title: "Submarine", director: "", rating: 5, date: "~2010", letterboxd: "https://boxd.it/H4a", wikipedia: "" },
  { cover: "", title: "Trainspotting", director: "", rating: 5, date: "~2010", letterboxd: "https://boxd.it/29XY", wikipedia: "" },
  { cover: "", title: "Whiplash", director: "", rating: 5, date: "~2014", letterboxd: "https://boxd.it/7bQA", wikipedia: "" },
  { cover: "", title: "(500) Days of Summer", director: "", rating: 4.5, date: "~2011", letterboxd: "https://boxd.it/1EmM", wikipedia: "" },
  { cover: "", title: "10 Things I Hate About You", director: "", rating: 4.5, date: "April 2024", letterboxd: "https://boxd.it/23AO", wikipedia: "" },
  { cover: "", title: "A Cinderella Story", director: "", rating: 4.5, date: "~2004", letterboxd: "https://boxd.it/1UgU", wikipedia: "" },
  { cover: "", title: "A Complete Unknown", director: "", rating: 4.5, date: "January 2025", letterboxd: "https://boxd.it/oBYa", wikipedia: "" },
  { cover: "", title: "Amanda Knox", director: "", rating: 4.5, date: "~2017", letterboxd: "https://boxd.it/etNS", wikipedia: "" },
  { cover: "", title: "Asteroid City", director: "", rating: 4.5, date: "July 2023", letterboxd: "https://boxd.it/s3ds", wikipedia: "" },
  { cover: "", title: "August Rush", director: "", rating: 4.5, date: "~2008", letterboxd: "https://boxd.it/23kQ", wikipedia: "" },
  { cover: "", title: "Bad at This", director: "", rating: 4.5, date: "July 2022", letterboxd: "https://boxd.it/A7jK", wikipedia: "" },
  { cover: "", title: "Before Sunset", director: "", rating: 4.5, date: "May 2020", letterboxd: "https://boxd.it/2bcg", wikipedia: "" },
  { cover: "", title: "Being Elmo: A Puppeteer's Journey", director: "", rating: 4.5, date: "June 2020", letterboxd: "https://boxd.it/2xH6", wikipedia: "" },
  { cover: "", title: "Bo Burnham: What.", director: "", rating: 4.5, date: "~2014", letterboxd: "https://boxd.it/7au4", wikipedia: "" },
  { cover: "", title: "Booksmart", director: "", rating: 4.5, date: "~2019", letterboxd: "https://boxd.it/igNS", wikipedia: "" },
  { cover: "", title: "Dead Poets Society", director: "", rating: 4.5, date: "~2018", letterboxd: "https://boxd.it/2aSg", wikipedia: "" },
  { cover: "", title: "Dirty Dancing", director: "", rating: 4.5, date: "June 2022", letterboxd: "https://boxd.it/2baY", wikipedia: "" },
  { cover: "", title: "Edith+Eddie", director: "", rating: 4.5, date: "June 2020", letterboxd: "https://boxd.it/fNpo", wikipedia: "" },
  { cover: "", title: "Eighth Grade", director: "", rating: 4.5, date: "~2019", letterboxd: "https://boxd.it/hDMG", wikipedia: "" },
  { cover: "", title: "Eternal Sunshine of the Spotless Mind", director: "", rating: 4.5, date: "~2012", letterboxd: "https://boxd.it/6YK", wikipedia: "" },
  { cover: "", title: "Fight Club", director: "", rating: 4.5, date: "~2010", letterboxd: "https://boxd.it/2a9q", wikipedia: "" },
  { cover: "", title: "Forrest Gump", director: "", rating: 4.5, date: "~2005", letterboxd: "https://boxd.it/728", wikipedia: "" },
  { cover: "", title: "Frances Ha", director: "", rating: 4.5, date: "~2017", letterboxd: "https://boxd.it/41Xg", wikipedia: "" },
  { cover: "", title: "Good Will Hunting", director: "", rating: 4.5, date: "~2019", letterboxd: "https://boxd.it/2ahY", wikipedia: "" },
  { cover: "", title: "Harry Styles: Behind the Album", director: "", rating: 4.5, date: "June 2020", letterboxd: "https://boxd.it/gjfg", wikipedia: "" },
  { cover: "", title: "How to Lose a Guy in 10 Days", director: "", rating: 4.5, date: "~2012", letterboxd: "https://boxd.it/1XwG", wikipedia: "" },
  { cover: "", title: "Into the Wild", director: "", rating: 4.5, date: "June 2020", letterboxd: "https://boxd.it/22m2", wikipedia: "" },
  { cover: "", title: "Isle of Dogs", director: "", rating: 4.5, date: "March 2018", letterboxd: "https://boxd.it/dZrW", wikipedia: "" },
  { cover: "", title: "Jojo Rabbit", director: "", rating: 4.5, date: "December 2019", letterboxd: "https://boxd.it/iEBG", wikipedia: "" },
  { cover: "", title: "Kill Bill: Vol. 1", director: "", rating: 4.5, date: "~2010", letterboxd: "https://boxd.it/70w", wikipedia: "" },
  { cover: "", title: "Kill Bill: Vol. 2", director: "", rating: 4.5, date: "~2010", letterboxd: "https://boxd.it/2au4", wikipedia: "" },
  { cover: "", title: "Knock Down the House", director: "", rating: 3.5, date: "January 2019", letterboxd: "https://boxd.it/kIss", wikipedia: "" },
  { cover: "", title: "Koyaanisqatsi", director: "", rating: 4, date: "June 2019", letterboxd: "https://boxd.it/1U9E", wikipedia: "" },
  { cover: "", title: "Lion", director: "", rating: 3.5, date: "~2017", letterboxd: "https://boxd.it/b2La", wikipedia: "" },
  { cover: "", title: "Little Miss Sunshine", director: "", rating: 4.5, date: "~2011", letterboxd: "https://boxd.it/29EW", wikipedia: "" },
  { cover: "", title: "Mean Girls", director: "", rating: 4.5, date: "~2010", letterboxd: "https://boxd.it/1VNg", wikipedia: "" },
  { cover: "", title: "Moonrise Kingdom", director: "", rating: 4.5, date: "July 2012", letterboxd: "https://boxd.it/2Wng", wikipedia: "" },
  { cover: "", title: "Nathan for You: Finding Frances", director: "", rating: 4.5, date: "May 2020", letterboxd: "https://boxd.it/hufy", wikipedia: "" },
  { cover: "", title: "Paddington 2", director: "", rating: 4, date: "March 2023", letterboxd: "https://boxd.it/bCF8", wikipedia: "" },
  { cover: "", title: "Punch-Drunk Love", director: "", rating: 4.5, date: "March 2021", letterboxd: "https://boxd.it/20E4", wikipedia: "" },
  { cover: "", title: "Scott Pilgrim vs. the World", director: "", rating: 4.5, date: "2010", letterboxd: "https://boxd.it/1Aq6", wikipedia: "" },
  { cover: "", title: "Slumdog Millionaire", director: "", rating: 4, date: "~2012", letterboxd: "https://boxd.it/1S3E", wikipedia: "" },
  { cover: "", title: "Stand by Me", director: "", rating: 3, date: "January 2022", letterboxd: "https://boxd.it/2aOe", wikipedia: "" },
  { cover: "", title: "Terminally in Love", director: "", rating: 4, date: "2018", letterboxd: "https://boxd.it/nf9i", wikipedia: "" },
  { cover: "", title: "The Boy in the Striped Pyjamas", director: "", rating: 3.5, date: "~2011", letterboxd: "https://boxd.it/1NOK", wikipedia: "" },
  { cover: "", title: "The Darjeeling Limited", director: "", rating: 4, date: "May 2022", letterboxd: "https://boxd.it/24as", wikipedia: "" },
  { cover: "", title: "The Dawn Wall", director: "", rating: 4.5, date: "May 2020", letterboxd: "https://boxd.it/hCP0", wikipedia: "" },
  { cover: "", title: "The Fox and the Hound", director: "", rating: 4, date: "~2003", letterboxd: "https://boxd.it/1V0o", wikipedia: "" },
  { cover: "", title: "The French Dispatch", director: "", rating: 4.5, date: "May 2022", letterboxd: "https://boxd.it/jLP8", wikipedia: "" },
  { cover: "", title: "The Worst Person in the World", director: "", rating: 4.5, date: "April 2022", letterboxd: "https://boxd.it/oyws", wikipedia: "" },
  { cover: "", title: "There's Something About Mary", director: "", rating: 3, date: "April 2023", letterboxd: "https://boxd.it/2aae", wikipedia: "" },
  { cover: "", title: "Up", director: "", rating: 4.5, date: "June 2009", letterboxd: "https://boxd.it/1OEc", wikipedia: "" },
  { cover: "", title: "Women Talking", director: "", rating: 4.5, date: "January 2023", letterboxd: "https://boxd.it/tdq4", wikipedia: "" },
  { cover: "", title: "Won't You Be My Neighbor?", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/hDPU", wikipedia: "" },
  { cover: "", title: "1917", director: "", rating: 4.5, date: "May 2020", letterboxd: "https://boxd.it/jj4y", wikipedia: "" },
  { cover: "", title: "27 Dresses", director: "", rating: 5, date: "January 2008", letterboxd: "https://boxd.it/21x4", wikipedia: "" },
  { cover: "", title: "A Beautiful Day in the Neighborhood", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/i7vA", wikipedia: "" },
  { cover: "", title: "Baraka", director: "", rating: 4, date: "2019", letterboxd: "https://boxd.it/1OWA", wikipedia: "" },
  { cover: "", title: "Beautiful Boy", director: "", rating: 3, date: "May 2022", letterboxd: "https://boxd.it/g76Q", wikipedia: "" },
  { cover: "", title: "Being John Malkovich", director: "", rating: 4, date: "January 2023", letterboxd: "https://boxd.it/2ahu", wikipedia: "" },
  { cover: "", title: "Big Daddy", director: "", rating: 4, date: "~2004", letterboxd: "https://boxd.it/1ZkW", wikipedia: "" },
  { cover: "", title: "Big Night", director: "", rating: 4, date: "August 2023", letterboxd: "https://boxd.it/1HnI", wikipedia: "" },
  { cover: "", title: "Black Swan", director: "", rating: 4, date: "January 2011", letterboxd: "https://boxd.it/Sw0", wikipedia: "" },
  { cover: "", title: "Bo Burnham: Make Happy", director: "", rating: 4, date: "June 2016", letterboxd: "https://boxd.it/e436", wikipedia: "" },
  { cover: "", title: "Clueless", director: "", rating: 4, date: "August 2024", letterboxd: "https://boxd.it/1Ygk", wikipedia: "" },
  { cover: "", title: "Coco", director: "", rating: 3.5, date: "~2018", letterboxd: "https://boxd.it/bYJQ", wikipedia: "" },
  { cover: "", title: "Coraline", director: "", rating: 4, date: "March 2009", letterboxd: "https://boxd.it/1NhQ", wikipedia: "" },
  { cover: "", title: "Donnie Darko", director: "", rating: 4, date: "~2011", letterboxd: "https://boxd.it/2b2A", wikipedia: "" },
  { cover: "", title: "Edward Scissorhands", director: "", rating: 4, date: "~2012", letterboxd: "https://boxd.it/2aZc", wikipedia: "" },
  { cover: "", title: "Elf", director: "", rating: 4, date: "~2003", letterboxd: "https://boxd.it/1VyK", wikipedia: "" },
  { cover: "", title: "Everything Everywhere All at Once", director: "", rating: 4, date: "April 2022", letterboxd: "https://boxd.it/jUk4", wikipedia: "" },
  { cover: "", title: "Forgetting Sarah Marshall", director: "", rating: 4, date: "January 2023", letterboxd: "https://boxd.it/1XEq", wikipedia: "" },
  { cover: "", title: "Get Me Roger Stone", director: "", rating: 4, date: "June 2020", letterboxd: "https://boxd.it/fYtc", wikipedia: "" },
  { cover: "", title: "Halloweentown", director: "", rating: 4, date: "~2004", letterboxd: "https://boxd.it/1qPq", wikipedia: "" },
  { cover: "", title: "Happy Gilmore", director: "", rating: 4, date: "~2005", letterboxd: "https://boxd.it/1Yey", wikipedia: "" },
  { cover: "", title: "Heaven Is a Traffic Jam on the 405", director: "", rating: 4, date: "June 2020", letterboxd: "https://boxd.it/gYkG", wikipedia: "" },
  { cover: "", title: "Hot Flash", director: "", rating: 4, date: "July 2020", letterboxd: "https://boxd.it/mVby", wikipedia: "" },
  { cover: "", title: "I ♥ Huckabees", director: "", rating: 4, date: "February 2023", letterboxd: "https://boxd.it/28vk", wikipedia: "" },
  { cover: "", title: "Inglourious Basterds", director: "", rating: 4, date: "~2011", letterboxd: "https://boxd.it/1JzG", wikipedia: "" },
  { cover: "", title: "It's Kind of a Funny Story", director: "", rating: 4, date: "October 2010", letterboxd: "https://boxd.it/Tfa", wikipedia: "" },
  { cover: "", title: "Juno", director: "", rating: 4, date: "January 2008", letterboxd: "https://boxd.it/210a", wikipedia: "" },
  { cover: "", title: "Klaus", director: "", rating: 4, date: "December 2022", letterboxd: "https://boxd.it/ipoi", wikipedia: "" },
  { cover: "", title: "La La Land", director: "", rating: 4, date: "December 2016", letterboxd: "https://boxd.it/a5fa", wikipedia: "" },
  { cover: "", title: "Lost in Translation", director: "", rating: 4, date: "December 2021", letterboxd: "https://boxd.it/2b0E", wikipedia: "" },
  { cover: "", title: "Magic Mike's Last Dance", director: "", rating: 4, date: "March 2023", letterboxd: "https://boxd.it/y9g0", wikipedia: "" },
  { cover: "", title: "Marriage Story", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/hJAw", wikipedia: "" },
  { cover: "", title: "Me and Earl and the Dying Girl", director: "", rating: 4, date: "May 2020", letterboxd: "https://boxd.it/9SAE", wikipedia: "" },
  { cover: "", title: "Memento", director: "", rating: 4, date: "~2012", letterboxd: "https://boxd.it/2bcK", wikipedia: "" },
  { cover: "", title: "Miss Congeniality", director: "", rating: 4, date: "~2004", letterboxd: "https://boxd.it/28GM", wikipedia: "" },
  { cover: "", title: "mother!", director: "", rating: 4, date: "September 2017", letterboxd: "https://boxd.it/dgRU", wikipedia: "" },
  { cover: "", title: "Nirvana the Band the Show the Movie", director: "", rating: 4, date: "Spring 2026", letterboxd: "https://boxd.it/GITi", wikipedia: "" },
  { cover: "", title: "Nomadland", director: "", rating: 4, date: "January 2021", letterboxd: "https://boxd.it/lnRy", wikipedia: "" },
  { cover: "", title: "Ocean's Eleven", director: "", rating: 4, date: "February 2024", letterboxd: "https://boxd.it/2aZm", wikipedia: "" },
  { cover: "", title: "Paddington", director: "", rating: 4, date: "March 2022", letterboxd: "https://boxd.it/3RKw", wikipedia: "" },
  { cover: "", title: "Palm Springs", director: "", rating: 4, date: "January 2021", letterboxd: "https://boxd.it/lCXQ", wikipedia: "" },
  { cover: "", title: "Parasite", director: "", rating: 4, date: "November 2019", letterboxd: "https://boxd.it/hTha", wikipedia: "" },
  { cover: "", title: "Princess Mononoke", director: "", rating: 4, date: "~2010", letterboxd: "https://boxd.it/2b4w", wikipedia: "" },
  { cover: "", title: "Raising Arizona", director: "", rating: 4, date: "May 2022", letterboxd: "https://boxd.it/2avQ", wikipedia: "" },
  { cover: "", title: "School of Rock", director: "", rating: 4, date: "~2005", letterboxd: "https://boxd.it/28xK", wikipedia: "" },
  { cover: "", title: "Shrek 2", director: "", rating: 4, date: "2004", letterboxd: "https://boxd.it/29z8", wikipedia: "" },
  { cover: "", title: "Skate Kitchen", director: "", rating: 4, date: "May 2020", letterboxd: "https://boxd.it/hI3Q", wikipedia: "" },
  { cover: "", title: "SLC Punk", director: "", rating: 4, date: "~2019", letterboxd: "https://boxd.it/21JY", wikipedia: "" },
  { cover: "", title: "Sorry to Bother You", director: "", rating: 4, date: "May 2020", letterboxd: "https://boxd.it/f21E", wikipedia: "" },
  { cover: "", title: "Spirited Away", director: "", rating: 4, date: "~2010", letterboxd: "https://boxd.it/2b4m", wikipedia: "" },
  { cover: "", title: "The Art of Getting By", director: "", rating: 4, date: "2011", letterboxd: "https://boxd.it/KC", wikipedia: "" },
  { cover: "", title: "The Big Lebowski", director: "", rating: 4, date: "2019", letterboxd: "https://boxd.it/2b6C", wikipedia: "" },
  { cover: "", title: "The Big Short", director: "", rating: 4, date: "January 2016", letterboxd: "https://boxd.it/ajZw", wikipedia: "" },
  { cover: "", title: "The Disaster Artist", director: "", rating: 4, date: "November 2021", letterboxd: "https://boxd.it/cTqc", wikipedia: "" },
  { cover: "", title: "The Florida Project", director: "", rating: 4, date: "~2018", letterboxd: "https://boxd.it/dMG0", wikipedia: "" },
  { cover: "", title: "The Grand Budapest Hotel", director: "", rating: 4, date: "~2014", letterboxd: "https://boxd.it/3ZqO", wikipedia: "" },
  { cover: "", title: "The Holdovers", director: "", rating: 4, date: "January 2024", letterboxd: "https://boxd.it/vHza", wikipedia: "" },
  { cover: "", title: "The Incredible Mr. Limpet", director: "", rating: 4, date: "~2004", letterboxd: "https://boxd.it/1EjS", wikipedia: "" },
  { cover: "", title: "The King's Speech", director: "", rating: 4, date: "2010", letterboxd: "https://boxd.it/dX0", wikipedia: "" },
  { cover: "", title: "The Last Waltz", director: "", rating: 4, date: "October 2024", letterboxd: "https://boxd.it/1P1U", wikipedia: "" },
  { cover: "", title: "The Lovely Bones", director: "", rating: 4, date: "2010", letterboxd: "https://boxd.it/20IA", wikipedia: "" },
  { cover: "", title: "The Matrix", director: "", rating: 4, date: "~2012", letterboxd: "https://boxd.it/2a1m", wikipedia: "" },
  { cover: "", title: "The Pink Panther", director: "", rating: 4, date: "2006", letterboxd: "https://boxd.it/1Sys", wikipedia: "" },
  { cover: "", title: "The Rest of Us", director: "", rating: 4, date: "September 2019", letterboxd: "https://boxd.it/mmKy", wikipedia: "" },
  { cover: "", title: "The Royal Tenenbaums", director: "", rating: 4, date: "November 2021", letterboxd: "https://boxd.it/1YHU", wikipedia: "" },
  { cover: "", title: "The Speed Cubers", director: "", rating: 4, date: "August 2020", letterboxd: "https://boxd.it/r0jg", wikipedia: "" },
  { cover: "", title: "The SpongeBob SquarePants Movie", director: "", rating: 4, date: "November 2004", letterboxd: "https://boxd.it/1SYq", wikipedia: "" },
  { cover: "", title: "The Truman Show", director: "", rating: 4, date: "~2013", letterboxd: "https://boxd.it/18U8", wikipedia: "" },
  { cover: "", title: "The Wolf of Wall Street", director: "", rating: 4, date: "2014", letterboxd: "https://boxd.it/3C1m", wikipedia: "" },
  { cover: "", title: "Traffic Stop", director: "", rating: 4, date: "June 2020", letterboxd: "https://boxd.it/hH3g", wikipedia: "" },
  { cover: "", title: "Turbo", director: "", rating: 4, date: "June 2020", letterboxd: "https://boxd.it/2Hzw", wikipedia: "" },
  { cover: "", title: "Where the Wild Things Are", director: "", rating: 4, date: "~2010", letterboxd: "https://boxd.it/1K0C", wikipedia: "" },
  { cover: "", title: "Whip It", director: "", rating: 4, date: "~2013", letterboxd: "https://boxd.it/1A3m", wikipedia: "" },
  { cover: "", title: "13th", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/elNg", wikipedia: "" },
  { cover: "", title: "50/50", director: "", rating: 3.5, date: "2012", letterboxd: "https://boxd.it/10Tw", wikipedia: "" },
  { cover: "", title: "A Real Pain", director: "", rating: 3.5, date: "January 2025", letterboxd: "https://boxd.it/CjNG", wikipedia: "" },
  { cover: "", title: "A Star Is Born", director: "", rating: 3.5, date: "October 2018", letterboxd: "https://boxd.it/aXgc", wikipedia: "" },
  { cover: "", title: "Adaptation.", director: "", rating: 3.5, date: "February 2021", letterboxd: "https://boxd.it/26mA", wikipedia: "" },
  { cover: "", title: "Akeelah and the Bee", director: "", rating: 3.5, date: "May 2006", letterboxd: "https://boxd.it/1PuC", wikipedia: "" },
  { cover: "", title: "Almost Famous", director: "", rating: 3.5, date: "January 2023", letterboxd: "https://boxd.it/29CQ", wikipedia: "" },
  { cover: "", title: "Athlete A", director: "", rating: 3.5, date: "July 2020", letterboxd: "https://boxd.it/pxY8", wikipedia: "" },
  { cover: "", title: "Austin Powers: The Spy Who Shagged Me", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/29xQ", wikipedia: "" },
  { cover: "", title: "Back to the Future", director: "", rating: 3.5, date: "~2013", letterboxd: "https://boxd.it/2b8e", wikipedia: "" },
  { cover: "", title: "Bean", director: "", rating: 2.5, date: "~2008", letterboxd: "https://boxd.it/28WA", wikipedia: "" },
  { cover: "", title: "Blue Velvet", director: "", rating: 3.5, date: "~2018", letterboxd: "https://boxd.it/29BI", wikipedia: "" },
  { cover: "", title: "Bohemian Rhapsody", director: "", rating: 3.5, date: "2019", letterboxd: "https://boxd.it/f1TK", wikipedia: "" },
  { cover: "", title: "Bridge to Terabithia", director: "", rating: 3.5, date: "~2008", letterboxd: "https://boxd.it/28YG", wikipedia: "" },
  { cover: "", title: "Bridget Jones's Diary", director: "", rating: 3.5, date: "December 2022", letterboxd: "https://boxd.it/29WQ", wikipedia: "" },
  { cover: "", title: "Bring It On", director: "", rating: 3.5, date: "~2002", letterboxd: "https://boxd.it/28x6", wikipedia: "" },
  { cover: "", title: "Brokeback Mountain", director: "", rating: 3.5, date: "~2014", letterboxd: "https://boxd.it/2b2q", wikipedia: "" },
  { cover: "", title: "Camp Rock", director: "", rating: 3.5, date: "June 2008", letterboxd: "https://boxd.it/1PHw", wikipedia: "" },
  { cover: "", title: "Casablanca", director: "", rating: 3.5, date: "~2007", letterboxd: "https://boxd.it/2aG0", wikipedia: "" },
  { cover: "", title: "Catch Me If You Can", director: "", rating: 3.5, date: "~2006", letterboxd: "https://boxd.it/29VS", wikipedia: "" },
  { cover: "", title: "Corpse Bride", director: "", rating: 3.5, date: "~2005", letterboxd: "https://boxd.it/24WQ", wikipedia: "" },
  { cover: "", title: "Don't Worry Darling", director: "", rating: 3.5, date: "September 2022", letterboxd: "https://boxd.it/mViu", wikipedia: "" },
  { cover: "", title: "Drive", director: "", rating: 3.5, date: "~2018", letterboxd: "https://boxd.it/IG", wikipedia: "" },
  { cover: "", title: "Dune: Part Two", director: "", rating: 2.5, date: "March 2024", letterboxd: "https://boxd.it/pUfA", wikipedia: "" },
  { cover: "", title: "Easy A", director: "", rating: 3.5, date: "October 2010", letterboxd: "https://boxd.it/17DK", wikipedia: "" },
  { cover: "", title: "Ella Enchanted", director: "", rating: 3.5, date: "~2005", letterboxd: "https://boxd.it/1O5G", wikipedia: "" },
  { cover: "", title: "Fargo", director: "", rating: 3.5, date: "June 2020", letterboxd: "https://boxd.it/2aHM", wikipedia: "" },
  { cover: "", title: "Get Out", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/eOCm", wikipedia: "" },
  { cover: "", title: "Halloweentown II: Kalabar's Revenge", director: "", rating: 3.5, date: "~2004", letterboxd: "https://boxd.it/1e98", wikipedia: "" },
  { cover: "", title: "Heroin(e)", director: "", rating: 3.5, date: "June 2020", letterboxd: "https://boxd.it/h3GM", wikipedia: "" },
  { cover: "", title: "High School Musical", director: "", rating: 3.5, date: "January 2006", letterboxd: "https://boxd.it/1V0y", wikipedia: "" },
  { cover: "", title: "Hot Fuzz", director: "", rating: 3.5, date: "~2021", letterboxd: "https://boxd.it/2416", wikipedia: "" },
  { cover: "", title: "Howl's Moving Castle", director: "", rating: 3.5, date: "~2015", letterboxd: "https://boxd.it/23De", wikipedia: "" },
  { cover: "", title: "Inception", director: "", rating: 3.5, date: "July 2010", letterboxd: "https://boxd.it/1skk", wikipedia: "" },
  { cover: "", title: "Kiki's Delivery Service", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/1JAY", wikipedia: "" },
  { cover: "", title: "Knife Skills", director: "", rating: 3.5, date: "June 2020", letterboxd: "https://boxd.it/gHEO", wikipedia: "" },
  { cover: "", title: "Legally Blonde", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/1ZNa", wikipedia: "" },
  { cover: "", title: "Luck-Key", director: "", rating: 3.5, date: "May 2022", letterboxd: "https://boxd.it/eUYe", wikipedia: "" },
  { cover: "", title: "Matilda", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/1VhY", wikipedia: "" },
  { cover: "", title: "Middleditch & Schwartz", director: "", rating: 3.5, date: "January 2022", letterboxd: "https://boxd.it/pV28", wikipedia: "" },
  { cover: "", title: "Monty Python and the Holy Grail", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/29GI", wikipedia: "" },
  { cover: "", title: "My Neighbor Totoro", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/20eA", wikipedia: "" },
  { cover: "", title: "Orphan", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/1CgM", wikipedia: "" },
  { cover: "", title: "Phantom Thread", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/e4uc", wikipedia: "" },
  { cover: "", title: "Psycho", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/2ab2", wikipedia: "" },
  { cover: "", title: "Raiders of the Lost Ark", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/2bbs", wikipedia: "" },
  { cover: "", title: "Superbad", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/20hO", wikipedia: "" },
  { cover: "", title: "Synecdoche, New York", director: "", rating: 3.5, date: "June 2020", letterboxd: "https://boxd.it/23zw", wikipedia: "" },
  { cover: "", title: "The Adventures of Sharkboy and Lavagirl", director: "", rating: 3.5, date: "January 2022", letterboxd: "https://boxd.it/1Ozm", wikipedia: "" },
  { cover: "", title: "The Challenge", director: "", rating: 3.5, date: "December 2022", letterboxd: "https://boxd.it/QOQ", wikipedia: "" },
  { cover: "", title: "The Emperor's New Groove", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/1Tey", wikipedia: "" },
  { cover: "", title: "The Parent Trap", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/1XJq", wikipedia: "" },
  { cover: "", title: "The Peanut Butter Falcon", director: "", rating: 3.5, date: "November 2021", letterboxd: "https://boxd.it/gzu2", wikipedia: "" },
  { cover: "", title: "The Polka King", director: "", rating: 3.5, date: "January 2022", letterboxd: "https://boxd.it/eP0y", wikipedia: "" },
  { cover: "", title: "The Princess Bride", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/26EY", wikipedia: "" },
  { cover: "", title: "The Reluctant Astronaut", director: "", rating: 3.5, date: "June 2020", letterboxd: "https://boxd.it/19F4", wikipedia: "" },
  { cover: "", title: "The Shakiest Gun in the West", director: "", rating: 3.5, date: "June 2020", letterboxd: "https://boxd.it/1DPI", wikipedia: "" },
  { cover: "", title: "The Social Network", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/17ue", wikipedia: "" },
  { cover: "", title: "The Sound of Music", director: "", rating: 3.5, date: "January 2022", letterboxd: "https://boxd.it/1MLK", wikipedia: "" },
  { cover: "", title: "The Trial of the Chicago 7", director: "", rating: 3.5, date: "November 2021", letterboxd: "https://boxd.it/kn3w", wikipedia: "" },
  { cover: "", title: "The Wizard of Oz", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/29Xu", wikipedia: "" },
  { cover: "", title: "tick, tick... BOOM!", director: "", rating: 3.5, date: "January 2022", letterboxd: "https://boxd.it/jz2e", wikipedia: "" },
  { cover: "", title: "Titanic", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/2a2k", wikipedia: "" },
  { cover: "", title: "V for Vendetta", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/29Ik", wikipedia: "" },
  { cover: "", title: "Vertigo", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/2apI", wikipedia: "" },
  { cover: "", title: "WALL·E", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/1VEo", wikipedia: "" },
  { cover: "", title: "Willy Wonka & the Chocolate Factory", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/2aLu", wikipedia: "" },
  { cover: "", title: "Zootopia", director: "", rating: 3.5, date: "May 2020", letterboxd: "https://boxd.it/84xS", wikipedia: "" },
  { cover: "", title: "A Clockwork Orange", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/2aVE", wikipedia: "" },
  { cover: "", title: "A Goofy Movie", director: "", rating: 3, date: "January 2022", letterboxd: "https://boxd.it/1Lwu", wikipedia: "" },
  { cover: "", title: "About Time", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/43bI", wikipedia: "" },
  { cover: "", title: "Amy", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/aSNU", wikipedia: "" },
  { cover: "", title: "Basic Instinct", director: "", rating: 3, date: "May 2022", letterboxd: "https://boxd.it/2asM", wikipedia: "" },
  { cover: "", title: "Before Sunrise", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/2bcU", wikipedia: "" },
  { cover: "", title: "Big Fish", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/2a3M", wikipedia: "" },
  { cover: "", title: "Black Mirror: Bandersnatch", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/kTDG", wikipedia: "" },
  { cover: "", title: "Blue Is the Warmest Color", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/4O40", wikipedia: "" },
  { cover: "", title: "Carts of Darkness", director: "", rating: 3, date: "January 2023", letterboxd: "https://boxd.it/EMo", wikipedia: "" },
  { cover: "", title: "Cats Don't Dance", director: "", rating: 3, date: "June 2020", letterboxd: "https://boxd.it/1xfu", wikipedia: "" },
  { cover: "", title: "Chungking Express", director: "", rating: 3, date: "January 2025", letterboxd: "https://boxd.it/1UDa", wikipedia: "" },
  { cover: "", title: "Citizen Kane", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/71O", wikipedia: "" },
  { cover: "", title: "Crazy, Stupid, Love.", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/D9A", wikipedia: "" },
  { cover: "", title: "Do the Right Thing", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/29gA", wikipedia: "" },
  { cover: "", title: "Falling for Christmas", director: "", rating: 3, date: "November 2022", letterboxd: "https://boxd.it/vpEG", wikipedia: "" },
  { cover: "", title: "Fantasia", director: "", rating: 3, date: "January 2022", letterboxd: "https://boxd.it/29HG", wikipedia: "" },
  { cover: "", title: "Ferris Bueller's Day Off", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/1YPY", wikipedia: "" },
  { cover: "", title: "Freaky Friday", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/1WwK", wikipedia: "" },
  { cover: "", title: "Free Willy", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/28qO", wikipedia: "" },
  { cover: "", title: "Gravity", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/GZY", wikipedia: "" },
  { cover: "", title: "Grease", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/29YW", wikipedia: "" },
  { cover: "", title: "Happiest Season", director: "", rating: 3, date: "December 2022", letterboxd: "https://boxd.it/iS3I", wikipedia: "" },
  { cover: "", title: "Her", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/4O24", wikipedia: "" },
  { cover: "", title: "Hollie's Dress", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/pU72", wikipedia: "" },
  { cover: "", title: "HOMECOMING: A film by Beyoncé", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/lS2Q", wikipedia: "" },
  { cover: "", title: "Hot Rod", director: "", rating: 3, date: "June 2020", letterboxd: "https://boxd.it/1X9C", wikipedia: "" },
  { cover: "", title: "Inside Llewyn Davis", director: "", rating: 3, date: "April 2022", letterboxd: "https://boxd.it/34Ro", wikipedia: "" },
  { cover: "", title: "Jackie", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/d6bu", wikipedia: "" },
  { cover: "", title: "Jaws", director: "", rating: 3, date: "January 2022", letterboxd: "https://boxd.it/2a5e", wikipedia: "" },
  { cover: "", title: "Joker", director: "", rating: 3, date: "November 2021", letterboxd: "https://boxd.it/h4cS", wikipedia: "" },
  { cover: "", title: "Kick-Ass", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/1zaQ", wikipedia: "" },
  { cover: "", title: "Knives Out", director: "", rating: 3, date: "July 2020", letterboxd: "https://boxd.it/jWEA", wikipedia: "" },
  { cover: "", title: "Life of Pi", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/37pC", wikipedia: "" },
  { cover: "", title: "Love Actually", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/2aeU", wikipedia: "" },
  { cover: "", title: "Made of Honor", director: "", rating: 3, date: "April 2024", letterboxd: "https://boxd.it/1VsC", wikipedia: "" },
  { cover: "", title: "Moana", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/8tfY", wikipedia: "" },
  { cover: "", title: "National Theatre Live: Fleabag", director: "", rating: 3, date: "January 2022", letterboxd: "https://boxd.it/mXOW", wikipedia: "" },
  { cover: "", title: "Normal People", director: "", rating: 3, date: "July 2020", letterboxd: "https://boxd.it/q2VY", wikipedia: "" },
  { cover: "", title: "Notting Hill", director: "", rating: 3, date: "January 2023", letterboxd: "https://boxd.it/2aeK", wikipedia: "" },
  { cover: "", title: "Objectified", director: "", rating: 3, date: "June 2020", letterboxd: "https://boxd.it/1yCk", wikipedia: "" },
  { cover: "", title: "Palo Alto", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/5Nzy", wikipedia: "" },
  { cover: "", title: "Rear Window", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/2a6Q", wikipedia: "" },
  { cover: "", title: "Requiem for a Dream", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/29VI", wikipedia: "" },
  { cover: "", title: "Saving Private Ryan", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/29ro", wikipedia: "" },
  { cover: "", title: "Say Anything...", director: "", rating: 3, date: "January 2022", letterboxd: "https://boxd.it/27B2", wikipedia: "" },
  { cover: "", title: "Set It Up", director: "", rating: 3, date: "December 2022", letterboxd: "https://boxd.it/dpik", wikipedia: "" },
  { cover: "", title: "Shrek", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/29zi", wikipedia: "" },
  { cover: "", title: "Silver Linings Playbook", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/2TTo", wikipedia: "" },
  { cover: "", title: "The Banshees of Inisherin", director: "", rating: 3, date: "January 2023", letterboxd: "https://boxd.it/p7XS", wikipedia: "" },
  { cover: "", title: "The Breakfast Club", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/27q4", wikipedia: "" },
  { cover: "", title: "The Fundamentals of Caring", director: "", rating: 3, date: "June 2020", letterboxd: "https://boxd.it/aiai", wikipedia: "" },
  { cover: "", title: "The Ghost and Mr. Chicken", director: "", rating: 3, date: "June 2020", letterboxd: "https://boxd.it/1QnC", wikipedia: "" },
  { cover: "", title: "The Lobster", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/7tnw", wikipedia: "" },
  { cover: "", title: "The Muppet Movie", director: "", rating: 3, date: "March 2022", letterboxd: "https://boxd.it/1UrS", wikipedia: "" },
  { cover: "", title: "The Nightmare Before Christmas", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/1YzQ", wikipedia: "" },
  { cover: "", title: "The Notebook", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/1UNE", wikipedia: "" },
  { cover: "", title: "The Princess Diaries", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/1XCO", wikipedia: "" },
  { cover: "", title: "The Proposal", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/1HiS", wikipedia: "" },
  { cover: "", title: "The Rocky Horror Picture Show", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/1a3q", wikipedia: "" },
  { cover: "", title: "The Virgin Suicides", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/28JG", wikipedia: "" },
  { cover: "", title: "The Wedding Singer", director: "", rating: 3, date: "January 2024", letterboxd: "https://boxd.it/1USO", wikipedia: "" },
  { cover: "", title: "Three Billboards Outside Ebbing, Missouri", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/ceBS", wikipedia: "" },
  { cover: "", title: "To All the Boys I've Loved Before", director: "", rating: 3, date: "May 2020", letterboxd: "https://boxd.it/gHec", wikipedia: "" },
  { cover: "", title: "Turning Red", director: "", rating: 3, date: "July 2023", letterboxd: "https://boxd.it/ipkq", wikipedia: "" },
  { cover: "", title: "Urbanized", director: "", rating: 3, date: "June 2020", letterboxd: "https://boxd.it/2FOu", wikipedia: "" },
  { cover: "", title: "You've Got Mail", director: "", rating: 3, date: "June 2022", letterboxd: "https://boxd.it/1Yye", wikipedia: "" },
  { cover: "", title: "Youth in Revolt", director: "", rating: 3, date: "April 2022", letterboxd: "https://boxd.it/1AK6", wikipedia: "" },
  { cover: "", title: "Zoolander", director: "", rating: 3, date: "January 2022", letterboxd: "https://boxd.it/1YMA", wikipedia: "" },
  { cover: "", title: "2001: A Space Odyssey", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/2bf0", wikipedia: "" },
  { cover: "", title: "A Nightmare on Elm Street", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/2aw0", wikipedia: "" },
  { cover: "", title: "Amadeus", director: "", rating: 2.5, date: "January 2024", letterboxd: "https://boxd.it/2aH8", wikipedia: "" },
  { cover: "", title: "An American in Paris", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/26kY", wikipedia: "" },
  { cover: "", title: "An Extremely Goofy Movie", director: "", rating: 2.5, date: "June 2020", letterboxd: "https://boxd.it/1LOo", wikipedia: "" },
  { cover: "", title: "Babe, I Hate To Go", director: "", rating: 2.5, date: "June 2020", letterboxd: "https://boxd.it/gfIo", wikipedia: "" },
  { cover: "", title: "Bend It Like Beckham", director: "", rating: 2.5, date: "January 2022", letterboxd: "https://boxd.it/2am0", wikipedia: "" },
  { cover: "", title: "Between Two Ferns: The Movie", director: "", rating: 2.5, date: "June 2020", letterboxd: "https://boxd.it/lw9g", wikipedia: "" },
  { cover: "", title: "Bewitched", director: "", rating: 2.5, date: "January 2022", letterboxd: "https://boxd.it/1XXW", wikipedia: "" },
  { cover: "", title: "Big", director: "", rating: 2.5, date: "January 2022", letterboxd: "https://boxd.it/271S", wikipedia: "" },
  { cover: "", title: "Birdman or (The Unexpected Virtue of Ignorance)", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/5RFA", wikipedia: "" },
  { cover: "", title: "Blue Planet II", director: "", rating: 2.5, date: "June 2020", letterboxd: "https://boxd.it/gACc", wikipedia: "" },
  { cover: "", title: "Call Me by Your Name", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/dYmm", wikipedia: "" },
  { cover: "", title: "Cheaper by the Dozen", director: "", rating: 2.5, date: "January 2022", letterboxd: "https://boxd.it/1USa", wikipedia: "" },
  { cover: "", title: "Cinderella", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/1Uki", wikipedia: "" },
  { cover: "", title: "CODA", director: "", rating: 2.5, date: "January 2023", letterboxd: "https://boxd.it/tbf4", wikipedia: "" },
  { cover: "", title: "Don't Look Up", director: "", rating: 2.5, date: "December 2021", letterboxd: "https://boxd.it/o0Hc", wikipedia: "" },
  { cover: "", title: "Earth", director: "", rating: 2.5, date: "June 2020", letterboxd: "https://boxd.it/1V0I", wikipedia: "" },
  { cover: "", title: "Ex Machina", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/7T2k", wikipedia: "" },
  { cover: "", title: "Fahrenheit 9/11", director: "", rating: 2.5, date: "April 2022", letterboxd: "https://boxd.it/28a2", wikipedia: "" },
  { cover: "", title: "Frankenweenie", director: "", rating: 2.5, date: "January 2022", letterboxd: "https://boxd.it/bPS", wikipedia: "" },
  { cover: "", title: "Fyre", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/kP0g", wikipedia: "" },
  { cover: "", title: "Fyre Fraud", director: "", rating: 2.5, date: "June 2020", letterboxd: "https://boxd.it/l7wY", wikipedia: "" },
  { cover: "", title: "Gone Girl", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/6hQu", wikipedia: "" },
  { cover: "", title: "Herbie Goes to Monte Carlo", director: "", rating: 2.5, date: "June 2020", letterboxd: "https://boxd.it/1OGC", wikipedia: "" },
  { cover: "", title: "Home Alone", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/29Fg", wikipedia: "" },
  { cover: "", title: "I Am Patrick Swayze", director: "", rating: 2.5, date: "June 2022", letterboxd: "https://boxd.it/mZau", wikipedia: "" },
  { cover: "", title: "Incredibles 2", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/7IPg", wikipedia: "" },
  { cover: "", title: "Insidious", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/H4k", wikipedia: "" },
  { cover: "", title: "Interstellar", director: "", rating: 2.5, date: "February 2023", letterboxd: "https://boxd.it/4VZ8", wikipedia: "" },
  { cover: "", title: "It Chapter Two", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/h10u", wikipedia: "" },
  { cover: "", title: "Jump In!", director: "", rating: 2.5, date: "March 2022", letterboxd: "https://boxd.it/1P16", wikipedia: "" },
  { cover: "", title: "Kicking & Screaming", director: "", rating: 2.5, date: "January 2022", letterboxd: "https://boxd.it/1XnE", wikipedia: "" },
  { cover: "", title: "Loving Vincent", director: "", rating: 2.5, date: "June 2020", letterboxd: "https://boxd.it/biIQ", wikipedia: "" },
  { cover: "", title: "Mamma Mia!", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/1Tnq", wikipedia: "" },
  { cover: "", title: "Mary Poppins", director: "", rating: 2.5, date: "June 2020", letterboxd: "https://boxd.it/2aoA", wikipedia: "" },
  { cover: "", title: "McMillion$", director: "", rating: 2.5, date: "June 2020", letterboxd: "https://boxd.it/oWvI", wikipedia: "" },
  { cover: "", title: "Minutemen", director: "", rating: 2.5, date: "June 2020", letterboxd: "https://boxd.it/1AG4", wikipedia: "" },
  { cover: "", title: "Mr. Bean: The Library", director: "", rating: 2.5, date: "June 2020", letterboxd: "https://boxd.it/muQO", wikipedia: "" },
  { cover: "", title: "New Year's Eve", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/als", wikipedia: "" },
  { cover: "", title: "Nick and Norah's Infinite Playlist", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/1Slo", wikipedia: "" },
  { cover: "", title: "Now You See Me", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/2Bsu", wikipedia: "" },
  { cover: "", title: "Planet Earth", director: "", rating: 2.5, date: "January 2022", letterboxd: "https://boxd.it/5Nx8", wikipedia: "" },
  { cover: "", title: "Pretty in Pink", director: "", rating: 2.5, date: "June 2020", letterboxd: "https://boxd.it/1TEw", wikipedia: "" },
  { cover: "", title: "She's the Man", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/1Y7W", wikipedia: "" },
  { cover: "", title: "Sixteen Candles", director: "", rating: 2.5, date: "June 2020", letterboxd: "https://boxd.it/1MJk", wikipedia: "" },
  { cover: "", title: "Spy Kids", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/1Xcw", wikipedia: "" },
  { cover: "", title: "Stuart Little", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/1WZW", wikipedia: "" },
  { cover: "", title: "Suicide Squad", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/9row", wikipedia: "" },
  { cover: "", title: "The 40 Year Old Virgin", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/21hK", wikipedia: "" },
  { cover: "", title: "The Cheetah Girls", director: "", rating: 2.5, date: "June 2020", letterboxd: "https://boxd.it/1hkS", wikipedia: "" },
  { cover: "", title: "The Jungle Book", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/1YY2", wikipedia: "" },
  { cover: "", title: "The Kings of Summer", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/4V3e", wikipedia: "" },
  { cover: "", title: "The Land Before Time", director: "", rating: 2.5, date: "January 2022", letterboxd: "https://boxd.it/1Sr2", wikipedia: "" },
  { cover: "", title: "The Secret Life of Walter Mitty", director: "", rating: 2.5, date: "June 2020", letterboxd: "https://boxd.it/3SWy", wikipedia: "" },
  { cover: "", title: "The Shape of Water", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/dZ5m", wikipedia: "" },
  { cover: "", title: "The Skeleton Dance", director: "", rating: 2.5, date: "June 2020", letterboxd: "https://boxd.it/374E", wikipedia: "" },
  { cover: "", title: "The Ugly Truth", director: "", rating: 2.5, date: "December 2023", letterboxd: "https://boxd.it/1CFi", wikipedia: "" },
  { cover: "", title: "This Is the End", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/3GB4", wikipedia: "" },
  { cover: "", title: "Tiger King", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/pzj2", wikipedia: "" },
  { cover: "", title: "Walk the Line", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/2bdS", wikipedia: "" },
  { cover: "", title: "We'll Take Manhattan", director: "", rating: 2.5, date: "June 2020", letterboxd: "https://boxd.it/32gq", wikipedia: "" },
  { cover: "", title: "Who Took Johnny", director: "", rating: 2.5, date: "May 2020", letterboxd: "https://boxd.it/7mly", wikipedia: "" },
  { cover: "", title: "13 Going on 30", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/1X6e", wikipedia: "" },
  { cover: "", title: "50 First Dates", director: "", rating: 2, date: "January 2022", letterboxd: "https://boxd.it/285c", wikipedia: "" },
  { cover: "", title: "Adventureland", director: "", rating: 2, date: "June 2020", letterboxd: "https://boxd.it/1JTQ", wikipedia: "" },
  { cover: "", title: "Aladdin", director: "", rating: 2, date: "January 2022", letterboxd: "https://boxd.it/29yE", wikipedia: "" },
  { cover: "", title: "Alice in Wonderland", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/1Sz6", wikipedia: "" },
  { cover: "", title: "American History X", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/2bdo", wikipedia: "" },
  { cover: "", title: "Anora", director: "", rating: 2, date: "November 2024", letterboxd: "https://boxd.it/Egcw", wikipedia: "" },
  { cover: "", title: "Another Round", director: "", rating: 2, date: "June 2024", letterboxd: "https://boxd.it/lkba", wikipedia: "" },
  { cover: "", title: "Avatar: The Way of Water", director: "", rating: 2, date: "January 2023", letterboxd: "https://boxd.it/2E2E", wikipedia: "" },
  { cover: "", title: "Baby Driver", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/bhF2", wikipedia: "" },
  { cover: "", title: "Black Mirror: USS Callister", director: "", rating: 2, date: "June 2020", letterboxd: "https://boxd.it/hQXi", wikipedia: "" },
  { cover: "", title: "Blade Runner 2049", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/b8wK", wikipedia: "" },
  { cover: "", title: "Cadet Kelly", director: "", rating: 2, date: "June 2020", letterboxd: "https://boxd.it/1OVW", wikipedia: "" },
  { cover: "", title: "Candy Cane Lane", director: "", rating: 2, date: "December 2023", letterboxd: "https://boxd.it/CGHw", wikipedia: "" },
  { cover: "", title: "Charlotte's Web", director: "", rating: 2, date: "April 2022", letterboxd: "https://boxd.it/1Xn0", wikipedia: "" },
  { cover: "", title: "Confessions of a Teenage Drama Queen", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/1UyE", wikipedia: "" },
  { cover: "", title: "Crazy Rich Asians", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/gfnK", wikipedia: "" },
  { cover: "", title: "Dear John", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/1zO2", wikipedia: "" },
  { cover: "", title: "Django Unchained", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/2cCk", wikipedia: "" },
  { cover: "", title: "Emily the Criminal", director: "", rating: 2, date: "December 2022", letterboxd: "https://boxd.it/wBOq", wikipedia: "" },
  { cover: "", title: "Eric Andre: Legalize Everything", director: "", rating: 2, date: "July 2020", letterboxd: "https://boxd.it/qj7c", wikipedia: "" },
  { cover: "", title: "Finding Dory", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/4aAA", wikipedia: "" },
  { cover: "", title: "Finding Nemo", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/72i", wikipedia: "" },
  { cover: "", title: "Friends with Benefits", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/DoK", wikipedia: "" },
  { cover: "", title: "Gaga: Five Foot Two", director: "", rating: 2, date: "January 2022", letterboxd: "https://boxd.it/gWwK", wikipedia: "" },
  { cover: "", title: "High School Musical 2", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/1PIu", wikipedia: "" },
  { cover: "", title: "Honey, I Shrunk the Kids", director: "", rating: 2, date: "January 2022", letterboxd: "https://boxd.it/1YTw", wikipedia: "" },
  { cover: "", title: "Horton Hears a Who!", director: "", rating: 2, date: "January 2022", letterboxd: "https://boxd.it/1SfA", wikipedia: "" },
  { cover: "", title: "Hotel Rwanda", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/2aSA", wikipedia: "" },
  { cover: "", title: "Ice Princess", director: "", rating: 2, date: "January 2023", letterboxd: "https://boxd.it/1QjA", wikipedia: "" },
  { cover: "", title: "Idiocracy", director: "", rating: 2, date: "September 2022", letterboxd: "https://boxd.it/20RW", wikipedia: "" },
  { cover: "", title: "Inside Out", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/4KHC", wikipedia: "" },
  { cover: "", title: "Julie & Julia", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/1wXg", wikipedia: "" },
  { cover: "", title: "Jumanji: Welcome to the Jungle", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/bUeE", wikipedia: "" },
  { cover: "", title: "Lars and the Real Girl", director: "", rating: 2, date: "January 2022", letterboxd: "https://boxd.it/21tG", wikipedia: "" },
  { cover: "", title: "Love, Simon", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/g02s", wikipedia: "" },
  { cover: "", title: "Madagascar", director: "", rating: 2, date: "January 2022", letterboxd: "https://boxd.it/29dc", wikipedia: "" },
  { cover: "", title: "Magic Mike", director: "", rating: 2, date: "February 2023", letterboxd: "https://boxd.it/2HvY", wikipedia: "" },
  { cover: "", title: "Magic Mike XXL", director: "", rating: 2, date: "February 2023", letterboxd: "https://boxd.it/7TTS", wikipedia: "" },
  { cover: "", title: "Magnolia", director: "", rating: 2, date: "October 2024", letterboxd: "https://boxd.it/2aze", wikipedia: "" },
  { cover: "", title: "Mrs. Doubtfire", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/29Cw", wikipedia: "" },
  { cover: "", title: "Napoleon Dynamite", director: "", rating: 2, date: "June 2020", letterboxd: "https://boxd.it/20wu", wikipedia: "" },
  { cover: "", title: "Night at the Museum", director: "", rating: 2, date: "June 2020", letterboxd: "https://boxd.it/28wi", wikipedia: "" },
  { cover: "", title: "One Hundred and One Dalmatians", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/1SeC", wikipedia: "" },
  { cover: "", title: "Oppenheimer", director: "", rating: 2, date: "February 2024", letterboxd: "https://boxd.it/wUow", wikipedia: "" },
  { cover: "", title: "Paperman", director: "", rating: 2, date: "June 2020", letterboxd: "https://boxd.it/4uYW", wikipedia: "" },
  { cover: "", title: "Planes, Trains and Automobiles", director: "", rating: 2, date: "June 2020", letterboxd: "https://boxd.it/26zE", wikipedia: "" },
  { cover: "", title: "Pocahontas", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/1W2g", wikipedia: "" },
  { cover: "", title: "Ponyo", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/1S0A", wikipedia: "" },
  { cover: "", title: "Pulp Fiction", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/29Pq", wikipedia: "" },
  { cover: "", title: "Rudolph the Red-Nosed Reindeer", director: "", rating: 2, date: "June 2020", letterboxd: "https://boxd.it/1Qis", wikipedia: "" },
  { cover: "", title: "Salt", director: "", rating: 2, date: "January 2022", letterboxd: "https://boxd.it/1rtK", wikipedia: "" },
  { cover: "", title: "Scooby-Doo", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/1YaQ", wikipedia: "" },
  { cover: "", title: "Snowden", director: "", rating: 2, date: "June 2020", letterboxd: "https://boxd.it/9CWO", wikipedia: "" },
  { cover: "", title: "Steve Jobs", director: "", rating: 2, date: "January 2025", letterboxd: "https://boxd.it/araG", wikipedia: "" },
  { cover: "", title: "Tarzan", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/18YO", wikipedia: "" },
  { cover: "", title: "The Aristocats", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/1X3Y", wikipedia: "" },
  { cover: "", title: "The Birds", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/2a6m", wikipedia: "" },
  { cover: "", title: "The Great Hack", director: "", rating: 2, date: "June 2020", letterboxd: "https://boxd.it/kL8g", wikipedia: "" },
  { cover: "", title: "The Hitchhiker's Guide to the Galaxy", director: "", rating: 2, date: "June 2020", letterboxd: "https://boxd.it/20VE", wikipedia: "" },
  { cover: "", title: "The Imitation Game", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/6aig", wikipedia: "" },
  { cover: "", title: "The Incredibles", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/1XLm", wikipedia: "" },
  { cover: "", title: "The Lion King", director: "", rating: 2, date: "January 2022", letterboxd: "https://boxd.it/201Q", wikipedia: "" },
  { cover: "", title: "The Princess Diaries 2: Royal Engagement", director: "", rating: 2, date: "January 2022", letterboxd: "https://boxd.it/1UyY", wikipedia: "" },
  { cover: "", title: "The Sandlot", director: "", rating: 2, date: "January 2022", letterboxd: "https://boxd.it/1TDy", wikipedia: "" },
  { cover: "", title: "The Santa Clause", director: "", rating: 2, date: "January 2022", letterboxd: "https://boxd.it/1TWK", wikipedia: "" },
  { cover: "", title: "The Shaggy Dog", director: "", rating: 2, date: "March 2022", letterboxd: "https://boxd.it/1XaK", wikipedia: "" },
  { cover: "", title: "The Social Dilemma", director: "", rating: 2, date: "January 2021", letterboxd: "https://boxd.it/opQI", wikipedia: "" },
  { cover: "", title: "The Spectacular Now", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/4VSG", wikipedia: "" },
  { cover: "", title: "The Sword in the Stone", director: "", rating: 2, date: "January 2022", letterboxd: "https://boxd.it/1ZdG", wikipedia: "" },
  { cover: "", title: "The To Do List", director: "", rating: 2, date: "May 2020", letterboxd: "https://boxd.it/4dAo", wikipedia: "" },
  { cover: "", title: "The War with Grandpa", director: "", rating: 2, date: "October 2020", letterboxd: "https://boxd.it/f2jy", wikipedia: "" },
  { cover: "", title: "The Woman in Black", director: "", rating: 2, date: "2012", letterboxd: "https://boxd.it/4wu", wikipedia: "" },
  { cover: "", title: "Uncut Gems", director: "", rating: 2, date: "May 2022", letterboxd: "https://boxd.it/gXGc", wikipedia: "" },
  { cover: "", title: "Zenon: Girl of the 21st Century", director: "", rating: 2, date: "~2005", letterboxd: "https://boxd.it/1djc", wikipedia: "" },
  { cover: "", title: "101 Dalmatians", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/1TgO", wikipedia: "" },
  { cover: "", title: "A Bad Moms Christmas", director: "", rating: 1.5, date: "November 2022", letterboxd: "https://boxd.it/fiHG", wikipedia: "" },
  { cover: "", title: "A Christmas Story", director: "", rating: 1.5, date: "January 2025", letterboxd: "https://boxd.it/29sw", wikipedia: "" },
  { cover: "", title: "Alice in Wonderland", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/1Spq", wikipedia: "" },
  { cover: "", title: "Another Cinderella Story", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/1MHS", wikipedia: "" },
  { cover: "", title: "Bambi", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/25AQ", wikipedia: "" },
  { cover: "", title: "Barbie", director: "", rating: 1.5, date: "July 2023", letterboxd: "https://boxd.it/bCLK", wikipedia: "" },
  { cover: "", title: "Bee Movie", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/22Vw", wikipedia: "" },
  { cover: "", title: "Bombshell", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/j5YC", wikipedia: "" },
  { cover: "", title: "Brave", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/bVG", wikipedia: "" },
  { cover: "", title: "Bring It On Again", director: "", rating: 1.5, date: "June 2020", letterboxd: "https://boxd.it/1RKW", wikipedia: "" },
  { cover: "", title: "Bring It On: All or Nothing", director: "", rating: 1.5, date: "June 2020", letterboxd: "https://boxd.it/1Umo", wikipedia: "" },
  { cover: "", title: "Bring It On: In It to Win It", director: "", rating: 1.5, date: "June 2020", letterboxd: "https://boxd.it/1My2", wikipedia: "" },
  { cover: "", title: "Charlie and the Chocolate Factory", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/2b68", wikipedia: "" },
  { cover: "", title: "Chicken Little", director: "", rating: 1.5, date: "June 2020", letterboxd: "https://boxd.it/1Xnu", wikipedia: "" },
  { cover: "", title: "Cow Belles", director: "", rating: 1.5, date: "June 2020", letterboxd: "https://boxd.it/1wXq", wikipedia: "" },
  { cover: "", title: "Definitely, Maybe", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/20eU", wikipedia: "" },
  { cover: "", title: "Doctor Strange", director: "", rating: 1.5, date: "June 2020", letterboxd: "https://boxd.it/8MH8", wikipedia: "" },
  { cover: "", title: "Dumbo", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/1U2o", wikipedia: "" },
  { cover: "", title: "Elvis", director: "", rating: 1.5, date: "February 2023", letterboxd: "https://boxd.it/mK4w", wikipedia: "" },
  { cover: "", title: "Freaky Friday", director: "", rating: 1.5, date: "June 2020", letterboxd: "https://boxd.it/ihtu", wikipedia: "" },
  { cover: "", title: "Glass Onion", director: "", rating: 1.5, date: "December 2022", letterboxd: "https://boxd.it/oCkK", wikipedia: "" },
  { cover: "", title: "I'm Not There", director: "", rating: 1.5, date: "January 2025", letterboxd: "https://boxd.it/24Ys", wikipedia: "" },
  { cover: "", title: "Ice Age", director: "", rating: 1.5, date: "June 2020", letterboxd: "https://boxd.it/2apS", wikipedia: "" },
  { cover: "", title: "John Tucker Must Die", director: "", rating: 1.5, date: "September 2022", letterboxd: "https://boxd.it/1Z2S", wikipedia: "" },
  { cover: "", title: "Just My Luck", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/1XgS", wikipedia: "" },
  { cover: "", title: "Lady Bird", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/dGNE", wikipedia: "" },
  { cover: "", title: "Lemonade Mouth", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/4bG", wikipedia: "" },
  { cover: "", title: "Minions: The Rise of Gru", director: "", rating: 1.5, date: "July 2022", letterboxd: "https://boxd.it/fz9w", wikipedia: "" },
  { cover: "", title: "Pixel Perfect", director: "", rating: 1.5, date: "June 2020", letterboxd: "https://boxd.it/45sm", wikipedia: "" },
  { cover: "", title: "Ratatouille", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/27ww", wikipedia: "" },
  { cover: "", title: "Step Brothers", director: "", rating: 1.5, date: "January 2022", letterboxd: "https://boxd.it/1SsE", wikipedia: "" },
  { cover: "", title: "Switching Goals", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/1aZ0", wikipedia: "" },
  { cover: "", title: "The Big Sick", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/eHvy", wikipedia: "" },
  { cover: "", title: "The Hangover", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/1GjK", wikipedia: "" },
  { cover: "", title: "The Holiday", director: "", rating: 1.5, date: "November 2023", letterboxd: "https://boxd.it/28ye", wikipedia: "" },
  { cover: "", title: "The Hunchback of Notre Dame", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/1VZQ", wikipedia: "" },
  { cover: "", title: "The Lego Movie", director: "", rating: 1.5, date: "June 2020", letterboxd: "https://boxd.it/4pDO", wikipedia: "" },
  { cover: "", title: "The Mask", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/29rS", wikipedia: "" },
  { cover: "", title: "The Sisterhood of the Traveling Pants", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/1XPo", wikipedia: "" },
  { cover: "", title: "The Unbearable Weight of Massive Talent", director: "", rating: 1.5, date: "February 2023", letterboxd: "https://boxd.it/o6eK", wikipedia: "" },
  { cover: "", title: "Uptown Girls", director: "", rating: 1.5, date: "May 2024", letterboxd: "https://boxd.it/1N64", wikipedia: "" },
  { cover: "", title: "We're the Millers", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/4srQ", wikipedia: "" },
  { cover: "", title: "Wreck-It Ralph", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/2TTS", wikipedia: "" },
  { cover: "", title: "22 Jump Street", director: "", rating: 1, date: "May 2020", letterboxd: "https://boxd.it/5Fvy", wikipedia: "" },
  { cover: "", title: "A Bug's Life", director: "", rating: 1, date: "May 2020", letterboxd: "https://boxd.it/1Yyy", wikipedia: "" },
  { cover: "", title: "All Dogs Go to Heaven", director: "", rating: 1, date: "June 2020", letterboxd: "https://boxd.it/1TIo", wikipedia: "" },
  { cover: "", title: "Avatar", director: "", rating: 1, date: "May 2020", letterboxd: "https://boxd.it/1Efm", wikipedia: "" },
  { cover: "", title: "Beauty and the Beast", director: "", rating: 1, date: "January 2022", letterboxd: "https://boxd.it/1XhG", wikipedia: "" },
  { cover: "", title: "Frozen", director: "", rating: 1, date: "May 2020", letterboxd: "https://boxd.it/3GNa", wikipedia: "" },
  { cover: "", title: "Hairspray", director: "", rating: 1, date: "May 2020", letterboxd: "https://boxd.it/261M", wikipedia: "" },
  { cover: "", title: "Halloween 4: The Return of Michael Myers", director: "", rating: 1, date: "December 2021", letterboxd: "https://boxd.it/1U2S", wikipedia: "" },
  { cover: "", title: "Hannah Montana: The Movie", director: "", rating: 1, date: "May 2020", letterboxd: "https://boxd.it/1Hx4", wikipedia: "" },
  { cover: "", title: "Harry Potter and the Chamber of Secrets", director: "", rating: 1, date: "January 2022", letterboxd: "https://boxd.it/29QI", wikipedia: "" },
  { cover: "", title: "Lady and the Tramp", director: "", rating: 1, date: "January 2022", letterboxd: "https://boxd.it/1Wv8", wikipedia: "" },
  { cover: "", title: "Lemony Snicket's A Series of Unfortunate Events", director: "", rating: 1, date: "May 2020", letterboxd: "https://boxd.it/1T7s", wikipedia: "" },
  { cover: "", title: "Lilo & Stitch", director: "", rating: 1, date: "May 2020", letterboxd: "https://boxd.it/1TAY", wikipedia: "" },
  { cover: "", title: "LOL", director: "", rating: 1, date: "May 2020", letterboxd: "https://boxd.it/2Nas", wikipedia: "" },
  { cover: "", title: "March of the Penguins", director: "", rating: 1, date: "June 2020", letterboxd: "https://boxd.it/28lE", wikipedia: "" },
  { cover: "", title: "Marley & Me", director: "", rating: 1, date: "January 2022", letterboxd: "https://boxd.it/1Ola", wikipedia: "" },
  { cover: "", title: "Miss Americana", director: "", rating: 1, date: "June 2020", letterboxd: "https://boxd.it/oifq", wikipedia: "" },
  { cover: "", title: "Monsters, Inc.", director: "", rating: 1, date: "May 2020", letterboxd: "https://boxd.it/2a46", wikipedia: "" },
  { cover: "", title: "Pinocchio", director: "", rating: 1, date: "June 2020", letterboxd: "https://boxd.it/1V8C", wikipedia: "" },
  { cover: "", title: "Project X", director: "", rating: 1, date: "January 2022", letterboxd: "https://boxd.it/neO", wikipedia: "" },
  { cover: "", title: "Rango", director: "", rating: 1, date: "June 2020", letterboxd: "https://boxd.it/QPk", wikipedia: "" },
  { cover: "", title: "Robots", director: "", rating: 1, date: "May 2020", letterboxd: "https://boxd.it/1Xve", wikipedia: "" },
  { cover: "", title: "RV", director: "", rating: 1, date: "June 2020", letterboxd: "https://boxd.it/1YrW", wikipedia: "" },
  { cover: "", title: "Sleeping Beauty", director: "", rating: 1, date: "January 2022", letterboxd: "https://boxd.it/1V9A", wikipedia: "" },
  { cover: "", title: "Snow White and the Seven Dwarfs", director: "", rating: 1, date: "June 2020", letterboxd: "https://boxd.it/2arO", wikipedia: "" },
  { cover: "", title: "Super Size Me", director: "", rating: 1, date: "June 2020", letterboxd: "https://boxd.it/1YQC", wikipedia: "" },
  { cover: "", title: "The Cabin in the Woods", director: "", rating: 1, date: "May 2020", letterboxd: "https://boxd.it/1zOc", wikipedia: "" },
  { cover: "", title: "The Fault in Our Stars", director: "", rating: 1, date: "May 2020", letterboxd: "https://boxd.it/6BQa", wikipedia: "" },
  { cover: "", title: "The Great Gatsby", director: "", rating: 1, date: "July 2020", letterboxd: "https://boxd.it/JY", wikipedia: "" },
  { cover: "", title: "The Last Song", director: "", rating: 1, date: "May 2020", letterboxd: "https://boxd.it/1c5I", wikipedia: "" },
  { cover: "", title: "The Perks of Being a Wallflower", director: "", rating: 1, date: "May 2020", letterboxd: "https://boxd.it/2ZA8", wikipedia: "" },
  { cover: "", title: "Trainwreck", director: "", rating: 1, date: "June 2020", letterboxd: "https://boxd.it/8bdA", wikipedia: "" },
  { cover: "", title: "World War Z", director: "", rating: 1, date: "May 2020", letterboxd: "https://boxd.it/2p2E", wikipedia: "" },
  { cover: "", title: "21 Jump Street", director: "", rating: 0.5, date: "May 2020", letterboxd: "https://boxd.it/J0", wikipedia: "" },
  { cover: "", title: "American Sniper", director: "", rating: 0.5, date: "May 2020", letterboxd: "https://boxd.it/5LDy", wikipedia: "" },
  { cover: "", title: "Anacondas: The Hunt for the Blood Orchid", director: "", rating: 0.5, date: "June 2020", letterboxd: "https://boxd.it/1Uic", wikipedia: "" },
  { cover: "", title: "Bolt", director: "", rating: 0.5, date: "June 2020", letterboxd: "https://boxd.it/1QXg", wikipedia: "" },
  { cover: "", title: "Bridesmaids", director: "", rating: 0.5, date: "May 2020", letterboxd: "https://boxd.it/rac", wikipedia: "" },
  { cover: "", title: "Cars", director: "", rating: 0.5, date: "May 2020", letterboxd: "https://boxd.it/29ho", wikipedia: "" },
  { cover: "", title: "Cloud 9", director: "", rating: 0.5, date: "June 2020", letterboxd: "https://boxd.it/7cZ4", wikipedia: "" },
  { cover: "", title: "Deadpool", director: "", rating: 0.5, date: "January 2022", letterboxd: "https://boxd.it/9fOC", wikipedia: "" },
  { cover: "", title: "Despicable Me", director: "", rating: 0.5, date: "May 2020", letterboxd: "https://boxd.it/1DD8", wikipedia: "" },
  { cover: "", title: "For the Birds", director: "", rating: 0.5, date: "June 2020", letterboxd: "https://boxd.it/1P6K", wikipedia: "" },
  { cover: "", title: "Horrible Bosses", director: "", rating: 0.5, date: "May 2020", letterboxd: "https://boxd.it/Ba2", wikipedia: "" },
  { cover: "", title: "Just Go with It", director: "", rating: 0.5, date: "May 2020", letterboxd: "https://boxd.it/Doq", wikipedia: "" },
  { cover: "", title: "Materialists", director: "", rating: 0.5, date: "August 2025", letterboxd: "https://boxd.it/GZlW", wikipedia: "" },
  { cover: "", title: "Mean Girls 2", director: "", rating: 0.5, date: "May 2020", letterboxd: "https://boxd.it/Bje", wikipedia: "" },
  { cover: "", title: "Megamind", director: "", rating: 0.5, date: "June 2020", letterboxd: "https://boxd.it/16Sk", wikipedia: "" },
  { cover: "", title: "Over the Hedge", director: "", rating: 1.5, date: "June 2020", letterboxd: "https://boxd.it/20QY", wikipedia: "" },
  { cover: "", title: "Paper Towns", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/8T5g", wikipedia: "" },
  { cover: "", title: "Sky High", director: "", rating: 1, date: "January 2022", letterboxd: "https://boxd.it/1TNI", wikipedia: "" },
  { cover: "", title: "Spring Breakers", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/421s", wikipedia: "" },
  { cover: "", title: "The Hunger Games", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/2uds", wikipedia: "" },
  { cover: "", title: "The Last Exorcism", director: "", rating: 0.5, date: "May 2020", letterboxd: "https://boxd.it/16ai", wikipedia: "" },
  { cover: "", title: "The Vow", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/2o4Y", wikipedia: "" },
  { cover: "", title: "Twilight", director: "", rating: 2.5, date: "September 2022", letterboxd: "https://boxd.it/1Zui", wikipedia: "" },
  { cover: "", title: "Valentine's Day", director: "", rating: 1.5, date: "May 2020", letterboxd: "https://boxd.it/1gui", wikipedia: "" },
  { cover: "", title: "We Are Your Friends", director: "", rating: 0.5, date: "May 2020", letterboxd: "https://boxd.it/9AlG", wikipedia: "" }
];
