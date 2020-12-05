import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="newcontainer">
      <div className="signup-box">
        <div className="title">Enter Credentials</div>
        <div className="textbox">
          <input type="text" placeholder="Email" />
        </div>
        <div className="textbox">
          <input type="password" placeholder="Password" />
        </div>
        <Link to="/login/sucess">
          <button className="button">LOGIN</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
