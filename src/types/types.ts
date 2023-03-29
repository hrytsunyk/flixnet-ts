export interface IEndpoints {
    discover: string;
    movies: string;
    genres: string;
    search: string;
    list: string;
}

export interface IUrls {
    base: { main: string; image: string };
    movies: object;
    genres: object;
    search: object;
}
