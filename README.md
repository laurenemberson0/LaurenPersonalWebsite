# Lauren Emberson — personal website

A simple, hand-built website. No fancy tools, no accounts to manage — just a
few files that any web browser can read. This guide assumes you've never
touched code before. Take it one step at a time.

---

## What's in here (the map)

You do **not** need to understand all of this. The only file you'll ever edit
is **`js/data.js`**.

```
index.html      ← the landing page (rotating photos + welcome text)
writing.html    ← the Writing page
library.html    ← the Library page (music + books)

css/styles.css  ← the look & feel (colours, fonts, spacing). Leave it alone.

js/data.js      ← ★ THE ONLY FILE YOU EDIT ★  (your photos, colours, writing,
                   albums, books, and links all live here)
js/shared.js    ← behind-the-scenes helper. Leave it alone.
js/main.js      ← runs the photo slideshow. Leave it alone.
js/writing.js   ← builds the Writing page. Leave it alone.
js/library.js   ← builds the Library page. Leave it alone.

images/
  slideshow/    ← put your landing-page photos here
  albums/       ← put your album cover images here
  books/        ← put your book cover images here

CNAME           ← tells the web your address is laurenemberson.ca
```

---

## The big picture (how a website works, in one paragraph)

Your website is just a folder of files. GitHub will store those files and,
using a free feature called **GitHub Pages**, show them to anyone who visits
your web address. When you change a file and "push" it to GitHub, your live
site updates automatically a minute or two later. That's the whole loop:
**edit a file → push to GitHub → site updates.**

---

## Part 1 — See it on your own computer first (optional but reassuring)

You don't need the internet to preview your site.

1. Open the project folder in **VS Code** (File → Open Folder → pick the
   `LaurenPersonalWebsite` folder).
2. Double-click `index.html` in your computer's file explorer — it opens in
   your web browser. That's your site!

> Tip: for the smoothest preview, install the free **"Live Server"** extension
> in VS Code (click the squares icon on the left, search "Live Server",
> install). Then right-click `index.html` → **"Open with Live Server"**. It
> auto-refreshes every time you save.

---

## Part 2 — Make it yours (editing `js/data.js`)

Open `js/data.js` in VS Code. Everything is labelled with plain-English
comments. You can:

- **Change the photos:** drop your image files into `images/slideshow/` and
  update the file names in the `SLIDES` list.
- **Set the sidebar colours:** change the `sidebarColor` hex codes so they
  match each photo. The site picks readable text colour for you automatically.
- **Add writing:** edit the `WRITING` list.
- **Add albums & books:** edit the `MUSIC` and `BOOKS` lists, including your
  star ratings and the Apple Music / Spotify / Wikipedia / Goodreads links.
- **Set the Photo button + "Send Me Away" list:** near the top of the file.

Save the file (Ctrl+S / Cmd+S) and refresh your browser to see changes.

> **Golden rule of editing:** only change the text inside "quotes". Keep the
> commas, curly braces `{ }`, and square brackets `[ ]` where they are. If
> something breaks, it's almost always a missing comma or quote — undo with
> Ctrl+Z / Cmd+Z and try again.

---

## Part 3 — Put it online (one-time setup)

### Step A — Get these files into your GitHub repository

If a helper has already pushed these files to your `LaurenPersonalWebsite`
repository, skip to Step B. Otherwise, the easiest no-typing way:

1. Go to your repository on **github.com**.
2. Click **Add file → Upload files**.
3. Drag the whole project folder's contents in, then click **Commit changes**.

(Later, once comfortable, VS Code's built-in "Source Control" tab lets you
push changes with a couple of clicks.)

### Step B — Turn on GitHub Pages

1. In your repository on github.com, click **Settings** (top menu).
2. In the left menu, click **Pages**.
3. Under **"Build and deployment" → "Source"**, choose **"Deploy from a
   branch."**
4. Under **Branch**, pick your branch (e.g. `main`) and the folder **`/root`**,
   then click **Save**.
5. Wait 1–2 minutes. GitHub shows a green link like
   `https://laurenemberson0.github.io/LaurenPersonalWebsite/`. Click it —
   your site is live on the internet! 🎉

### Step C — Connect your Squarespace domain (laurenemberson.ca)

There are two halves: tell GitHub your domain, and tell Squarespace where to
point it.

**On GitHub** (already done for you — the `CNAME` file in this project sets
your domain to `laurenemberson.ca`). You can confirm it under
**Settings → Pages → Custom domain**.

**On Squarespace** (this is the part you do):

1. Log in to Squarespace → your domain **laurenemberson.ca** → **DNS Settings**
   (sometimes called "DNS" or "Advanced DNS").
2. Add these **four "A" records**. Each has Host `@` and one of these IP
   addresses (these are GitHub's official addresses):
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Add one **"CNAME" record**: Host `www`, pointing to
   `laurenemberson0.github.io` (your GitHub username + `.github.io`).
4. Save. DNS changes can take anywhere from a few minutes to a day to work.
5. Back on GitHub → **Settings → Pages**, tick **"Enforce HTTPS"** once it
   becomes available (gives you the padlock 🔒 and `https://`).

That's it. Visiting **laurenemberson.ca** now shows your site.

> Note: if Squarespace is currently hosting a site on that domain, pointing the
> DNS to GitHub will replace what visitors see. Your Squarespace domain
> registration stays exactly as it is — you're only changing where it points.

---

## Everyday updates (after setup)

1. Edit `js/data.js` (or add images).
2. Push the change to GitHub (upload via the website, or use VS Code's Source
   Control tab).
3. Wait ~1 minute. Your live site updates itself.

---

## If something looks wrong

- **A page is blank or broken:** you probably deleted a comma, quote, bracket,
  or brace in `js/data.js`. Press Undo until it works.
- **An image doesn't show:** the file name in `data.js` must match the real
  file name in the `images/` folder *exactly* (capital letters count).
- **Colours don't change:** make sure each hex code starts with `#` and is
  inside "quotes".

You've got this. Kick up your feet. 🐌
