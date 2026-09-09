import { defineType } from "sanity";

export default defineType({
  name: "imageGallery",
  title: "Image Gallery",
  type: "object",
  fields: [
    {
      name: "columns",
      title: "Columns",
      type: "number",
      options: { list: [2, 3, 4] }, // dropdown, not free text — keeps her from typing "7"
      initialValue: 3,
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => Rule.min(1).max(12), // variable count, with sane bounds
    },
  ],
});
