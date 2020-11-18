import React from 'react';
import Category from '../component/Category';
import HeaderComponent from '../component/HeaderComponent';
import HrComponent from '../component/HrComponent';
import EditPostComponent from '../component/EditPostComponent';
import ProfileComponent from '../component/ProfileComponent';

function EditPost() {
  return (
    <div className="Home">
      <HeaderComponent></HeaderComponent>
      <HrComponent></HrComponent>
      <EditPostComponent></EditPostComponent>
      <HrComponent></HrComponent>
      <ProfileComponent></ProfileComponent>
      <Category></Category>
    </div>
  );
}

export default EditPost;
