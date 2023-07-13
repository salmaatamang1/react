import React, { useState, useRef, useEffect, useContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import './login.css'

const LOGIN_URL = 'http://127.0.0.1:8000/api/login/'   //login api
const Login = () => {
const { setAuth } = useContext(AuthContext);
const userRef =useRef();
const errRef =useRef();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[errMsg, setErrMsg] = useState('');
  const[success, setSuccess]= useState(false);

  useEffect(() => {
    userRef.current.focus();
  },[])
  useEffect(() =>{
    setErrMsg('');
  },[username,password])

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(username,password);
    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({username, password}),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials:true,
        }
        );
        console.log(JSON.stringify(response?.data));
        //console.log(JSON.stringify(response));
        const accessToken = response?.data?.accessToken;//accesstoken from backend
        const roles = response?.data?.roles;
        setAuth({username,password,roles,accessToken})
        setUsername('');
        setPassword('');
        setSuccess(true); 
    } catch(err) {
      if (!err?.response){
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400){
        setErrMsg('Missing Username or password');
      } else if (err.response?.status === 401){
        setErrMsg('unauthorized');
      } else{
        setErrMsg('Login Failed');
      }
      // errRef.current.focus();
    }
  }
  return (
    <>{success ? (
      <section> <h1>you are logged in</h1>
      <br/>
      </section>
    ) : (
      <section>
    
      <div className="box">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="inputBox">
            <input
              type="text"
              name="username"
              ref={userRef}
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
            />
            <span>Username</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="password"
              name="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Password</span>
            <i></i>
          </div>
          <input type="submit" value="Login" className="login-button" />
          <div className="links">
          <Link to="/reset">Forget password</Link>
          <Link to="/register">Register Now</Link>
          </div>
        </form>
      </div>
      <Footer />
    </section>
   ) }
    </>
  );
};
export default Login;



