export interface Film {
  id: number;
  title: string;
  overview: string;
  adult: boolean;
  ageRating: string;
  tagline: string;
  runtime: number;
  releaseDate: string;
  posterPath: string;
  genres: string[];
  cast: CastMember[];
  videos: string[];
  watchProviders: Provider[];
}

export interface FilmListItem {
  id: number;
  title: string;
  posterPath: string;
}

export interface CastMember {
  id: number;
  name: string;
  profilePath: string;
  character: string;
}

export interface Provider {
  id: number;
  name: string;
  logoPath: string;
}

export interface GenreGroup {
  name: string;
  films: FilmListItem[];
}
