import React, { useEffect, useState } from 'react';
import * as guestAPI from '../api/Guest'

function Category() {
  const [category, setCategory] = useState([{name: 'list1'}, {name: 'list2'}])

  useEffect(() => {
    guestAPI.getCategory(setCategory)
  }, [])

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

      <div style={{
        paddingTop: '10px',
        paddingLeft: '10px',
      }}>전체보기</div>

      <ul style={{
            marginTop: '0px',
            listStyleType: 'none',
            paddingLeft: '5px'
          }}>
        {category.map((list: any, id: number) => (
          <li
            key={id} 
            style={{
              display: 'block',
              margin: '5px'
          }}>{list.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
