// RSkill.js
import React from "react";
import "./CSS/RSkill.css";
import logoMap from "./logoMap";

const RSkill = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <div className="rskill-container">
      {skills.map((skill, index) => (
        <div className="rskill-badge" key={index}>
          <img
            src={logoMap[skill.logo]}
            alt={skill.name}
            className="rskill-icon"
          />
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

export default RSkill;
