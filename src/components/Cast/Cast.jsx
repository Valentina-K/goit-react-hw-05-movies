import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCreditsMovie } from 'serviseAPI/api';
export const Cast = () => {
  const { movieId } = useParams();
  const [name, setName] = useState('');
  const [character, setCharacter] = useState('');

  useEffect(() => {
    async function getCredits() {
      try {
        const { name, character } = await getCreditsMovie(movieId);
        setName(name);
        setCharacter(character);
        console.log('name', name);
      } catch (error) {}
    }
    getCredits();
  }, [movieId]);

  return (
    <section>
      <h2>{name}</h2>
      <p>Character: {character}</p>
    </section>
  );
};
