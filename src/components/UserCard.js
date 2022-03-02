import React from "react";
import UserStyles from "../styles/UserCard.module.css";
export const UserCard = ({ user }) => {
  return (
    <div className={UserStyles.cardContainer}>
      {user ? JSON.stringify(user, null, 2) : "NO USER INFORMATION"}
    </div>
  );
};
