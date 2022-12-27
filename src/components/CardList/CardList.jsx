import PropTypes from 'prop-types';
import css from './CardList.module.css';
import { CardItem } from '../CardItem/CardItem';

export const CardList = ({ users }) => {
  return (
    <ul className={css.cardList}>
      {users.map(({ id, avatar, user, tweets, followers }) => {
        return (
          <CardItem
            key={id}
            id={id}
            avatar={avatar}
            user={user}
            tweets={tweets}
            followers={followers}
          />
        );
      })}
    </ul>
  );
};

CardList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
    })
  ),
};
