import React from 'react'
import Styles from '../styles/LoginStatus.module.css'
import { FaUserCircle } from "react-icons/fa"
export default function LoginStatus() {
    return (
        <div className={Styles.LoginStatus}>
             <h4 className="user-circle-heading"> <FaUserCircle/> Arun</h4>
        </div>
    )
}
