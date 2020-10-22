import React from 'react';
import { useSelector } from 'react-redux';

function ProfileComponent() {
  const intro = useSelector((state: any) => state.Info.intro);

  return (
    <span
      className="menu-blog">
      <div
        className="profileImage"
        style={{
          margin: '0 auto',
          marginTop: '20px',
          width: '140px',
          height: '140px',
          backgroundColor: 'rgb(240, 240, 240)',
        }}
      ></div>
      <br></br>
      <div>{intro}</div>
      <br></br>
    </span>
  );
}

export default ProfileComponent;
