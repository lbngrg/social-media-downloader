export interface Ad {
  image?: string;
  video?: string;
  title: string;
  description: string;
  url: string;
  badge?: string;
}

export interface AdData {
  id: string;
  ads: Ad[];
}