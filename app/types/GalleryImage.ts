
export type GalleryImage = {
  url: string;
  alt: string;
  metadata: {
    dimensions: {
      width: number;
      height: number;
    }
  }
}