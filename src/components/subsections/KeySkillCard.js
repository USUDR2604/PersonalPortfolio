import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./CSS/KeySkillCard.css";
import logoMap from "./logoMap";

const KeySkillCard = ({ name, percentage, logo, color }) => {
  return (
    <div className="key-skill-card">
      <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={10}
        styles={buildStyles({
          pathColor: color,
          trailColor: "#eee",
  pathTransitionDuration: 0.5,
        })}
      >
        <img
          src={logoMap[logo]}
          alt={name}
          className="circle-logo"
        />
      </CircularProgressbarWithChildren>
      <div className="key-skill-info">
        <h4 className = "text-bold text-italic">{name}</h4>
      </div>
    </div>
  );
};

export default KeySkillCard;
