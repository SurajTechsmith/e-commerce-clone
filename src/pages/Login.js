import React, { useState } from 'react';
import './Login.css';
import AmazonLogo from '../images/logo.jpg';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/"); 
      })
      .catch((error) => {
        alert(error.message);
      });
  };


  return (
    <div className="signin">
      <img src={AmazonLogo} alt="Amazon Logo" className="signin_logo" />
      <h2>Sign-In</h2>
      <form>
        <label htmlFor="email" className="signin_label">Email</label>
        <input type="email" id="email" name="email" className="signin_input" onChange={(e)=>{setEmail(e.target.value)}} />
        <label htmlFor="password" className="signin_label">Password</label>
        <input type="password" id="password" name="password" className="signin_input" onChange={(e)=>{setPassword(e.target.value)}}/>
        <p className="terms_warning">
          By signing-in, you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads
          Notice.
        </p>
        <button className="signin_button" onClick={handleSignIn}>Sign In</button>
      </form>
      <p className="register_link">Don't have an account? <a href="#dummy_register" >Create one</a></p>
      <h1>for testing:dummy-email@email.com , password:dumbbee </h1>
    </div>
  );
}

export default SignIn;
