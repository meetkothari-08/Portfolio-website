import "./projectstyles.css";
import React from "react";
import { motion } from "framer-motion";
import websitepic from "../assets/websitepic.png";
import creditscore from "../assets/creditscore.jpg";
import screenshot75 from "../assets/Screenshot (75).png";
import tableauDashboard from "../assets/tab_pic.png";


const Projectcard = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    return (
        <div className="work-container">
            <motion.h1 
                className="project-heading"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Projects
            </motion.h1>
            <div className="project-container">

                 <motion.div 
                    className="project-card"
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={cardVariants}
                    whileHover={{ y: -10, boxShadow: "0 15px 35px rgba(0, 230, 239, 0.3)" }}
                 >
                    <div className="project-image-wrapper">
                        <img className="image" src={screenshot75} alt="Career Recommendation System interface showing career paths and recommendations" />
                        <div className="project-overlay">
                            <span className="view-text">View Project</span>
                        </div>
                    </div>
                    <div className="project-content">
                        <h2 className="Project-title">Career Recommendation System</h2>
                        <div className="pro-details">
                            <p>An intelligent system that analyzes user skills and interests to provide personalized career recommendations using machine learning algorithms.</p>
                        </div>
                        <div className="tech-tags">
                            <span className="tag">Python</span>
                            <span className="tag">ML</span>
                            <span className="tag">React</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className="project-card"
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={cardVariants}
                    whileHover={{ y: -10, boxShadow: "0 15px 35px rgba(0, 230, 239, 0.3)" }}
                >
                    <div className="project-image-wrapper">
                        <img className="image" src={websitepic} alt="Portfolio website homepage showcasing projects and skills" />
                        <div className="project-overlay">
                            <span className="view-text">View Project</span>
                        </div>
                    </div>
                    <div className="project-content">
                        <h2 className="Project-title">Portfolio Website</h2>
                        <div className="pro-details">
                            <p>A modern, responsive portfolio showcasing projects, skills, and professional journey with smooth animations and intuitive design.</p>
                        </div>
                        <div className="tech-tags">
                            <span className="tag">React</span>
                            <span className="tag">CSS3</span>
                            <span className="tag">Framer Motion</span>
                        </div>
                    </div>
                </motion.div>

                 <motion.div 
                    className="project-card"
                    custom={2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={cardVariants}
                    whileHover={{ y: -10, boxShadow: "0 15px 35px rgba(0, 230, 239, 0.3)" }}
                 >
                    <div className="project-image-wrapper">
                        <img className="image" src={creditscore} alt="Credit Score Classifier dashboard with data visualization and prediction results" />
                        <div className="project-overlay">
                            <span className="view-text">View Project</span>
                        </div>
                    </div>
                    <div className="project-content">
                        <h2 className="Project-title">Credit Score Classifier</h2>
                        <div className="pro-details">
                            <p>ML model classifying credit scores into categories (poor, fair, good, excellent) using Random Forest algorithm for high accuracy predictions.</p>  
                        </div>
                        <div className="tech-tags">
                            <span className="tag">Python</span>
                            <span className="tag">Scikit-learn</span>
                            <span className="tag">Pandas</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className="project-card"
                    custom={3}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={cardVariants}
                    whileHover={{ y: -10, boxShadow: "0 15px 35px rgba(0, 230, 239, 0.3)" }}
                 >
                    <div className="project-image-wrapper">
                        <img className="image" src={tableauDashboard} alt="Interactive Tableau dashboard showing sales trends and analytics" />
                        <div className="project-overlay">
                            <span className="view-text">View Dashboard</span>
                        </div>
                    </div>
                    <div className="project-content">
                        <h2 className="Project-title">Data Visualization Dashboard</h2>
                        <div className="pro-details">
                            <p>Developed interactive Tableau dashboards to analyze sales trends, product performance, and regional insights, highlighting key sales drivers and enabling data-driven decision-making. Implemented time series analysis to accurately forecast future sales, supporting strategic business planning.</p>  
                        </div>
                        <div className="tech-tags">
                            <span className="tag">Tableau</span>
                            <span className="tag">Data Analysis</span>
                            <span className="tag">Time Series</span>
                        </div>
                    </div>
                </motion.div>

            </div>
           
        </div>
    )
}

export default Projectcard;