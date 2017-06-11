import {observable, action, toJS} from 'mobx';

import Artbuddy from '../models/Artbuddy';
import artbuddiesAPI from '../lib/api/artbuddies';


class Store {

  @observable
  userId = 0

  @observable
  token = ``

  @observable
  users = []

  @observable
  rating = {art0: 0, art1: 0, art2: 0, art3: 0, art4: 0, art5: 0, art6: 0, art7: 0, art8: 0, art9: 0}

  @observable
  fbName = ``
  
  @observable
  _id = ``

  init = () => {
    artbuddiesAPI.read()
    .then(({users}) => {this._add(...users);});
  }

  constructor() {
    this.init();
  }

  login = (userId, token) => {
    this.userId = userId;
    this.token = token;
    artbuddiesAPI.exist(userId).then(this._checkIfExist);
    console.log(userId);
    console.log(token);
    this.getFBName(userId, token);
  }

  add = () => {
    artbuddiesAPI.create(this.userId, toJS(this.rating), `aaron`).then(this._add);
  }

  update = (liked, key) => {
    console.log(liked);
    console.log(key);
    let value = 0;
    if (liked) {
      value = 1;
    } else {
      value = 2;
    }
    this.rating[`art${key}`] = value;
    artbuddiesAPI.update(this._id, this.rating);
  }

  @action
  _checkIfExist = ({...users}) => {
    if (users.artbuddies.length === 0) {
      this.add();
    }
  }

  @action
  _add = (...users) => {
    //console.log(users.artbuddies[0]);
    users.forEach(t => {
      this.users.push(
        new Artbuddy(t)
      );

    });

  }

  getFBName = (userId, token) => {
    fetch(`https://graph.facebook.com/${userId}?access_token=${token}`, {
      method: `get`
    }).then(response => response.json()).then(function(data) {
      console.log(data.name);
      console.log(this.fbName);
      this.fbName = data.name;
    });
  }


  @action
  _fetchName = response => {
    console.log(response);
  }
}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
