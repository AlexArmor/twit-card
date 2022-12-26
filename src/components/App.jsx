import { Component } from 'react';
import users from '../data/users';
import css from './App.module.css';
import logo from '../images/logo.png';
import Picture from '../images/Picture.png';

export class App extends Component {
  render() {
    const { id, user, tweets, followers, avatar } = users[0];
    return (
      <section className={css.sectionCards}>
        <ul className={css.cardList}>
          <li key={id} className={css.cardItem}>
            <img className={css.logo} src={logo} alt="logo" />
            <img className={css.cardDecor} src={Picture} alt="decor" />
            <div className={css.cardPhotoWrapper}>
              <img className={css.avatar} src={avatar} alt="avatar" />
            </div>
            <p className={css.name}>{user}</p>
            <p className={css.tweets}>{tweets}</p>
            <p className={css.followers}>{followers}</p>
            <button className={css.car} type="button">
              Follow
            </button>
          </li>
        </ul>
      </section>
    );
  }
}
