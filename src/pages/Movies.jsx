import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { getSearchMovies } from 'serviseAPI/api';
import { MovieList } from 'components/MovieList';
export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParam, setSearchParam] = useSearchParams();
  const query = searchParam.get('query');

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      try {
        const movies = await getSearchMovies(query);
        setMovies(movies.results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    if (query) {
      getMovies();
    }
  }, [query]);
  const onSubmit = e => {
    e.preventDefault();
    setSearchParam({ query: e.currentTarget.elements.query.value });
  };

  return (
    <main>
      <form onSubmit={onSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {isLoading && <Loader />}
      <MovieList movies={movies} />
    </main>
  );
};
