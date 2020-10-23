import axios from 'axios';
import store from '..';
import * as infoActions from '../module/Info'

const serverIp = 'localhost:3001';

export function getInfo() {
  return axios
    .get(`http://${serverIp}/info`)
    .then((res) => {
        store.dispatch(infoActions.set_title({ title: res.data.title }))
        store.dispatch(infoActions.set_intro({ intro: res.data.intro }))
      })
    .catch((err) => console.log(err.response));
}