# Save the Date — Wedding Invitation Website

An interactive, mobile-first "Save the Date" wedding website in a warm
champagne / ivory / blush palette with an editorial, luxury-stationery
feel. Opens with a romantic headline and a tap-to-open envelope, reveals
an ornately framed invitation card (names, oval photo, date), a message
from the couple, a live countdown with "Add to Calendar" (Google
Calendar + `.ics`), and expandable details for the Ceremony and
Reception (separate venues, times, and map links). A fixed top-right
pair of switches lets guests toggle dark/light mode and an "Elegant" /
"Grand" (festive red-gold-green) color palette, with the choice
remembered on their next visit. No build step — ready to host
anywhere, including GitHub Pages.

## Structure

```
save_the_date/
├── index.html                     # markup (content + SEO/social meta tags)
├── styles.css                     # champagne/ivory/blush styling, responsive + a11y
├── script.js                      # CONFIG object + all interactivity
├── assets/
│   ├── placeholder-couple.svg     # oval hero photo placeholder — replace with your photo
│   ├── placeholder-photo.svg      # (unused by default, kept for extra photos)
│   ├── og-image.svg               # social share preview card placeholder
│   └── placeholder.svg            # (unused, from earlier generic template)
└── README.md
```

This folder lives **inside** the `kishorebolt03.github.io` repo (the
user-site repo already deployed on GitHub Pages), as a subfolder — not
as its own repo. See "Host on GitHub Pages" below.

## Editing your content (one place for most things)

Almost everything on the page — names, date, ceremony venue/time,
reception venue/time, the message to guests, and the main photo — is
driven by a single `CONFIG` object at the top of **`script.js`**:

```js
const CONFIG = {
  partnerOne: "Abhinavkishore GV",
  partnerTwo: "Niharika SK",
  weddingDateISO: "2027-02-25T09:00:00+05:30",

  ceremonyVenue: "Guruvayur Temple",
  ceremonyCity: "Guruvayur",
  ceremonyCountry: "Kerala, India",
  ceremonyTime: "6:00 AM",

  receptionVenue: "Arav Hall",
  receptionCity: "Coimbatore",
  receptionCountry: "Tamil Nadu, India",
  receptionTime: "6:00 PM",

  message: "Love has brought us together, ...",

  mainPhoto: "assets/placeholder-couple.svg",
  mainPhotoAlt: "Portrait of Abhinavkishore and Niharika",
  calendarDurationHours: 12,
};
```

Change a value once and it updates everywhere it appears on the page
(card, message, countdown target, accordion panels, calendar links,
footer, map links) — the HTML uses `data-config="..."` attributes that
`script.js` fills in automatically. **This also updates the live
countdown and "Add to Calendar" links** — just edit `weddingDateISO`
(keep the timezone offset, e.g. `+05:30`, so the countdown is correct
for every guest). `weddingDateISO` is treated as the ceremony start
time; the ceremony and reception are assumed to be the same day.

### Things that must be edited separately

Social previews on WhatsApp, Instagram, iMessage, etc. read the raw
HTML `<head>` and do **not** run JavaScript, so these need a manual
edit in `index.html`:

- `<title>` and `<meta name="description">`
- `og:title`, `og:description`, `og:image`, `og:url`
- `twitter:title`, `twitter:description`, `twitter:image`
- `<link rel="canonical" href="...">`

`CONFIG.message` in `script.js` holds the free-form note to guests
shown in the **A Message From the Couple** section (between the main
card and the countdown) — edit it there, it's a single string so it
stays in `CONFIG` rather than needing a separate HTML edit.

## Photos

- `assets/placeholder-couple.svg` → your real couple photo. Update
  `CONFIG.mainPhoto` in `script.js` to point at it (e.g.
  `assets/couple.jpg`). The photo is shown in an oval frame; a photo
  with the couple roughly centered works best.
- `assets/og-image.svg` → the social-share preview card. Many apps
  (notably WhatsApp/Facebook) render social previews more reliably as
  **JPG/PNG at 1200×630**, so consider exporting a PNG version of your
  own design at that size and pointing `og:image` / `twitter:image` at
  it.

## Colors & type

All colors are CSS custom properties at the top of `styles.css`
(`:root { --ivory: ...; --champagne: ...; --blush: ...; --gold: ...; }`)
— change them there to re-theme the whole site. Headlines use an
italic serif (`Playfair Display`), supporting/label text uses a
minimal small-caps-style sans (`Jost`), and body copy uses
`Cormorant Garamond`.

## Interactive features

- **Opening screen** — romantic headline, a delicate ring motif, and a
  tap-to-open envelope with a "Tap to open" control that's a real
  `<button>` (works with mouse, touch, and keyboard — Enter/Space).
- **Envelope-opening animation** — smooth paper-opening transition with
  an optional, very soft chime (plays only on the user's tap, never
  autoplays, and is wrapped so the site works identically with sound
  blocked or unavailable).
- **Main invitation card** — ornamental double-border frame, oval photo,
  italic serif names, and a "Made with love" footer.
- **Live countdown** — days / hours / minutes / seconds, updates every
  second.
- **Add to Calendar** — a small popover with "Google Calendar" (opens a
  pre-filled event in a new tab) and "Apple / Outlook (.ics)" (downloads
  a calendar file). Closes on outside click or <kbd>Esc</kbd>.
- **Expandable details** — native `<details>/<summary>` accordion for
  Venue, Location (with a "View on map" link), Ceremony Time, Reception
  Time, Dress Code, Travel & Accommodation, RSVP, and a message to
  guests. Fully keyboard-operable by default.
- **Scroll reveal** — gentle fade/slide-in as sections enter the
  viewport.
- **Accessibility** — visible focus states, a "Skip to invitation" link,
  focus is moved into the invitation once it opens, and the whole
  experience respects `prefers-reduced-motion` (animations and
  transitions collapse to near-instant, and the optional chime is
  skipped).
- **Responsive** — mobile-first (tuned for ~390px), with a wider
  two-column layout on desktop. No horizontal scrolling at any width.
- **Zoom-safe layout** — every box size that used to be a fixed pixel
  value (the envelope, the oval photo, the countdown boxes, the
  calendar popover, dividers, etc.) now uses `clamp()`/`min()`/fluid
  `aspect-ratio` instead, with extra breakpoints below 360px and 300px.
  Because browser page-zoom (and some OS "larger text" settings)
  actually change the effective layout width the page sees, this keeps
  everything scaling smoothly with no clipping, overlap, or horizontal
  scroll from very zoomed-in (~280px effective width) to zoomed-out
  desktop sizes. Tap targets (buttons, accordion headers, calendar menu
  items) all keep a 44px minimum height for comfortable touch use, and
  safe-area insets are respected on notched phones.

## Preview locally

```bash
cd reel-landing-site
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Host on GitHub Pages

This folder is already inside `kishorebolt03.github.io`, which is a
**user-site repo** (`<username>.github.io`) and is already configured
for GitHub Pages (deploying from the repo root). You don't need a new
repo or a new Pages setup — you just need to commit and push this
folder like any other change to that repo:

```bash
cd /Users/abhinavkishoregovind/workspace/kishorebolt03.github.io
git add save_the_date
git commit -m "Add save the date invitation site"
git push origin master
```

Once pushed, it will be live at:

```
https://kishorebolt03.github.io/save_the_date/
```

That URL is already set as the `canonical` / `og:url` / `og:image` /
`twitter:image` values in `index.html`. If you ever rename this folder
or move the site elsewhere, update those four values to match.

### If you'd rather it be its own standalone repo instead

1. `git init` inside this folder, `git add .`, `git commit`, create a
   new empty GitHub repo, then `git remote add origin <url>` and
   `git push -u origin main`.
2. In that repo: **Settings → Pages** → Source: `Deploy from a branch`,
   branch `main`, folder `/ (root)`.
3. The site will be live at `https://<username>.github.io/<repo-name>/`
   — update the canonical/OG/Twitter URLs in `index.html` to match.
