import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HrComponent from '../component/HrComponent';
import * as adminAPI from '../api/Admin'

function Admin() {
  const [title, setTitle] = useState('')
  const [intro, setIntro] = useState('')

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
      <br></br>
      <form onSubmit={(e) => {
        e.preventDefault()
        adminAPI.setInfo(title, intro)
      }}>
        <div>
          <h5 style={{ float: 'left', paddingLeft: '20px', margin: '0' }}>블로그명</h5>
          <textarea
            onChange={({ target: { value } }) => setTitle(value)}
            style={{
              width: '80%',
              height: '20px',
              resize: 'none',
            }}></textarea>
        </div>
        <br></br>
        <div>
          <h5 style={{
            float: 'left',
            paddingLeft: '20px',
            margin: '0',
            paddingRight: '10px'
          }}>소개글</h5>
          <textarea
            onChange={({ target: { value } }) => setIntro(value)}
            style={{
              width: '80%',
              height: '20px',
              resize: 'none',
            }}></textarea>
        </div>
        <br></br>
        <button type="submit">확인</button>
      </form>
    </div>
  );
}

export default Admin;
