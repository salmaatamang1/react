/*import React from 'react'
import './username.css'

const Password = () => {
  return (
    <div>
         <form>
        
        <span>Current Password:  <input type="text" name='password'/></span>
        <span>Change Password: <input type="text" name='changepassword'/></span>
        <span>Confirm Password: <input type="text" name='confirmpassword'/></span>
        <button>Submit</button>

      </form>
      
    </div>
  )
}

export default Password*/
import React, { useState } from 'react';
import axios from 'axios';
import './username.css';

const Password = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [changePassword, setChangePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
  
      const response = await axios.post('http://', {
        currentPassword,
        changePassword,
        confirmPassword,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>
          Current Password: <input type="password" name='password' value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
        </span>
        <span>
          Change Password: <input type="password" name='changepassword' value={changePassword} onChange={(e) => setChangePassword(e.target.value)} />
        </span>
        <span>
          Confirm Password: <input type="password" name='confirmpassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Password;

