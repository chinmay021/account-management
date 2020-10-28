import React from "react";
import "./Developer.css";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import instagram from "../../assets/instagram.svg";
import profilePic from "../../assets/team1.jpg";
function Developer() {
  return (
    <div className="developer">
      <h1 className="developer__heading">Our team</h1>
      <div className="team__cards">
        <div className="team__card">
          <img className="profile__pic" src={profilePic} alt="cant load" />
          <div className="card__text">
            <h2>Chinmay Kumar</h2>
            <h3>Developer</h3>
            <div className="icons">
              <img src={linkedin} alt="linkedin" />
              <img src={github} alt="linkedin" />
              <img src={instagram} alt="linkedin" />
            </div>
          </div>
        </div>
        <div className="team__card">
          <img className="profile__pic" src={profilePic} alt="cant load" />
          <div className="card__text">
            <h2>Mubashir Ali</h2>
            <h3>Developer</h3>
            <div className="icons">
              <img src={linkedin} alt="linkedin" />
              <img src={github} alt="linkedin" />
              <img src={instagram} alt="linkedin" />
            </div>
          </div>
        </div>
        <div className="team__card">
          <img className="profile__pic" src={profilePic} alt="cant load" />
          <div className="card__text">
            <h2>Shubham Kr. Saw</h2>
            <h3>Developer</h3>
            <div className="icons">
              <img src={linkedin} alt="linkedin" />
              <img src={github} alt="linkedin" />
              <img src={instagram} alt="linkedin" />
            </div>
          </div>
        </div>
        <div className="team__card">
          <img className="profile__pic" src={profilePic} alt="cant load" />
          <div className="card__text">
            <h2>Umar Habib</h2>
            <h3>Developer</h3>
            <div className="icons">
              <img src={linkedin} alt="linkedin" />
              <img src={github} alt="linkedin" />
              <img src={instagram} alt="linkedin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developer;
