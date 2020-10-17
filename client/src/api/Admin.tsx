import axios from 'axios';
import store from '..';
// import * as authActions from '../modules/Auth';

const serverIp = 'localhost:3001';

export function signup(
  password: string,
) {
  return axios
    .post(`http://${serverIp}/admin/signup`, {
      password,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err.response));
}