import React from "react";
import "./CSS/SupportingSkillBar.css";
import logoMap from "./logoMap";
const SupportingSkillBar = ({ name, percentage, logo, color }) => {
  return (
    <div className="support-skill-bar">
      <img src={logoMap[logo]} alt={name} className="support-logo" />
      <div className="support-details">
        <div className="label">{name}</div>
        <div className="bar-background">
          <div
            className="bar-fill"
            style={{
              width: `${percentage}%`,
              backgroundColor: color
            }}
          />
        </div>
        <div className="percent-label">{percentage}%</div>
      </div>
    </div>
  );
};

export default SupportingSkillBar;
