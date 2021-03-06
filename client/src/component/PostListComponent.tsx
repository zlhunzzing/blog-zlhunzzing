import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import store from '..';

function PostListComponent() {
  const [isView, setIsView] = useState(true)
  const posts = useSelector((state: any) => state.Info.posts);
  const [currentPage, setCurrentPage] = useState(1)
  const postIndex = useSelector((state: any) => state.Info.postsRange)

  return isView ? (
    <div
      style={{
        textAlign: 'left',
      }}
    >
      <h5 style={{ margin: 0, cursor: 'pointer' }}
          onClick={() => {
            setIsView(false)
          }}
      >전체글보기</h5>
      <ul
        style={{
          listStyleType: 'none',
          paddingLeft: '5px',
        }}
      >
        <div
          style={{
            fontSize: '15px'
          }}>
          <span>글 제목</span>
          <span style={{ float: "right" }}>작성일</span>
          <div
            style={{
              margin: '0 auto',
              width: '100%',
              borderTop: '1px solid rgb(170, 170, 170)',
            }}
          ></div>
        </div>
        {posts[currentPage - 1] ?
          posts[currentPage - 1].map((post: any, id: number) => (
          <li
            key={id} 
            style={{
              borderBottom: '1px solid rgb(230, 230, 230)',
              display: 'block',
            }}
          >
            <Link to={`${post.id}`}>{post.title}</Link>
            <span style={{ float: "right" }}>{store.getState().Handle.momenter(post.createdAt, "YYYY.MM.DD")}</span>
          </li>
        )) : null}
      </ul>
      <ul style={{ textAlign: 'center' }}>
        {postIndex[0] ? (
          postIndex[0].map((page: any, id: number) => (
            <li
              key={id}
              onClick={() => {
                setCurrentPage(page);
              }}
            >
              <a
                href={`#${page}`}
                style={{
                  padding: '4px',
                  textDecoration: 'none',
                  color: 'black'
                }}
              >{page}</a>
            </li>
          ))
        ) : null}
      </ul>
    </div>
  ) : <div
        style={{
          textAlign: 'left',
          paddingBottom: '10px'
        }}
      >
        <h5
          style={{ margin: 0, cursor: 'pointer' }}
          onClick={() => {
            setIsView(true)
          }}
        >전체글보기</h5>
      </div>;
}

export default PostListComponent;
