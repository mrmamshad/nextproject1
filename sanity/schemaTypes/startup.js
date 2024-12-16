import { defineField, defineType } from "sanity";

export const startup = defineType({
  name: "startup",
  title: "Startup",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title", // Human-readable title
      type: "string", // Correct type
    }),
    defineField({
      name: "slug",
      title: "Slug", // Human-readable title
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "author",
      title: "Author", // Human-readable title
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "views",
      title: "Views", // Human-readable title
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Description", // Human-readable title
      type: "text",
    }),
    defineField({
      name: "category",
      title: "Category", // Human-readable title
      type: "string",
      validation: (Rule) =>
        Rule.min(2).max(20).required().error("Define a category"),
    }),
    defineField({
      name: "image",
      title: "Image URL", // Human-readable title
      type: "url",
    }),
    defineField({
      name: "pitch",
      title: "Pitch", // Human-readable title
      type: "markdown",
    }),
  ],
});
