export const MovieCard = ({ movie }) => {
  const BASE_URL = 'http://image.tmdb.org/t/p/w500';
  const { genres } = movie;
  const movieGenres = genres ? genres.map(genre => genre.name).join(', ') : '';

  return (
    <>
      <img src={`${BASE_URL}${movie.poster_path}`} alt={movie.title} />
      <div>
        <h2>
          {movie.title} ({movie.release_date})
        </h2>
        <p>User Score: {movie.vote_average}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movieGenres}</p>
      </div>
    </>
  );
};
