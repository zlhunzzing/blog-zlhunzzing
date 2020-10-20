import React, { useState } from 'react';

function Category() {
  const catogorist = useState(["list1","list2"])[0]

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
        {catogorist.map((name: any, id: number) => (
          <li
            key={id} 
            style={{
              margin: '5px'
          }}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
