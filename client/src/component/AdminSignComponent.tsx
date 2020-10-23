import React, { useState } from 'react';
import store from '..';
import * as handleActions from '../module/Handle'
import * as api from '../api/Admin'

function AdminSignComponent() {
  const [password, setPassword] = useState('')

  return (
    <div style={{
      position: 'fixed',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      textAlign: 'center'
    }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          store.dispatch(handleActions.close_modal())
          if(password) {
            api.signin(password)
          }
        }}
        style={{
          position: 'relative',
          top: '40%',
          margin: '0 auto',
          border: '1px solid black',
          width: '300px',
          height: '90px',
          backgroundColor: '#fff'
        }}
        >
        <br></br>
          <input
            type="text"
            onChange={({ target: { value } }) => setPassword(value)}
            style={{
              width: '200px',
              height: '20px',
            }}
          ></input>
        <br></br>
        <button type="submit">확인</button>
      </form>
    </div>
  );
}

export default AdminSignComponent;
