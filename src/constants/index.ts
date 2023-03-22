export enum REQUEST_MOVIES {
  POPULARITY = 'popularity',
  SEARCH = 'search',
}

export enum UPDATE_TYPE {
  OVERWRITE = 'overwrite',
  APPEND = 'append',
}

export enum IMAGE_URL {
  BASE = 'https://image.tmdb.org/t/p/original',
  ALTERNATIVE = './assets/no_image.png',
  NO_RESULT = './assets/no_result.png',
  ERROR_RESULT = './assets/error_result.png',
}

export const API_URL = {
  BASE: 'https://api.themoviedb.org/3/',
  POPULAR_MOVIES: (currentPage: number) => {
    return `movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=${currentPage}&include_adult=false`;
  },
  SEARCH_MOVIES: (currentPage: number, keyword: string) => {
    return `search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${keyword}&page=${currentPage}&include_adult=false`;
  },
};

export const MOVIE_LIST_TITLE = {
  POPULARITY: 'Popular movies',
  SEARCH: (keyword: string) => `Search Results of "${keyword}"`,
};