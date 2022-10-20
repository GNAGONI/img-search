type ImageRaw = {
  id: number;
  urls: {
    small: string;
  };
  alt_description: string;
}

type ImageData = { 
  id: number;
  url: string;
  alt: string;
}

type HomeState = {
  images: ImageData[];
  totalPages: number;
  page: number;
  query: string;
}

export type {
  ImageData,
  ImageRaw,
  HomeState,
};
