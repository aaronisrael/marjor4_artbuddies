import {observable, action} from 'mobx';

import Artbuddy from '../models/Artbuddy';
import artbuddiesAPI from '../lib/api/artbuddies';


class Store {

  @observable
  userId = 0

  @observable
  token = ``

  @observable
  users = []

  init = () => {
    artbuddiesAPI.read()
    .then(({users}) => {this._add(...users);});
  }

  constructor() {
    this.init();
  }

  login = (userId, token) => {
    console.log(userId);
    this.userId = userId;
    this.token = token;
    console.log(token);
    artbuddiesAPI.exist(userId).then(this.checkIfExist);
  }

  add = () => {
    console.log(this.userId);
    console.log(this.token);
    artbuddiesAPI.create(this.userId).then(this._add);
  }

  @action
  checkIfExist = ({...users}) => {
    console.log(users.artbuddies);
    if (users.artbuddies.length === 0) {
      console.log(`nieuwe gebruiker`);
      this.add();
    }
    else {
      console.log(`is al aangemaakt`);
    }
  }

  @action
  _add = (...users) => {
    users.forEach(t => {
      this.users.push(
        new Artbuddy(t)
      );

    });

  }
}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
