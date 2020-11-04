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
      const data = store.getState().Handle.paging(res.data, 5)
      store.dispatch(infoActions.set_posts({ posts: data }))
      const range = store.getState().Handle.ranging(data.length, 10)
      store.dispatch(infoActions.set_posts_range({ postsRange: range }))
    })
    .catch((err) => console.log(err.response));
}


export function getPost(id: number) {
  return axios
    .get(`http://${serverIp}/guest/post/${id}`)
    .then((res) => {
      store.dispatch(infoActions.set_current_post({ currentPost: res.data }))
    })
    .catch((err) => console.log(err.response));
}