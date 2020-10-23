import axios from 'axios';
import store from '..';
import * as authActions from '../module/Auth';
import * as infoActions from '../module/Info';

const serverIp = 'localhost:3001';

export function signin(
  password: string,
) {
  return axios
    .post(`http://${serverIp}/admin/signin`, {
      password,
    })
    .then((res) => {
      store.dispatch(authActions.sign_in())
      store.dispatch(authActions.setToken({ token: res.data.token }))
    })
    .catch((err) => console.log(err.response));
}

export function setInfo(
  title: string,
  intro: string
) {
  return axios
    .post(`http://${serverIp}/admin/info`,
      {
        title,
        intro
      },
      {
        headers: {
          Authorization: store.getState().Auth.token,
        }
      }
    )
    .then((res) => {
      store.dispatch(infoActions.set_title({ title: res.data.title }))
      store.dispatch(infoActions.set_intro({ intro: res.data.intro }))
      alert('변경완료')
    })
    .catch((err) => console.log(err.response));
}