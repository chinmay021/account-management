import React from "react";
import "./Login.css";
function Login() {
  return (  
    <div>
      <div className="newcontainer">
        <div className="signup-box">
          <div className="title">Enter Credentials</div>
          <div className="textbox">
            <input type="text" placeholder="Email" />
          </div>
          <div className="textbox">
            <input type="password" placeholder="Password" />
          </div>
          <div className="button">
            <input type="button" value="LOGIN" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
