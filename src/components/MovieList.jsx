import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  console.log(location);
  const path = location.pathname === '/' ? 'movies' : location.pathname;
  console.log(location);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${path}/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
