import axios from 'axios';
import { Dispatch } from 'react';
import store from '..';
import * as infoActions from '../module/Info'

const serverIp = 'localhost:3001';

export function getInfo() {
  return axios
    .get(`http://${serverIp}/guest/info`)
    .then((res) => {
        store.dispatch(infoActions.set_title({ title: res.data.title }))
        store.dispatch(infoActions.set_intro({ intro: res.data.intro }))
    })
    .catch((err) => console.log(err.response));
}

export function getCategory(setCategory: Dispatch<any>) {
  return axios
    .get(`http://${serverIp}/guest/category`)
    .then((res) => {
        setCategory(res.data)
    })
    .catch((err) => console.log(err.response));
}