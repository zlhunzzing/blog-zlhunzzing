import React from 'react';
import HeaderComponent from '../component/HeaderComponent';
import HrComponent from '../component/HrComponent';
import PostNewComponent from '../component/PostNewComponent';
import ProfileComponent from '../component/ProfileComponent';

function PostNew() {
  return (
    <div className="Home">
      <HeaderComponent></HeaderComponent>
      <HrComponent></HrComponent>
      <PostNewComponent></PostNewComponent>
      <HrComponent></HrComponent>
      <ProfileComponent></ProfileComponent>
    </div>
  );
}

export default PostNew;
