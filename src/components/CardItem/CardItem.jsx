import logo from '../../images/logo.png';
import Picture from '../../images/Picture.png';
import css from './CardItem.module.css';

export const CardItem = ({ id, avatar, user, tweets, followers }) => {
  return (
    <li key={id} className={css.cardItem}>
      <img className={css.logo} src={logo} alt="logo" />
      <img className={css.cardDecor} src={Picture} alt="decor" />
      <div className={css.cardPhotoWrapper}>
        <img className={css.avatar} src={avatar} alt="avatar" />
      </div>
      <p className={css.name}>{user}</p>
      <p className={css.tweets}>{tweets}</p>
      <p className={css.followers}>{followers}</p>
      <button className={css.cardBtn} type="button">
        Follow
      </button>
    </li>
  );
};
