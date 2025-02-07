import createImageUrlBuilder from "@sanity/image-url";
  import { SanityImageSource } from "@sanity/image-url/lib/types/types";
  
  import { dataset, projectId } from "../env";
  
  // Create Image Builder
  const builder = createImageUrlBuilder({ projectId, dataset });
  
  // Generate optimized image URL with width & height
  export const urlFor = (source: SanityImageSource, width = 500, height = 500) => {
    return builder.image(source).width(width).height(height).url();
  };
  