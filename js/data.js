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
    year: 2014,
    apple: "",
    spotify: "",
    wikipedia: ""
  },
  {
    cover: "images/albums/arcticmonkey-whatever-people-say-i-am.jpeg",
    title: "Whatever People Say I Am, That's What I'm Not",
    artist: "Arctic Monkeys",
    rating: 4.5,
    year: 2006,
    apple: "",
    spotify: "",
    wikipedia: ""
  },
  {
    cover: "images/albums/Alanis_Morissette_Jagged_Little_Pill.jpg",
    title: "Jagged Little Pill",
    artist: "Alanis Morissette",
    rating: 4.5,
    year: 1995,
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
    year: 2026,
    goodreads: "",
    wikipedia: "",
    date: "January 2026"
  },
  {
    cover: "images/books/alphabeticaldiaries-sheila.jpg",
    title: "Alphabetical Diaries",
    author: "Sheila Heti",
    rating: 4,
    year: 2024,
    goodreads: "",
    wikipedia: "",
    date: "March 2026"
  },
    {
    cover: "images/books/goodmaterial-dolly.jpg",
    title: "Good Material",
    author: "Dolly Alderton",
    rating: 3,
    year: 2023,
    goodreads: "",
    wikipedia: "",
    date: "February 2026"
  },
  {
    cover: "images/books/artislife-jerry.jpg",
    title: "Art Is Life",
    author: "Jerry Saltz",
    rating: 4,
    year: 2022,
    goodreads: "",
    wikipedia: "",
    date: "April 2026"
  },
    {
    cover: "images/books/lifeform-jenny.jpg",
    title: "Life Form",
    author: "Jenny Slate",
    rating: 3.5,
    year: 2024,
    goodreads: "",
    wikipedia: "",
    date: "March 2026"
  },
    {
    cover: "images/books/perfection-vincenzo.jpg",
    title: "Perfection",
    author: "Vincenzo Latronico",
    rating: 4,
    year: 2022,
    goodreads: "",
    wikipedia: "",
    date: "July 2026"
  },
  {
    cover: "images/books/myyearofrest-ottessa.jpg",
    title: "My Year Of Rest And Relaxation",
    author: "Ottessa Moshfegh",
    rating: 4,
    year: 2018,
    goodreads: "",
    wikipedia: "",
    date: "March 2026"
  },
  {
    cover: "images/books/famesick-lena.jpg",
    title: "Famesick",
    author: "Lena Dunham",
    rating: 4.5,
    year: 2026,
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
  { cover: "", title: "Aftersun", director: "Charlotte Wells", rating: 5, year: 2022, date: "January 2023", letterboxd: "https://boxd.it/Arw0", wikipedia: "" },
  { cover: "", title: "Bo Burnham: Inside", director: "Bo Burnham", rating: 5, year: 2021, date: "May 2021", letterboxd: "https://boxd.it/v2uy", wikipedia: "" },
  { cover: "", title: "Boyhood", director: "Richard Linklater", rating: 5, year: 2014, date: "April 2022", letterboxd: "https://boxd.it/3178", wikipedia: "" },
  { cover: "", title: "C'mon C'mon", director: "Mike Mills", rating: 5, year: 2021, date: "January 2022", letterboxd: "https://boxd.it/nrI0", wikipedia: "" },
  { cover: "", title: "Fantastic Mr. Fox", director: "Wes Anderson", rating: 5, year: 2009, date: "~2010", letterboxd: "https://boxd.it/1WyQ", wikipedia: "" },
  { cover: "", title: "Free Solo", director: "Jimmy Chin & Elizabeth Chai Vasarhelyi", rating: 5, year: 2018, date: "May 2020", letterboxd: "https://boxd.it/iEEq", wikipedia: "" },
  { cover: "", title: "Licorice Pizza", director: "Paul Thomas Anderson", rating: 5, year: 2021, date: "February 2022", letterboxd: "https://boxd.it/qTKY", wikipedia: "" },
  { cover: "", title: "Meet the Robinsons", director: "Stephen J. Anderson", rating: 5, year: 2007, date: "~2010", letterboxd: "https://boxd.it/28Ym", wikipedia: "" },
  { cover: "", title: "mid90s", director: "Jonah Hill", rating: 5, year: 2018, date: "November 2018", letterboxd: "https://boxd.it/fxIa", wikipedia: "" },
  { cover: "", title: "Singin' in the Rain", director: "Gene Kelly & Stanley Donen", rating: 5, year: 1952, date: "May 2020", letterboxd: "https://boxd.it/29oY", wikipedia: "" },
  { cover: "", title: "Sound of Metal", director: "Darius Marder", rating: 5, year: 2019, date: "January 2021", letterboxd: "https://boxd.it/i7Q4", wikipedia: "" },
  { cover: "", title: "Submarine", director: "Richard Ayoade", rating: 5, year: 2010, date: "~2010", letterboxd: "https://boxd.it/H4a", wikipedia: "" },
  { cover: "", title: "Trainspotting", director: "Danny Boyle", rating: 5, year: 1996, date: "~2010", letterboxd: "https://boxd.it/29XY", wikipedia: "" },
  { cover: "", title: "Whiplash", director: "Damien Chazelle", rating: 5, year: 2014, date: "~2014", letterboxd: "https://boxd.it/7bQA", wikipedia: "" },
  { cover: "", title: "(500) Days of Summer", director: "Marc Webb", rating: 4.5, year: 2009, date: "~2011", letterboxd: "https://boxd.it/1EmM", wikipedia: "" },
  { cover: "", title: "10 Things I Hate About You", director: "Gil Junger", rating: 4.5, year: 1999, date: "April 2024", letterboxd: "https://boxd.it/23AO", wikipedia: "" },
  { cover: "", title: "A Cinderella Story", director: "Mark Rosman", rating: 4.5, year: 2004, date: "~2004", letterboxd: "https://boxd.it/1UgU", wikipedia: "" },
  { cover: "", title: "A Complete Unknown", director: "James Mangold", rating: 4.5, year: 2024, date: "January 2025", letterboxd: "https://boxd.it/oBYa", wikipedia: "" },
  { cover: "", title: "Amanda Knox", director: "Rod Blackhurst & Brian McGinn", rating: 4.5, year: 2016, date: "~2017", letterboxd: "https://boxd.it/etNS", wikipedia: "" },
  { cover: "", title: "Asteroid City", director: "Wes Anderson", rating: 4.5, year: 2023, date: "July 2023", letterboxd: "https://boxd.it/s3ds", wikipedia: "" },
  { cover: "", title: "August Rush", director: "Kirsten Sheridan", rating: 4.5, year: 2007, date: "~2008", letterboxd: "https://boxd.it/23kQ", wikipedia: "" },
  { cover: "", title: "Bad at This", director: "Jessie Posthumus", rating: 4.5, year: 2022, date: "July 2022", letterboxd: "https://boxd.it/A7jK", wikipedia: "" },
  { cover: "", title: "Before Sunset", director: "Richard Linklater", rating: 4.5, year: 2004, date: "May 2020", letterboxd: "https://boxd.it/2bcg", wikipedia: "" },
  { cover: "", title: "Being Elmo: A Puppeteer's Journey", director: "Constance Marks", rating: 3.5, year: 2011, date: "June 2020", letterboxd: "https://boxd.it/2xH6", wikipedia: "" },
  { cover: "", title: "Bo Burnham: What.", director: "Bo Burnham", rating: 4.5, year: 2013, date: "~2014", letterboxd: "https://boxd.it/7au4", wikipedia: "" },
  { cover: "", title: "Booksmart", director: "Olivia Wilde", rating: 4.5, year: 2019, date: "~2019", letterboxd: "https://boxd.it/igNS", wikipedia: "" },
  { cover: "", title: "Dead Poets Society", director: "Peter Weir", rating: 4.5, year: 1989, date: "~2018", letterboxd: "https://boxd.it/2aSg", wikipedia: "" },
  { cover: "", title: "Dirty Dancing", director: "Emile Ardolino", rating: 4.5, year: 1987, date: "June 2022", letterboxd: "https://boxd.it/2baY", wikipedia: "" },
  { cover: "", title: "Edith+Eddie", director: "Laura Checkoway", rating: 4.5, year: 2017, date: "June 2020", letterboxd: "https://boxd.it/fNpo", wikipedia: "" },
  { cover: "", title: "Eighth Grade", director: "Bo Burnham", rating: 4.5, year: 2018, date: "~2019", letterboxd: "https://boxd.it/hDMG", wikipedia: "" },
  { cover: "", title: "Eternal Sunshine of the Spotless Mind", director: "Michel Gondry", rating: 4.5, year: 2004, date: "~2012", letterboxd: "https://boxd.it/6YK", wikipedia: "" },
  { cover: "", title: "Fight Club", director: "David Fincher", rating: 4.5, year: 1999, date: "~2010", letterboxd: "https://boxd.it/2a9q", wikipedia: "" },
  { cover: "", title: "Forrest Gump", director: "Robert Zemeckis", rating: 4.5, year: 1994, date: "~2005", letterboxd: "https://boxd.it/728", wikipedia: "" },
  { cover: "", title: "Frances Ha", director: "Noah Baumbach", rating: 4.5, year: 2012, date: "~2017", letterboxd: "https://boxd.it/41Xg", wikipedia: "" },
  { cover: "", title: "Good Will Hunting", director: "Gus Van Sant", rating: 4.5, year: 1997, date: "~2019", letterboxd: "https://boxd.it/2ahY", wikipedia: "" },
  { cover: "", title: "Harry Styles: Behind the Album", director: "Paul Dugdale", rating: 2.5, year: 2017, date: "June 2020", letterboxd: "https://boxd.it/gjfg", wikipedia: "" },
  { cover: "", title: "How to Lose a Guy in 10 Days", director: "Donald Petrie", rating: 4.5, year: 2003, date: "~2012", letterboxd: "https://boxd.it/1XwG", wikipedia: "" },
  { cover: "", title: "Into the Wild", director: "Sean Penn", rating: 4.5, year: 2007, date: "June 2020", letterboxd: "https://boxd.it/22m2", wikipedia: "" },
  { cover: "", title: "Isle of Dogs", director: "Wes Anderson", rating: 4.5, year: 2018, date: "March 2018", letterboxd: "https://boxd.it/dZrW", wikipedia: "" },
  { cover: "", title: "Jojo Rabbit", director: "Taika Waititi", rating: 4.5, year: 2019, date: "December 2019", letterboxd: "https://boxd.it/iEBG", wikipedia: "" },
  { cover: "", title: "Kill Bill: Vol. 1", director: "Quentin Tarantino", rating: 4.5, year: 2003, date: "~2010", letterboxd: "https://boxd.it/70w", wikipedia: "" },
  { cover: "", title: "Kill Bill: Vol. 2", director: "Quentin Tarantino", rating: 4.5, year: 2004, date: "~2010", letterboxd: "https://boxd.it/2au4", wikipedia: "" },
  { cover: "", title: "Knock Down the House", director: "Rachel Lears", rating: 3.5, year: 2019, date: "January 2019", letterboxd: "https://boxd.it/kIss", wikipedia: "" },
  { cover: "", title: "Koyaanisqatsi", director: "Godfrey Reggio", rating: 4, year: 1982, date: "June 2019", letterboxd: "https://boxd.it/1U9E", wikipedia: "" },
  { cover: "", title: "Lion", director: "Garth Davis", rating: 3.5, year: 2016, date: "~2017", letterboxd: "https://boxd.it/b2La", wikipedia: "" },
  { cover: "", title: "Little Miss Sunshine", director: "Jonathan Dayton & Valerie Faris", rating: 4.5, year: 2006, date: "~2011", letterboxd: "https://boxd.it/29EW", wikipedia: "" },
  { cover: "", title: "Mean Girls", director: "Mark Waters", rating: 4.5, year: 2004, date: "~2010", letterboxd: "https://boxd.it/1VNg", wikipedia: "" },
  { cover: "", title: "Moonrise Kingdom", director: "Wes Anderson", rating: 4.5, year: 2012, date: "July 2012", letterboxd: "https://boxd.it/2Wng", wikipedia: "" },
  { cover: "", title: "Nathan for You: Finding Frances", director: "Nathan Fielder", rating: 4.5, year: 2017, date: "May 2020", letterboxd: "https://boxd.it/hufy", wikipedia: "" },
  { cover: "", title: "Paddington 2", director: "Paul King", rating: 4, year: 2017, date: "March 2023", letterboxd: "https://boxd.it/bCF8", wikipedia: "" },
  { cover: "", title: "Punch-Drunk Love", director: "Paul Thomas Anderson", rating: 4.5, year: 2002, date: "March 2021", letterboxd: "https://boxd.it/20E4", wikipedia: "" },
  { cover: "", title: "Scott Pilgrim vs. the World", director: "Edgar Wright", rating: 4.5, year: 2010, date: "2010", letterboxd: "https://boxd.it/1Aq6", wikipedia: "" },
  { cover: "", title: "Slumdog Millionaire", director: "Danny Boyle", rating: 4, year: 2008, date: "~2012", letterboxd: "https://boxd.it/1S3E", wikipedia: "" },
  { cover: "", title: "Stand by Me", director: "Rob Reiner", rating: 3, year: 1986, date: "January 2022", letterboxd: "https://boxd.it/2aOe", wikipedia: "" },
  { cover: "", title: "Terminally in Love", director: "Emily Jenkins & Justin Black", rating: 4, year: 2018, date: "2018", letterboxd: "https://boxd.it/nf9i", wikipedia: "" },
  { cover: "", title: "The Boy in the Striped Pyjamas", director: "Mark Herman", rating: 3.5, year: 2008, date: "~2011", letterboxd: "https://boxd.it/1NOK", wikipedia: "" },
  { cover: "", title: "The Darjeeling Limited", director: "Wes Anderson", rating: 4, year: 2007, date: "May 2022", letterboxd: "https://boxd.it/24as", wikipedia: "" },
  { cover: "", title: "The Dawn Wall", director: "Josh Lowell & Peter Mortimer", rating: 4.5, year: 2018, date: "May 2020", letterboxd: "https://boxd.it/hCP0", wikipedia: "" },
  { cover: "", title: "The Fox and the Hound", director: "Ted Berman & Richard Rich", rating: 4, year: 1981, date: "~2003", letterboxd: "https://boxd.it/1V0o", wikipedia: "" },
  { cover: "", title: "The French Dispatch", director: "Wes Anderson", rating: 4.5, year: 2021, date: "May 2022", letterboxd: "https://boxd.it/jLP8", wikipedia: "" },
  { cover: "", title: "The Invite", director: "Olivia Wilde", rating: 4.5, year: 2026, date: "July 2026", letterboxd: "https://letterboxd.com/film/the-invite-2026/", wikipedia: "" },
  { cover: "", title: "The Worst Person in the World", director: "Joachim Trier", rating: 4.5, year: 2021, date: "April 2022", letterboxd: "https://boxd.it/oyws", wikipedia: "" },
  { cover: "", title: "There's Something About Mary", director: "Bobby & Peter Farrelly", rating: 3, year: 1998, date: "April 2023", letterboxd: "https://boxd.it/2aae", wikipedia: "" },
  { cover: "", title: "Up", director: "Pete Docter", rating: 4.5, year: 2009, date: "June 2009", letterboxd: "https://boxd.it/1OEc", wikipedia: "" },
  { cover: "", title: "Women Talking", director: "Sarah Polley", rating: 4.5, year: 2022, date: "January 2023", letterboxd: "https://boxd.it/tdq4", wikipedia: "" },
  { cover: "", title: "Won't You Be My Neighbor?", director: "Morgan Neville", rating: 3, year: 2018, date: "May 2020", letterboxd: "https://boxd.it/hDPU", wikipedia: "" },
  { cover: "", title: "1917", director: "Sam Mendes", rating: 4.5, year: 2019, date: "May 2020", letterboxd: "https://boxd.it/jj4y", wikipedia: "" },
  { cover: "", title: "27 Dresses", director: "Anne Fletcher", rating: 5, year: 2008, date: "January 2008", letterboxd: "https://boxd.it/21x4", wikipedia: "" },
  { cover: "", title: "A Beautiful Day in the Neighborhood", director: "Marielle Heller", rating: 3, year: 2019, date: "May 2020", letterboxd: "https://boxd.it/i7vA", wikipedia: "" },
  { cover: "", title: "Baraka", director: "Ron Fricke", rating: 4, year: 1992, date: "2019", letterboxd: "https://boxd.it/1OWA", wikipedia: "" },
  { cover: "", title: "Beautiful Boy", director: "Felix van Groeningen", rating: 3, year: 2018, date: "May 2022", letterboxd: "https://boxd.it/g76Q", wikipedia: "" },
  { cover: "", title: "Being John Malkovich", director: "Spike Jonze", rating: 4, year: 1999, date: "January 2023", letterboxd: "https://boxd.it/2ahu", wikipedia: "" },
  { cover: "", title: "Big Daddy", director: "Dennis Dugan", rating: 4, year: 1999, date: "~2004", letterboxd: "https://boxd.it/1ZkW", wikipedia: "" },
  { cover: "", title: "Big Night", director: "Campbell Scott & Stanley Tucci", rating: 4, year: 1996, date: "August 2023", letterboxd: "https://boxd.it/1HnI", wikipedia: "" },
  { cover: "", title: "Black Swan", director: "Darren Aronofsky", rating: 4, year: 2010, date: "January 2011", letterboxd: "https://boxd.it/Sw0", wikipedia: "" },
  { cover: "", title: "Bo Burnham: Make Happy", director: "Bo Burnham", rating: 4, year: 2016, date: "June 2016", letterboxd: "https://boxd.it/e436", wikipedia: "" },
  { cover: "", title: "Clueless", director: "Amy Heckerling", rating: 4, year: 1995, date: "August 2024", letterboxd: "https://boxd.it/1Ygk", wikipedia: "" },
  { cover: "", title: "Coco", director: "Lee Unkrich", rating: 3.5, year: 2017, date: "~2018", letterboxd: "https://boxd.it/bYJQ", wikipedia: "" },
  { cover: "", title: "Coraline", director: "Henry Selick", rating: 4, year: 2009, date: "March 2009", letterboxd: "https://boxd.it/1NhQ", wikipedia: "" },
  { cover: "", title: "Donnie Darko", director: "Richard Kelly", rating: 4, year: 2001, date: "~2011", letterboxd: "https://boxd.it/2b2A", wikipedia: "" },
  { cover: "", title: "Edward Scissorhands", director: "Tim Burton", rating: 4, year: 1990, date: "~2012", letterboxd: "https://boxd.it/2aZc", wikipedia: "" },
  { cover: "", title: "Elf", director: "Jon Favreau", rating: 4, year: 2003, date: "~2003", letterboxd: "https://boxd.it/1VyK", wikipedia: "" },
  { cover: "", title: "Everything Everywhere All at Once", director: "Daniel Kwan & Daniel Scheinert", rating: 4, year: 2022, date: "April 2022", letterboxd: "https://boxd.it/jUk4", wikipedia: "" },
  { cover: "", title: "Forgetting Sarah Marshall", director: "Nicholas Stoller", rating: 4, year: 2008, date: "January 2023", letterboxd: "https://boxd.it/1XEq", wikipedia: "" },
  { cover: "", title: "Get Me Roger Stone", director: "Dylan Bank, Daniel DiMauro & Morgan Pehme", rating: 4, year: 2017, date: "June 2020", letterboxd: "https://boxd.it/fYtc", wikipedia: "" },
  { cover: "", title: "Halloweentown", director: "Duwayne Dunham", rating: 4, year: 1998, date: "~2004", letterboxd: "https://boxd.it/1qPq", wikipedia: "" },
  { cover: "", title: "Happy Gilmore", director: "Dennis Dugan", rating: 4, year: 1996, date: "~2005", letterboxd: "https://boxd.it/1Yey", wikipedia: "" },
  { cover: "", title: "Heaven Is a Traffic Jam on the 405", director: "Frank Stiefel", rating: 4, year: 2016, date: "June 2020", letterboxd: "https://boxd.it/gYkG", wikipedia: "" },
  { cover: "", title: "Hot Flash", director: "Thea Hollatz", rating: 4, year: 2019, date: "July 2020", letterboxd: "https://boxd.it/mVby", wikipedia: "" },
  { cover: "", title: "I ♥ Huckabees", director: "David O. Russell", rating: 4, year: 2004, date: "February 2023", letterboxd: "https://boxd.it/28vk", wikipedia: "" },
  { cover: "", title: "Inglourious Basterds", director: "Quentin Tarantino", rating: 4, year: 2009, date: "~2011", letterboxd: "https://boxd.it/1JzG", wikipedia: "" },
  { cover: "", title: "It's Kind of a Funny Story", director: "Anna Boden & Ryan Fleck", rating: 4, year: 2010, date: "October 2010", letterboxd: "https://boxd.it/Tfa", wikipedia: "" },
  { cover: "", title: "Juno", director: "Jason Reitman", rating: 4, year: 2007, date: "January 2008", letterboxd: "https://boxd.it/210a", wikipedia: "" },
  { cover: "", title: "Klaus", director: "Sergio Pablos", rating: 4, year: 2019, date: "December 2022", letterboxd: "https://boxd.it/ipoi", wikipedia: "" },
  { cover: "", title: "La La Land", director: "Damien Chazelle", rating: 4, year: 2016, date: "December 2016", letterboxd: "https://boxd.it/a5fa", wikipedia: "" },
  { cover: "", title: "Lost in Translation", director: "Sofia Coppola", rating: 4, year: 2003, date: "December 2021", letterboxd: "https://boxd.it/2b0E", wikipedia: "" },
  { cover: "", title: "Magic Mike's Last Dance", director: "Steven Soderbergh", rating: 4, year: 2023, date: "March 2023", letterboxd: "https://boxd.it/y9g0", wikipedia: "" },
  { cover: "", title: "Marriage Story", director: "Noah Baumbach", rating: 3, year: 2019, date: "May 2020", letterboxd: "https://boxd.it/hJAw", wikipedia: "" },
  { cover: "", title: "Me and Earl and the Dying Girl", director: "Alfonso Gomez-Rejon", rating: 4, year: 2015, date: "May 2020", letterboxd: "https://boxd.it/9SAE", wikipedia: "" },
  { cover: "", title: "Memento", director: "Christopher Nolan", rating: 4, year: 2000, date: "~2012", letterboxd: "https://boxd.it/2bcK", wikipedia: "" },
  { cover: "", title: "Miss Congeniality", director: "Donald Petrie", rating: 4, year: 2000, date: "~2004", letterboxd: "https://boxd.it/28GM", wikipedia: "" },
  { cover: "", title: "mother!", director: "Darren Aronofsky", rating: 4, year: 2017, date: "September 2017", letterboxd: "https://boxd.it/dgRU", wikipedia: "" },
  { cover: "", title: "Nirvana the Band the Show the Movie", director: "Matt Johnson", rating: 4, year: 2025, date: "Spring 2026", letterboxd: "https://boxd.it/GITi", wikipedia: "" },
  { cover: "", title: "Nomadland", director: "Chloé Zhao", rating: 4, year: 2020, date: "January 2021", letterboxd: "https://boxd.it/lnRy", wikipedia: "" },
  { cover: "", title: "Ocean's Eleven", director: "Steven Soderbergh", rating: 4, year: 2001, date: "February 2024", letterboxd: "https://boxd.it/2aZm", wikipedia: "" },
  { cover: "", title: "Paddington", director: "Paul King", rating: 4, year: 2014, date: "March 2022", letterboxd: "https://boxd.it/3RKw", wikipedia: "" },
  { cover: "", title: "Palm Springs", director: "Max Barbakow", rating: 4, year: 2020, date: "January 2021", letterboxd: "https://boxd.it/lCXQ", wikipedia: "" },
  { cover: "", title: "Parasite", director: "Bong Joon-ho", rating: 4, year: 2019, date: "November 2019", letterboxd: "https://boxd.it/hTha", wikipedia: "" },
  { cover: "", title: "Princess Mononoke", director: "Hayao Miyazaki", rating: 4, year: 1997, date: "~2010", letterboxd: "https://boxd.it/2b4w", wikipedia: "" },
  { cover: "", title: "Raising Arizona", director: "Joel & Ethan Coen", rating: 4, year: 1987, date: "May 2022", letterboxd: "https://boxd.it/2avQ", wikipedia: "" },
  { cover: "", title: "School of Rock", director: "Richard Linklater", rating: 4, year: 2003, date: "~2005", letterboxd: "https://boxd.it/28xK", wikipedia: "" },
  { cover: "", title: "Shrek 2", director: "Andrew Adamson", rating: 4, year: 2004, date: "2004", letterboxd: "https://boxd.it/29z8", wikipedia: "" },
  { cover: "", title: "Skate Kitchen", director: "Crystal Moselle", rating: 4, year: 2018, date: "May 2020", letterboxd: "https://boxd.it/hI3Q", wikipedia: "" },
  { cover: "", title: "SLC Punk", director: "James Merendino", rating: 4, year: 1998, date: "~2019", letterboxd: "https://boxd.it/21JY", wikipedia: "" },
  { cover: "", title: "Sorry to Bother You", director: "Boots Riley", rating: 4, year: 2018, date: "May 2020", letterboxd: "https://boxd.it/f21E", wikipedia: "" },
  { cover: "", title: "Spirited Away", director: "Hayao Miyazaki", rating: 4, year: 2001, date: "~2010", letterboxd: "https://boxd.it/2b4m", wikipedia: "" },
  { cover: "", title: "The Art of Getting By", director: "Gavin Wiesen", rating: 4, year: 2011, date: "2011", letterboxd: "https://boxd.it/KC", wikipedia: "" },
  { cover: "", title: "The Big Lebowski", director: "Joel & Ethan Coen", rating: 4, year: 1998, date: "2019", letterboxd: "https://boxd.it/2b6C", wikipedia: "" },
  { cover: "", title: "The Big Short", director: "Adam McKay", rating: 4, year: 2015, date: "January 2016", letterboxd: "https://boxd.it/ajZw", wikipedia: "" },
  { cover: "", title: "The Disaster Artist", director: "James Franco", rating: 4, year: 2017, date: "November 2021", letterboxd: "https://boxd.it/cTqc", wikipedia: "" },
  { cover: "", title: "The Florida Project", director: "Sean Baker", rating: 4, year: 2017, date: "~2018", letterboxd: "https://boxd.it/dMG0", wikipedia: "" },
  { cover: "", title: "The Grand Budapest Hotel", director: "Wes Anderson", rating: 4, year: 2014, date: "~2014", letterboxd: "https://boxd.it/3ZqO", wikipedia: "" },
  { cover: "", title: "The Holdovers", director: "Alexander Payne", rating: 4, year: 2023, date: "January 2024", letterboxd: "https://boxd.it/vHza", wikipedia: "" },
  { cover: "", title: "The Incredible Mr. Limpet", director: "Arthur Lubin", rating: 4, year: 1964, date: "~2004", letterboxd: "https://boxd.it/1EjS", wikipedia: "" },
  { cover: "", title: "The King's Speech", director: "Tom Hooper", rating: 4, year: 2010, date: "2010", letterboxd: "https://boxd.it/dX0", wikipedia: "" },
  { cover: "", title: "The Last Waltz", director: "Martin Scorsese", rating: 4, year: 1978, date: "October 2024", letterboxd: "https://boxd.it/1P1U", wikipedia: "" },
  { cover: "", title: "The Lovely Bones", director: "Peter Jackson", rating: 4, year: 2009, date: "2010", letterboxd: "https://boxd.it/20IA", wikipedia: "" },
  { cover: "", title: "The Matrix", director: "The Wachowskis", rating: 4, year: 1999, date: "~2012", letterboxd: "https://boxd.it/2a1m", wikipedia: "" },
  { cover: "", title: "The Pink Panther", director: "Shawn Levy", rating: 4, year: 2006, date: "2006", letterboxd: "https://boxd.it/1Sys", wikipedia: "" },
  { cover: "", title: "The Rest of Us", director: "Aisling Chin-Yee", rating: 4, year: 2019, date: "September 2019", letterboxd: "https://boxd.it/mmKy", wikipedia: "" },
  { cover: "", title: "The Royal Tenenbaums", director: "Wes Anderson", rating: 4, year: 2001, date: "November 2021", letterboxd: "https://boxd.it/1YHU", wikipedia: "" },
  { cover: "", title: "The Speed Cubers", director: "Sue Kim", rating: 4, year: 2020, date: "August 2020", letterboxd: "https://boxd.it/r0jg", wikipedia: "" },
  { cover: "", title: "The SpongeBob SquarePants Movie", director: "Stephen Hillenburg", rating: 4, year: 2004, date: "November 2004", letterboxd: "https://boxd.it/1SYq", wikipedia: "" },
  { cover: "", title: "The Truman Show", director: "Peter Weir", rating: 4, year: 1998, date: "~2013", letterboxd: "https://boxd.it/18U8", wikipedia: "" },
  { cover: "", title: "The Wolf of Wall Street", director: "Martin Scorsese", rating: 4, year: 2013, date: "2014", letterboxd: "https://boxd.it/3C1m", wikipedia: "" },
  { cover: "", title: "Traffic Stop", director: "Kate Davis", rating: 4, year: 2017, date: "June 2020", letterboxd: "https://boxd.it/hH3g", wikipedia: "" },
  { cover: "", title: "Turbo", director: "David Soren", rating: 4, year: 2013, date: "June 2020", letterboxd: "https://boxd.it/2Hzw", wikipedia: "" },
  { cover: "", title: "Where the Wild Things Are", director: "Spike Jonze", rating: 4, year: 2009, date: "~2010", letterboxd: "https://boxd.it/1K0C", wikipedia: "" },
  { cover: "", title: "Whip It", director: "Drew Barrymore", rating: 4, year: 2009, date: "~2013", letterboxd: "https://boxd.it/1A3m", wikipedia: "" },
  { cover: "", title: "13th", director: "Ava DuVernay", rating: 3.5, year: 2016, date: "May 2020", letterboxd: "https://boxd.it/elNg", wikipedia: "" },
  { cover: "", title: "50/50", director: "Jonathan Levine", rating: 3.5, year: 2011, date: "2012", letterboxd: "https://boxd.it/10Tw", wikipedia: "" },
  { cover: "", title: "A Real Pain", director: "Jesse Eisenberg", rating: 3.5, year: 2024, date: "January 2025", letterboxd: "https://boxd.it/CjNG", wikipedia: "" },
  { cover: "", title: "A Star Is Born", director: "Bradley Cooper", rating: 3.5, year: 2018, date: "October 2018", letterboxd: "https://boxd.it/aXgc", wikipedia: "" },
  { cover: "", title: "Adaptation.", director: "Spike Jonze", rating: 3.5, year: 2002, date: "February 2021", letterboxd: "https://boxd.it/26mA", wikipedia: "" },
  { cover: "", title: "Akeelah and the Bee", director: "Doug Atchison", rating: 3.5, year: 2006, date: "May 2006", letterboxd: "https://boxd.it/1PuC", wikipedia: "" },
  { cover: "", title: "Almost Famous", director: "Cameron Crowe", rating: 3.5, year: 2000, date: "January 2023", letterboxd: "https://boxd.it/29CQ", wikipedia: "" },
  { cover: "", title: "Athlete A", director: "Bonni Cohen & Jon Shenk", rating: 3.5, year: 2020, date: "July 2020", letterboxd: "https://boxd.it/pxY8", wikipedia: "" },
  { cover: "", title: "Austin Powers: The Spy Who Shagged Me", director: "Jay Roach", rating: 3.5, year: 1999, date: "May 2020", letterboxd: "https://boxd.it/29xQ", wikipedia: "" },
  { cover: "", title: "Back to the Future", director: "Robert Zemeckis", rating: 3.5, year: 1985, date: "~2013", letterboxd: "https://boxd.it/2b8e", wikipedia: "" },
  { cover: "", title: "Bean", director: "Mel Smith", rating: 2.5, year: 1997, date: "~2008", letterboxd: "https://boxd.it/28WA", wikipedia: "" },
  { cover: "", title: "Blue Velvet", director: "David Lynch", rating: 3.5, year: 1986, date: "~2018", letterboxd: "https://boxd.it/29BI", wikipedia: "" },
  { cover: "", title: "Bohemian Rhapsody", director: "Bryan Singer", rating: 3.5, year: 2018, date: "2019", letterboxd: "https://boxd.it/f1TK", wikipedia: "" },
  { cover: "", title: "Bridge to Terabithia", director: "Gábor Csupó", rating: 3.5, year: 2007, date: "~2008", letterboxd: "https://boxd.it/28YG", wikipedia: "" },
  { cover: "", title: "Bridget Jones's Diary", director: "Sharon Maguire", rating: 3.5, year: 2001, date: "December 2022", letterboxd: "https://boxd.it/29WQ", wikipedia: "" },
  { cover: "", title: "Bring It On", director: "Peyton Reed", rating: 3.5, year: 2000, date: "~2002", letterboxd: "https://boxd.it/28x6", wikipedia: "" },
  { cover: "", title: "Brokeback Mountain", director: "Ang Lee", rating: 3.5, year: 2005, date: "~2014", letterboxd: "https://boxd.it/2b2q", wikipedia: "" },
  { cover: "", title: "Camp Rock", director: "Matthew Diamond", rating: 3.5, year: 2008, date: "June 2008", letterboxd: "https://boxd.it/1PHw", wikipedia: "" },
  { cover: "", title: "Casablanca", director: "Michael Curtiz", rating: 3.5, year: 1942, date: "~2007", letterboxd: "https://boxd.it/2aG0", wikipedia: "" },
  { cover: "", title: "Catch Me If You Can", director: "Steven Spielberg", rating: 3.5, year: 2002, date: "~2006", letterboxd: "https://boxd.it/29VS", wikipedia: "" },
  { cover: "", title: "Corpse Bride", director: "Tim Burton & Mike Johnson", rating: 3.5, year: 2005, date: "~2005", letterboxd: "https://boxd.it/24WQ", wikipedia: "" },
  { cover: "", title: "Don't Worry Darling", director: "Olivia Wilde", rating: 3.5, year: 2022, date: "September 2022", letterboxd: "https://boxd.it/mViu", wikipedia: "" },
  { cover: "", title: "Drive", director: "Nicolas Winding Refn", rating: 3.5, year: 2011, date: "~2018", letterboxd: "https://boxd.it/IG", wikipedia: "" },
  { cover: "", title: "Dune: Part Two", director: "Denis Villeneuve", rating: 2.5, year: 2024, date: "March 2024", letterboxd: "https://boxd.it/pUfA", wikipedia: "" },
  { cover: "", title: "Easy A", director: "Will Gluck", rating: 3.5, year: 2010, date: "October 2010", letterboxd: "https://boxd.it/17DK", wikipedia: "" },
  { cover: "", title: "Ella Enchanted", director: "Tommy O'Haver", rating: 3.5, year: 2004, date: "~2005", letterboxd: "https://boxd.it/1O5G", wikipedia: "" },
  { cover: "", title: "Fargo", director: "Joel & Ethan Coen", rating: 3.5, year: 1996, date: "June 2020", letterboxd: "https://boxd.it/2aHM", wikipedia: "" },
  { cover: "", title: "Get Out", director: "Jordan Peele", rating: 3.5, year: 2017, date: "May 2020", letterboxd: "https://boxd.it/eOCm", wikipedia: "" },
  { cover: "", title: "Halloweentown II: Kalabar's Revenge", director: "Mary Lambert", rating: 3.5, year: 2001, date: "~2004", letterboxd: "https://boxd.it/1e98", wikipedia: "" },
  { cover: "", title: "Heroin(e)", director: "Elaine McMillion Sheldon", rating: 3.5, year: 2017, date: "June 2020", letterboxd: "https://boxd.it/h3GM", wikipedia: "" },
  { cover: "", title: "High School Musical", director: "Kenny Ortega", rating: 3.5, year: 2006, date: "January 2006", letterboxd: "https://boxd.it/1V0y", wikipedia: "" },
  { cover: "", title: "Hot Fuzz", director: "Edgar Wright", rating: 3.5, year: 2007, date: "~2021", letterboxd: "https://boxd.it/2416", wikipedia: "" },
  { cover: "", title: "Howl's Moving Castle", director: "Hayao Miyazaki", rating: 3.5, year: 2004, date: "~2015", letterboxd: "https://boxd.it/23De", wikipedia: "" },
  { cover: "", title: "Inception", director: "Christopher Nolan", rating: 3.5, year: 2010, date: "July 2010", letterboxd: "https://boxd.it/1skk", wikipedia: "" },
  { cover: "", title: "Kiki's Delivery Service", director: "Hayao Miyazaki", rating: 3.5, year: 1989, date: "~2014", letterboxd: "https://boxd.it/1JAY", wikipedia: "" },
  { cover: "", title: "Knife Skills", director: "Thomas Lennon", rating: 3.5, year: 2017, date: "June 2020", letterboxd: "https://boxd.it/gHEO", wikipedia: "" },
  { cover: "", title: "Legally Blonde", director: "Robert Luketic", rating: 3.5, year: 2001, date: "~2008", letterboxd: "https://boxd.it/1ZNa", wikipedia: "" },
  { cover: "", title: "Luck-Key", director: "Lee Gye-byeok", rating: 3.5, year: 2016, date: "May 2022", letterboxd: "https://boxd.it/eUYe", wikipedia: "" },
  { cover: "", title: "Matilda", director: "Danny DeVito", rating: 4, year: 1996, date: "~2001", letterboxd: "https://boxd.it/1VhY", wikipedia: "" },
  { cover: "", title: "Middleditch & Schwartz", director: "Ryan Polito", rating: 3.5, year: 2020, date: "January 2022", letterboxd: "https://boxd.it/pV28", wikipedia: "" },
  { cover: "", title: "Monty Python and the Holy Grail", director: "Terry Gilliam & Terry Jones", rating: 3.5, year: 1975, date: "~2014", letterboxd: "https://boxd.it/29GI", wikipedia: "" },
  { cover: "", title: "My Neighbor Totoro", director: "Hayao Miyazaki", rating: 3.5, year: 1988, date: "~2014", letterboxd: "https://boxd.it/20eA", wikipedia: "" },
  { cover: "", title: "Orphan", director: "Jaume Collet-Serra", rating: 3.5, year: 2009, date: "~2012", letterboxd: "https://boxd.it/1CgM", wikipedia: "" },
  { cover: "", title: "Phantom Thread", director: "Paul Thomas Anderson", rating: 3.5, year: 2017, date: "January 2018", letterboxd: "https://boxd.it/e4uc", wikipedia: "" },
  { cover: "", title: "Psycho", director: "Alfred Hitchcock", rating: 3.5, year: 1960, date: "~2010", letterboxd: "https://boxd.it/2ab2", wikipedia: "" },
  { cover: "", title: "Raiders of the Lost Ark", director: "Steven Spielberg", rating: 3.5, year: 1981, date: "~2012", letterboxd: "https://boxd.it/2bbs", wikipedia: "" },
  { cover: "", title: "Superbad", director: "Greg Mottola", rating: 3.5, year: 2007, date: "~2007", letterboxd: "https://boxd.it/20hO", wikipedia: "" },
  { cover: "", title: "Synecdoche, New York", director: "Charlie Kaufman", rating: 3.5, year: 2008, date: "~2018", letterboxd: "https://boxd.it/23zw", wikipedia: "" },
  { cover: "", title: "The Adventures of Sharkboy and Lavagirl", director: "Robert Rodriguez", rating: 3.5, year: 2005, date: "~2006", letterboxd: "https://boxd.it/1Ozm", wikipedia: "" },
  { cover: "", title: "The Emperor's New Groove", director: "Mark Dindal", rating: 3.5, year: 2000, date: "~2001", letterboxd: "https://boxd.it/1Tey", wikipedia: "" },
  { cover: "", title: "The Parent Trap", director: "Nancy Meyers", rating: 3.5, year: 1998, date: "~2001", letterboxd: "https://boxd.it/1XJq", wikipedia: "" },
  { cover: "", title: "The Peanut Butter Falcon", director: "Tyler Nilson & Michael Schwartz", rating: 3.5, year: 2019, date: "November 2021", letterboxd: "https://boxd.it/gzu2", wikipedia: "" },
  { cover: "", title: "The Polka King", director: "Maya Forbes", rating: 3.5, year: 2017, date: "January 2022", letterboxd: "https://boxd.it/eP0y", wikipedia: "" },
  { cover: "", title: "The Princess Bride", director: "Rob Reiner", rating: 3.5, year: 1987, date: "~2009", letterboxd: "https://boxd.it/26EY", wikipedia: "" },
  { cover: "", title: "The Reluctant Astronaut", director: "Edward Montagne", rating: 3.5, year: 1967, date: "~2000", letterboxd: "https://boxd.it/19F4", wikipedia: "" },
  { cover: "", title: "The Shakiest Gun in the West", director: "Alan Rafkin", rating: 3.5, year: 1968, date: "~2000", letterboxd: "https://boxd.it/1DPI", wikipedia: "" },
  { cover: "", title: "The Social Network", director: "David Fincher", rating: 3.5, year: 2010, date: "2010", letterboxd: "https://boxd.it/17ue", wikipedia: "" },
  { cover: "", title: "The Sound of Music", director: "Robert Wise", rating: 3.5, year: 1965, date: "~2005", letterboxd: "https://boxd.it/1MLK", wikipedia: "" },
  { cover: "", title: "The Trial of the Chicago 7", director: "Aaron Sorkin", rating: 3, year: 2020, date: "November 2021", letterboxd: "https://boxd.it/kn3w", wikipedia: "" },
  { cover: "", title: "The Wizard of Oz", director: "Victor Fleming", rating: 3.5, year: 1939, date: "~2003", letterboxd: "https://boxd.it/29Xu", wikipedia: "" },
  { cover: "", title: "tick, tick... BOOM!", director: "Lin-Manuel Miranda", rating: 3.5, year: 2021, date: "January 2022", letterboxd: "https://boxd.it/jz2e", wikipedia: "" },
  { cover: "", title: "Titanic", director: "James Cameron", rating: 3.5, year: 1997, date: "~2008", letterboxd: "https://boxd.it/2a2k", wikipedia: "" },
  { cover: "", title: "V for Vendetta", director: "James McTeigue", rating: 3.5, year: 2005, date: "~2010", letterboxd: "https://boxd.it/29Ik", wikipedia: "" },
  { cover: "", title: "Vertigo", director: "Alfred Hitchcock", rating: 3.5, year: 1958, date: "~2011", letterboxd: "https://boxd.it/2apI", wikipedia: "" },
  { cover: "", title: "WALL·E", director: "Andrew Stanton", rating: 3.5, year: 2008, date: "July 2008", letterboxd: "https://boxd.it/1VEo", wikipedia: "" },
  { cover: "", title: "Willy Wonka & the Chocolate Factory", director: "Mel Stuart", rating: 3.5, year: 1971, date: "~2004", letterboxd: "https://boxd.it/2aLu", wikipedia: "" },
  { cover: "", title: "Zootopia", director: "Byron Howard & Rich Moore", rating: 3.5, year: 2016, date: "~2021", letterboxd: "https://boxd.it/84xS", wikipedia: "" },
  { cover: "", title: "A Clockwork Orange", director: "Stanley Kubrick", rating: 3, year: 1971, date: "~2012", letterboxd: "https://boxd.it/2aVE", wikipedia: "" },
  { cover: "", title: "A Goofy Movie", director: "Kevin Lima", rating: 3, year: 1995, date: "~2001", letterboxd: "https://boxd.it/1Lwu", wikipedia: "" },
  { cover: "", title: "About Time", director: "Richard Curtis", rating: 3, year: 2013, date: "~2017", letterboxd: "https://boxd.it/43bI", wikipedia: "" },
  { cover: "", title: "Amy", director: "Asif Kapadia", rating: 3, year: 2015, date: "~2020", letterboxd: "https://boxd.it/aSNU", wikipedia: "" },
  { cover: "", title: "Basic Instinct", director: "Paul Verhoeven", rating: 3, year: 1992, date: "May 2022", letterboxd: "https://boxd.it/2asM", wikipedia: "" },
  { cover: "", title: "Before Sunrise", director: "Richard Linklater", rating: 3, year: 1995, date: "~2019", letterboxd: "https://boxd.it/2bcU", wikipedia: "" },
  { cover: "", title: "Big Fish", director: "Tim Burton", rating: 3, year: 2003, date: "~2013", letterboxd: "https://boxd.it/2a3M", wikipedia: "" },
  { cover: "", title: "Blue Is the Warmest Color", director: "Abdellatif Kechiche", rating: 3, year: 2013, date: "November 2013", letterboxd: "https://boxd.it/4O40", wikipedia: "" },
  { cover: "", title: "Carts of Darkness", director: "Murray Siple", rating: 3, year: 2008, date: "January 2023", letterboxd: "https://boxd.it/EMo", wikipedia: "" },
  { cover: "", title: "Cats Don't Dance", director: "Mark Dindal", rating: 3, year: 1997, date: "~1999", letterboxd: "https://boxd.it/1xfu", wikipedia: "" },
  { cover: "", title: "Chungking Express", director: "Wong Kar-wai", rating: 3, year: 1994, date: "January 2025", letterboxd: "https://boxd.it/1UDa", wikipedia: "" },
  { cover: "", title: "Citizen Kane", director: "Orson Welles", rating: 3, year: 1941, date: "~2008", letterboxd: "https://boxd.it/71O", wikipedia: "" },
  { cover: "", title: "Crazy, Stupid, Love.", director: "Glenn Ficarra & John Requa", rating: 3, year: 2011, date: "~2013", letterboxd: "https://boxd.it/D9A", wikipedia: "" },
  { cover: "", title: "Do the Right Thing", director: "Spike Lee", rating: 3, year: 1989, date: "~2014", letterboxd: "https://boxd.it/29gA", wikipedia: "" },
  { cover: "", title: "Falling for Christmas", director: "Janeen Damian", rating: 3, year: 2022, date: "November 2022", letterboxd: "https://boxd.it/vpEG", wikipedia: "" },  { cover: "", title: "Ferris Bueller's Day Off", director: "John Hughes", rating: 3, year: 1986, date: "~2010", letterboxd: "https://boxd.it/1YPY", wikipedia: "" },
  { cover: "", title: "Freaky Friday", director: "Mark Waters", rating: 3, year: 2003, date: "2004", letterboxd: "https://boxd.it/1WwK", wikipedia: "" },
  { cover: "", title: "Free Willy", director: "Simon Wincer", rating: 3, year: 1993, date: "~2000", letterboxd: "https://boxd.it/28qO", wikipedia: "" },
  { cover: "", title: "Gravity", director: "Alfonso Cuarón", rating: 3, year: 2013, date: "November 2013", letterboxd: "https://boxd.it/GZY", wikipedia: "" },
  { cover: "", title: "Grease", director: "Randal Kleiser", rating: 3, year: 1978, date: "~2009", letterboxd: "https://boxd.it/29YW", wikipedia: "" },
  { cover: "", title: "Happiest Season", director: "Clea DuVall", rating: 3, year: 2020, date: "December 2022", letterboxd: "https://boxd.it/iS3I", wikipedia: "" },
  { cover: "", title: "Her", director: "Spike Jonze", rating: 3, year: 2013, date: "~2014", letterboxd: "https://boxd.it/4O24", wikipedia: "" },
  { cover: "", title: "Hollie's Dress", director: "Annie Sakkab", rating: 3, year: 2020, date: "May 2020", letterboxd: "https://boxd.it/pU72", wikipedia: "" },
  { cover: "", title: "HOMECOMING: A film by Beyoncé", director: "Beyoncé", rating: 3, year: 2019, date: "May 2019", letterboxd: "https://boxd.it/lS2Q", wikipedia: "" },
  { cover: "", title: "Hot Rod", director: "Akiva Schaffer", rating: 3, year: 2007, date: "October 2007", letterboxd: "https://boxd.it/1X9C", wikipedia: "" },
  { cover: "", title: "Inside Llewyn Davis", director: "Joel & Ethan Coen", rating: 3, year: 2013, date: "April 2022", letterboxd: "https://boxd.it/34Ro", wikipedia: "" },
  { cover: "", title: "Jackie", director: "Pablo Larraín", rating: 3, year: 2016, date: "January 2017", letterboxd: "https://boxd.it/d6bu", wikipedia: "" },
  { cover: "", title: "Jaws", director: "Steven Spielberg", rating: 3, year: 1975, date: "~2011", letterboxd: "https://boxd.it/2a5e", wikipedia: "" },
  { cover: "", title: "Joker", director: "Todd Phillips", rating: 3, year: 2019, date: "November 2021", letterboxd: "https://boxd.it/h4cS", wikipedia: "" },
  { cover: "", title: "Kick-Ass", director: "Matthew Vaughn", rating: 3, year: 2010, date: "May 2010", letterboxd: "https://boxd.it/1zaQ", wikipedia: "" },
  { cover: "", title: "Knives Out", director: "Rian Johnson", rating: 3, year: 2019, date: "July 2020", letterboxd: "https://boxd.it/jWEA", wikipedia: "" },
  { cover: "", title: "Life of Pi", director: "Ang Lee", rating: 3, year: 2012, date: "July 2020", letterboxd: "https://boxd.it/37pC", wikipedia: "" },
  { cover: "", title: "Love Actually", director: "Richard Curtis", rating: 3, year: 2003, date: "December 2022", letterboxd: "https://boxd.it/2aeU", wikipedia: "" },
  { cover: "", title: "Made of Honor", director: "Paul Weiland", rating: 3, year: 2008, date: "April 2024", letterboxd: "https://boxd.it/1VsC", wikipedia: "" },
  { cover: "", title: "Moana", director: "Ron Clements & John Musker", rating: 3, year: 2016, date: "~2017", letterboxd: "https://boxd.it/8tfY", wikipedia: "" },
  { cover: "", title: "National Theatre Live: Fleabag", director: "Vicky Jones", rating: 3, year: 2019, date: "January 2022", letterboxd: "https://boxd.it/mXOW", wikipedia: "" },
  { cover: "", title: "Normal People", director: "Lenny Abrahamson", rating: 3, year: 2020, date: "July 2020", letterboxd: "https://boxd.it/q2VY", wikipedia: "" },
  { cover: "", title: "Notting Hill", director: "Roger Michell", rating: 3, year: 1999, date: "January 2023", letterboxd: "https://boxd.it/2aeK", wikipedia: "" },
  { cover: "", title: "Objectified", director: "Gary Hustwit", rating: 3, year: 2009, date: "June 2020", letterboxd: "https://boxd.it/1yCk", wikipedia: "" },
  { cover: "", title: "Palo Alto", director: "Gia Coppola", rating: 3, year: 2013, date: "~2014", letterboxd: "https://boxd.it/5Nzy", wikipedia: "" },
  { cover: "", title: "Rear Window", director: "Alfred Hitchcock", rating: 3, year: 1954, date: "~2013", letterboxd: "https://boxd.it/2a6Q", wikipedia: "" },
  { cover: "", title: "Requiem for a Dream", director: "Darren Aronofsky", rating: 3, year: 2000, date: "~2013", letterboxd: "https://boxd.it/29VI", wikipedia: "" },
  { cover: "", title: "Saving Private Ryan", director: "Steven Spielberg", rating: 3, year: 1998, date: "~2010", letterboxd: "https://boxd.it/29ro", wikipedia: "" },
  { cover: "", title: "Say Anything...", director: "Cameron Crowe", rating: 3, year: 1989, date: "January 2022", letterboxd: "https://boxd.it/27B2", wikipedia: "" },
  { cover: "", title: "Set It Up", director: "Claire Scanlon", rating: 3, year: 2018, date: "December 2022", letterboxd: "https://boxd.it/dpik", wikipedia: "" },
  { cover: "", title: "Shrek", director: "Andrew Adamson & Vicky Jenson", rating: 3, year: 2001, date: "June 2001", letterboxd: "https://boxd.it/29zi", wikipedia: "" },
  { cover: "", title: "Silver Linings Playbook", director: "David O. Russell", rating: 3, year: 2012, date: "November 2012", letterboxd: "https://boxd.it/2TTo", wikipedia: "" },
  { cover: "", title: "The Banshees of Inisherin", director: "Martin McDonagh", rating: 3, year: 2022, date: "January 2023", letterboxd: "https://boxd.it/p7XS", wikipedia: "" },
  { cover: "", title: "The Breakfast Club", director: "John Hughes", rating: 3, year: 1985, date: "~2008", letterboxd: "https://boxd.it/27q4", wikipedia: "" },
  { cover: "", title: "The Fundamentals of Caring", director: "Rob Burnett", rating: 3, year: 2016, date: "June 2020", letterboxd: "https://boxd.it/aiai", wikipedia: "" },
  { cover: "", title: "The Ghost and Mr. Chicken", director: "Alan Rafkin", rating: 3, year: 1966, date: "~2002", letterboxd: "https://boxd.it/1QnC", wikipedia: "" },
  { cover: "", title: "The Lobster", director: "Yorgos Lanthimos", rating: 3, year: 2015, date: "~2016", letterboxd: "https://boxd.it/7tnw", wikipedia: "" },
  { cover: "", title: "The Muppet Movie", director: "James Frawley", rating: 3, year: 1979, date: "March 2022", letterboxd: "https://boxd.it/1UrS", wikipedia: "" },
  { cover: "", title: "The Nightmare Before Christmas", director: "Henry Selick", rating: 3, year: 1993, date: "~2009", letterboxd: "https://boxd.it/1YzQ", wikipedia: "" },
  { cover: "", title: "The Notebook", director: "Nick Cassavetes", rating: 3, year: 2004, date: "~2024", letterboxd: "https://boxd.it/1UNE", wikipedia: "" },
  { cover: "", title: "The Princess Diaries", director: "Garry Marshall", rating: 3, year: 2001, date: "~2016", letterboxd: "https://boxd.it/1XCO", wikipedia: "" },
  { cover: "", title: "The Proposal", director: "Anne Fletcher", rating: 3, year: 2009, date: "June 2009", letterboxd: "https://boxd.it/1HiS", wikipedia: "" },
  { cover: "", title: "The Rocky Horror Picture Show", director: "Jim Sharman", rating: 3, year: 1975, date: "~2010", letterboxd: "https://boxd.it/1a3q", wikipedia: "" },
  { cover: "", title: "The Virgin Suicides", director: "Sofia Coppola", rating: 3, year: 1999, date: "~2014", letterboxd: "https://boxd.it/28JG", wikipedia: "" },
  { cover: "", title: "The Wedding Singer", director: "Frank Coraci", rating: 3, year: 1998, date: "January 2024", letterboxd: "https://boxd.it/1USO", wikipedia: "" },
  { cover: "", title: "Three Billboards Outside Ebbing, Missouri", director: "Martin McDonagh", rating: 3, year: 2017, date: "February 2018", letterboxd: "https://boxd.it/ceBS", wikipedia: "" },
  { cover: "", title: "To All the Boys I've Loved Before", director: "Susan Johnson", rating: 3, year: 2018, date: "May 2020", letterboxd: "https://boxd.it/gHec", wikipedia: "" },
  { cover: "", title: "Turning Red", director: "Domee Shi", rating: 3, year: 2022, date: "July 2023", letterboxd: "https://boxd.it/ipkq", wikipedia: "" },
  { cover: "", title: "Urbanized", director: "Gary Hustwit", rating: 3, year: 2011, date: "June 2020", letterboxd: "https://boxd.it/2FOu", wikipedia: "" },
  { cover: "", title: "You've Got Mail", director: "Nora Ephron", rating: 3, year: 1998, date: "June 2022", letterboxd: "https://boxd.it/1Yye", wikipedia: "" },
  { cover: "", title: "Youth in Revolt", director: "Miguel Arteta", rating: 3, year: 2009, date: "April 2022", letterboxd: "https://boxd.it/1AK6", wikipedia: "" },
  { cover: "", title: "Zoolander", director: "Ben Stiller", rating: 3, year: 2001, date: "January 2022", letterboxd: "https://boxd.it/1YMA", wikipedia: "" },
  { cover: "", title: "2001: A Space Odyssey", director: "Stanley Kubrick", rating: 2.5, year: 1968, date: "~2010", letterboxd: "https://boxd.it/2bf0", wikipedia: "" },
  { cover: "", title: "A Nightmare on Elm Street", director: "Wes Craven", rating: 2.5, year: 1984, date: "~2012", letterboxd: "https://boxd.it/2aw0", wikipedia: "" },
  { cover: "", title: "Amadeus", director: "Miloš Forman", rating: 2.5, year: 1984, date: "January 2024", letterboxd: "https://boxd.it/2aH8", wikipedia: "" },
  { cover: "", title: "An American in Paris", director: "Vincente Minnelli", rating: 2.5, year: 1951, date: "2020", letterboxd: "https://boxd.it/26kY", wikipedia: "" },
  { cover: "", title: "An Extremely Goofy Movie", director: "Douglas McCarthy", rating: 2.5, year: 2000, date: "~2002", letterboxd: "https://boxd.it/1LOo", wikipedia: "" },
  { cover: "", title: "Babe, I Hate To Go", director: "Andrew Moir", rating: 2.5, year: 2017, date: "June 2020", letterboxd: "https://boxd.it/gfIo", wikipedia: "" },
  { cover: "", title: "Bend It Like Beckham", director: "Gurinder Chadha", rating: 2.5, year: 2002, date: "2002", letterboxd: "https://boxd.it/2am0", wikipedia: "" },
  { cover: "", title: "Between Two Ferns: The Movie", director: "Scott Aukerman", rating: 2.5, year: 2019, date: "2019", letterboxd: "https://boxd.it/lw9g", wikipedia: "" },
  { cover: "", title: "Birdman or (The Unexpected Virtue of Ignorance)", director: "Alejandro G. Iñárritu", rating: 2.5, year: 2014, date: "November 2014", letterboxd: "https://boxd.it/5RFA", wikipedia: "" },  { cover: "", title: "Call Me by Your Name", director: "Luca Guadagnino", rating: 2.5, year: 2017, date: "February 2018", letterboxd: "https://boxd.it/dYmm", wikipedia: "" },
  { cover: "", title: "Cheaper by the Dozen", director: "Shawn Levy", rating: 2.5, year: 2003, date: "~2005", letterboxd: "https://boxd.it/1USa", wikipedia: "" },
  { cover: "", title: "Cinderella", director: "Clyde Geronimi", rating: 2.5, year: 1950, date: "~2002", letterboxd: "https://boxd.it/1Uki", wikipedia: "" },
  { cover: "", title: "CODA", director: "Sian Heder", rating: 2.5, year: 2021, date: "January 2023", letterboxd: "https://boxd.it/tbf4", wikipedia: "" },
  { cover: "", title: "Don't Look Up", director: "Adam McKay", rating: 2.5, year: 2021, date: "December 2021", letterboxd: "https://boxd.it/o0Hc", wikipedia: "" },
  { cover: "", title: "Earth", director: "Alastair Fothergill & Mark Linfield", rating: 2.5, year: 2007, date: "June 2020", letterboxd: "https://boxd.it/1V0I", wikipedia: "" },
  { cover: "", title: "Ex Machina", director: "Alex Garland", rating: 2.5, year: 2014, date: "2022", letterboxd: "https://boxd.it/7T2k", wikipedia: "" },
  { cover: "", title: "Fahrenheit 9/11", director: "Michael Moore", rating: 2.5, year: 2004, date: "April 2022", letterboxd: "https://boxd.it/28a2", wikipedia: "" },
  { cover: "", title: "Frankenweenie", director: "Tim Burton", rating: 2.5, year: 2012, date: "January 2022", letterboxd: "https://boxd.it/bPS", wikipedia: "" },
  { cover: "", title: "Fyre", director: "Chris Smith", rating: 2.5, year: 2019, date: "May 2020", letterboxd: "https://boxd.it/kP0g", wikipedia: "" },
  { cover: "", title: "Fyre Fraud", director: "Jenner Furst & Julia Willoughby Nason", rating: 2.5, year: 2019, date: "June 2020", letterboxd: "https://boxd.it/l7wY", wikipedia: "" },
  { cover: "", title: "Gone Girl", director: "David Fincher", rating: 2.5, year: 2014, date: "~2017", letterboxd: "https://boxd.it/6hQu", wikipedia: "" },
  { cover: "", title: "Herbie Goes to Monte Carlo", director: "Vincent McEveety", rating: 2.5, year: 1977, date: "June 2020", letterboxd: "https://boxd.it/1OGC", wikipedia: "" },
  { cover: "", title: "Home Alone", director: "Chris Columbus", rating: 2.5, year: 1990, date: "December 2024", letterboxd: "https://boxd.it/29Fg", wikipedia: "" },
  { cover: "", title: "I Am Patrick Swayze", director: "Adrian Buitenhuis", rating: 2.5, year: 2019, date: "June 2022", letterboxd: "https://boxd.it/mZau", wikipedia: "" },
  { cover: "", title: "Incredibles 2", director: "Brad Bird", rating: 2.5, year: 2018, date: "May 2020", letterboxd: "https://boxd.it/7IPg", wikipedia: "" },
  { cover: "", title: "Insidious", director: "James Wan", rating: 2.5, year: 2010, date: "~2013", letterboxd: "https://boxd.it/H4k", wikipedia: "" },
  { cover: "", title: "Interstellar", director: "Christopher Nolan", rating: 2.5, year: 2014, date: "February 2023", letterboxd: "https://boxd.it/4VZ8", wikipedia: "" },
  { cover: "", title: "Kicking & Screaming", director: "Jesse Dylan", rating: 2.5, year: 2005, date: "January 2022", letterboxd: "https://boxd.it/1XnE", wikipedia: "" },
  { cover: "", title: "Loving Vincent", director: "Dorota Kobiela & Hugh Welchman", rating: 2.5, year: 2017, date: "June 2020", letterboxd: "https://boxd.it/biIQ", wikipedia: "" },
  { cover: "", title: "Mamma Mia!", director: "Phyllida Lloyd", rating: 2.5, year: 2008, date: "2022", letterboxd: "https://boxd.it/1Tnq", wikipedia: "" },
  { cover: "", title: "Mary Poppins", director: "Robert Stevenson", rating: 2.5, year: 1964, date: "~2008", letterboxd: "https://boxd.it/2aoA", wikipedia: "" },
  { cover: "", title: "McMillion$", director: "James Lee Hernandez & Brian Lazarte", rating: 2.5, year: 2020, date: "June 2020", letterboxd: "https://boxd.it/oWvI", wikipedia: "" },
  { cover: "", title: "Minutemen", director: "Lev L. Spiro", rating: 2.5, year: 2008, date: "~2006", letterboxd: "https://boxd.it/1AG4", wikipedia: "" },
  { cover: "", title: "New Year's Eve", director: "Garry Marshall", rating: 2.5, year: 2011, date: "~2021", letterboxd: "https://boxd.it/als", wikipedia: "" },
  { cover: "", title: "Nick and Norah's Infinite Playlist", director: "Peter Sollett", rating: 2.5, year: 2008, date: "~2011", letterboxd: "https://boxd.it/1Slo", wikipedia: "" },
  { cover: "", title: "Now You See Me", director: "Louis Leterrier", rating: 2.5, year: 2013, date: "June 2013", letterboxd: "https://boxd.it/2Bsu", wikipedia: "" },
  { cover: "", title: "Pretty in Pink", director: "Howard Deutch", rating: 2.5, year: 1986, date: "~2014", letterboxd: "https://boxd.it/1TEw", wikipedia: "" },
  { cover: "", title: "She's the Man", director: "Andy Fickman", rating: 2.5, year: 2006, date: "April 2006", letterboxd: "https://boxd.it/1Y7W", wikipedia: "" },
  { cover: "", title: "Sixteen Candles", director: "John Hughes", rating: 2.5, year: 1984, date: "~2012", letterboxd: "https://boxd.it/1MJk", wikipedia: "" },
  { cover: "", title: "Spy Kids", director: "Robert Rodriguez", rating: 2.5, year: 2001, date: "March 2001", letterboxd: "https://boxd.it/1Xcw", wikipedia: "" },
  { cover: "", title: "Stuart Little", director: "Rob Minkoff", rating: 2.5, year: 1999, date: "~2000", letterboxd: "https://boxd.it/1WZW", wikipedia: "" },
  { cover: "", title: "Suicide Squad", director: "David Ayer", rating: 2.5, year: 2016, date: "August 2016", letterboxd: "https://boxd.it/9row", wikipedia: "" },
  { cover: "", title: "The 40 Year Old Virgin", director: "Judd Apatow", rating: 2.5, year: 2005, date: "~2011", letterboxd: "https://boxd.it/21hK", wikipedia: "" },
  { cover: "", title: "The Cheetah Girls", director: "Oz Scott", rating: 2.5, year: 2003, date: "2003", letterboxd: "https://boxd.it/1hkS", wikipedia: "" },
  { cover: "", title: "The Jungle Book", director: "Wolfgang Reitherman", rating: 2.5, year: 1967, date: "~1999", letterboxd: "https://boxd.it/1YY2", wikipedia: "" },
  { cover: "", title: "The Kings of Summer", director: "Jordan Vogt-Roberts", rating: 2.5, year: 2013, date: "~2011", letterboxd: "https://boxd.it/4V3e", wikipedia: "" },
  { cover: "", title: "The Land Before Time", director: "Don Bluth", rating: 2.5, year: 1988, date: "January 2022", letterboxd: "https://boxd.it/1Sr2", wikipedia: "" },
  { cover: "", title: "The Secret Life of Walter Mitty", director: "Ben Stiller", rating: 2.5, year: 2013, date: "2018", letterboxd: "https://boxd.it/3SWy", wikipedia: "" },
  { cover: "", title: "The Shape of Water", director: "Guillermo del Toro", rating: 2.5, year: 2017, date: "December 2017", letterboxd: "https://boxd.it/dZ5m", wikipedia: "" },
  { cover: "", title: "The Ugly Truth", director: "Robert Luketic", rating: 2.5, year: 2009, date: "December 2023", letterboxd: "https://boxd.it/1CFi", wikipedia: "" },
  { cover: "", title: "This Is the End", director: "Seth Rogen & Evan Goldberg", rating: 2.5, year: 2013, date: "June 2013", letterboxd: "https://boxd.it/3GB4", wikipedia: "" },
  { cover: "", title: "Tiger King", director: "Eric Goode & Rebecca Chaiklin", rating: 2.5, year: 2020, date: "May 2020", letterboxd: "https://boxd.it/pzj2", wikipedia: "" },
  { cover: "", title: "Walk the Line", director: "James Mangold", rating: 2.5, year: 2005, date: "May 2020", letterboxd: "https://boxd.it/2bdS", wikipedia: "" },
  { cover: "", title: "We'll Take Manhattan", director: "John McKay", rating: 2.5, year: 2012, date: "June 2020", letterboxd: "https://boxd.it/32gq", wikipedia: "" },
  { cover: "", title: "Who Took Johnny", director: "David Beilinson, Michael Galinsky & Suki Hawley", rating: 2.5, year: 2014, date: "May 2020", letterboxd: "https://boxd.it/7mly", wikipedia: "" },
  { cover: "", title: "13 Going on 30", director: "Gary Winick", rating: 2, year: 2004, date: "May 2020", letterboxd: "https://boxd.it/1X6e", wikipedia: "" },
  { cover: "", title: "50 First Dates", director: "Peter Segal", rating: 2, year: 2004, date: "January 2022", letterboxd: "https://boxd.it/285c", wikipedia: "" },
  { cover: "", title: "Adventureland", director: "Greg Mottola", rating: 2, year: 2009, date: "2009", letterboxd: "https://boxd.it/1JTQ", wikipedia: "" },
  { cover: "", title: "Aladdin", director: "Ron Clements & John Musker", rating: 2, year: 1992, date: "~1999", letterboxd: "https://boxd.it/29yE", wikipedia: "" },
  { cover: "", title: "Alice in Wonderland", director: "Tim Burton", rating: 2, year: 2010, date: "~1999", letterboxd: "https://boxd.it/1Sz6", wikipedia: "" },
  { cover: "", title: "American History X", director: "Tony Kaye", rating: 2, year: 1998, date: "~2014", letterboxd: "https://boxd.it/2bdo", wikipedia: "" },
  { cover: "", title: "Anora", director: "Sean Baker", rating: 2, year: 2024, date: "November 2024", letterboxd: "https://boxd.it/Egcw", wikipedia: "" },
  { cover: "", title: "Another Round", director: "Thomas Vinterberg", rating: 2, year: 2020, date: "June 2024", letterboxd: "https://boxd.it/lkba", wikipedia: "" },
  { cover: "", title: "Avatar: The Way of Water", director: "James Cameron", rating: 2, year: 2022, date: "January 2023", letterboxd: "https://boxd.it/2E2E", wikipedia: "" },
  { cover: "", title: "Baby Driver", director: "Edgar Wright", rating: 2, year: 2017, date: "July 2017", letterboxd: "https://boxd.it/bhF2", wikipedia: "" },
  { cover: "", title: "Blade Runner 2049", director: "Denis Villeneuve", rating: 2, year: 2017, date: "October 2017", letterboxd: "https://boxd.it/b8wK", wikipedia: "" },
  { cover: "", title: "Cadet Kelly", director: "Larry Shaw", rating: 2, year: 2002, date: "~2005", letterboxd: "https://boxd.it/1OVW", wikipedia: "" },
  { cover: "", title: "Candy Cane Lane", director: "Reginald Hudlin", rating: 2, year: 2023, date: "December 2023", letterboxd: "https://boxd.it/CGHw", wikipedia: "" },
  { cover: "", title: "Charlotte's Web", director: "Gary Winick", rating: 2, year: 2006, date: "2007", letterboxd: "https://boxd.it/1Xn0", wikipedia: "" },
  { cover: "", title: "Confessions of a Teenage Drama Queen", director: "Sara Sugarman", rating: 2, year: 2004, date: "~2005", letterboxd: "https://boxd.it/1UyE", wikipedia: "" },
  { cover: "", title: "Crazy Rich Asians", director: "Jon M. Chu", rating: 2, year: 2018, date: "2019", letterboxd: "https://boxd.it/gfnK", wikipedia: "" },
  { cover: "", title: "Dear John", director: "Lasse Hallström", rating: 2, year: 2010, date: "2012", letterboxd: "https://boxd.it/1zO2", wikipedia: "" },
  { cover: "", title: "Django Unchained", director: "Quentin Tarantino", rating: 2, year: 2012, date: "2013", letterboxd: "https://boxd.it/2cCk", wikipedia: "" },
  { cover: "", title: "Emily the Criminal", director: "John Patton Ford", rating: 2, year: 2022, date: "December 2022", letterboxd: "https://boxd.it/wBOq", wikipedia: "" },
  { cover: "", title: "Eric Andre: Legalize Everything", director: "Kitao Sakurai", rating: 2, year: 2020, date: "July 2020", letterboxd: "https://boxd.it/qj7c", wikipedia: "" },
  { cover: "", title: "Finding Dory", director: "Andrew Stanton", rating: 2, year: 2016, date: "2016", letterboxd: "https://boxd.it/4aAA", wikipedia: "" },
  { cover: "", title: "Finding Nemo", director: "Andrew Stanton", rating: 2, year: 2003, date: "2003", letterboxd: "https://boxd.it/72i", wikipedia: "" },
  { cover: "", title: "Friends with Benefits", director: "Will Gluck", rating: 2, year: 2011, date: "2011", letterboxd: "https://boxd.it/DoK", wikipedia: "" },
  { cover: "", title: "Gaga: Five Foot Two", director: "Chris Moukarbel", rating: 2, year: 2017, date: "January 2022", letterboxd: "https://boxd.it/gWwK", wikipedia: "" },
  { cover: "", title: "High School Musical 2", director: "Kenny Ortega", rating: 2.5, year: 2007, date: "March 2026", letterboxd: "https://boxd.it/1PIu", wikipedia: "" },
  { cover: "", title: "Horton Hears a Who!", director: "Jimmy Hayward & Steve Martino", rating: 2, year: 2008, date: "2009", letterboxd: "https://boxd.it/1SfA", wikipedia: "" },
  { cover: "", title: "Ice Princess", director: "Tim Fywell", rating: 2, year: 2005, date: "2005", letterboxd: "https://boxd.it/1QjA", wikipedia: "" },
  { cover: "", title: "Idiocracy", director: "Mike Judge", rating: 2, year: 2006, date: "September 2022", letterboxd: "https://boxd.it/20RW", wikipedia: "" },
  { cover: "", title: "Inside Out", director: "Pete Docter", rating: 2, year: 2015, date: "May 2020", letterboxd: "https://boxd.it/4KHC", wikipedia: "" },
  { cover: "", title: "Julie & Julia", director: "Nora Ephron", rating: 2, year: 2009, date: "2009", letterboxd: "https://boxd.it/1wXg", wikipedia: "" },
  { cover: "", title: "Lars and the Real Girl", director: "Craig Gillespie", rating: 2, year: 2007, date: "January 2022", letterboxd: "https://boxd.it/21tG", wikipedia: "" },
  { cover: "", title: "Love, Simon", director: "Greg Berlanti", rating: 2, year: 2018, date: "May 2020", letterboxd: "https://boxd.it/g02s", wikipedia: "" },
  { cover: "", title: "Madagascar", director: "Eric Darnell & Tom McGrath", rating: 2, year: 2005, date: "June 2005", letterboxd: "https://boxd.it/29dc", wikipedia: "" },
  { cover: "", title: "Magic Mike", director: "Steven Soderbergh", rating: 2, year: 2012, date: "February 2023", letterboxd: "https://boxd.it/2HvY", wikipedia: "" },
  { cover: "", title: "Magic Mike XXL", director: "Gregory Jacobs", rating: 2, year: 2015, date: "February 2023", letterboxd: "https://boxd.it/7TTS", wikipedia: "" },
  { cover: "", title: "Magnolia", director: "Paul Thomas Anderson", rating: 2, year: 1999, date: "October 2024", letterboxd: "https://boxd.it/2aze", wikipedia: "" },
  { cover: "", title: "Mrs. Doubtfire", director: "Chris Columbus", rating: 2, year: 1993, date: "~2010", letterboxd: "https://boxd.it/29Cw", wikipedia: "" },
  { cover: "", title: "Napoleon Dynamite", director: "Jared Hess", rating: 2, year: 2004, date: "July 2004", letterboxd: "https://boxd.it/20wu", wikipedia: "" },
  { cover: "", title: "Night at the Museum", director: "Shawn Levy", rating: 2, year: 2006, date: "January 2007", letterboxd: "https://boxd.it/28wi", wikipedia: "" },
  { cover: "", title: "One Hundred and One Dalmatians", director: "Wolfgang Reitherman", rating: 2, year: 1961, date: "~1999", letterboxd: "https://boxd.it/1SeC", wikipedia: "" },
  { cover: "", title: "Oppenheimer", director: "Christopher Nolan", rating: 2, year: 2023, date: "February 2024", letterboxd: "https://boxd.it/wUow", wikipedia: "" },
  { cover: "", title: "Planes, Trains and Automobiles", director: "John Hughes", rating: 2, year: 1987, date: "June 2020", letterboxd: "https://boxd.it/26zE", wikipedia: "" },
  { cover: "", title: "Pocahontas", director: "Mike Gabriel & Eric Goldberg", rating: 2, year: 1995, date: "~1999", letterboxd: "https://boxd.it/1W2g", wikipedia: "" },
  { cover: "", title: "Ponyo", director: "Hayao Miyazaki", rating: 2, year: 2008, date: "August 2009", letterboxd: "https://boxd.it/1S0A", wikipedia: "" },
  { cover: "", title: "Pulp Fiction", director: "Quentin Tarantino", rating: 2, year: 1994, date: "~2022", letterboxd: "https://boxd.it/29Pq", wikipedia: "" },
  { cover: "", title: "Salt", director: "Phillip Noyce", rating: 2, year: 2010, date: "2010", letterboxd: "https://boxd.it/1rtK", wikipedia: "" },
  { cover: "", title: "Snowden", director: "Oliver Stone", rating: 2, year: 2016, date: "June 2020", letterboxd: "https://boxd.it/9CWO", wikipedia: "" },
  { cover: "", title: "Steve Jobs", director: "Danny Boyle", rating: 2, year: 2015, date: "September 2016", letterboxd: "https://boxd.it/araG", wikipedia: "" },
  { cover: "", title: "Tarzan", director: "Chris Buck & Kevin Lima", rating: 2, year: 1999, date: "~1999", letterboxd: "https://boxd.it/18YO", wikipedia: "" },
  { cover: "", title: "The Aristocats", director: "Wolfgang Reitherman", rating: 2, year: 1970, date: "~1999", letterboxd: "https://boxd.it/1X3Y", wikipedia: "" },
  { cover: "", title: "The Great Hack", director: "Karim Amer & Jehane Noujaim", rating: 2, year: 2019, date: "June 2020", letterboxd: "https://boxd.it/kL8g", wikipedia: "" },
  { cover: "", title: "The Incredibles", director: "Brad Bird", rating: 2, year: 2004, date: "November 2004", letterboxd: "https://boxd.it/1XLm", wikipedia: "" },
  { cover: "", title: "The Lion King", director: "Roger Allers & Rob Minkoff", rating: 2, year: 1994, date: "~2000", letterboxd: "https://boxd.it/201Q", wikipedia: "" },
  { cover: "", title: "The Princess Diaries 2: Royal Engagement", director: "Garry Marshall", rating: 2, year: 2004, date: "2004", letterboxd: "https://boxd.it/1UyY", wikipedia: "" },
  { cover: "", title: "The Santa Clause", director: "John Pasquin", rating: 2, year: 1994, date: "January 2022", letterboxd: "https://boxd.it/1TWK", wikipedia: "" },
  { cover: "", title: "The Shaggy Dog", director: "Brian Robbins", rating: 2, year: 2006, date: "2006", letterboxd: "https://boxd.it/1XaK", wikipedia: "" },
  { cover: "", title: "The Social Dilemma", director: "Jeff Orlowski", rating: 2, year: 2020, date: "January 2021", letterboxd: "https://boxd.it/opQI", wikipedia: "" },
  { cover: "", title: "The Spectacular Now", director: "James Ponsoldt", rating: 2, year: 2013, date: "2014", letterboxd: "https://boxd.it/4VSG", wikipedia: "" },
  { cover: "", title: "The Sword in the Stone", director: "Wolfgang Reitherman", rating: 2, year: 1963, date: "~1999", letterboxd: "https://boxd.it/1ZdG", wikipedia: "" },
  { cover: "", title: "The To Do List", director: "Maggie Carey", rating: 2, year: 2013, date: "~2014", letterboxd: "https://boxd.it/4dAo", wikipedia: "" },
  { cover: "", title: "The War with Grandpa", director: "Tim Hill", rating: 2, year: 2020, date: "October 2020", letterboxd: "https://boxd.it/f2jy", wikipedia: "" },
  { cover: "", title: "The Woman in Black", director: "James Watkins", rating: 2, year: 2012, date: "~2012", letterboxd: "https://boxd.it/4wu", wikipedia: "" },
  { cover: "", title: "Uncut Gems", director: "Josh & Benny Safdie", rating: 2, year: 2019, date: "May 2022", letterboxd: "https://boxd.it/gXGc", wikipedia: "" },
  { cover: "", title: "Zenon: Girl of the 21st Century", director: "Kenneth Johnson", rating: 2, year: 1999, date: "~2005", letterboxd: "https://boxd.it/1djc", wikipedia: "" },
  { cover: "", title: "101 Dalmatians", director: "Stephen Herek", rating: 1.5, year: 1996, date: "~1999", letterboxd: "https://boxd.it/1TgO", wikipedia: "" },
  { cover: "", title: "A Bad Moms Christmas", director: "Jon Lucas & Scott Moore", rating: 1.5, year: 2017, date: "November 2022", letterboxd: "https://boxd.it/fiHG", wikipedia: "" },
  { cover: "", title: "A Christmas Story", director: "Bob Clark", rating: 1.5, year: 1983, date: "January 2025", letterboxd: "https://boxd.it/29sw", wikipedia: "" },
  { cover: "", title: "Alice in Wonderland", director: "Clyde Geronimi", rating: 1.5, year: 1951, date: "~1999", letterboxd: "https://boxd.it/1Spq", wikipedia: "" },
  { cover: "", title: "Another Cinderella Story", director: "Damon Santostefano", rating: 1.5, year: 2008, date: "September 2008", letterboxd: "https://boxd.it/1MHS", wikipedia: "" },
  { cover: "", title: "Bambi", director: "David Hand", rating: 1.5, year: 1942, date: "~1999", letterboxd: "https://boxd.it/25AQ", wikipedia: "" },
  { cover: "", title: "Barbie", director: "Greta Gerwig", rating: 1.5, year: 2023, date: "July 2023", letterboxd: "https://boxd.it/bCLK", wikipedia: "" },
  { cover: "", title: "Bee Movie", director: "Simon J. Smith & Steve Hickner", rating: 1.5, year: 2007, date: "November 2007", letterboxd: "https://boxd.it/22Vw", wikipedia: "" },
  { cover: "", title: "Bombshell", director: "Jay Roach", rating: 1.5, year: 2019, date: "January 2020", letterboxd: "https://boxd.it/j5YC", wikipedia: "" },
  { cover: "", title: "Brave", director: "Mark Andrews & Brenda Chapman", rating: 1.5, year: 2012, date: "~2018", letterboxd: "https://boxd.it/bVG", wikipedia: "" },
  { cover: "", title: "Bring It On Again", director: "Damon Santostefano", rating: 1.5, year: 2004, date: "June 2020", letterboxd: "https://boxd.it/1RKW", wikipedia: "" },
  { cover: "", title: "Bring It On: All or Nothing", director: "Steve Rash", rating: 1.5, year: 2006, date: "June 2020", letterboxd: "https://boxd.it/1Umo", wikipedia: "" },
  { cover: "", title: "Bring It On: In It to Win It", director: "Steve Rash", rating: 1.5, year: 2007, date: "June 2020", letterboxd: "https://boxd.it/1My2", wikipedia: "" },
  { cover: "", title: "Charlie and the Chocolate Factory", director: "Tim Burton", rating: 1.5, year: 2005, date: "~2008", letterboxd: "https://boxd.it/2b68", wikipedia: "" },
  { cover: "", title: "Chicken Little", director: "Mark Dindal", rating: 1.5, year: 2005, date: "November 2005", letterboxd: "https://boxd.it/1Xnu", wikipedia: "" },
  { cover: "", title: "Cow Belles", director: "Francine McDougall", rating: 1.5, year: 2006, date: "~2008", letterboxd: "https://boxd.it/1wXq", wikipedia: "" },
  { cover: "", title: "Definitely, Maybe", director: "Adam Brooks", rating: 1.5, year: 2008, date: "~2022", letterboxd: "https://boxd.it/20eU", wikipedia: "" },
  { cover: "", title: "Doctor Strange", director: "Scott Derrickson", rating: 1.5, year: 2016, date: "October 2016", letterboxd: "https://boxd.it/8MH8", wikipedia: "" },
  { cover: "", title: "Dumbo", director: "Ben Sharpsteen", rating: 1.5, year: 1941, date: "~1999", letterboxd: "https://boxd.it/1U2o", wikipedia: "" },
  { cover: "", title: "Elvis", director: "Baz Luhrmann", rating: 1.5, year: 2022, date: "February 2023", letterboxd: "https://boxd.it/mK4w", wikipedia: "" },
  { cover: "", title: "Freaky Friday", director: "Gary Nelson", rating: 1.5, year: 1976, date: "~2007", letterboxd: "https://boxd.it/ihtu", wikipedia: "" },
  { cover: "", title: "Glass Onion", director: "Rian Johnson", rating: 1.5, year: 2022, date: "December 2022", letterboxd: "https://boxd.it/oCkK", wikipedia: "" },
  { cover: "", title: "I'm Not There", director: "Todd Haynes", rating: 1.5, year: 2007, date: "January 2025", letterboxd: "https://boxd.it/24Ys", wikipedia: "" },
  { cover: "", title: "Ice Age", director: "Chris Wedge", rating: 1.5, year: 2002, date: "~2007", letterboxd: "https://boxd.it/2apS", wikipedia: "" },
  { cover: "", title: "John Tucker Must Die", director: "Betty Thomas", rating: 1.5, year: 2006, date: "September 2022", letterboxd: "https://boxd.it/1Z2S", wikipedia: "" },
  { cover: "", title: "Just My Luck", director: "Donald Petrie", rating: 1.5, year: 2006, date: "~2008", letterboxd: "https://boxd.it/1XgS", wikipedia: "" },
  { cover: "", title: "Lady Bird", director: "Greta Gerwig", rating: 1.5, year: 2017, date: "September 2017", letterboxd: "https://boxd.it/dGNE", wikipedia: "" },
  { cover: "", title: "Lemonade Mouth", director: "Patricia Riggen", rating: 1.5, year: 2011, date: "~2012", letterboxd: "https://boxd.it/4bG", wikipedia: "" },
  { cover: "", title: "Minions: The Rise of Gru", director: "Kyle Balda", rating: 1.5, year: 2022, date: "July 2022", letterboxd: "https://boxd.it/fz9w", wikipedia: "" },
  { cover: "", title: "Pixel Perfect", director: "Mark A.Z. Dippé", rating: 1.5, year: 2004, date: "~2005", letterboxd: "https://boxd.it/45sm", wikipedia: "" },
  { cover: "", title: "Ratatouille", director: "Brad Bird", rating: 1.5, year: 2007, date: "~2023", letterboxd: "https://boxd.it/27ww", wikipedia: "" },
  { cover: "", title: "Step Brothers", director: "Adam McKay", rating: 1.5, year: 2008, date: "January 2022", letterboxd: "https://boxd.it/1SsE", wikipedia: "" },
  { cover: "", title: "Switching Goals", director: "David Steinberg", rating: 1.5, year: 1999, date: "~2000", letterboxd: "https://boxd.it/1aZ0", wikipedia: "" },
  { cover: "", title: "The Big Sick", director: "Michael Showalter", rating: 1.5, year: 2017, date: "August 2017", letterboxd: "https://boxd.it/eHvy", wikipedia: "" },
  { cover: "", title: "The Hangover", director: "Todd Phillips", rating: 1.5, year: 2009, date: "~2010", letterboxd: "https://boxd.it/1GjK", wikipedia: "" },
  { cover: "", title: "The Holiday", director: "Nancy Meyers", rating: 1.5, year: 2006, date: "November 2023", letterboxd: "https://boxd.it/28ye", wikipedia: "" },
  { cover: "", title: "The Mask", director: "Chuck Russell", rating: 1.5, year: 1994, date: "~2005", letterboxd: "https://boxd.it/29rS", wikipedia: "" },
  { cover: "", title: "The Sisterhood of the Traveling Pants", director: "Ken Kwapis", rating: 1.5, year: 2005, date: "~2010", letterboxd: "https://boxd.it/1XPo", wikipedia: "" },
  { cover: "", title: "The Unbearable Weight of Massive Talent", director: "Tom Gormican", rating: 1.5, year: 2022, date: "February 2023", letterboxd: "https://boxd.it/o6eK", wikipedia: "" },
  { cover: "", title: "Uptown Girls", director: "Boaz Yakin", rating: 1.5, year: 2003, date: "May 2024", letterboxd: "https://boxd.it/1N64", wikipedia: "" },
  { cover: "", title: "We're the Millers", director: "Rawson Marshall Thurber", rating: 1.5, year: 2013, date: "~2014", letterboxd: "https://boxd.it/4srQ", wikipedia: "" },
  { cover: "", title: "Wreck-It Ralph", director: "Rich Moore", rating: 1.5, year: 2012, date: "~2013", letterboxd: "https://boxd.it/2TTS", wikipedia: "" },
  { cover: "", title: "22 Jump Street", director: "Phil Lord & Christopher Miller", rating: 1, year: 2014, date: "~2015", letterboxd: "https://boxd.it/5Fvy", wikipedia: "" },
  { cover: "", title: "A Bug's Life", director: "John Lasseter", rating: 1, year: 1998, date: "~1999", letterboxd: "https://boxd.it/1Yyy", wikipedia: "" },
  { cover: "", title: "All Dogs Go to Heaven", director: "Don Bluth", rating: 1, year: 1989, date: "~2003", letterboxd: "https://boxd.it/1TIo", wikipedia: "" },
  { cover: "", title: "Avatar", director: "James Cameron", rating: 1, year: 2009, date: "January 2010", letterboxd: "https://boxd.it/1Efm", wikipedia: "" },
  { cover: "", title: "Beauty and the Beast", director: "Gary Trousdale & Kirk Wise", rating: 1, year: 1991, date: "~1999", letterboxd: "https://boxd.it/1XhG", wikipedia: "" },
  { cover: "", title: "Frozen", director: "Chris Buck & Jennifer Lee", rating: 1, year: 2013, date: "December 2013", letterboxd: "https://boxd.it/3GNa", wikipedia: "" },
  { cover: "", title: "Hairspray", director: "Adam Shankman", rating: 1, year: 2007, date: "~2008", letterboxd: "https://boxd.it/261M", wikipedia: "" },
  { cover: "", title: "Hannah Montana: The Movie", director: "Peter Chelsom", rating: 1, year: 2009, date: "April 2009", letterboxd: "https://boxd.it/1Hx4", wikipedia: "" },
  { cover: "", title: "Harry Potter and the Chamber of Secrets", director: "Chris Columbus", rating: 1, year: 2002, date: "2002", letterboxd: "https://boxd.it/29QI", wikipedia: "" },
  { cover: "", title: "Lady and the Tramp", director: "Clyde Geronimi", rating: 1, year: 1955, date: "~1999", letterboxd: "https://boxd.it/1Wv8", wikipedia: "" },
  { cover: "", title: "Lemony Snicket's A Series of Unfortunate Events", director: "Brad Silberling", rating: 1, year: 2004, date: "January 2005", letterboxd: "https://boxd.it/1T7s", wikipedia: "" },
  { cover: "", title: "Lilo & Stitch", director: "Chris Sanders & Dean DeBlois", rating: 1, year: 2002, date: "July 2002", letterboxd: "https://boxd.it/1TAY", wikipedia: "" },
  { cover: "", title: "LOL", director: "Lisa Azuelos", rating: 1, year: 2012, date: "May 2012", letterboxd: "https://boxd.it/2Nas", wikipedia: "" },
  { cover: "", title: "March of the Penguins", director: "Luc Jacquet", rating: 1, year: 2005, date: "May 2005", letterboxd: "https://boxd.it/28lE", wikipedia: "" },
  { cover: "", title: "Marley & Me", director: "David Frankel", rating: 1, year: 2008, date: "~2009", letterboxd: "https://boxd.it/1Ola", wikipedia: "" },
  { cover: "", title: "Miss Americana", director: "Lana Wilson", rating: 1, year: 2020, date: "February 2020", letterboxd: "https://boxd.it/oifq", wikipedia: "" },
  { cover: "", title: "Monsters, Inc.", director: "Pete Docter", rating: 1, year: 2001, date: "~2005", letterboxd: "https://boxd.it/2a46", wikipedia: "" },
  { cover: "", title: "Pinocchio", director: "Ben Sharpsteen & Hamilton Luske", rating: 1, year: 1940, date: "~2000", letterboxd: "https://boxd.it/1V8C", wikipedia: "" },
  { cover: "", title: "Project X", director: "Nima Nourizadeh", rating: 1, year: 2012, date: "2012", letterboxd: "https://boxd.it/neO", wikipedia: "" },
  { cover: "", title: "Rango", director: "Gore Verbinski", rating: 1, year: 2011, date: "2013", letterboxd: "https://boxd.it/QPk", wikipedia: "" },
  { cover: "", title: "Robots", director: "Chris Wedge", rating: 1, year: 2005, date: "April 2005", letterboxd: "https://boxd.it/1Xve", wikipedia: "" },
  { cover: "", title: "RV", director: "Barry Sonnenfeld", rating: 1, year: 2006, date: "May 2006", letterboxd: "https://boxd.it/1YrW", wikipedia: "" },
  { cover: "", title: "Sleeping Beauty", director: "Clyde Geronimi", rating: 1, year: 1959, date: "~1999", letterboxd: "https://boxd.it/1V9A", wikipedia: "" },
  { cover: "", title: "Snow White and the Seven Dwarfs", director: "David Hand", rating: 1, year: 1937, date: "~1999", letterboxd: "https://boxd.it/2arO", wikipedia: "" },
  { cover: "", title: "Super Size Me", director: "Morgan Spurlock", rating: 1, year: 2004, date: "~2010", letterboxd: "https://boxd.it/1YQC", wikipedia: "" },
  { cover: "", title: "The Cabin in the Woods", director: "Drew Goddard", rating: 1, year: 2011, date: "~2012", letterboxd: "https://boxd.it/1zOc", wikipedia: "" },
  { cover: "", title: "The Fault in Our Stars", director: "Josh Boone", rating: 1, year: 2014, date: "June 2014", letterboxd: "https://boxd.it/6BQa", wikipedia: "" },
  { cover: "", title: "The Great Gatsby", director: "Baz Luhrmann", rating: 1, year: 2013, date: "~2014", letterboxd: "https://boxd.it/JY", wikipedia: "" },
  { cover: "", title: "The Last Song", director: "Julie Anne Robinson", rating: 1, year: 2010, date: "April 2010", letterboxd: "https://boxd.it/1c5I", wikipedia: "" },
  { cover: "", title: "The Perks of Being a Wallflower", director: "Stephen Chbosky", rating: 1, year: 2012, date: "October 2012", letterboxd: "https://boxd.it/2ZA8", wikipedia: "" },
  { cover: "", title: "Trainwreck", director: "Judd Apatow", rating: 1, year: 2015, date: "September 2015", letterboxd: "https://boxd.it/8bdA", wikipedia: "" },
  { cover: "", title: "World War Z", director: "Marc Forster", rating: 1, year: 2013, date: "July 2013", letterboxd: "https://boxd.it/2p2E", wikipedia: "" },
  { cover: "", title: "21 Jump Street", director: "Phil Lord & Christopher Miller", rating: 0.5, year: 2012, date: "March 2012", letterboxd: "https://boxd.it/J0", wikipedia: "" },
  { cover: "", title: "American Sniper", director: "Clint Eastwood", rating: 0.5, year: 2014, date: "January 2015", letterboxd: "https://boxd.it/5LDy", wikipedia: "" },
  { cover: "", title: "Anacondas: The Hunt for the Blood Orchid", director: "Dwight H. Little", rating: 0.5, year: 2004, date: "~2019", letterboxd: "https://boxd.it/1Uic", wikipedia: "" },
  { cover: "", title: "Bolt", director: "Byron Howard & Chris Williams", rating: 0.5, year: 2008, date: "December 2008", letterboxd: "https://boxd.it/1QXg", wikipedia: "" },
  { cover: "", title: "Bridesmaids", director: "Paul Feig", rating: 0.5, year: 2011, date: "~2025", letterboxd: "https://boxd.it/rac", wikipedia: "" },
  { cover: "", title: "Cars", director: "John Lasseter", rating: 0.5, year: 2006, date: "June 2006", letterboxd: "https://boxd.it/29ho", wikipedia: "" },
  { cover: "", title: "Cloud 9", director: "Paul Hoen", rating: 0.5, year: 2014, date: "2014", letterboxd: "https://boxd.it/7cZ4", wikipedia: "" },
  { cover: "", title: "Deadpool", director: "Tim Miller", rating: 0.5, year: 2016, date: "February 2014", letterboxd: "https://boxd.it/9fOC", wikipedia: "" },
  { cover: "", title: "Despicable Me", director: "Pierre Coffin & Chris Renaud", rating: 0.5, year: 2010, date: "July 2010", letterboxd: "https://boxd.it/1DD8", wikipedia: "" },
  { cover: "", title: "Horrible Bosses", director: "Seth Gordon", rating: 0.5, year: 2011, date: "~2012", letterboxd: "https://boxd.it/Ba2", wikipedia: "" },
  { cover: "", title: "Just Go with It", director: "Dennis Dugan", rating: 0.5, year: 2011, date: "February 2011", letterboxd: "https://boxd.it/Doq", wikipedia: "" },
  { cover: "", title: "Materialists", director: "Celine Song", rating: 0.5, year: 2025, date: "August 2025", letterboxd: "https://boxd.it/GZlW", wikipedia: "" },
  { cover: "", title: "Mean Girls 2", director: "Melanie Mayron", rating: 0.5, year: 2011, date: "~2011", letterboxd: "https://boxd.it/Bje", wikipedia: "" },
  { cover: "", title: "Megamind", director: "Tom McGrath", rating: 0.5, year: 2010, date: "November 2010", letterboxd: "https://boxd.it/16Sk", wikipedia: "" },
  { cover: "", title: "Over the Hedge", director: "Tim Johnson & Karey Kirkpatrick", rating: 1.5, year: 2006, date: "May 2006", letterboxd: "https://boxd.it/20QY", wikipedia: "" },
  { cover: "", title: "Paper Towns", director: "Jake Schreier", rating: 1.5, year: 2015, date: "July 2015", letterboxd: "https://boxd.it/8T5g", wikipedia: "" },
  { cover: "", title: "Sky High", director: "Mike Mitchell", rating: 1, year: 2005, date: "January 2006", letterboxd: "https://boxd.it/1TNI", wikipedia: "" },
  { cover: "", title: "Spring Breakers", director: "Harmony Korine", rating: 1.5, year: 2012, date: "April 2013", letterboxd: "https://boxd.it/421s", wikipedia: "" },
  { cover: "", title: "The Hunger Games", director: "Gary Ross", rating: 1.5, year: 2012, date: "April 2012", letterboxd: "https://boxd.it/2uds", wikipedia: "" },
  { cover: "", title: "The Vow", director: "Michael Sucsy", rating: 1.5, year: 2012, date: "February 2012", letterboxd: "https://boxd.it/2o4Y", wikipedia: "" },
  { cover: "", title: "Twilight", director: "Catherine Hardwicke", rating: 1.5, year: 2008, date: "September 2022", letterboxd: "https://boxd.it/1Zui", wikipedia: "" },
  { cover: "", title: "Valentine's Day", director: "Garry Marshall", rating: 1.5, year: 2010, date: "~2019", letterboxd: "https://boxd.it/1gui", wikipedia: "" },
  { cover: "", title: "We Are Your Friends", director: "Max Joseph", rating: 0.5, year: 2015, date: "September 2015", letterboxd: "https://boxd.it/9AlG", wikipedia: "" }
];
