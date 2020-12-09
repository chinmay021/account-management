import React, { useState, useEffect } from "react";
import "./Login.css";
import { Redirect } from "react-router-dom";
import { checkLogin } from "../../axios/requests";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  // const [clubName, setClubName] = useState("");
  useEffect(() => {
    function getToken() {
      const token = sessionStorage.getItem("token");
      // console.log(token);
      if (token) {
        setLoggedIn(true);
      }
    }
    getToken();
  }, []);

  const verify = async () => {
    const data = await checkLogin(username, password);
    if (typeof data === "object") {
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("clubName", data.user.clubname);
      // setClubName(data.user.clubname);
      setLoggedIn(true);
      window.location.reload();
    }
    if (typeof data === "string") {
      document.getElementById("login__message").innerHTML = data;
    }
  };

  if (loggedIn === true) {
    // setClubName(localStorage.getItem("clubName"));
    // return <Redirect to= "/login/sucess" />;
    // const URL = `/login/sucess/${clubName}`;
    const clubName = sessionStorage.getItem("clubName");
    return <Redirect to={{ pathname: `/login/sucess/${clubName}` }} />;
  } else {
    return (
      <>
        <div className="newcontainer">
          <div className="signup-box">
            <form>
              <div className="title">Enter Credentials</div>
              <div className="textbox">
                <input
                  type="text"
                  autoComplete="off"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="textbox">
                <input
                  autoComplete="off"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* <div className="textbox">
                <label for="cars">Select Club:</label>
                <select id="cars" name="cars">
                  <option value="volvo"></option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
              </div> */}
              <button className="button" type="button" onClick={verify}>
                LOGIN
              </button>
            </form>
            <p id="login__message" style={{ textAlign: "center" }}></p>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
