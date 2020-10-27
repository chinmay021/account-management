import React from 'react'
import './Clubs.css'
import cricketLogo from './assets/cricket.svg'
import mic from './assets/mic.svg'
import shuttle_cock from './assets/shuttlecock.svg'
import green_earth from './assets/green-earth.svg'
import basketball from './assets/basketball.svg'
import headphones from './assets/headphones.svg'
import robots from './assets/robots.svg'
import film from './assets/film.svg'
import mortarboard from './assets/mortarboard.svg'
import dancer from './assets/dancer.svg'
import camera from './assets/camera.svg'
import ieee from './assets/ieee.svg'

function Clubs() {
    return (
        <div className="clubs__container">
            <h1 className="clubs__heading">CLUBS</h1>
            <ul className="clubs">
                <div className="club">
                    <div className="club__logo">
                    {/* <img src="https://img.icons8.com/ios-filled/60/000000/microphone.png"/> */}
                    <img src={mic} alt="TEDx SITB"/>
                    </div>
                   <span>TEDx SITB</span>
                </div>
                <div className="club">
                    <div className="club__logo">
                    {/* <img src="https://img.icons8.com/ios/60/000000/cricket.png"/> */}
                    <img src={cricketLogo} alt="cricket"/>
                    </div>
                   <span>Cricket Club</span>
                </div>
                <div className="club">
                    <div className="club__logo">
                    {/* <img src="https://img.icons8.com/ios/60/000000/badminton.png"/>  */}
                    <img src={shuttle_cock} alt="badminton"/>
                    </div>
                   <span>Badminton Club</span>
                </div>
                <div className="club">
                    <div className="club__logo">
                    {/* <img src="https://img.icons8.com/ios/60/000000/basketball.png"/> */}
                    <img src={basketball} alt="basketball"/>
                    </div>
                   <span>Basketball</span>
                </div>
                <div className="club">
                    <div className="club__logo">
                    {/* <img src="https://img.icons8.com/wired/60/000000/robot.png"/> */}
                    <img src={robots} alt="robotics"/>
                    </div>
                   <span>Robotics Club</span>
                </div>
                <div className="club">
                    <div className="club__logo">
                    {/* <img src="https://img.icons8.com/ios/60/000000/engineering.png"/> */}
                    <img src={ieee} alt="ieee"/>
                    </div>
                   <span>IEEE Club</span>
                </div>
                <div className="club">
                    <div className="club__logo">
                    {/* <img src="https://img.icons8.com/ios/60/000000/easy-listening.png"/> */}
                    <img src={headphones} alt="music"/>
                    </div>
                   <span>Music Club</span>
                </div>
                <div className="club">
                    <div className="club__logo">
                    {/* <img src="https://img.icons8.com/ios/60/000000/dancing.png"/> */}
                    <img src={dancer} alt="DDX"/>
                    </div>
                   <span>DDX Club</span>
                </div>
                <div className="club">
                    <div className="club__logo">
                    {/* <img src="https://img.icons8.com/ios/50/000000/green-earth.png"/> */}
                    <img src={green_earth} alt="green"/>
                    </div>
                   <span>Green Club</span>
                </div>
                <div className="club">
                    <div className="club__logo">
                    {/* <img src="https://img.icons8.com/ios/60/000000/theatre-mask.png"/> */}
                    <img src={film} alt="theatre"/>
                    </div>
                   <span>Theatre Club</span>
                </div>
                <div className="club">
                    <div className="club__logo">
                    {/* <img src="https://img.icons8.com/ios/60/000000/student-male--v1.png"/> */}
                    <img src={mortarboard} alt="scholar"/>
                    </div>
                   <span>Scholar Club</span>
                </div>
                <div className="club">
                    <div className="club__logo">
                    {/* <img src="https://img.icons8.com/ios/60/000000/camera.png"/> */}
                    <img src={camera} alt="photography"/>
                    </div>
                   <span>Photography</span>
                </div>
            </ul>
            
        </div>
    )
}

export default Clubs
