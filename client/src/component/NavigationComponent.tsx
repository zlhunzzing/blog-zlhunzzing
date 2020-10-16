import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavigationComponent() {
  const isAdmin = useSelector((state: any) => state.Auth.isAdmin);

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
              <Link to="/">로그인</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavigationComponent;
