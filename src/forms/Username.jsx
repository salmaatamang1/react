/*import React from 'react'
import './username.css'

const Username = () => {
  return (
    <div className='form__container'>
      <form>
        
        <span>Current UserName:  <input type="text" name='username'/></span>
        <span>Change UserName: <input type="text" name='changeusername'/></span>
        <span>Confirm Username: <input type="text" name='confirmusername'/></span>
        <button>Submit</button>

      </form>
    </div>
  )
}

export default Username
*/

import React, { useState } from 'react';
import axios from 'axios';
import './username.css';

const Username = () => {
  const [username, setUsername] = useState('');
  const [changeUsername, setChangeUsername] = useState('');
  const [confirmUsername, setConfirmUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://', {
        username,
        changeUsername,
        confirmUsername,
      });

      
      console.log(response.data);
    } catch (error) {
      
      console.error(error);
    }
  };

  return (
    <div className='form__container'>
      <form onSubmit={handleSubmit}>
        <span>
          Current UserName: <input type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </span>
        <span>
          Change UserName: <input type="text" name='changeusername' value={changeUsername} onChange={(e) => setChangeUsername(e.target.value)} />
        </span>
        <span>
          Confirm Username: <input type="text" name='confirmusername' value={confirmUsername} onChange={(e) => setConfirmUsername(e.target.value)} />
        </span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Username;
