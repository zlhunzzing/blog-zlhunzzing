import React from 'react';
import HeaderComponent from '../component/HeaderComponent';
import HrComponent from '../component/HrComponent';
import ProfileComponent from '../component/ProfileComponent';

function Home() {
  return (
    <div className="Home">
      <HeaderComponent></HeaderComponent>
      <HrComponent></HrComponent>
      <ProfileComponent></ProfileComponent>
    </div>
  );
}

export default Home;
