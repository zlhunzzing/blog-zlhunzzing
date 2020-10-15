import React, { useState } from 'react';

function PostNewComponent() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div
      style={{
        width: '70%',
        height: '700px',
        margin: '0 auto',
        textAlign: 'left',
      }}
    >
      <form>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            console.log(title, content);
          }}
        >
          작성
        </button>
        <textarea
          placeholder="제목"
          onChange={({ target: { value } }) => setTitle(value)}
          style={{
            width: '100%',
            height: '55px',
            fontSize: '30px',
            border: 'none',
            resize: 'none',
          }}
        ></textarea>

        <div
          style={{
            marginTop: '40px',
            marginBottom: '40px',
            width: '100%',
            borderTop: '1px solid rgb(230, 230, 230)',
          }}
        ></div>

        <textarea
          placeholder="본문"
          onChange={({ target: { value } }) => setContent(value)}
          style={{
            width: '100%',
            height: '550px',
            border: 'none',
            resize: 'none',
          }}
        ></textarea>
      </form>
    </div>
  );
}

export default PostNewComponent;
