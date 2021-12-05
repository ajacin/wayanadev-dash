import React, {useEffect} from "react";
import "../styles.css";
import Styles from  "../styles/HomePage.module.css"
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'

export default function LoginForm() {
  const navigate = useNavigate()
  const loginStatusState = useSelector(state => state.LoginStatusReducer)
  useEffect(() => {
    if(!loginStatusState.isLoggedIn) navigate('/login');
  }, [])
  
  return (
    <div className="HomePage">
      Hello {loginStatusState.user.name}! Welcome
    </div>
  );
}
