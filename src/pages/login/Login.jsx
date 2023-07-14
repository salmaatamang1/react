

import './login.css'
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer'
const Login = () => {
  return (
    <>
    <l>
      <div className="box">
      <form action="">
            <h2>Sign In</h2>
            <div class="inputBox">
                <input type="text"  autoComplete="off" required/>
                <span>Username</span>
                <i></i>

            </div>
            <div className="inputBox">
                <input type="password"  autoComplete="off" required/>
                <span>Password</span>
                <i></i>
                
            </div>
            <input type="submit" value="login" className="login-button"/>
    
            <div className="links">
                <Link to='/reset'>forget password?</Link>
                <Link to="/register">Register Now</Link>
            </div>
        </form>
      </div>
    </l>
    <Footer/>
    </>
  );
};

export default Login;
