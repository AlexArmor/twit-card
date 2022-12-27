import css from './CardList.module.css';
import { Component } from 'react';
import { CardItem } from '../CardItem/CardItem';

export class CardList extends Component {
  render() {
    return (
      <ul className={css.cardList}>
        {this.props.users.map(({ id, avatar, user, tweets, followers }) => {
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
  }
}
