// Contact information used across the site (footer, contact page, etc.)
export const contactInfo = {
  email: "ieeestudentbranch@ncsu.edu",
  addressLines: [
    "IEEE Student Branch",
    "Campus Box 7911",
    "Engineering Building II",
    "NC State University",
    "Raleigh, NC 27695-7911",
  ],
};

// Social links used on Contact page and Footer
export const socialLinks = [
  { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/ieeeNCState", description: "Follow us for event updates, photos, and community discussions." },
  { name: "Twitter", icon: "twitter", url: "https://twitter.com/ieeeNCState", description: "Get real-time updates and engage with our community." },
  { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/company/ieee-nc-state/", description: "Connect professionally and explore career opportunities." },
  { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/ieee_ncstate/", description: "See behind-the-scenes content and event highlights." },
  { name: "GitHub", icon: "github", url: "https://github.com/ieee-ncstate", description: "Explore our open-source projects and code repositories." },
  { name: "YouTube", icon: "youtube", url: "https://www.youtube.com/c/IEEENCState", description: "Watch technical presentations and event recordings." },
];

// Navigation and footer link data
export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Calendar" },
  { href: "/gallery", label: "Gallery" },
  { href: "/awards", label: "Awards" },
  { href: "/scholarship", label: "Scholarship" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact Us" },
];

export const quickLinks = [
  { href: "https://ieee.org/membership", label: "Join IEEE" },
  { href: "https://ieee.org", label: "IEEE.org" },
  { href: "https://ncsu.edu", label: "NC State" },
  { href: "https://ece.ncsu.edu", label: "ECE Department" },
];

// Student leaders/officers (About page)
export const officers = [
  { name: "Mario Rosas", position: "President", linkedin: "https://linkedin.com/in/mario-rosas", image: "/images/officers/mario-rosas.jpg" },
  { name: "Soumyadeep Chatterjee", position: "Treasurer", linkedin: "https://linkedin.com/in/soumyadeep-chatterjee", image: "/images/officers/soumyadeep-chatterjee.jpg" },
  { name: "Jordan Boerger", position: "VP - Robotics", linkedin: "https://linkedin.com/in/jordan-boerger", image: "/images/officers/jordan-boerger.jpg" },
  { name: "Scott Burnett", position: "VP - Company Outreach", linkedin: "https://linkedin.com/in/scott-burnett", image: "/images/officers/scott-burnett.jpg" },
  { name: "Jeffery Lima", position: "VP - Company Outreach", linkedin: "https://linkedin.com/in/jeffery-lima", image: "/images/officers/jeffery-lima.jpg" },
  { name: "Grayson Morris", position: "Webmaster", linkedin: "https://linkedin.com/in/grayson-morris", image: "/images/officers/grayson-morris.jpg" },
  { name: "Devin Roberts", position: "Secretary", linkedin: "https://linkedin.com/in/devin-roberts", image: "/images/officers/devin-roberts.jpg" },
  { name: "Ter Chavez", position: "VP - Student Outreach", linkedin: "https://linkedin.com/in/ter-chavez", image: "/images/officers/ter-chavez.jpg" },
];

// Helper mappers for social icon and brand color (used by Contact and Footer)
export function getSocialIcon(platform) {
  switch (platform) {
    case "facebook": return "📘";
    case "twitter": return "🐦";
    case "linkedin": return "💼";
    case "instagram": return "📸";
    case "github": return "👨‍💻";
    case "youtube": return "📺";
    default: return "🔗";
  }
}

export function getSocialColor(platform) {
  switch (platform) {
    case "facebook": return "#1877F2";
    case "twitter": return "#1DA1F2";
    case "linkedin": return "#0A66C2";
    case "instagram": return "#E4405F";
    case "github": return "#181717";
    case "youtube": return "#FF0000";
    default: return "var(--ieee-blue, #0066CC)";
  }
}

// Events page content
export const eventsContent = {
  // Hero section
  hero: {
    title: "Workshops and Events",
    description: "Stay connected with IEEE NCSU. Discover upcoming workshops, speaker events, and competitions including IEEE SoutheastCon.",
    subscribeButtonText: "Subscribe to Calendar",
  },

  // Featured section (Upcoming Events)
  featured: {
    title: "Featured",
    subtitle: "/ Upcoming events",
  },

  // Categories section
  categories: {
    title: "Categories",
    subtitle: "/ Event types we host",
    items: [
      {
        title: "Workshops",
        description: "Hands-on learning sessions covering technical skills, tools, and emerging technologies",
        direction: "top",
      },
      {
        title: "Speaker Events",
        description: "Career-focused talks and networking opportunities with industry professionals",
        direction: "right",
      },
      {
        title: "Competitions",
        description: "IEEE SoutheastCon and other competitive events to showcase your skills",
        direction: "left",
      },
    ],
  },

  // Subscribe section
  subscribe: {
    title: "Subscribe",
    subtitle: "/ Subscribe to our calendar",
    subscribeLinkText: "Add to Google Calendar",
    buttonText: "Subscribe to Calendar",
  },

  // Google Calendar configuration
  calendar: {
    calendarId: "ncsu.edu_ngl6n4iuvhssd5d3730d3db1os@group.calendar.google.com",
    subscribeUrl: "https://calendar.google.com/calendar?cid=bmNzdS5lZHVfbmdsNm40aXV2aHNzZDVkMzczMGQzZGIxb3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
    embedUrl: "https://calendar.google.com/calendar/embed?src=ncsu.edu_ngl6n4iuvhssd5d3730d3db1os%40group.calendar.google.com&ctz=America%2FNew_York",
  },
};


