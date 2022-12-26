import { Component } from 'react';
import user from '../data/users';
import css from './App.module.css';

export class App extends Component {
  render() {
    return (
      <section className={css.sectionCards}>
        <ul className={css.cardList}>
          <li className={css.cardItem}>
            <img className={css.logo} src="../images/logo.png" alt="logo" />
            <img
              className={css.cardDecor}
              src="../images/Picture.png"
              alt="decor"
            />
            <div className={css.cardPhotoWrapper}>
              <img src="" alt="" />
            </div>
            <p></p>
            <p></p>
            <p></p>
            <button type="button"></button>
          </li>
        </ul>
      </section>
    );
  }
}
