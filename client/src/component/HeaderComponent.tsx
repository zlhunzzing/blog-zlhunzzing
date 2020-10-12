import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function HeaderComponent() {
  const history = useState(useHistory())[0];

  return (
    <header
      style={{
        margin: '25px',
      }}
    >
      <h2
        className="title"
        style={{
          display: 'inline-block',
          marginTop: '0',
          marginBottom: '0',
          cursor: 'pointer',
        }}
        onClick={() => {
          history.push('/');
        }}
      >
        김지훈 블로그
      </h2>
      <h4
        style={{
          color: 'gray',
          margin: '0',
        }}
      >
        zlhunzzing's Blog
      </h4>
    </header>
  );
}

export default HeaderComponent;
