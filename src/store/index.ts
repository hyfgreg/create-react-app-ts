import { observable, action } from 'mobx';

class AppStore {
  @observable username: string = ''
  @observable user: ILooseObject | null = null

  @action.bound setUsername(username: string) {
    this.username = username;
  }

  @action.bound setUser(user:ILooseObject | null){
    this.user = user
  }
}

export default new AppStore();
