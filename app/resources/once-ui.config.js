// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://ieee.ncsu.edu";

// Import and set font for each variant
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

// Modern customization applied to the HTML in the main layout.tsx - NC State colors with modern styling
const style = {
  theme: "system", // dark | light | system - Let users choose their preference
  neutral: "slate", // sand | gray | slate
  brand: "red", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan - IEEE blue accent
  solid: "contrast", // color | contrast | inverse
  solidStyle: "plastic", // flat | plastic - More modern 3D effect
  border: "playful", // rounded | playful | conservative - Modern rounded corners
  surface: "translucent", // filled | translucent - Modern glass-morphism effect
  transition: "all", // all | micro | macro - Smooth animations everywhere
  scaling: "105", // 90 | 95 | 100 | 105 | 110 - Slightly larger for better readability
};

const dataStyle = {
  variant: "gradient", // flat | gradient | outline
  mode: "categorical", // categorical | divergent | sequential
  height: 24, // default chart height
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false
  },
};

const effects = {
  mask: {
    cursor: true, // Enable interactive cursor mask
    x: 50,
    y: 0,
    radius: 120, // Larger radius for more dramatic effect
  },
  gradient: {
    display: true, // Enable beautiful gradient backgrounds
    x: 30,
    y: 20,
    width: 140,
    height: 120,
    tilt: 15, // Slight tilt for modern look
    colorStart: "brand-background-strong",
    colorEnd: "accent-background-weak",
    opacity: 15, // More subtle to avoid visible lines
  },
  dots: {
    display: true,
    size: "3", // Slightly larger dots
    color: "accent-on-background-weak",
    opacity: 25, // More subtle
  },
  lines: {
    display: true, // Enable diagonal lines for texture
    color: "neutral-alpha-weak",
    opacity: 15,
    thickness: 1,
    angle: 135,
    size: "12",
  },
  grid: {
    display: false, // Keep grid off to not compete with dots and lines
    color: "neutral-alpha-weak",
    opacity: 100,
    width: "2",
    height: "2",
  },
};

// metadata for pages
const meta = {
  home: {
    path: "/",
    title: "IEEE at NC State Student Branch",
    description:
      "NC State IEEE Student Chapter engages students and fosters connections to companies, providing access to industry knowledge through workshops, talks, and events.",
    image: "/images/og/home.jpg",
    canonical: "https://ieee.ncsu.edu",
    robots: "index,follow",
    alternates: [{ href: "https://ieee.ncsu.edu", hrefLang: "en" }],
  },
  about: {
    path: "/about",
    title: "About Us - IEEE at NC State",
    description: "Learn about the IEEE at NC State Student Branch, our history since the early 1900s, and meet our student leaders.",
    image: "/images/og/about.jpg",
    canonical: "https://ieee.ncsu.edu/about",
  },
  events: {
    path: "/events",
    title: "Events & Calendar - IEEE at NC State",
    description: "Stay updated with upcoming IEEE events, workshops, meetings, and technical talks at NC State.",
    image: "/images/og/events.jpg",
    canonical: "https://ieee.ncsu.edu/events",
  },
  awards: {
    path: "/awards",
    title: "Awards & Achievements - IEEE at NC State",
    description: "Celebrating our achievements in website competitions, hackathons, and Xtreme programming contests.",
    image: "/images/og/awards.jpg",
    canonical: "https://ieee.ncsu.edu/awards",
  },
  scholarship: {
    path: "/scholarship",
    title: "Scholarship - IEEE at NC State",
    description: "The annual Dr. Stancil/IEEE Scholarship recognizing impactful ECE students at NC State.",
    image: "/images/og/scholarship.jpg",
    canonical: "https://ieee.ncsu.edu/scholarship",
  },
  sponsors: {
    path: "/sponsors",
    title: "Sponsors - IEEE at NC State",
    description: "Our valued industry partners supporting IEEE activities and student development at NC State.",
    image: "/images/og/sponsors.jpg",
    canonical: "https://ieee.ncsu.edu/sponsors",
  },
  contact: {
    path: "/contact",
    title: "Contact Us - IEEE at NC State",
    description: "Get in touch with the IEEE at NC State Student Branch. Find our social media, email, and office location.",
    image: "/images/og/contact.jpg",
    canonical: "https://ieee.ncsu.edu/contact",
  },
  gallery: {
    path: "/gallery",
    title: "Gallery - IEEE at NC State",
    description: "Photos and memories from IEEE events, workshops, and activities at NC State.",
    image: "/images/og/gallery.jpg",
    canonical: "https://ieee.ncsu.edu/gallery",
  },
};

// default schema data
const schema = {
  logo: "/images/ieee-logo.png",
  type: "Organization",
  name: "IEEE at NC State Student Branch",
  description: meta.home.description,
  email: "ieeestudentbranch@ncsu.edu",
};

// social links - TODO: Replace with actual IEEE at NC State social media URLs
const social = {
  facebook: "https://www.facebook.com/ieeeNCState",
  twitter: "https://twitter.com/ieeeNCState",
  linkedin: "https://www.linkedin.com/company/ieee-nc-state/",
  instagram: "https://www.instagram.com/ieee_ncstate/",
  github: "https://github.com/ieee-ncstate",
  youtube: "https://www.youtube.com/c/IEEENCState",
};

export { baseURL, fonts, style, meta, schema, social, effects, dataStyle };
