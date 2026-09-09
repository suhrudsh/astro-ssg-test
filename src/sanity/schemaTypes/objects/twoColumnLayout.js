import { defineType } from "sanity";

export default defineType({
  name: "twoColumnLayout",
  title: "2 Column Layout",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "imagePosition",
      title: "Image Position",
      type: "string",
      options: { list: ["left", "right"] },
      initialValue: "right",
    },
  ],
  preview: {
    select: { media: "image", side: "imagePosition" },
    prepare({ media, side }) {
      return {
        title: "Two Column Layout Block",
        subtitle: `Image on ${side} side`,
        media,
      };
    },
  },
});
