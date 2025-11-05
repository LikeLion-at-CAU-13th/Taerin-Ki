import { type Movie, type SortOption } from '../types/movie.types';

export const sortMovies = (movies: Movie[], sortBy: SortOption): Movie[] => {
  const sorted = [...movies];

	// TODO: 정렬 기준 (3가지)에 따라서 다른 값을 return하는 정렬 로직 구현
  switch (sortBy) {
    case 'popularity':
      sorted.sort((a, b) => b.popularity - a.popularity);
      return sorted;

    case 'rating':
      sorted.sort((a, b) => b.vote_average - a.vote_average);
      return sorted;

    case 'release_date':
      sorted.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
      return sorted;

    default:
      return sorted;
  }
};