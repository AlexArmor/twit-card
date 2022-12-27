import { Component } from 'react';
import { CardList } from './CardList/CardList';
import users from '../data/users';

export class App extends Component {
  render() {
    return <CardList users={users} />;
  }
}
