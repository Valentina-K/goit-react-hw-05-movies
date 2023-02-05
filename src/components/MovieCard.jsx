export const MovieCard = ({ movie }) => {
  return (
    <>
      <button>Go back</button>
      <img src={movie.poster_path} alt={movie.title} />
      <div>
        <h2>
          {movie.title}({movie.release_date})
        </h2>
        <p>User Score: {movie.vote_average}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>genres</p>
      </div>
    </>
  );
};
