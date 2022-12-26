import { Component } from 'react';
import users from '../data/users';
import css from './App.module.css';

export class App extends Component {
  render() {
    const { id, user, tweets, followers, avatar } = users[0];
    return (
      <section className={css.sectionCards}>
        <ul className={css.cardList}>
          <li key={id} className={css.cardItem}>
            <img className={css.logo} src="../images/logo.png" alt="logo" />
            <img
              className={css.cardDecor}
              src="../images/Picture.png"
              alt="decor"
            />
            <div className={css.cardPhotoWrapper}>
              <img src={avatar} alt="avatar" />
            </div>
            <p>{user}</p>
            <p>{tweets}</p>
            <p>{followers}</p>
            <button type="button">Follow</button>
          </li>
        </ul>
      </section>
    );
  }
}
