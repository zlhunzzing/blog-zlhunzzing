import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as adminAPI from '../api/Admin'
import * as guestAPI from '../api/Guest'
import store from '..'

function ContentComponent() {
  const params = Number(document.location.pathname.slice(1))
  const post = useSelector((state: any) => state.Info.currentPost)
  const history = useState(useHistory())[0]

  useEffect(() => {
    if(params) guestAPI.getPost(params)
  }, [params])

  return (
      <span
        style={{
          display: 'inline-block',
          textAlign: 'left',
          width: '95%',
          minHeight: '700px',
        }}
      >
        <div
          style={{
            width: '95%',
            height: '55px',
            fontSize: '30px',
          }}
        >{post.title}</div>

        <div>
          <span>{store.getState().Handle.momenter(post.createdAt, "YYYY.MM.DD")}</span>
          {" "}
          <Link to='editpost'>
            <button>수정</button>
          </Link>
          {" "}
          <button onClick={() => { adminAPI.deletePost(post.id, history) }}>삭제</button>
        </div>

        <div
          style={{
            margin: '0 auto',
            marginTop: '10px',
            marginBottom: '10px',
            width: '100%',
            borderTop: '1px solid rgb(230, 230, 230)',
          }}
        ></div>

        <div
          style={{
            width: '95%',
            height: '500px',
            border: 'none',
            resize: 'none',
          }}
        >{post.content}</div>
      </span>
  );
}

export default ContentComponent;
