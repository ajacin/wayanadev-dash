import React, { useEffect } from "react";
import "../styles.css";
import Styles from "../styles/HomePage.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { UserCard } from "./UserCard";
export default function LoginForm() {
  const navigate = useNavigate();
  const loginStatusState = useSelector((state) => state.LoginStatusReducer);
  //logout
  const { logout, user, isAuthenticated } = useAuth0();
  const LogoutApp = () => {
    logout();
  };
  //logut end
  // const {user,isAuthenticated} =useAuth0();
  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, []);

  return (
    isAuthenticated && (
      <div className={Styles.HomePage}>
        <UserCard user={user}></UserCard>
        Hello {user.name}! Welcome
      </div>
    )
  );
}
