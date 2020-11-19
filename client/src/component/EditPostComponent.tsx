import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as api from '../api/Admin'
import { useHistory } from 'react-router-dom';

function EditPostComponent() {
  const post = useSelector((state: any) => state.Info.currentPost)
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const category = useSelector((state: any) => state.Info.category);
  const history = useState(useHistory())[0]

  function value_check() {
    const check_count = document.getElementsByName('category').length;

    for(let i=0; i<check_count; i++) {
      if((document.getElementsByName("category")[i] as any).checked === true) {
        return Number((document.getElementsByName("category")[i] as any).value)
      }
    }
  }

  useEffect(() => {
    if((document.getElementsByName("category")[0] as any)) {
      (document.getElementsByName("category")[0] as any).checked = true
    }
  })

  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault()
        const categoryId = Number(value_check())
        api.editPost(title, content, categoryId, post.id, history)
      }}
      style={{ margin: '10px' }}
    >
      <span
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
          value={title}
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
          value={content}
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

export default EditPostComponent;
