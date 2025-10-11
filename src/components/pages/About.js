import React from 'react';
import './About.css';
import ProfileImage from '../Images/Logos/SubSectionLogo/UdayPic.png'; // Replace with your actual image path
import { Linkedin } from 'react-bootstrap-icons';

const AboutMe = () => {
  return (
    <div className="about-container">
      {/* Left Side: Image */}
      <div className="about-left ">
        <img src={ProfileImage} alt="Sai Uday" className="about-img" />
        <a
          href="https://www.linkedin.com/in/sai-uday-udumula/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-btn"
        >
          <Linkedin size={20} className="me-1" />
          Visit LinkedIn
        </a>
      </div>

      {/* Right Side: About Content */}
      <div className="about-right">
        <h2>About Me</h2>
        <p>
          I'm <strong>Sai Uday R Udumula</strong>, a Data Analyst, Full-Stack Developer, and AI Innovator
          currently pursuing my Master’s in Computer Science at the University of Missouri–Kansas City.
        </p>

        <h4>What I’ve Done</h4>
        <ul>
          <li>Worked as a Software Developer at Tata Consultancy Services (1.5 years).</li>
          <li>Built scalable AI chatbots using Rasa and Python with backend support from Django, Redis, and Docker.</li>
          <li>Designed full-stack systems using AngularJS, ReactJS, and REST APIs with Oracle/MongoDB databases.</li>
          <li>Led multiple data science projects involving customer segmentation, stock prediction, and NLP.</li>
        </ul>

        <h4>What I’m Currently Working On</h4>
        <ul>
          <li>Machine Learning and Deep Learning applications in stock prediction and AI assistants.</li>
          <li>Building real-time customer analytics pipelines with Python, Spark, and MongoDB.</li>
          <li>Enhancing my React portfolio and contributing to cloud-based service optimization tools.</li>
        </ul>

        <h4>Future Goals</h4>
        <ul>
          <li>Build scalable, AI-integrated platforms that improve real-world decision-making.</li>
          <li>Contribute to open-source AI/ML projects and develop intelligent systems for enterprise use.</li>
          <li>Lead innovation in Data Engineering and AI Solutions with global accessibility and impact.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
