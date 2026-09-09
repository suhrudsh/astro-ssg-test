import { defineType } from "sanity";

export default defineType({
  name: "threeColumnGrid",
  title: "3 Column Grid",
  type: "object",
  fields: [
    { name: "image1", title: "Image 1", type: "image" },
    { name: "image2", title: "Image 2", type: "image" },
    { name: "image3", title: "Image 3", type: "image" },
  ],
});
