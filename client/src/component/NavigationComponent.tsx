import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdminSignComponent from './AdminSignComponent';
import store from '..';
import * as handleActions from '../module/Handle'

function NavigationComponent() {
  const isAdmin = useSelector((state: any) => state.Auth.isAdmin);
  const isModal = useSelector((state: any) => state.Handle.isModal);

  return (
    <nav>
      {isAdmin ? (
        <div style={{ paddingTop: '30px' }}>
          <ul className="nav-container" style={{ position: 'fixed' }}>
            <li className="nav-item">
              <Link to="post-new">글 작성</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <ul className="nav-container">
            <li className="nav-item">
              <Link to="/e" onClick={(e)=>{
                e.preventDefault()
                store.dispatch(handleActions.open_modal())
              }}>로그인</Link>
            </li>
          </ul>
        </div>
      )}
      {isModal ? <AdminSignComponent /> : null}
    </nav>
  );
}

export default NavigationComponent;
