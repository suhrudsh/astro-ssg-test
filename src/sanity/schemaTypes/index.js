import { post } from "./documents/post";
import threeColumnGrid from "./objects/threeColumnGrid";
import twoColumnLayout from "./objects/twoColumnLayout";
import imageGallery from "./objects/imageGallery";

export const schema = {
  types: [post, threeColumnGrid, twoColumnLayout, imageGallery],
};
