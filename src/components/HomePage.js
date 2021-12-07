import React, {useEffect} from "react";
import "../styles.css";
import Styles from  "../styles/HomePage.module.css"
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
export default function LoginForm() {
  const navigate = useNavigate()
  const loginStatusState = useSelector(state => state.LoginStatusReducer)
//logout
  const {logout} = useAuth0()
  const LogoutApp = () =>{
    logout()
  }
  //logut end
  const {user} =useAuth0();
  useEffect(() => {
    if(!loginStatusState.isLoggedIn) navigate('/login');
  }, [])
  
  return (
    <div className="HomePage">
      Hello {loginStatusState.user.name}! Welcome
      {user?JSON.stringify(user,null,2):'nah'}
      <button onClick={LogoutApp}>Logout</button>

    </div>
  );
}
