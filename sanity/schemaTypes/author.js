import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "id",
      title: "ID", // Human-readable title
      type: "number", // Correct type
    }),
    defineField({
      name: "name",
      title: "Name", // Human-readable title
      type: "string", // Correct type
    }),
    defineField({
      name: "username",
      title: "Username", // Human-readable title
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email", // Human-readable title
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image URL", // Human-readable title
      type: "url", // Correct type
    }),
    defineField({
      name: "bio",
      title: "Biography", // Human-readable title
      type: "text", // Correct type
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
