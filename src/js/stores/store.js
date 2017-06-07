import {observable} from 'mobx';

class Store {

  @observable
  userId = 0

  @observable
  token = ``

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
