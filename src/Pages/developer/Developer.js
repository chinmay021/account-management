import React from "react";
import "./Developer.css";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import instagram from "../../assets/instagram.svg";
import Mubashir from "../../assets/mubashir.jpg";
import Chinmay from "../../assets/chinmay.jpg";
import Umar from "../../assets/umar.jpeg";
import Shubham from "../../assets/shubham.jpg";
function Developer() {
  return (
    <>
      <div className="developer">
        <h1 className="developer__heading">Our team</h1>
        <div className="team__cards">
          <div className="team__card">
            <img className="profile__pic" src={Chinmay} alt="cant load" />
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
            <img className="profile__pic" src={Mubashir} alt="cant load" />
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
            <img className="profile__pic" src={Shubham} alt="cant load" />
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
            <img className="profile__pic" src={Umar} alt="cant load" />
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
    </>
  );
}

export default Developer;
