import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { BackLink } from 'components/BackLink/BackLink';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { MoreInfo } from 'components/MoreInfo/MoreInfo';
import { getMovieById } from 'serviseAPI/api';
import { Loader } from 'components/Loader/Loader';
export const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location?.state?.from ?? '/movies';
  console.log('backLinkHref', backLinkHref);
  useEffect(() => {
    setIsLoading(true);
    async function getMovie() {
      try {
        const {
          poster_path,
          title,
          release_date,
          vote_average,
          overview,
          genres,
        } = await getMovieById(movieId);
        setMovie({
          poster_path,
          title,
          release_date,
          vote_average,
          overview,
          genres,
        });
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
      <MoreInfo from={backLinkHref} />
      <hr />
      <Outlet />
    </main>
  );
};
//https://api.themoviedb.org/3/movie/157336?api_key={api_key}&append_to_response=videos,images
