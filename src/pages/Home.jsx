import { MovieList } from 'components/MovieList/MovieList';
import { getTrendingMovies } from 'serviseAPI/api';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      try {
        const movies = await getTrendingMovies();
        setMovies(movies.results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      <MovieList movies={movies} />
    </main>
  );
};
