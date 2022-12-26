import { Component } from 'react';
import css from './App.module.css';

export class App extends Component {
  render() {
    return (
      <section className={css.sectionCards}>
        <ul className={css.cardList}>
          <li className={css.cardItem}>
            <img src="" alt="" />
            <img src="" alt="" />
          </li>
        </ul>
      </section>
    );
  }
}
