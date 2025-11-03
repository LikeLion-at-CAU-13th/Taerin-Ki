export interface Movie {
    id: number;
    title: string;
    poster_path: string | null;
    vote_average: number;
    release_date: string;
    popularity: number;
}

// 검색 상태
export type SearchStatus = 'idle' | 'loading' | 'success' | 'error';

// 🆕 정렬 옵션 추가 (1번 과제)
export type SortOption = 'popularity' | 'rating' | 'release_date';