import { Title, Poster, Description, Text, Subtitle } from './MovieCard.styled';
export const MovieCard = ({ movie }) => {
  const BASE_URL = 'http://image.tmdb.org/t/p/w500';
  const { genres } = movie;
  const movieGenres = genres ? genres.map(genre => genre.name).join(', ') : '';

  return (
    <Description>
      <Poster src={`${BASE_URL}${movie.poster_path}`} alt={movie.title} />
      <div>
        <Title>
          {movie.title} ({movie.release_date})
        </Title>
        <Text>User Score: {movie.vote_average}%</Text>
        <Subtitle>Overview</Subtitle>
        <Text>{movie.overview}</Text>
        <Subtitle>Genres</Subtitle>
        <Text>{movieGenres}</Text>
      </div>
    </Description>
  );
};
