import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { dataset, projectId } from "../env";

// Create an Image Builder instance
const builder = createImageUrlBuilder({ projectId, dataset });

// Function to generate an image URL with dynamic width & height
export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
