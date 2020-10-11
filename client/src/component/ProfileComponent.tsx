import React, { useState } from 'react';

function ProfileComponent() {
  const [isUpdate, setIsUpdate] = useState(false);
  const [content, setContent] = useState('안녕하세요');

  return (
    <div
      style={{
        width: '20%',
        height: '700px',
        borderRight: '1px solid rgb(230, 230, 230)',
        textAlign: 'center',
      }}
    >
      <div
        className="profileImage"
        style={{
          margin: '0 auto',
          marginTop: '15px',
          width: '140px',
          height: '140px',
          borderRadius: '100px',
          backgroundColor: 'rgb(240, 240, 240)',
        }}
      ></div>
      <br></br>
      {!isUpdate ? (
        <div>
          {content}
          <br></br>
          <br></br>
          {/* <button
            className="profileInput"
            onClick={() => {
              setIsUpdate(true);
            }}
          >
            수정
          </button> */}
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsUpdate(false);
          }}
        >
          <textarea
            onChange={({ target: { value } }) => setContent(value)}
            style={{
              textAlign: 'center',
            }}
          >
            {content}
          </textarea>
          <button className="profileInput">확인</button>
        </form>
      )}
    </div>
  );
}

export default ProfileComponent;
