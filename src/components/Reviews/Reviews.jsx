import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviewsMovie } from 'serviseAPI/api';
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
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>No reviews yet</p>
        )}
      </ul>
    </section>
  );
};
