import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../components/Footer';
import './reset.css';

const Reset = () => {
  const [inputValue, setInputValue] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const resetData = {
      input: inputValue,
    };

    axios
      .post('http://', resetData)
      .then((response) => {
        // Handle the response data
        console.log('Reset response:', response.data);

        const { accessToken, refreshToken } = response.data;

        // Store the tokens in localStorage or a state management solution
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        // Set the success state to true to display a success message
        setSuccess(true);
        setError('');
      })
      .catch((error) => {
        // Handle any errors
        console.error('Reset error:', error);

        // Set the error state to display an error message
        setError('Failed to reset password. Please try again.');
        setSuccess(false);
      });

    setInputValue('');
  };

  return (
    <>
      <div className="reset__container">
        {success ? (
          <p>Password reset successful. You can now log in with your new password.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>Reset</h2>
            <div className="inputBox">
              <input
                type="text"
                name="emailPhoneNumber"
                value={inputValue}
                onChange={handleInputChange}
                autoComplete="off"
              />
              <span>Email or Phone number</span>
              <i></i>
            </div>
            <input type="submit" value="Submit" className="reset-button" />
            <div className="links">
              <Link to="/password"></Link>
            </div>
            {error && <p>{error}</p>}
          </form>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Reset;
