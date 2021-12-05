import React from "react";
import "../styles.css";
import { button } from "bootstrap";

export default function LoginForm() {
  return (
    <form className="login-form  flex-col">
      <input
        type="text"
        name="username"
        className="login-username form-item login-form-input"
        value="User Name"
      ></input>
      <input
        type="password"
        name="password"
        className="login-password form-item login-form-input"
        value="Password"
      ></input>
      <button type="submit" className="login-button btn btn-warning form-item">
        Login
      </button>
    </form>
  );
}
