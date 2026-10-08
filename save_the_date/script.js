/* =====================================================================
   CONFIG — edit everything here. The page wires itself up automatically
   from this single object (see `data-config="..."` attributes in the
   HTML). Note: <meta> SEO/social-share tags in <head> are static HTML
   (crawlers for WhatsApp/Instagram/etc. don't run JS), so update those
   separately — see README.md for exactly which lines to change.
   ===================================================================== */
const CONFIG = {
  // ---- Couple ----
  partnerOne: "Abhinavkishore GV",
  partnerTwo: "Niharika SK",

  // ---- Date ----
  // ISO 8601, include a timezone offset so the countdown & calendar
  // links are correct no matter where a guest is viewing from. This is
  // the ceremony start — it's what the live countdown counts down to.
  weddingDateISO: "2027-02-25T09:00:00+05:30",

  // ---- Ceremony ----
  ceremonyVenue: "Guruvayur Temple",
  ceremonyCity: "Guruvayur",
  ceremonyCountry: "Kerala, India",
  ceremonyTime: "6:00 AM",

  // ---- Reception ----
  // Assumed to be the same day as the ceremony — update weddingDateISO's
  // date portion too if that's not the case.
  receptionVenue: "Arav Hall",
  receptionCity: "Coimbatore",
  receptionCountry: "Tamil Nadu, India",
  receptionTime: "6:00 PM",

  // ---- A short note to your guests ----
  message:
    "Love has brought us together, and we can't wait to begin this beautiful journey as one. We would be so happy to have your blessings and company as we say \u2018I do\u2019.",

  // ---- Photo ----
  mainPhoto: "assets/placeholder-couple.svg",
  mainPhotoAlt: "Portrait of Abhinavkishore and Niharika",

  // ---- Calendar event ----
  // Spans from the ceremony start through the end of the reception.
  calendarDurationHours: 12,
};

/* ---- Derived values (computed once, do not edit) ---- */
CONFIG.coupleNames = `${CONFIG.partnerOne} & ${CONFIG.partnerTwo}`;
CONFIG.ceremonyLocationLine = `${CONFIG.ceremonyCity}, ${CONFIG.ceremonyCountry}`;
CONFIG.receptionLocationLine = `${CONFIG.receptionCity}, ${CONFIG.receptionCountry}`;

(function deriveDateDisplay() {
  const d = new Date(CONFIG.weddingDateISO);
  if (!isNaN(d)) {
    CONFIG.weddingDateDisplay = d
      .toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
      .toUpperCase();
  }
})();

CONFIG.ceremonyMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${CONFIG.ceremonyVenue}, ${CONFIG.ceremonyCity}, ${CONFIG.ceremonyCountry}`
)}`;

CONFIG.receptionMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${CONFIG.receptionVenue}, ${CONFIG.receptionCity}, ${CONFIG.receptionCountry}`
)}`;

/* =====================================================================
   Apply CONFIG to the DOM via data-config / data-config-href /
   data-config-datetime attributes. This is the single wiring point —
   add a `data-config="someKey"` attribute anywhere in the HTML and it
   will be populated automatically from CONFIG.someKey.
   ===================================================================== */
function applyConfig() {
  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.dataset.config;
    if (CONFIG[key] !== undefined) el.textContent = CONFIG[key];
  });

  document.querySelectorAll("[data-config-href]").forEach((el) => {
    const key = el.dataset.configHref;
    if (CONFIG[key] !== undefined) el.setAttribute("href", CONFIG[key]);
  });

  document.querySelectorAll("[data-config-datetime]").forEach((el) => {
    const key = el.dataset.configDatetime;
    if (CONFIG[key] !== undefined) el.setAttribute("datetime", CONFIG[key]);
  });

  const photo = document.getElementById("main-photo");
  if (photo) {
    photo.src = CONFIG.mainPhoto;
    photo.alt = CONFIG.mainPhotoAlt;
  }

  const mapLinkCeremony = document.getElementById("map-link-ceremony");
  if (mapLinkCeremony) mapLinkCeremony.href = CONFIG.ceremonyMapUrl;

  const mapLinkReception = document.getElementById("map-link-reception");
  if (mapLinkReception) mapLinkReception.href = CONFIG.receptionMapUrl;

  // document title / meta description (best-effort; social-preview
  // crawlers read the static <head> markup, not this)
  document.title = `${CONFIG.coupleNames} — Save the Date`;
}

applyConfig();

/* ---- Footer year ---- */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---- Reduced motion preference ---- */
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

/* =====================================================================
   OPENING SCREEN — tap/click/keyboard to open the envelope
   ===================================================================== */
const intro = document.getElementById("intro");
const tapToOpen = document.getElementById("tap-to-open");
const envelope = document.getElementById("envelope");
const invitation = document.getElementById("invitation");

function playSoftChime() {
  if (prefersReducedMotion) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(620, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.35);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.06, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);

    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.65);
    osc.onended = () => ctx.close().catch(() => {});
  } catch (err) {
    /* audio is a non-essential enhancement — fail silently */
  }
}

let hasOpened = false;

function openEnvelope() {
  if (hasOpened) return;
  hasOpened = true;

  playSoftChime();
  intro.classList.add("is-opening");

  const revealDelay = prefersReducedMotion ? 0 : 1600;

  window.setTimeout(() => {
    intro.classList.add("is-hidden");
    intro.setAttribute("aria-hidden", "true");
    tapToOpen.setAttribute("tabindex", "-1");

    // Move focus into the invitation for screen-reader & keyboard users
    if (invitation) invitation.focus({ preventScroll: false });
  }, revealDelay);
}

if (tapToOpen) {
  tapToOpen.addEventListener("click", openEnvelope);
}

if (envelope) {
  envelope.addEventListener("click", openEnvelope);
}

/* =====================================================================
   SCROLL REVEAL (fade + slide), respecting reduced motion
   ===================================================================== */
const revealTargets = document.querySelectorAll(".reveal");

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealTargets.forEach((el) => el.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  revealTargets.forEach((el) => observer.observe(el));
}

/* =====================================================================
   COUNTDOWN — days / hours / minutes / seconds
   ===================================================================== */
const targetDate = new Date(CONFIG.weddingDateISO).getTime();
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const now = Date.now();
  const diff = targetDate - now;

  if (diff <= 0) {
    if (countdownEl) {
      countdownEl.innerHTML = "<p class='countdown__done'>It's today! &#127881;</p>";
    }
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  const dayEl = document.getElementById("cd-days");
  const hourEl = document.getElementById("cd-hours");
  const minEl = document.getElementById("cd-mins");
  const secEl = document.getElementById("cd-secs");

  if (dayEl) dayEl.textContent = String(days).padStart(3, "0");
  if (hourEl) hourEl.textContent = String(hours).padStart(2, "0");
  if (minEl) minEl.textContent = String(mins).padStart(2, "0");
  if (secEl) secEl.textContent = String(secs).padStart(2, "0");
}

updateCountdown();
const timer = setInterval(updateCountdown, 1000);

/* =====================================================================
   ADD TO CALENDAR — popover with Google Calendar + .ics download
   ===================================================================== */
function pad(num) {
  return String(num).padStart(2, "0");
}

function toUTCStamp(date) {
  return (
    date.getUTCFullYear() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    "T" +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds()) +
    "Z"
  );
}

const eventStart = new Date(CONFIG.weddingDateISO);
const eventEnd = new Date(
  eventStart.getTime() + CONFIG.calendarDurationHours * 60 * 60 * 1000
);
const eventTitle = `${CONFIG.coupleNames}'s Wedding`;
const eventLocation = `${CONFIG.ceremonyVenue}, ${CONFIG.ceremonyCity}; ${CONFIG.receptionVenue}, ${CONFIG.receptionCity}`;
const eventDescription = `Save the date — ${CONFIG.coupleNames} are getting married! Ceremony at ${CONFIG.ceremonyTime} (${CONFIG.ceremonyVenue}, ${CONFIG.ceremonyCity}). Reception at ${CONFIG.receptionTime} (${CONFIG.receptionVenue}, ${CONFIG.receptionCity}).`;

// -- Google Calendar link --
const googleCalendarLink = document.getElementById("google-calendar-link");
if (googleCalendarLink) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: eventTitle,
    dates: `${toUTCStamp(eventStart)}/${toUTCStamp(eventEnd)}`,
    details: eventDescription,
    location: eventLocation,
  });
  googleCalendarLink.href = `https://calendar.google.com/calendar/render?${params.toString()}`;
}

// -- .ics download --
const downloadIcsBtn = document.getElementById("download-ics");
if (downloadIcsBtn) {
  downloadIcsBtn.addEventListener("click", () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//SaveTheDate//EN",
      "BEGIN:VEVENT",
      `UID:${Date.now()}@savethedate`,
      `DTSTAMP:${toUTCStamp(new Date())}`,
      `DTSTART:${toUTCStamp(eventStart)}`,
      `DTEND:${toUTCStamp(eventEnd)}`,
      `SUMMARY:${eventTitle}`,
      `LOCATION:${eventLocation}`,
      `DESCRIPTION:${eventDescription}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "save-the-date.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    closeCalendarPopover();
  });
}

// -- Popover open/close behaviour --
const addToCalendarBtn = document.getElementById("add-to-calendar");
const calendarPopover = document.getElementById("calendar-popover");

function openCalendarPopover() {
  if (!calendarPopover || !addToCalendarBtn) return;
  calendarPopover.hidden = false;
  addToCalendarBtn.setAttribute("aria-expanded", "true");
  const firstLink = calendarPopover.querySelector("a, button");
  if (firstLink) firstLink.focus();
}

function closeCalendarPopover() {
  if (!calendarPopover || !addToCalendarBtn) return;
  calendarPopover.hidden = true;
  addToCalendarBtn.setAttribute("aria-expanded", "false");
}

if (addToCalendarBtn) {
  addToCalendarBtn.addEventListener("click", () => {
    const isOpen = calendarPopover && !calendarPopover.hidden;
    if (isOpen) {
      closeCalendarPopover();
    } else {
      openCalendarPopover();
    }
  });
}

document.addEventListener("click", (event) => {
  if (!calendarPopover || calendarPopover.hidden) return;
  const withinMenu =
    event.target.closest(".calendar-menu") !== null;
  if (!withinMenu) closeCalendarPopover();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCalendarPopover();
    if (addToCalendarBtn && document.activeElement !== addToCalendarBtn) {
      // keep focus predictable after closing via Escape
    }
  }
});
