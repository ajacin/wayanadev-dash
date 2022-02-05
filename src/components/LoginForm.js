import React, { useEffect, useState } from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import PrivacyImage from "../images/privacy.png"
import {login} from '../actions';
import {useAuth0} from '@auth0/auth0-react'




export default function LoginForm() {
  const navigate = useNavigate();
  const state = useSelector(state => state.LoginStatusReducer)
  const dispatch = useDispatch()
  const {loginWithRedirect} = useAuth0()
  const {user,isAuthenticated} =useAuth0();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const submitForm = (e) => {
    e.preventDefault();
    // if(username==='admin' && password ==='admin') tesitng
    if(user)
    {
      dispatch(login(user.email))
      navigate(`/home`);
    }
    
    else 
    navigate(`/`);
    
  }

  const Login = () =>{ 
     loginWithRedirect({
      redirect_uri: 'http://localhost:3000/home'
    });
    console.log('hit this')
    // dispatch(login(user.email))
    // navigate(`/home`);
  }

 useEffect(() => {
   if(isAuthenticated){
    dispatch(login(user.email))
    navigate(`/home`);
   }
  
 }, [isAuthenticated]);
 

  return (
    <div className="login-form flex-col">
    <img className ="lock-image" src={PrivacyImage} alt="lock"/>
    {/* <form className="login-form  flex-col" method="POST">
      <img className ="lock-image" src={PrivacyImage} alt="lock"/>
      <input
        type="text"
        name="username"
        className="login-username form-item login-form-input"
        value={username}
        onChange={(e)=>{setUsername(e.target.value)}}
      ></input>
      <input
        type="password"
        name="password"
        className="login-password form-item login-form-input"
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
      ></input>
      <button
        type="submit"
        onClick={submitForm}
        className="login-button btn btn-warning form-item"
      >
        Login
      </button>
      <button
        onClick={Login}
        className="login-button btn btn-warning form-item"
      >
        Login
      </button>
      <div>   {user?JSON.stringify(user,null,2):''}</div>
    </form> */}
    <button
        onClick={Login}
        className="login-button btn btn-warning form-item"
      >
        Login
      </button>
    </div>
  );
}
