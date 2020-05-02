export interface video {
  id: number;
  slug: string;
  title: string;
  type: string;
  language: string;
  year: number;
  contentRating: string;
  duration: number;
  cover: string;
  description: string;
  source: string;
}

export interface state {
  mylist: video[];
  trends: video[];
  originals: video[];
}
