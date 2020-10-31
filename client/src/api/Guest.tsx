import axios from 'axios';
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

export function getCategory() {
  return axios
    .get(`http://${serverIp}/guest/category`)
    .then((res) => {
        store.dispatch(infoActions.set_category({ category: res.data }))
    })
    .catch((err) => console.log(err.response));
}

export function getPosts() {
  return axios
    .get(`http://${serverIp}/guest/posts`)
    .then((res) => {
        store.dispatch(infoActions.set_posts({ posts: res.data }))
    })
    .catch((err) => console.log(err.response));
}