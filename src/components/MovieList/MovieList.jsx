import { useLocation } from 'react-router-dom';
import { Link, ListItem, List } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  const path = location.pathname === '/' ? 'movies' : location.pathname;
  return (
    <List>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <Link to={`${path}/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};
