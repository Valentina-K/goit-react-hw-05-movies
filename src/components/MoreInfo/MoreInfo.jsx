import { Link, List, ListItem, Subtitle } from './MoreInfo.styled';
export const MoreInfo = ({ from }) => {
  return (
    <>
      <Subtitle>Addition information</Subtitle>
      <List>
        <ListItem>
          <Link to="cast" state={{ from: { from } }}>
            Cast
          </Link>
        </ListItem>
        <ListItem>
          <Link to="reviews" state={{ from: { from } }}>
            Reviews
          </Link>
        </ListItem>
      </List>
    </>
  );
};
