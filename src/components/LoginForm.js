import React, { useEffect, useState } from "react";
import "../styles.css";
import { useNavigate, Link } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="login-form  flex-col" method="POST">
      <input
        type="text"
        name="username"
        className="login-username form-item login-form-input"
        value={username}
      ></input>
      <input
        type="password"
        name="password"
        className="login-password form-item login-form-input"
        value={password}
      ></input>
      <button
        type="submit"
        onClick={() => {
          navigate(`/home`);
        }}
        className="login-button btn btn-warning form-item"
      >
        Login
      </button>
    </form>
  );
}
