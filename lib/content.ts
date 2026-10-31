import type { CSSProperties } from "react";

const F = "/images/figma";
const P = "/images/photos";

export const site = {
  brand: "Engagement Anwin",
  couple: "Anwin & Bia",
  subtitle: "Together, beneath the sky",
  bride: "Bia",
  groom: "Anwin",
  /** Editorial / invitation card date (wedding). */
  weddingDateShort: "28 DECEMBER 2026",
  church: "St. Thomas Syro-Malabar Church, Arunapuram, Pala",
  invitationTitle: "An Afternoon Blessed with Love",
  /** Engagement countdown target (IST) — December 28, 2026 per Figma editorial. */
  weddingStart: "2026-12-28T00:00:00+05:30",
  footerDate: "28 · 12 · 2026",
};

export const saveTheDate = {
  month: "December",
  dayLine: "28th, 2026",
};

export const editorialPortrait = {
  lineLeft: "OUR FOREVER BEGINS",
  lineRight: "WITH YOU",
  month: "December",
  dayLine: "28th, 2026",
};

export const navLinks = [
  { label: "Save the Date", href: "#save-the-date" },
  { label: "Our Story", href: "#our-story" },
  { label: "The Day", href: "#the-day" },
  { label: "Dress Code", href: "#dress-code" },
];

/** Invitation block below memory cards — Figma frame 29:501. */
export const families = {
  grandparentsLabel: "Together with the blessings of our grandparents",
  grandparentsLines: [
    "Mrs. Mariyakutty Devasia & Late Mr. Devasia Chacko",
    "&",
    "Late Mrs. Leelama Chacko and Late Mr. Chacko Varkey",
  ],
  parentsLabel: "And the love of our parents",
  parents: "Mrs. Lijimol James and Mr. Jacob Sebastian",
  brideHouse: "Ganapathiplackal house, Thodanal P.O, Pala, Kottayam",
  requestLines: [
    "request the pleasure of your gracious presence at the marriage of our",
    "beloved daughter",
  ],
  bride: "Bia Maria Jacob",
  joiner: "With",
  groom: "Anwin Varghese Sony",
  groomParents: "S/o Late Mr. Sony Varghese & Mrs. Jolly Sony",
  groomGrandparents: "Grand S/o Late Mr. Varghese Koippally & Late Mrs. Ellyamma Varghese",
  groomHouse: "Kappil Koippally House, Pulinkunnu, Alappuzha",
};

export const engagementDay = {
  titleLines: ["Our Engagement Day,", "A Beautiful Beginning."],
  introLines: [
    "A special day, two hearts, and a promise of forever.",
    "Follow our journey and discover the beautiful moments of our engagement.",
  ],
};

export const warmestWishes = {
  label: "WITH WARMEST WISHES FROM",
  names: ["Dia Elizabeth Jacob", "Cia Ann Jacob & Alwin Johny", "Aswin Sony"],
  title: "With Love and Joy",
  coupleLines: ["Bia Maria Jacob", "Anwin Sony"],
  lines: [
    "We would like to invite you to celebrate our wedding day with us.",
    "Your presence would make our special day even more meaningful. We hope you can join us as we begin this beautiful journey together. WITH LOVE,",
  ],
};

export const colourCode = {
  title: "Guest Dress  Colour Code",
  palette: "Shades of Pink",
  copy: "We would love to see you in Kerala traditional attire that reflects a South Indian wedding.",
};

export const rsvpCopy = {
  attendingYes: "Joyfully Accepts",
  attendingNo: "Regretfully Declines",
  attendingPrompt: "Your presence would mean the world. Let us know if we should save you a seat.",
};

export const ourStoryIntro =
  "From a simple hello to a thousand shared adventures, every season has quietly brought us closer to this moment.";

export const images = {
  hero: `${P}/hero.jpg`,
  ornament: `${F}/ornament-botanical-heart.svg`,
  ornamentMobile: `${F}/ornament-mobile.svg`,
  dressPalette: `${F}/dress-pink-shades.png`,
  sparkle: `${F}/sparkle.svg`,
  sprite: `${F}/scratch-cover-engagement.png`,
  dateReveal: `${F}/date-reveal-engagement.png`,
  scratchCursor: `${F}/scratch-cursor.svg`,
  invitation: `${F}/church-invitation-engagement.png`,
  invitationGradient: `${F}/rsvp-gradient.svg`,
  invitationScrimMobile: `${F}/rsvp-scrim-mobile.svg`,
  faceHappy: `${F}/face-happy.svg`,
  faceSad: `${F}/face-sad.svg`,
  arrowUpRight: `${F}/arrow-up-right-engagement.svg`,
  sealSparkle: `${F}/seal-sparkle.svg`,
  heartPhoto: `${P}/heart.jpg`,
  heartMask: `${F}/heart-mask.svg`,
  heartBackdrop: `${F}/heart-backdrop-engagement.svg`,
  heartFlourish: `${F}/heart-flourish-engagement.svg`,
  handDrawnHeart: `${F}/hand-drawn-heart.svg`,
  dayVenue: `${F}/day-venue-engagement.png`,
  dayVenueMask: `${F}/day-venue-mask.svg`,
  story2016: `${F}/story-2016-engagement.png`,
  story2026: `${F}/story-2026-engagement.png`,
  withLovePhoto: `${F}/with-love-couple.png`,
  botanicalLeft: `${F}/botanical-left.svg`,
  botanicalRight: `${F}/botanical-right.svg`,
  botanicalHeart: `${F}/botanical-heart.svg`,
};

export type Crop = { left: number; top: number; width: number; height: number };

export type MemoryCard = { value: string; meaning: string; icon: string };

const icon = (name: string) => `${F}/icon-${name}.svg`;

export const memories: Record<string, MemoryCard> = {
  two: { value: "2", meaning: "Hearts Becoming One", icon: icon("heart") },
  us: { value: "Us", meaning: "Starts Here", icon: icon("sparkles") },
  three: { value: "3", meaning: "Beautiful Gatherings", icon: icon("wine") },
  infinity: { value: "∞", meaning: "Memories to Make", icon: icon("camera") },
  vow: { value: "Vow", meaning: "For a Lifetime", icon: icon("flower") },
  you: { value: "You", meaning: "Our Favorite People", icon: icon("users") },
};

export const storyChapters: {
  year: string;
  title: string;
  copy: string;
  image: string;
  crop: Crop;
  mobileCrop: Crop;
  position: number;
}[] = [
  {
    year: "2016",
    title: "The Day We Met",
    copy:
      "It all began with a simple meeting in 2016. Little did we know that this ordinary moment would become the beginning of a story that life would beautifully bring back to us.",
    image: images.story2016,
    crop: { left: 0, top: -11.44, width: 100, height: 171.54 },
    mobileCrop: { left: 0, top: -11.44, width: 100, height: 171.54 },
    position: 161.25 / 660,
  },
  {
    year: "2026",
    title: "The Celebration",
    copy:
      "Ten years after our first meeting, life brought us back to each other. What began as a simple hello had grown into something far more meaningful — a connection worth choosing, a love worth waiting for.",
    image: images.story2026,
    crop: { left: 0, top: -29.73, width: 100, height: 171.54 },
    mobileCrop: { left: 0, top: -29.73, width: 100, height: 171.54 },
    position: 498.65 / 660,
  },
];

export const itineraryStops: {
  number: string;
  title: string;
  copy: string;
  details: { label: string; value: string }[];
  image: string;
  crop?: Crop;
  mobileCrop?: Crop;
}[] = [
  {
    number: "01",
    title: "The Venue",
    copy: `Join us on December 28th at ${site.church}, as we exchange rings and make our promise before God, followed by lunch with our family and friends.`,
    details: [
      { label: "Guest Arrival", value: "11:30 am" },
      { label: "Location", value: site.church },
      { label: "Parking", value: "Available" },
    ],
    image: images.dayVenue,
    crop: { left: -3.1, top: -12.7, width: 106.2, height: 139.0 },
    mobileCrop: { left: -3.1, top: -12.7, width: 106.2, height: 139.0 },
  },
  {
    number: "02",
    title: "Ceremony Begins",
    copy: "Join us as we exchange rings and begin a beautiful new chapter, surrounded by the people we love most in the world.",
    details: [
      { label: "Welcome Drinks", value: "11:45 am" },
      { label: "Engagement Ceremony", value: "12:00 pm" },
      { label: "Food & Photographs", value: "1:30 pm" },
    ],
    image: `${F}/day-ceremony.png`,
  },
];

type Scattered = {
  /** Px from the section top and nominal px height, used by the drift wrap-around. */
  top: number;
  height: number;
  style: CSSProperties;
  src: string;
};

const side = (n: number) => `${P}/side-${n}.jpg`;

const roundDim = (n: number) => Math.round(n * 100) / 100;

/** Figma px at 1440 wide, shrunk with the container below that so photos keep clear of the date card. */
const fluid = (px: number) => `calc(${px} * min(1px, 100cqw / 1440))`;

function desktopSlot(
  edge: "left" | "right",
  offset: number,
  top: number,
  width: number,
  height: number,
  borderRadius: number,
  src: string
): Scattered {
  return {
    top,
    height,
    src,
    style: { [edge]: fluid(offset), top, width: fluid(width), height: fluid(height), borderRadius: fluid(borderRadius) },
  };
}

/** Figma slots around Save the Date (1440×846), filled with the couple's photos. */
export const scatteredDesktop: Scattered[] = [
  desktopSlot("left", 184.46, 118, 136.55, 172.48, 16.64, side(1)),
  desktopSlot("right", 201.69, 0, 181.87, 163, 23.83, side(4)),
  desktopSlot("left", 230, 728, 181.87, 163, 23.83, side(2)),
  desktopSlot("right", 228.04, 407, 174.96, 224.48, 22.93, side(5)),
  desktopSlot("left", 0, 271.31, 152.12, 220.39, 16.64, side(6)),
  desktopSlot("right", 0, 89.92, 170.85, 244.08, 17.84, side(7)),
  desktopSlot("right", -5.65, 662, 193.93, 183.72, 20.25, side(3)),
  desktopSlot("left", 24, 540, 140, 172, 16.64, side(8)),
];

/** Must match the mobile height of the Save the Date section. */
const MOBILE_SECTION_HEIGHT = 640;
/** Narrow enough to stay clear of the 200px date card on a 360px screen. */
const MOBILE_PHOTO_WIDTH = 84;
/** Px each photo hangs off the screen edge. */
const MOBILE_EDGE_BLEED = 8;

const mobileLeft = [
  { src: side(1), height: 105 },
  { src: side(6), height: 119 },
  { src: side(8), height: 103 },
  { src: side(2), height: 91 },
];
const mobileRight = [
  { src: side(4), height: 91 },
  { src: side(7), height: 119 },
  { src: side(5), height: 114 },
  { src: side(3), height: 97 },
];

/** Same length the drift animation wraps over: section height plus the tallest photo. */
const mobileLoop =
  MOBILE_SECTION_HEIGHT + Math.max(...[...mobileLeft, ...mobileRight].map((p) => p.height));

/** One photo column down a screen edge, with equal gaps that stay equal across the drift wrap-around. */
function mobileColumn(photos: { src: string; height: number }[], edge: "left" | "right", startTop: number) {
  const gap = (mobileLoop - photos.reduce((sum, p) => sum + p.height, 0)) / photos.length;
  let top = startTop;
  return photos.map((p): Scattered => {
    const wrappedTop = roundDim(((top + p.height) % mobileLoop) - p.height);
    top += p.height + gap;
    return {
      top: wrappedTop,
      height: p.height,
      src: p.src,
      style: {
        [edge]: -MOBILE_EDGE_BLEED,
        top: wrappedTop,
        width: MOBILE_PHOTO_WIDTH,
        height: p.height,
        borderRadius: 12,
      },
    };
  });
}

/** Left column starts half a step lower so the two sides stagger. */
export const scatteredMobile: Scattered[] = [
  ...mobileColumn(mobileRight, "right", 0),
  ...mobileColumn(mobileLeft, "left", 100),
];

export const heroMobileCrop: Crop = { left: -80.26, top: 0, width: 286.15, height: 103.2 };

export const scratchCoverCrop: Crop = { left: -256.92, top: -180, width: 615.38, height: 470.4 };

export const heartCrop: Crop = { left: -15.9, top: -43.85, width: 125.01, height: 187.56 };
