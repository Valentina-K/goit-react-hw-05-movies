import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
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
        toast.error("Info about this mivie don't find.");
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
      <hr />
      <h3>Addition information</h3>
      <ul>
        <li>
          <Link to="cast" state={{ from: backLinkHref }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
//https://api.themoviedb.org/3/movie/157336?api_key={api_key}&append_to_response=videos,images
