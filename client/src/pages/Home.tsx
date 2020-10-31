import React from 'react';
import Category from '../component/Category';
import ContentComponent from '../component/ContentComponent';
import HeaderComponent from '../component/HeaderComponent';
import HrComponent from '../component/HrComponent';
import PostListComponent from '../component/PostListComponent';
import ProfileComponent from '../component/ProfileComponent';

function Home() {
  return (
    <div className="Home">
      <HeaderComponent></HeaderComponent>
      <HrComponent></HrComponent>
      <PostListComponent></PostListComponent>
      <HrComponent></HrComponent>
      <ContentComponent></ContentComponent>
      <HrComponent></HrComponent>
      <ProfileComponent></ProfileComponent>
      <Category></Category>
    </div>
  );
}

export default Home;
