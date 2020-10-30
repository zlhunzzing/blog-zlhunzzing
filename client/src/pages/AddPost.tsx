import React from 'react';
import Category from '../component/Category';
import HeaderComponent from '../component/HeaderComponent';
import HrComponent from '../component/HrComponent';
import AddPostComponent from '../component/AddPostComponent';
import ProfileComponent from '../component/ProfileComponent';

function AddPost() {
  return (
    <div className="Home">
      <HeaderComponent></HeaderComponent>
      <HrComponent></HrComponent>
      <AddPostComponent></AddPostComponent>
      <HrComponent></HrComponent>
      <ProfileComponent></ProfileComponent>
      <Category></Category>
    </div>
  );
}

export default AddPost;
