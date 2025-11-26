import "./heroImg2Styles.css";
import React from "react";
import { motion } from "framer-motion";

const HeroImg2 = ({ heading, text }) => {
    return (
        <div className="hero-Img">
            <motion.div 
                className="heading"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {heading}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {text}
                </motion.p> 
            </motion.div>
        </div>
    );
};

export default HeroImg2;


