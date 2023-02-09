import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BackLink } from '../components/BackLink';
import { MovieCard } from 'components/MovieCard';
import { getMovieById } from 'serviseAPI/api';
import { Loader } from 'components/Loader/Loader';
export const MoviesDetails = () => {
  console.log('from MovieDetail');
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  console.log('location', location);
  const backLinkHref = location?.state?.from ?? '/movies';
  console.log('backLinkHref', backLinkHref);

  useEffect(() => {
    setIsLoading(true);
    async function getMovie() {
      try {
        const movieDetails = await getMovieById(movieId);
        setMovie(movieDetails);
        console.log(movieDetails);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <main>
      {isLoading && <Loader />}
      <BackLink to={backLinkHref}>Go back</BackLink>
      {movie !== null && <MovieCard movie={movie} />}
      <p>Addition information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
