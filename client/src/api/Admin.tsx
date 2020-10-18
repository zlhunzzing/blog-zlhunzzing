import axios from 'axios';
import store from '..';
import * as authActions from '../module/Auth';

const serverIp = 'localhost:3001';

export function signup(
  password: string,
) {
  return axios
    .post(`http://${serverIp}/admin/signup`, {
      password,
    })
    .then((res) => {
      if(res.data) {
        alert('성공')
        store.dispatch(authActions.sign_in())
      }
    })
    .catch((err) => console.log(err.response));
}