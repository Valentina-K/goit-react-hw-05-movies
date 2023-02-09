import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviewsMovie } from 'serviseAPI/api';
export const Reviews = () => {
  const { movieId } = useParams();
  const [author, setAuthor] = useState('');
  const [reviews, setReviews] = useState('');

  useEffect(() => {
    async function getReviews() {
      //array results
      try {
        const { author, content } = await getReviewsMovie(movieId);

        setAuthor(author);
        setReviews(content);
        console.log('author', author);
      } catch (error) {}
    }
    getReviews();
  }, [movieId]);

  return (
    <section>
      <h2>Author: {author}</h2>
      <p>{reviews}</p>
    </section>
  );
};
