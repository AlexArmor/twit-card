import css from './CardList.module.css';
import { CardItem } from '../CardItem/CardItem';

export const CardList = ({ users }) => {
  return (
    <ul className={css.cardList}>
      {users.map(({ id, avatar, user, tweets, followers }) => {
        return (
          <CardItem
            key={id}
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
