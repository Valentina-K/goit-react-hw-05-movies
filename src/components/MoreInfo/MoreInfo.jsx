import PropTypes from 'prop-types';
import { Link, List, ListItem, Subtitle } from './MoreInfo.styled';
export const MoreInfo = ({ from }) => {
  return (
    <>
      <Subtitle>Addition information</Subtitle>
      <List>
        <ListItem>
          <Link to="cast" state={{ from }}>
            Cast
          </Link>
        </ListItem>
        <ListItem>
          <Link to="reviews" state={{ from }}>
            Reviews
          </Link>
        </ListItem>
      </List>
    </>
  );
};
MoreInfo.propTypes = {
  from: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    state: PropTypes.object,
  }).isRequired,
};
