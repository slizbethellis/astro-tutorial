// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});

const images = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/images" }),
  schema: ({ image }) => z.object({
    pictures: z.array(z.object({
      alt: z.string(),
      img: image()
    })),
  })
});
// Export a single `collections` object to register your collection(s)
export const collections = { blog, images };