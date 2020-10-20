import React from 'react';
import { Link } from 'react-router-dom';
import HrComponent from '../component/HrComponent';

function Admin() {
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
    </div>
  );
}

export default Admin;
