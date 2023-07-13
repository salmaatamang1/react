import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../../components/Footer';
import './password.css';

const Password = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      const passwordData = {
        password: password,
        confirmPassword: confirmPassword,
      };

      axios
        .post('http://', passwordData, { withCredentials: true })
        .then((response) => {
          // Handle the response data
          console.log('Password response:', response.data);

          // Assuming the response contains the JWT access and refresh tokens
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
          console.error('Password error:', error);

          // Set the error state to display an error message
          setError('Failed to update password. Please try again.');
          setSuccess(false);
        });
    } else {
      // Set the error state to display an error message
      setError("Passwords don't match");
      setSuccess(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
        {error && <p>{error}</p>}
        {success && <p>Password updated successfully.</p>}
      </form>
      <Footer />
    </>
  );
};

export default Password;
