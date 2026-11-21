import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Each section of the page reads one folder in src/content/.
// To add something, copy that folder's _template.md, rename it, and fill it in.
// Files starting with "_" are ignored.

export const iconNames = ["code", "sparkles", "compass", "trophy", "award", "people", "mail", "arrow", "diagonal"] as const;
const icon = z.enum(iconNames);

const projects = defineCollection({
  loader: glob({ pattern: "[^_]*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.string(),
      tags: z.array(z.string()).default([]),
      order: z.number().default(100),
      image: image().optional(),
      imageAlt: z.string().optional(),
      artwork: z.enum(["portfolio", "planner", "terminal"]).optional(),
      sample: z.boolean().default(false),
      repo: z.string().url().optional(),
      demo: z.string().url().optional(),
      draft: z.boolean().default(false),
    }),
});

const explore = defineCollection({
  loader: glob({ pattern: "[^_]*.md", base: "./src/content/explore" }),
  schema: z.object({
    title: z.string(),
    icon: icon.default("sparkles"),
    note: z.string().default(""),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

const achievements = defineCollection({
  loader: glob({ pattern: "[^_]*.md", base: "./src/content/achievements" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    category: z.string(),
    date: z.string(),
    icon: icon.default("trophy"),
    order: z.number().default(100),
    placeholder: z.boolean().default(false),
    gallery: z.array(z.object({
      title: z.string(),
      caption: z.string(),
      image: image().optional(),
      imageAlt: z.string().optional(),
    })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, explore, achievements };
