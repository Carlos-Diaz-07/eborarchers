import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum([
      "tournament-results",
      "club-news",
      "club-events",
      "league-updates",
      "league-results",
      "member-achievements",
      "season-update",
      "beginners",
      "external-competitions",
      "social",
    ]),
    excerpt: z.string().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured_image: z.string().optional(),
    featured_image_alt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const venues = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/venues" }),
  schema: z.object({
    title: z.string(),
    type: z.enum(["indoor", "outdoor"]),
    address: z.string(),
    postcode: z.string(),
    mapImage: z.string().optional(),
    order: z.number(),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/gallery" }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    alt: z.string(),
    caption: z.string().optional(),
    category: z
      .enum(["club-shoot", "competition", "social", "scenery", "training"])
      .optional(),
    featured: z.boolean().default(false),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/events" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    venue: z.string().optional(),
    description: z.string().optional(),
    type: z.enum([
      "club-shoot",
      "competition",
      "league",
      "social",
      "beginners-course",
      "agm",
      "other",
    ]),
    externalLink: z.string().url().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Home page fields
    hero_heading: z.string().optional(),
    hero_subheading: z.string().optional(),
    about_heading: z.string().optional(),
    about_text: z.string().optional(),
    // Times page fields
    outdoor_heading: z.string().optional(),
    outdoor_text: z.string().optional(),
    indoor_heading: z.string().optional(),
    indoor_text: z.string().optional(),
    // Join Us page fields
    fees: z
      .array(
        z.object({
          category: z.string(),
          price: z.string(),
          notes: z.string().optional(),
        })
      )
      .optional(),
    beginners_price: z.string().optional(),
  }),
});

export const collections = { news, venues, gallery, events, pages };
