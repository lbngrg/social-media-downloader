export type Platform = 'tiktok' | 'youtube' | 'instagram';

export interface DownloadOption {
  quality: string;
  format: string;
  url: string;
}

export interface MediaInfo {
  thumbnail: string;
  title: string;
  author: string;
  downloadOptions: DownloadOption[];
}

// RapidAPI specific types
export interface RapidAPIMedia {
  url: string;
  data_size: number;
  quality: string;
  extension: string;
  type: string;
}

export interface RapidAPIResponse {
  url: string;
  source: string;
  author: string;
  title: string;
  thumbnail: string;
  duration: number;
  medias: RapidAPIMedia[];
  type: string;
  error: boolean;
}