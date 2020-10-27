import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className = "banner">
            <div className="banner__cards">
                <div className="banner__card">
                    <div className="bannerCard__heading">
                        <span><a href="/"> Notices</a></span>
                    </div>
                    <ul className="notices">
                        <li className="notice"><a href="/">This is a notice please check.</a></li>
                        <li className="notice"><a href="/">This is a notice please check.</a></li>
                        <li className="notice"><a href="/">This is a notice please check.</a></li>
                        <li className="notice"><a href="/">This is a notice please check.</a></li>
                        <li className="notice"><a href="/">This is a notice please check.</a></li>
                    </ul>
                </div>
                <div className="banner__card">
                    <div className="bannerCard__heading">
                        <span><a href="/">Events</a></span>
                    </div>
                    <ul className="notices">
                        <li className="notice"><a href="/">This is a notice please check.</a></li>
                        <li className="notice"><a href="/">This is a notice please check.</a></li>
                        <li className="notice"><a href="/">This is a notice please check.</a></li>
                        <li className="notice"><a href="/">This is a notice please check.</a></li>
                        <li className="notice"><a href="/">This is a notice please check.</a></li>
                    </ul>
                </div>
            </div>
            <div className="scroll-btn">
                <div className="scroll-bar"><span> </span></div>
            </div>
        </div>
    )
}

export default Banner
