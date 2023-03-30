import { IEndpoints, IUrls } from '../interfaces';

const endpoints: IEndpoints = {
    discover: 'discover',
    movies: 'movie',
    genres: 'genre',
    search: 'search',
    list: 'list',
};

const urls: IUrls = {
    base: {
        main: 'https://api.themoviedb.org/3',
        image: 'https://image.tmdb.org/t/p/w500/',
    },
    movies: {
        moviesList: `${endpoints.discover}/${endpoints.movies}`,
        movieID: (movieId): string => `${endpoints.movies}/${movieId}`,
    },
    genres: {
        genres: `${endpoints.genres}/${endpoints.movies}/${endpoints.list}`,
        similar: `${endpoints.discover}/${endpoints.movies}`,
    },
    search: {
        searchURL: `${endpoints.search}/${endpoints.movies}`,
    },
};

export { urls };
