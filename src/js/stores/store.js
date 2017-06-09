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

  add = (userId, token) => {
    console.log(userId);
    console.log(token);

    console.log(artbuddiesAPI.read());

    console.log(artbuddiesAPI.exist(userId));
    artbuddiesAPI.create(userId).then(this._add);
  }

  @action
  _add = (...users) => {

    users.forEach(t => {
      console.log(t.userId);
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
