import React from 'react';
import ContentComponent from '../component/ContentComponent';
import HeaderComponent from '../component/HeaderComponent';
import HrComponent from '../component/HrComponent';
import ProfileComponent from '../component/ProfileComponent';

function Home() {
  return (
    <div className="Home">
      <HeaderComponent></HeaderComponent>
      <HrComponent></HrComponent>
      <ContentComponent></ContentComponent>
      <HrComponent></HrComponent>
      <ProfileComponent></ProfileComponent>
    </div>
  );
}

export default Home;
