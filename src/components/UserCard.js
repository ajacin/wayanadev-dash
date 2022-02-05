import React from 'react';
import UserStyles from '../styles/UserCard.module.css'
export const UserCard = ({ user }) => {
    return (
        <div className={UserStyles.cardContainer}>
            <img className="round" src={user.picture} alt="user" />
            <div><h3>{user.name}</h3>
            <h6>{user.email}</h6></div>
            
        </div>
    )
}
