import React from 'react';
import './Footer.css';
import { Linkedin, Github, EnvelopeFill } from 'react-bootstrap-icons';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-brand">
          <h4 className="footer-company">UltraUnityVerse Hub</h4>
          <p className="footer-founded">Founded November 2025</p>
          <p className="footer-founder">
            <strong>Sai Uday R Udumula</strong>
            <span className="footer-role"> — Founder &amp; CEO</span>
          </p>
          <p className="footer-desc">
            Building scalable AI and Big Data platforms that sit at the intersection
            of Data Engineering, LLM systems, and cloud-native architecture.
          </p>
        </div>

        {/* Quick Links */}
        {/* Quick Links */}
  <div className="footer-links">
    <h5 className="footer-heading">Quick Links</h5>
    <a href="/PersonalPortfolio/" className="footer-link">Home</a>
    <a href="/PersonalPortfolio/about" className="footer-link">About Me</a>
    <a href="/PersonalPortfolio/contact" className="footer-link">Contact Us</a>
  </div>

        {/* Connect */}
        <div className="footer-connect">
          <h5 className="footer-heading">Connect</h5>
          <a href="https://www.linkedin.com/in/sai-uday-udumula/" target="_blank" rel="noopener noreferrer" className="footer-social">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="https://github.com/USUDR2604/" target="_blank" rel="noopener noreferrer" className="footer-social">
            <Github size={16} /> GitHub
          </a>
          <a href="mailto:usudaydeep26@gmail.com" className="footer-social">
            <EnvelopeFill size={16} /> usudaydeep26@gmail.com
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          &copy; {year} <strong>UltraUnityVerse Hub</strong>. All rights reserved.
          Built &amp; designed by <strong>Sai Uday R Udumula</strong>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
