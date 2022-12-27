import css from './CardList.module.css';
import { Component } from 'react';
import { CardItem } from '../CardItem/CardItem';

export class CardList extends Component {
  state = {
    cardArray: this.props.users,
  };

  ToggleBtn = id => {
    const followedUser = this.cardArray.find(user => {
      user.id === id;
    });
    followedUser.isFollow = !followedUser.isFollow;
    this.state(prevState => ({
      cardArray: [...prevState.cardArray, followedUser],
    }));
  };

  render() {
    console.log(this.state.cardArray);
    return (
      <ul className={css.cardList}>
        {this.state.cardArray.map(({ id, avatar, user, tweets, followers }) => {
          return (
            <CardItem
              key={id}
              avatar={avatar}
              user={user}
              tweets={tweets}
              followers={followers}
              onClick={this.ToggleBtn}
            />
          );
        })}
      </ul>
    );
  }
}
