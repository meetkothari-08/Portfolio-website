import "./HeroImgStyles.css";
import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import introimg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <img className="intro-img" src={introimg} alt="Meet Kothari - Data Science Portfolio" />
                <div className="hero-overlay"></div>
            </div>

            <motion.div 
                className="content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ textAlign: 'center', alignItems: 'center' }}
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ textAlign: 'center', width: '100%' }}
                >
                    Hello, I'm <span className="highlight">Meet Kothari</span>
                </motion.h2>
                <motion.div 
                    className="typing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
                >
                    <div className="typing-wrapper" style={{ textAlign: 'center', width: '100%' }}>
                        <ReactTypingEffect
                            text={[
                                "Data Science Enthusiast",
                                "Machine Learning Developer",
                                "Welcome to My Portfolio!"
                            ]}
                            speed={100}
                            eraseSpeed={50}
                            eraseDelay={2000}
                            typingDelay={500}
                        />
                    </div>
                </motion.div>

                <motion.div 
                    className="buttons"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Link to="/project" className="btn btn-primary">
                        <span>View Projects</span>
                    </Link> 
                    
                    <a href="/MeetKothari-Resume.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                        <span>View Resume</span>
                    </a>
                </motion.div>
            </motion.div>

            <motion.div 
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
            >
                <div className="mouse"></div>
            </motion.div>
        </div>
    )
}

export default HeroImg;