import heroPortrait from "../assets/hero-portrait.png";

// Start here when making the portfolio your own.
// Empty contact links stay hidden until you add your real URLs.
export const site = {
  name: "Wishvajith Weerasinghe",
  initials: "WW",
  role: "university student",
  intro:
    "I build web apps and AI tools, and I like turning rough ideas into things people can actually use.",
  about:
    "This is my little corner of the internet. A collection of things I’m building, ideas I’m exploring, and what I’m learning along the way.",
  availability: "",
  // Add an email address to enable the email and copy buttons.
  email: "manuwishvase@gmail.com",
  github: "",
  linkedin: "https://www.linkedin.com/in/wishvajith-weerasingha/",
};

// Hero portrait: a transparent café cutout from src/assets/hero-portrait.png.
// Replace that file to update the photo, then rebuild for production/preview.
export const hero = {
  headline: "CODE",
  outline: "FOR",
  emphasis: "CHANGE.",
  kicker: ["Code. Curiosity.", "Ideas into reality."],
  portrait: heroPortrait,
  portraitAlt: "Black-and-white portrait of Wishavjith working on a laptop at a café table, holding a cup of coffee.",
  portraitNote: "Ideas, coffee & code",
  sideNote: "Ideas → Code → Experiences",
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Explore", href: "#explore" },
  { label: "Achievements", href: "#achievements" },
  { label: "Connect", href: "#connect" },
];

// Projects, Explore cards and Achievements live in src/content/ (one Markdown file each).
