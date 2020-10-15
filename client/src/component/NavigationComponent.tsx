import React from 'react';
import { Link } from 'react-router-dom';

function NavigationComponent() {
  return (
    <nav>
      <ul className="nav-container">
        <li className="nav-item">
          <Link to="post-new">글 작성</Link>
        </li>
        {/* <li className="nav-item">
          <a href="2">2</a>
        </li>
        <li className="nav-item">
          <a href="3">3</a>
        </li> */}
      </ul>
    </nav>
  );
}

export default NavigationComponent;
