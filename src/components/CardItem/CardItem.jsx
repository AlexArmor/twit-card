import PropTypes from 'prop-types';
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
    const KEY = localStorage.getItem(this.props.id);
    if (KEY) {
      this.setState({
        isFollow: JSON.parse(KEY),
      });
    }
  }

  componentDidUpdate() {
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
          {this.state.isFollow
            ? new Intl.NumberFormat('en-US').format(followers + 1)
            : new Intl.NumberFormat('en-US').format(followers)}
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

CardItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
};
