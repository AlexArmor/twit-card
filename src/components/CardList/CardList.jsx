import css from './CardList.module.css';
import { Component } from 'react';
import { CardItem } from '../CardItem/CardItem';

export class CardList extends Component {
  // state = {
  //   cardArray: this.props.users,
  // };

  // ToggleBtn = id => {
  //   const followedUser = this.state.cardArray.find(user => user.id === id);
  //   console.log(followedUser);
  //   followedUser.isFollow = !followedUser.isFollow;
  //   this.state(prevState => ({
  //     cardArray: [...prevState.cardArray, followedUser],
  //   }));
  // };

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
              // isFollow={isFollow}
              // onClick={this.ToggleBtn}
            />
          );
        })}
      </ul>
    );
  }
}
