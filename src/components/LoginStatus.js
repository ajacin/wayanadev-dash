import React from 'react'
import Styles from '../styles/LoginStatus.module.css'
import { FaUserCircle } from "react-icons/fa"
import { useSelector } from 'react-redux';

export default function LoginStatus() {
    const loggedInState = useSelector(state => state.LoginStatusReducer)
    return (
        <div className={Styles.LoginStatus}>
            {loggedInState.isLoggedIn ? <h4 className="user-circle-heading"> <FaUserCircle /> {loggedInState.user.name}</h4> : <h4 className="user-circle-heading"> Login</h4>}

        </div>
    )
}
