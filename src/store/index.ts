import { observable } from 'mobx';

class AppStore {
  @observable username: string = ''

  setUsername(username: string) {
    this.username = username;
  }
}

export default new AppStore();
