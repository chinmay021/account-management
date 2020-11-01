import React from "react";
import "./Login.css";
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
        <button className="button">LOGIN</button>
      </div>
    </div>
  );
}

export default Login;
