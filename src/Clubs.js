import React from "react";
import "./Clubs.css";
import cricketLogo from "./assets/cricket.svg";
import mic from "./assets/mic.svg";
import shuttle_cock from "./assets/shuttlecock.svg";
import green_earth from "./assets/green-earth.svg";
import basketball from "./assets/basketball.svg";
import headphones from "./assets/headphones.svg";
import robots from "./assets/robots.svg";
import film from "./assets/film.svg";
import mortarboard from "./assets/mortarboard.svg";
import dancer from "./assets/dancer.svg";
import camera from "./assets/camera.svg";
import ieee from "./assets/ieee.svg";
import { Link } from "react-router-dom";

function Clubs() {
  return (
    <div className="clubs__container">
      <h1 className="clubs__heading">CLUBS</h1>

      <ul className="clubs">
        <div className="club">
          <div className="club__logo">
            {/* <img src="https://img.icons8.com/ios-filled/60/000000/microphone.png"/> */}
            <img src={mic} alt="TEDx SITB" />
          </div>
          <Link
            to={`/club/tedx`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <span>TEDx SITB</span>
          </Link>
        </div>

        <div className="club">
          <div className="club__logo">
            {/* <img src="https://img.icons8.com/ios/60/000000/cricket.png"/> */}
            <img src={cricketLogo} alt="cricket" />
          </div>
          <Link
            to={`/club/cricket`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <span>Cricket Club</span>
          </Link>
        </div>
        <div className="club">
          <div className="club__logo">
            {/* <img src="https://img.icons8.com/ios/60/000000/badminton.png"/>  */}
            <img src={shuttle_cock} alt="badminton" />
          </div>
          <Link
            to={`/club/badminton`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <span>Badminton Club</span>
          </Link>
        </div>
        <div className="club">
          <div className="club__logo">
            {/* <img src="https://img.icons8.com/ios/60/000000/basketball.png"/> */}
            <img src={basketball} alt="basketball" />
          </div>
          <Link
            to={`/club/basketball`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <span>Basketball Club</span>
          </Link>
        </div>
        <div className="club">
          <div className="club__logo">
            {/* <img src="https://img.icons8.com/wired/60/000000/robot.png"/> */}
            <img src={robots} alt="robotics" />
          </div>
          <Link
            to={`/club/robotics`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <span>Robotics Club</span>
          </Link>
        </div>
        <div className="club">
          <div className="club__logo">
            {/* <img src="https://img.icons8.com/ios/60/000000/engineering.png"/> */}
            <img src={ieee} alt="ieee" />
          </div>
          <Link
            to={`/club/ieee`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <span>IEEE Club</span>
          </Link>
        </div>
        <div className="club">
          <div className="club__logo">
            {/* <img src="https://img.icons8.com/ios/60/000000/easy-listening.png"/> */}
            <img src={headphones} alt="music" />
          </div>
          <Link
            to={`/club/music`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <span>Music Club</span>
          </Link>
        </div>
        <div className="club">
          <div className="club__logo">
            {/* <img src="https://img.icons8.com/ios/60/000000/dancing.png"/> */}
            <img src={dancer} alt="DDX" />
          </div>
          <Link
            to={`/club/ddx`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <span>DDX Club</span>
          </Link>
        </div>
        <div className="club">
          <div className="club__logo">
            {/* <img src="https://img.icons8.com/ios/50/000000/green-earth.png"/> */}
            <img src={green_earth} alt="green" />
          </div>
          <Link
            to={`/club/green`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <span>Green Club</span>
          </Link>
        </div>
        <div className="club">
          <div className="club__logo">
            {/* <img src="https://img.icons8.com/ios/60/000000/theatre-mask.png"/> */}
            <img src={film} alt="theatre" />
          </div>
          <Link
            to={`/club/theatre`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <span>Theatre Club</span>
          </Link>
        </div>
        <div className="club">
          <div className="club__logo">
            {/* <img src="https://img.icons8.com/ios/60/000000/student-male--v1.png"/> */}
            <img src={mortarboard} alt="scholar" />
          </div>
          <Link
            to={`/club/scholar`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <span>Scholar Club</span>
          </Link>
        </div>
        <div className="club">
          <div className="club__logo">
            {/* <img src="https://img.icons8.com/ios/60/000000/camera.png"/> */}
            <img src={camera} alt="photography" />
          </div>
          <Link
            to={`/club/photography`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <span>Photography Club</span>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Clubs;
