import logo from '../../images/logo.png';
import Picture from '../../images/Picture.png';
import css from './CardItem.module.css';
import { Component } from 'react';

export class CardItem extends Component {
  state = {
    isFollow: false,
  };

  handleClick = e => {
    this.setState({
      isFollow: !this.state.isFollow,
    });
  };

  componentDidMount() {
    if (this.props.id === id)
      this.setState({
        isFollow: localStorage.getItem(this.props.id),
      });
  }

  componentDidUpdate(_, prevState) {
    localStorage.setItem(this.props.id, this.state.isFollow);
  }

  render() {
    const { avatar, user, tweets, followers } = this.props;

    return (
      <li className={css.cardItem}>
        <img className={css.logo} src={logo} alt="logo" />
        <img className={css.cardDecor} src={Picture} alt="decor" />
        <div className={css.cardPhotoWrapper}>
          <img className={css.avatar} src={avatar} alt="avatar" />
        </div>
        <p className={css.name}>{user}</p>
        <p className={css.tweets}>{tweets}</p>
        <p className={css.followers}>
          {this.state.isFollow ? followers + 1 : followers}
        </p>
        <button
          className={this.state.isFollow ? css.cardBtnGreen : css.cardBtn}
          type="button"
          onClick={this.handleClick}
        >
          {this.state.isFollow ? 'Following' : 'Follow'}
        </button>
      </li>
    );
  }
}
