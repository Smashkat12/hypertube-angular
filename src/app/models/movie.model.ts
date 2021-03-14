export interface Movie {
  success?: boolean;
  movie?: MovieEntity[] | null;
}
export interface MovieEntity {
  _id: string;
  _ytsId: string;
  name: string;
  poster: string;
  last_seen: number;
  ytsData: YtsData;
  description: string;
  author: string;
  ratings?: null[] | null;
  comments?: null[] | null;
  updated_at: string;
  created_at: string;
  __v: number;
}
export interface YtsData {
  id: number;
  url: string;
  imdb_code: string;
  title: string;
  title_english: string;
  title_long: string;
  slug: string;
  year: number;
  rating: number;
  runtime: number;
  genres?: string[] | null;
  download_count: number;
  like_count: number;
  description_intro: string;
  description_full: string;
  yt_trailer_code: string;
  language: string;
  mpa_rating: string;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  medium_screenshot_image1: string;
  medium_screenshot_image2: string;
  medium_screenshot_image3: string;
  large_screenshot_image1: string;
  large_screenshot_image2: string;
  large_screenshot_image3: string;
  cast?: CastEntity[] | null;
  torrents?: TorrentsEntity[] | null;
  date_uploaded: string;
  date_uploaded_unix: number;
}
export interface CastEntity {
  name: string;
  character_name: string;
  imdb_code: string;
  url_small_image?: string | null;
}
export interface TorrentsEntity {
  url: string;
  hash: string;
  quality: string;
  type: string;
  seeds: number;
  peers: number;
  size: string;
  size_bytes: number;
  date_uploaded: string;
  date_uploaded_unix: number;
  magnet: string;
  magnet2: string;
}
