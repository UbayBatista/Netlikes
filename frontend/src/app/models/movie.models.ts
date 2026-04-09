
export interface CastMember {
  id: number;
  name: string;
  profile_path: string;
  character: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Video {
  id: string;
  name: string;
  key: string;
  type: string;
  site: string;
}

export interface Provider {
  provider_id: number;
  provider_name: string;
  logo_path: string;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  adult: boolean;
  ageRating: string;
  tagline: string;
  runtime: number;
  releaseDate: string;
  posterPath: string;
  genres: Genre[];
  cast: CastMember[];
  videos: Video[];
  watchProviders: Provider[];
}