import "./HeroImgStyles.css";
// import Typed from 'react-typed';
import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import introimg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
const HeroImg = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <img className="intro-img" src={introimg} alt="Meet" />
            </div>

            <div className="content">
                <p>
                 <h2> Hello,I'm Meet Kothari</h2>
                 {/* <h1> I'm Meet Kothari</h1> */}
                 {/* <h1>Welcome to My Portfolio</h1> */}
                 <div className="typing">
                 <ReactTypingEffect
          text={[
           "Welcome to My Portfolio!"
          ]}
          speed={100}
          eraseSpeed={50}
          eraseDelay={2000}
          typingDelay={500}
        /></div>
                </p>

            </div>

            <div className="buttons">
                 
                <Link to="/project" className="btn">Projects</Link> 
                
                <a href="/resume.pdf" className="download-button" download>
          Download Resume
        </a>
                
            </div>
        </div>
    )
}

export default HeroImg;