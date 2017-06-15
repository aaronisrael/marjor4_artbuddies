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

  @observable
  myName = ``

  @observable
  myPhoto = ``

  @observable
  user = ``

  @observable
  matches = []

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
    artbuddiesAPI.create(this.userId, toJS(this.rating), `name`, `photo`).then(this._add).then(this.getID);
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
    artbuddiesAPI.updateRating(this._id, this.rating);
  }

  @action
  _getID = ({...users}) => {
    this._id = users.artbuddies[0]._id;
  }

  getID = () => {
    artbuddiesAPI.exist(this.userId).then(this._getID);
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
    artbuddiesAPI.exist(this.userId).then(this.getID);
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

  searchId = (nameKey, myArray) => {
    for (let i = 0;i < myArray.length;i ++) {
      if (myArray[i]._id === nameKey) {
        return myArray[i];
      }
    }
  }

  myUser = () => {
    artbuddiesAPI.exist(this.userId).then(this._myUser);
  }

  @action
  _myUser = () => {
    artbuddiesAPI.read().then(data => {
      artbuddiesAPI.exist(this.userId).then(this.getID);
      const myObject = this.searchId(this._id, data.artbuddies);
      this.myName = myObject.name;
      this.myPhoto = myObject.photo;
      this.user = myObject;
    });
  }

  findMatch = () => {
    artbuddiesAPI.exist(this.userId).then(this._findMatch);
  }

  @action
  _findMatch = () => {
    artbuddiesAPI.read().then(data => {
      artbuddiesAPI.exist(this.userId).then(this.getID);
      const myObject = this.searchId(this._id, data.artbuddies);
      this.myName = myObject.name;
      this.myPhoto = myObject.photo;
      this.user = myObject;
      data.artbuddies.map(d => {
        let matchCount = 0;
        myObject.rating;
        for (let i = 0;i <= 9;i ++) {
          if (myObject.rating[`art${i}`] !== 0) {
            if (myObject.rating[`art${i}`] === d.rating[`art${i}`]) {
              matchCount ++;
            }
          }
        }
        if (matchCount >= 3) {
          if (d._id !== myObject._id) {
            if (this.matches.toJSON().length === 0) {
              this.matches.push(d);
            } else {
              this.matches.map(m => {
                if (m._id !== d._id) {
                  this.matches.push(d);
                }
              });
            }
          }
        }
      });
    });
  }
}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
