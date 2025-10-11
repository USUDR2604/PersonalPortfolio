// src/components/subsections/Experience.js

import React from 'react';
import './Experience.css';
import WorkIcon from '../Images/WorkIcon.jpg';
import { StarFill } from 'react-bootstrap-icons';
function Experience() {
const experienceList = [
{
title: 'Software Engineer',
company: 'Tata Consultancy Services',
logo: '#',
type: 'Full-time',
duration: 'Jul 2022 – Dec 2023',
location: 'Hyderabad, Telangana, India',
jobtype:"Remote",
description: "Created various Microservices based on user requirements for daily usage with frontend, backend, and server integration. Managed databases and Docker containers for frontend applications.",
tasks: [
"Developed scalable backend services using Django, Docker, and OpenShift, reducing API response time by 30%.",
"Created and optimized 15+ RESTful APIs for authentication, network checks, and data management across microservices.",
"Improved database performance with Oracle SQL and PL/SQL, achieving 40% faster data retrieval and real-time updates.",
"Enhanced system efficiency with Redis caching and Docker-GitLab deployments, cutting deployment time from 1 hour to 15 minutes.",
"Monitored logs with Kibana and Logstash, reducing debugging time by 50% and improving system reliability.",
"Designed microservices for dynamic data allocation and server relocation, significantly boosting network performance.",
"Authored technical documentation and mentored junior developers to support maintainability and team growth."
],
skills: [
'Python', 'MySQL', 'Django', 'Redis', 'AngularJS',
'Back-End Web Development', 'REST APIs', 'Django REST Framework'
],
},
{
title: 'Student Intern',
company: 'Tata Consultancy Services',
logo: '#',
type: 'Internship',
duration: 'Feb 2022 – May 2022',
location: 'Chennai, Tamil Nadu, India',
jobtype:"Remote",
description: `Built an AI-powered chatbot that creates challenges on specific skills based on user proficiency. Also
answered general topic-related questions using NLP.`,
tasks: [
"Built an AI-powered chatbot using Rasa, machine learning, and NLP, improving response accuracy by 20% and boosting user engagement by 50%.",
"Developed scalable frontend components with AngularJS, reducing load times by 35% and enhancing user experience.",
"Integrated MongoDB for efficient data storage, reducing query execution time by 40%.",
"Delivered a fully functional chatbot within 4 months, ahead of schedule, with comprehensive documentation for future upgrades.",
"Applied Python, Django, and Docker to streamline backend workflows and support seamless deployment."
],
skills: [
'Python', 'Teamwork', 'MySQL', 'Artificial Intelligence (AI)', 'Databases',
'JavaScript', 'Rasa', 'MongoDB', 'Natural Language Processing (NLP)'
],
},
];

return (
<div className="experience-flex">
  <div className="experience-left">
    <div className="icon-wrapper">
      <img src={WorkIcon} alt="Work Icon" className="experience-icon" />
    </div>
  </div>

  <div className="experience-right">
    <ul className="experience-list">
      {experienceList.map((exp, index) => (
      <li className="experience-item" key={index}>
        <div className="experience-bullet">
          <StarFill className="bullet-icon" />
        </div>

        <div className="experience-content">
          <div className="exp-header">
          <div className = "exp-logo-sty">
            <img src={exp.logo} alt="Company Logo" className="exp-logo" />
            </div>
            <div className = "exp-content-sty">
              <h3>{exp.title}</h3>
              <h4>
                {exp.company} · {exp.type}
              </h4>
              <div className = "ctsty">
                  <div className = "locsty"><span>{exp.location} ({exp.jobtype})</span>
                  </div>
                  <div className ="dursty"><span>{exp.duration}</span>
                  </div>
              </div>
              
            </div>
          </div>
          <div>
            <h4>Tasks and Responsibilities</h4>
            {exp.tasks && (
            <ul className="exp-tasks">
              {exp.tasks.map((task, idx) => (
              <li key={idx}>{task}</li>
              ))}
            </ul>
            )}
          </div>

          <p className="exp-desc">{exp.description}</p>

          <div className="exp-skills">
            {exp.skills.map((skill, i) => (
            <span className="skill-badge" key={i}>
              {skill}
            </span>
            ))}
          </div>
        </div>
      </li>
      ))}
    </ul>
  </div>
</div>
);
}

export default Experience;