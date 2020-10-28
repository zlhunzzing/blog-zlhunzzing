import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HrComponent from '../component/HrComponent';
import * as adminAPI from '../api/Admin'
import { useSelector } from 'react-redux';

function Admin() {
  const [categoryName, setCategoryName] = useState('')
  const category = useSelector((state: any) => state.Info.category);

  function value_check() {
    const check_count = document.getElementsByName('category').length;

    for(let i=0; i<check_count; i++) {
      if((document.getElementsByName("category")[i] as any).checked === true) {
        return Number((document.getElementsByName("category")[i] as any).value)
      }
    }
  }

  useEffect(() => {
    if((document.getElementsByName("category")[0] as any)) {
      (document.getElementsByName("category")[0] as any).checked = true
    }
  })

  return (
    <div className="Home">
      <ul style={{
        padding: '0',
        listStyleType: 'none',
      }}>
        <li className="option-admin">
          <Link to="/admin/info">기본 정보</Link>
        </li>
        <li className="option-admin">
          <Link to="/admin/category">메뉴</Link>
        </li>
      </ul>
      <HrComponent></HrComponent>
      <h4 style={{
        textAlign: 'left',
        paddingLeft: '20px'
      }}>카테고리 관리</h4>
      <form onSubmit={(e) => {
        e.preventDefault()
        const selected = value_check()
        adminAPI.putCategory(selected, categoryName)
      }}>
        <div>
          <span style={{
            width: '60%',
            height: '30px'
          }}>
            <h5
              style={{
                float: 'left',
                paddingLeft: '20px',
                paddingRight: '25px',
                margin: '0'
              }}
            >카테고리명</h5>
            <textarea
              onChange={({ target: { value } }) => setCategoryName(value)}
              style={{
                float: 'left',
                width: '200px',
                height: '20px',
                resize: 'none',
              }}
            ></textarea>
          </span>

          <span style={{
              display: 'inline-block',
              border: '1px solid rgb(170, 170, 170)',
              width: '170px',
              textAlign: 'left',
            }}
          >
          <button
            style={{ margin: '3px'}}
            onClick={() => {
              adminAPI.addCategory()
            }}
          >카테고리 추가</button>
          <button
            onClick={async (e) => {
              e.preventDefault()
              const selected = value_check()
              adminAPI.deleteCategory(selected)
            }}
          >삭제</button>
            <div
              style={{
                margin: '0 auto',
                width: '90%',
                borderTop: '1px solid rgb(230, 230, 230)',
              }}
            ></div>
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
                  }}>
                    <input type="radio" name="category" value={`${list.id}`}></input>
                    {' '}<label>{list.name}</label>
                </li>
              ))}
            </ul>
          </span>
        </div>
        <div
          style={{
            margin: '0 auto',
            marginTop: '20px',
            marginBottom: '20px',
            width: '95%',
            borderTop: '1px solid rgb(230, 230, 230)',
          }}
        ></div>
        <button type="submit">확인</button>
      </form>
    </div>
  );
}

export default Admin;
