
import "./projectstyles.css";
import React from "react";
import websitepic from "../assets/websitepic.png";
import creditscore from "../assets/creditscore.jpg";

const Projectcard = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading"> Projects</h1>
            <div className="project-container">
                <div className="project-card">
                    <img className="image" src={websitepic} alt="Portfolio"></img>
                    <h2 className="Project-title">Portfolio Website</h2>
                    <div className="pro-details">
                        <p>Welcome to my personal portfolio website, a showcase of my projects, skills, and professional journey. The site features an intuitive and responsive design built using modern web technologies such as React.js, CSS, and HTML, ensuring a seamless user experience across all devices.</p>
                    </div>
                 </div>
                 <div className="project-card">
                 <img className="image" src={creditscore} alt="Portfolio"></img>
                 <h2 className="Project-title"> Credit Score Classifier</h2>
                 <div className="pro-details">
                 <p>A machine learning model designed to classify a person's credit score into categories such as poor, fair, good, and excellent based on various factors. The classification is performed using a Random Forest algorithm to ensure high accuracy and reliability.</p>  
                 </div>
                   </div>


            </div>


        </div>
    )
}

export default Projectcard;