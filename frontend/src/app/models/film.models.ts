export interface Film {
  id: number;
  title: string;
  overView: string;
  adult: boolean;
  ageRating: string;
  tagLine: string;
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
  logo: string;
}

export interface GenreGroup {
  name: string;
  films: FilmListItem[];
}
