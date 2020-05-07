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
  user: any;
  playing: any;
  mylist: video[];
  trends: video[];
  originals: video[];
}
