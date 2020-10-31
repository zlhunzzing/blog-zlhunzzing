import React from 'react';
import { useSelector } from 'react-redux';
import store from '..';

function PostListComponent() {
  const posts = useSelector((state: any) => state.Info.posts);

  return (
    <div
      style={{
        textAlign: 'left',
      }}
    >
      <h5 style={{ margin: 0 }}>전체글보기</h5>
      <div
        style={{
          margin: '0 auto',
          width: '100%',
          borderTop: '1px solid rgb(170, 170, 170)',
        }}
      ></div>
      <ul
        style={{
          marginTop: '0px',
          listStyleType: 'none',
          paddingLeft: '5px'
        }}
      >
        <div
          style={{
            fontSize: '15px'
          }}>
          <span>글 제목</span>
          <span style={{ float: "right" }}>작성일</span>
        </div>
        {posts.map((post: any, id: number) => (
          <li
            key={id} 
            style={{
              borderBottom: '1px solid rgb(230, 230, 230)',
              display: 'block',
            }}
          >
            <span>{post.title}</span>
            <span style={{ float: "right" }}>{store.getState().Handle.momenter(post.createdAt, "YYYY.MM.DD")}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostListComponent;
