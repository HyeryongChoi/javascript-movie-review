export interface MovieType {
  title: string;
  posterPath: string;
  voteAverage: number;
}

export interface APIMovieType {
  title: string;
  poster_path: string;
  vote_average: number;
}

export interface ResponseType {
  result: string;
  status?: number;
  movieList?: MovieType[];
}
