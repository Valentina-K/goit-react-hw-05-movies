import { useParams, Link } from 'react-router-dom';
import { MovieCard } from 'components/MovieCard';
import { getMovieById } from 'serviseAPI/api';
export const MoviesDetails = () => {
  const { movieId } = useParams();
  const movie = getMovieById(movieId);
  return (
    <main>
      <MovieCard movie={movie} />
      <p>Addition information</p>
      <ul>
        <li>
          <Link to="/cast">Cast</Link>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
      </ul>
    </main>
  );
};
