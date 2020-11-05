import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import * as guestAPI from '../api/Guest'

function Category() {
  const category = useSelector((state: any) => state.Info.category);

  return (
    <div className="menu-blog" style={{textAlign: 'left'}}>
      <div style={{
        padding: '10px',
        fontWeight: 'bold',
        color: 'rgb(60, 60, 60)'
      }}>Category</div>

      <div
       style={{
        margin: '0 auto',
        width: '90%',
        borderTop: '1px solid rgb(230, 230, 230)',
      }}
      ></div>

      <ul
        style={{
          marginTop: '0px',
          listStyleType: 'none',
          paddingLeft: '5px'
        }}
      >
        <li
          style={{
            display: 'block',
            margin: '5px'
        }}>
          <Link
              to='/'
              onClick={() => {
                guestAPI.getPosts()
              }}
            >전체보기</Link>
        </li>
        {category.map((list: any, id: number) => (
          <li
            key={id} 
            style={{
              display: 'block',
              margin: '5px'
          }}>
            <Link
              to='/'
              onClick={() => {
                guestAPI.getPosts(list.id)
              }}
            >{list.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
