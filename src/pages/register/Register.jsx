
import './register.css';
import React, { useState } from 'react';
import Footer from '../../components/Footer';

const Register = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('nagarik');

  const handleSubmit = (e) => {
    e.preventDefault();
    let register_data = {
      name,
      address,
      phoneNumber,
      email,
      password,
      confirmPassword,
      userType,
    };
    console.log(register_data);
    fetch('http://127.0.0.1:8000/api/register/', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(register_data),
    })
      .then((res) => {
        alert('Registered Successfully');
      })
      .catch((err) => {
        alert('Failed: ' + err.message);
      });
  };

  return (
    <>
      <div className="box1">
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="inputBox">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
            />
            <span>Name</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              autoComplete="off"
            />
            <span>Address</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              autoComplete="off"
            />
            <span>Phonenumber</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
            <span>Password</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="off"
            />
            <span>Confirm Password</span>
            <i></i>
          </div>

          <div>
            <input
              type="radio"
              checked={userType === 'nagarik'}
              onChange={() => setUserType('nagarik')}
              id="nagarik"
              name="userType"
            />
            <label htmlFor="nagarik">Nagarik</label>

            <input
              type="radio"
              checked={userType === 'g_collector'}
              onChange={() => setUserType('g_collector')}
              id="g_collector"
              name="userType"
            />
            <label htmlFor="g_collector">G-collector</label>

            <input
              type="radio"
              checked={userType === 'safa_ghar'}
              onChange={() => setUserType('safa_ghar')}
              id="safa_ghar"
              name="userType"
            />
            <label htmlFor="safa_ghar">Safa Ghar</label>
          </div>

          <input type="submit" value="Register" className="register-button" />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;


