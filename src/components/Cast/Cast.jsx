import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCreditsMovie } from 'serviseAPI/api';
import { Title, Profile, Text, ListItem } from './Cast.styled';
export const Cast = () => {
  const { movieId } = useParams();
  const BASE_URL = 'http://image.tmdb.org/t/p/w200';
  const [castList, setCastList] = useState(null);

  useEffect(() => {
    async function getCredits() {
      try {
        const { cast } = await getCreditsMovie(movieId);
        const casts = cast.map(item => {
          const { name, character, profile_path, id } = item;
          return { name, character, profile_path, id };
        });
        setCastList(casts);
      } catch (error) {}
    }
    getCredits();
  }, [movieId]);

  return (
    <section>
      <ul>
        {castList &&
          castList.map(cast => (
            <ListItem key={cast.id}>
              <Profile
                src={`${BASE_URL}${cast.profile_path}`}
                alt={cast.name}
              />
              <Title>{cast.name}</Title>
              <Text>Character: {cast.character}</Text>
            </ListItem>
          ))}
      </ul>
    </section>
  );
};
