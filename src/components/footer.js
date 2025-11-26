import "./footerstyles.css";
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaInstagram, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { motion } from "framer-motion";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social Icons */}
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/meet-kothari08"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} color="#0077b5"  />
          </a>
          <a
            href="https://www.instagram.com/meetkothari_1218"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label="Instagram"
          >
            <FaInstagram size={28} color="#E4405F"/>
          </a>
          <a
            href="mailto:meetkothari@example.com"
            className="footer-icon"
            aria-label="Email"
          >
            <FaEnvelope size={28} />
          </a>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/project">Projects</a>
          <a href="/contact">Contact</a>
          <a href="/MeetKothari-Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>

        {/* Tagline or Location */}
        <div className="footer-tagline">
          <span>Mumbai, India &nbsp;|&nbsp; “Building data-driven solutions for a better tomorrow.”</span>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          © {new Date().getFullYear()} Meet Kothari. All rights reserved.
        </div>

        {/* Back to Top Button */}
        {showButton && (
          <motion.button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </div>
    </footer>
  );
};

export default Footer;