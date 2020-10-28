import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
function Nav() {
  const [scroll, handleScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleScroll(true);
      } else {
        handleScroll(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`navbar ${scroll && "scroll"}`}>
      <ul className="nav__items">
        <li className="nav__left">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            {/* Silicon Institute of Technology*/}
            <img
              src={logo}
              alt="Silicon Institute of Technology"
              style={{ height: "40px" }}
            />
          </Link>
        </li>
        <ul className="nav__right">
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="nav__item">
              <span className="nav__links">home</span>
            </li>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <li className="nav__item">
              <span className="nav__links">login</span>{" "}
            </li>
          </Link>
          <Link to="/developer" style={{ textDecoration: "none" }}>
            <li className="nav__item">
              <span className="nav__links">developer</span>
            </li>
          </Link>
        </ul>
      </ul>
    </div>
  );
}

export default Nav;
