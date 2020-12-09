import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__cards">
        <div className="banner__card">
          <div className="bannerCard__heading">
            <span>
              <a href="#/"> Notices</a>
            </span>
          </div>
          <ul className="notices">
            <li className="notice">
              {/* // eslint-disable-next-line */}
              <a href="#/">IEEE presents CODEARENA 2.0</a>
            </li>
            <li className="notice">
              {/* // eslint-disable-next-line */}
              <a href="#/">IOT Workshop</a>
            </li>
            <li className="notice">
              {/* // eslint-disable-next-line */}
              <a href="#/">
                Embrace and Empower yourself in International Women's day
              </a>
            </li>
            <li className="notice">
              {/* // eslint-disable-next-line */}
              <a href="#/">PES Day 2020</a>
            </li>
            <li className="notice">
              {/* // eslint-disable-next-line */}
              <a href="#/">CODEATHON</a>
            </li>
          </ul>
        </div>
        <div className="banner__card">
          <div className="bannerCard__heading">
            <span>
              <a href="#/">Events</a>
            </span>
          </div>
          <ul className="notices">
            <li className="notice">
              <a href="#/">IEEE presents CODEARENA 2.0</a>
            </li>
            <li className="notice">
              <a href="#/">IOT Workshop</a>
            </li>
            <li className="notice">
              <a href="#/">
                Embrace and Empower yourself in International Women's day
              </a>
            </li>
            <li className="notice">
              <a href="#/">PES Day 2020</a>
            </li>
            <li className="notice">
              <a href="#/">CODEATHON</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="scroll-btn">
        <div className="scroll-bar">
          <span> </span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
