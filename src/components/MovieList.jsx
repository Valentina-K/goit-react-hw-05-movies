import { Link } from 'react-router-dom';
import { Container } from './App.styled';

export const MovieList = ({ movies }) => {
  console.log(movies);
  return (
    <Container>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </Container>
  );
};
