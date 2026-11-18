import heroPortrait from "../assets/hero-portrait.png";

// Start here when making the portfolio your own.
// Empty contact links stay hidden until you add your real URLs.
export const site = {
  name: "Wishavjith Weerasinghe",
  initials: "WW",
  role: "Software developer & university student",
  intro:
    "I build web apps and AI tools, and I like turning rough ideas into things people can actually use.",
  about:
    "This is my little corner of the internet. A collection of things I’m building, ideas I’m exploring, and what I’m learning along the way.",
  availability: "Always curious. Always building.",
  // Add an email address to enable the email and copy buttons.
  email: "",
  github: "",
  linkedin: "",
};

// Hero portrait: a transparent café cutout from src/assets/hero-portrait.png.
// Replace that file to update the photo, then rebuild for production/preview.
export const hero = {
  headline: "Build",
  outline: "With",
  emphasis: "Purpose.",
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

export const projectFilters = ["All work", "Web", "Experiments"] as const;

export type Project = {
  id: string;
  title: string;
  description: string;
  details: string;
  category: Exclude<(typeof projectFilters)[number], "All work">;
  tags: string[];
  artwork: "portfolio" | "planner" | "terminal";
  sample?: boolean;
  repo?: string;
  demo?: string;
};

// The last two projects are illustrative placeholders, not completed work.
// Replace them with your projects and add repo/demo URLs when ready.
export const projects: Project[] = [
  {
    id: "personal-space",
    title: "A personal space",
    description: "A home for my work, interests, and everything in between. You’re looking at it.",
    details:
      "My personal portfolio, built with Astro and Tailwind CSS. It brings together projects, interests, milestones, and ways to connect in a responsive, accessible website. The content lives in one place so the site can grow with me.",
    category: "Web",
    tags: ["Astro", "Tailwind CSS", "Design"],
    artwork: "portfolio",
  },
  {
    id: "campus-companion",
    title: "Campus companion",
    description: "A concept for a calmer student life. Tasks, notes, and the week ahead, together.",
    details:
      "An illustrative project concept for a student dashboard that keeps tasks, study notes, and upcoming deadlines in one place. This entry is sample content; replace it with a real project, your contribution, and what you learned while building it.",
    category: "Web",
    tags: ["Dashboard", "UI concept"],
    artwork: "planner",
    sample: true,
  },
  {
    id: "small-experiments",
    title: "Small experiments",
    description: "A little playground for big questions. Exploring what code and curiosity can do.",
    details:
      "An illustrative home for small coding experiments and ideas. This entry is sample content; use it to share an AI tool, a creative coding sketch, or a problem you explored. Add a repository or live demo when you have something to share.",
    category: "Experiments",
    tags: ["Creative coding", "AI concepts"],
    artwork: "terminal",
    sample: true,
  },
];

// Suggested interests — swap these for the things you enjoy.
export const interests = [
  {
    number: "01",
    icon: "code",
    title: "Building for the web",
    description: "From the first wireframe to the final interaction. Making useful things feel good to use.",
    note: "The intersection of design & code",
  },
  {
    number: "02",
    icon: "sparkles",
    title: "AI & the what-ifs",
    description: "Exploring the possibilities of intelligent tools, one question and one experiment at a time.",
    note: "A healthy dose of curiosity",
  },
  {
    number: "03",
    icon: "compass",
    title: "Learning by doing",
    description: "Trying something unfamiliar, figuring it out, and taking a few notes along the way.",
    note: "There’s always something new",
  },
] as const;

// Replace these placeholders with your real achievements.
// Set placeholder to false and add a date (for example, "2026").
export const achievements = [
  {
    title: "Hackathons & competitions",
    description: "A place for the challenges you took on and the things you built under pressure.",
    category: "Challenges",
    date: "Coming soon",
    placeholder: true,
    icon: "trophy",
  },
  {
    title: "Certifications & learning",
    description: "Courses, qualifications, and learning milestones worth remembering.",
    category: "Learning",
    date: "Coming soon",
    placeholder: true,
    icon: "award",
  },
  {
    title: "Community & contributions",
    description: "Open-source contributions, shared knowledge, and work that made a difference.",
    category: "Community",
    date: "Coming soon",
    placeholder: true,
    icon: "people",
  },
] as const;
