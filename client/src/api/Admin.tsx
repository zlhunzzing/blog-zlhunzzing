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

export function addCategory() {
  return axios
    .post(`http://${serverIp}/admin/category`,
      {},
      {
        headers: {
          Authorization: store.getState().Auth.token,
        }
      }
    )
    .then((res) => {
      store.dispatch(infoActions.set_category({ category: res.data }))
    })
    .catch((err) => console.log(err.response));
}

export function putCategory(id: any, name: any) {
  return axios
    .put(`http://${serverIp}/admin/category/${id}`,
      { name },
      {
        headers: {
          Authorization: store.getState().Auth.token,
        },
      }
    )
    .then((res) => {
      store.dispatch(infoActions.set_category({ category: res.data }))
    })
    .catch((err) => console.log(err.response));
}

export function deleteCategory(id: any) {
  return axios
    .delete(`http://${serverIp}/admin/category/${id}`,
      {
        headers: {
          Authorization: store.getState().Auth.token,
        },
        data: { id }
      }
    )
    .then((res) => {
      store.dispatch(infoActions.set_category({ category: res.data }))
    })
    .catch((err) => console.log(err.response));
}

export function addPost(title: string, content: string, categoryId: number, history: any) {
  return axios
    .post(`http://${serverIp}/admin/addpost`,
      { title, content, categoryId },
      {
        headers: {
          Authorization: store.getState().Auth.token,
        }
      }
    )
    .then((res) => {
      const data = store.getState().Handle.paging(res.data, 5)
      store.dispatch(infoActions.set_posts({ posts: data }))
      store.dispatch(infoActions.set_current_post({ currentPost: data[0][0] }))
      const range = store.getState().Handle.ranging(data.length, 10)
      store.dispatch(infoActions.set_posts_range({ postsRange: range }))
      history.push('/')
    })
    .catch((err) => console.log(err.response));
}

export function editPost(title: string, content: string, categoryId: number, postId: number, history: any) {
  return axios
    .put(`http://${serverIp}/admin/editpost/${postId}`,
      { title, content, categoryId },
      {
        headers: {
          Authorization: store.getState().Auth.token,
        }
      }
    )
    .then((res) => {
      const data = store.getState().Handle.paging(res.data, 5)
      store.dispatch(infoActions.set_posts({ posts: data }))
      store.dispatch(infoActions.set_current_post({ currentPost: data[0][0] }))
      const range = store.getState().Handle.ranging(data.length, 10)
      store.dispatch(infoActions.set_posts_range({ postsRange: range }))
      history.push('/')
    })
    .catch((err) => console.log(err.response));
}