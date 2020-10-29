import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function PostNewComponent() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const category = useSelector((state: any) => state.Info.category);

  useEffect(() => {
    if((document.getElementsByName("category")[0] as any)) {
      (document.getElementsByName("category")[0] as any).checked = true
    }
  })

  return (
    <form style={{ margin: '10px' }}>
      <span
        onSubmit={(e) => {
          e.preventDefault()
          console.log("읭")
        }}

        style={{
          display: 'inline-block',
          textAlign: 'left',
          width: '70%',
          minHeight: '700px',
        }}
      >
        <textarea
          placeholder="제목"
          onChange={({ target: { value } }) => setTitle(value)}
          style={{
            width: '95%',
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
            width: '95%',
            height: '500px',
            border: 'none',
            resize: 'none',
          }}
        ></textarea>
      </span>
      <span
        style={{
          float: 'right',
          textAlign: 'left',
          width: '25%',
          minHeight: '700px',
          borderLeft: '1px solid rgb(230, 230, 230)',
        }}
      >
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            console.log(title, content);
          }}
          style={{ margin: '5px '}}
        >
          작성
        </button>
        <div
          style={{
            width: '100%',
            borderTop: '1px solid rgb(230, 230, 230)',
          }}
        ></div>
        <div>
          <h5 style={{ margin: '10px' }}>카테고리</h5>
          <ul style={{
            marginTop: '0px',
            listStyleType: 'none',
            paddingLeft: '5px'
          }}>
            {category.map((list: any, id: number) => (
              <li
                key={id}
                style={{
                  display: 'block',
                  margin: '5px'
                }}
              >
                <input type="radio" name="category" value={`${list.id}`}></input>
                  {' '}<label>{list.name}</label>
                </li>
              ))}
            </ul>
          </div>
      </span>
    </form>
  );
}

export default PostNewComponent;
