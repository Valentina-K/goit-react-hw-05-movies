import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviewsMovie } from 'serviseAPI/api';
import { Loader } from 'components/Loader/Loader';
export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getReviews() {
      //array results
      try {
        const reviewList = await getReviewsMovie(movieId);
        const reviewItems = reviewList.map(item => {
          const { id, author, content } = item;
          return { id, author, content };
        });
        setReviews(reviewItems);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <section>
      <ul>
        {isLoading && <Loader />}
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
