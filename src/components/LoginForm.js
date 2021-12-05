import React, { useEffect, useState } from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import PrivacyImage from "../images/privacy.png"
import {login} from '../actions';


export default function LoginForm() {
  const navigate = useNavigate();
  const state = useSelector(state => state.LoginStatusReducer)
  const dispatch = useDispatch()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = () => {
    event.preventDefault();
    if(username==='admin' && password ==='admin')
    {
      dispatch(login(username))
      navigate(`/home`);
    }
    
    else 
    navigate(`/`);
    
  }
  return (
    <form className="login-form  flex-col" method="POST">
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
    </form>
  );
}
