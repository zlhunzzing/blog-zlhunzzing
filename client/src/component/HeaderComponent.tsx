import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function HeaderComponent() {
  const history = useState(useHistory())[0];
  const title = useSelector((state: any) => state.Info.title);

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
        {title}
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
