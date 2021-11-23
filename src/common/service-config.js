import axios from 'axios';
import Const from '../common/constants';
// import UserStore from '../common/user-store';
import Notifications, { notify } from 'react-notify-toast';
// import { getUtcOffset } from '../common/helper';
const token = localStorage.getItem('user-token');

export function api() {
  let instance = axios.create({
    baseURL: Const.API.Url,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Authorization': `Bearer ${token}`
    }
  });

  // instance.defaults.headers.common['Time-Offset'] = getUtcOffset();

  // if (UserStore.loggedin()) {
  //   instance.defaults.headers.common['access-token'] = UserStore.get('token');
  // }

  instance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      // TODO: handle auto-logout on 401
      if (error && error.response && error.response.status >= 500) {
        notify.error(`Error in service request: ${error.message}`);
        console.log(error);
      }
      return Promise.reject(error.response);
    }
  );
  return instance;
}


