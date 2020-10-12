import { REACT_APP_PROJECT_NAME } from 'env'
import storage from 'utils/storage';

export const token = {
  get() {
    return storage.get(`${REACT_APP_PROJECT_NAME}__user`);
  },
  valid() {
    const user: IAuthLoginResponse = this.get();
    // console.log('user', user);
    if (!user) {
      return false;
    }
    const now = Date.now();
    const expireTime = (new Date(user.expire_time)).getTime();
    return now < expireTime;
  },
};
