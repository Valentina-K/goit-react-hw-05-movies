import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviewsMovie } from 'serviseAPI/api';
import { Title, ListItem, Text } from './Reviews.styled';
export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function getReviews() {
      //array results
      try {
        const { results } = await getReviewsMovie(movieId);
        const reviewItems = results.map(item => {
          const { id, author, content } = item;
          return { id, author, content };
        });
        setReviews(reviewItems);
      } catch (error) {}
    }
    getReviews();
  }, [movieId]);

  return (
    <section>
      <ul>
        {reviews?.length > 0 ? (
          reviews.map(review => (
            <ListItem key={review.id}>
              <Title>Author: {review.author}</Title>
              <Text>{review.content}</Text>
            </ListItem>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
    </section>
  );
};
