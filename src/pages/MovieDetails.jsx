import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BackLink } from '../components/BackLink';
import { MovieCard } from 'components/MovieCard';
import { getMovieById } from 'serviseAPI/api';
import { Loader } from 'components/Loader/Loader';
export const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location?.state?.from ?? '/movies';

  useEffect(() => {
    setIsLoading(true);
    async function getMovie() {
      try {
        const movieDetails = await getMovieById(movieId);
        setMovie(movieDetails);
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
      {movie && <MovieCard movie={movie} />}
      <h3>Addition information</h3>
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
//https://api.themoviedb.org/3/movie/157336?api_key={api_key}&append_to_response=videos,images
