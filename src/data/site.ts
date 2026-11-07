// Edit this file to change the content of your portfolio.
export const site = {
  name: "Manusha",
  role: "Software developer and university student",
  intro:
    "I build web apps and AI tools, and I like turning rough ideas into things people can actually use.",
  about:
    "Write two or three sentences about yourself here: what you study, what you enjoy building, and what you want to work on next.",
  email: "you@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Project one",
    description:
      "One or two sentences on what it does, who it is for, and what you built.",
    tags: ["Astro", "Tailwind"],
    repo: "https://github.com/your-username/project-one",
    demo: "https://example.com",
  },
  {
    title: "Project two",
    description:
      "Describe the problem it solves and the part you are proudest of.",
    tags: ["Python", "API"],
    repo: "https://github.com/your-username/project-two",
  },
  {
    title: "Project three",
    description: "Hackathon or team project? Say what your role was.",
    tags: ["React", "Node.js"],
    repo: "https://github.com/your-username/project-three",
  },
];
