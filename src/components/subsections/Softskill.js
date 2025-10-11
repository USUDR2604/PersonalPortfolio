// SoftSkill.js
import React from "react";
import "./CSS/Softskill.css";

const SoftSkill = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  // Your data is like: ["Leadership, Communication, Teamwork"]
  // So we split the first string by commas
  const parsedSkills = skills[0].split(",").map(skill => skill.trim());

  return (
    <div className="soft-skill-container">
      {parsedSkills.map((skill, index) => (
        <span className="soft-skill-badge" key={index}>
          {skill}
        </span>
      ))}
    </div>
  );
};

export default SoftSkill;
