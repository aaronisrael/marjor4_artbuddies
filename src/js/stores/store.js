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
  _id = ``

  // @observable
  // fbName = ``
  //
  // @observable
  // fbPhoto = ``

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
    console.log(userId);
    console.log(token);
    artbuddiesAPI.exist(userId).then(this._checkIfExist);
  }

  add = () => {
    artbuddiesAPI.create(this.userId, toJS(this.rating), `aaron`, `photo`).then(this._add);
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
    console.log(this.userId);
    artbuddiesAPI.updateRating(this._id, this.rating);
  }

  @action
  getID = ({...users}) => {
    this._id = users.artbuddies[0]._id;
  }

  @action
  _checkIfExist = ({...users}) => {

    if (users.artbuddies.length === 0) {
      this.add();
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

  @action
  getFBData = () => {
    console.log(this.userId);
    artbuddiesAPI.exist(this.userId).then(this.getID);
    console.log(this.userId);
    console.log(this.token);
    fetch(`https://graph.facebook.com/${this.userId}?access_token=${this.token}`, {
      method: `get`
    }).then(response => response.json()).then(data => {
      this.handleUpdateName(data.name);
    });
    fetch(`https://graph.facebook.com/${this.userId}/picture?height=480&width=480 `, {
      method: `get`
    }).then(data => {
      this.handleUpdatePhoto(data.url);
    });
  }

  @action
  handleUpdateName = name => {
    artbuddiesAPI.updateFbName(this._id, name);
  }

  @action
  handleUpdatePhoto = photo => {
    artbuddiesAPI.updateFbPhoto(this._id, photo);
  }

  // findMatch = () => {
  //   artbuddiesAPI.read().then(data => {
  //     console.log(data);
  //   });
  // }
}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
