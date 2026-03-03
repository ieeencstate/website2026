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

// Hero section content
export const heroContent = {
  logo: {
    src: "/ieeencsu.png",
    alt: "IEEE NCSU Logo",
    width: 60
  },
  title: {
    firstPart: "NCSU ",
    firstPartColor: "#FF0000",
    secondPart: "IEEE",
    secondPartColor: "#00629B"
  },
  description: "The premiere student chapter for IEEE at NC State built on the strong bond of its members and contributions of our sponsors to educate, compete, and grow as a community."
};

// Hero section social links (different from footer/contact social links)
export const heroSocialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/ieee-ncsu",
    icon: "Linkedin"
  },
  {
    name: "GitHub",
    url: "https://github.com/ieee-ncsu",
    icon: "Github"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/ieee_ncsu",
    icon: "Instagram"
  },
  {
    name: "Discord",
    url: "https://discord.gg/ieee-ncsu",
    icon: "MessageCircle"
  },
  {
    name: "Email",
    url: "mailto:ieee@ncsu.edu",
    icon: "Mail"
  }
];

// What We Do section content
export const whatWeDoContent = {
  title: "What We Do",
  description: "Our club brings together students passionate about electrical and computer engineering through hands-on projects, industry events, and collaborative learning experiences."
};

// Card content for What We Do section
export const cardContent = [
  {
    id: 1,
    title: "Hardware and Embedded Systems Workshop",
    description: "Join hands-on workshops where you'll learn to design and build embedded systems, work with microcontrollers, and develop practical hardware projects. Perfect for students looking to gain real-world engineering experience.",
    demoComponent: "HardwareEmbeddedDemo",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    title: "Career Opportunities",
    description: "Connect with industry professionals, attend networking events, and discover internship and job opportunities. Our partnerships with leading tech companies help you launch your engineering career.",
    demoComponent: "CareerOpportunitiesDemo",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1484&q=80"
  },
  {
    id: 3,
    title: "Competitions",
    description: "Participate in exciting engineering competitions, hackathons, and design challenges. Test your skills, collaborate with teammates, and compete for prizes while building your portfolio.",
    demoComponent: "CompetitionsDemo",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

// Navbar content
export const navbarContent = {
  logo: "/ieeencsu.png",
  logoAlt: "IEEE NCSU Logo",
  items: [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/events' },
    { label: 'Contact', href: '/contact' },
  ]
};


