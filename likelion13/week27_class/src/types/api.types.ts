import type { Movie } from "./movie.types";

export interface ApiResponse {
    results: Movie[];
    total_results: number;
    page: number;
    total_pages: number;
}

export interface ApiError {
    status_message: string;
    status_code: number;
}