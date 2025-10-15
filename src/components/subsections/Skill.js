// src/components/subsections/Skill.js
import React, { useMemo } from "react";
import "./CSS/Skill.css";
import SkillIcon from "../Images/Logos/SubSectionLogo/Skill_Icon.jpg";
import data from "../DataFiles/data.json";
import SkillTagging from "./SkillTagging";

const Skill = () => {
  // Supports both { skills: {...} } or top-level {...}
  const skillData = useMemo(() => (data?.skills ? data.skills : data) || {}, []);

  const {
    keySkills = [],
    ProgrammingSkills = [],
    AI_ML_Systems=[],
    Data_Streaming=[],
    Cloud_Devops =[],
    Backend_Web_Frameworks=[],
    Front_End_UI=[],
    Monitoring_Databases =[],
    BI_Analytics=[],
    SoftSkills = [],
    SkillSectionBackgroundColor,
  } = skillData;

  const bgStyle = SkillSectionBackgroundColor
    ? { background: SkillSectionBackgroundColor }
    : undefined;

  return (
    <div className="skills-flex">
      {/* ✅ Mobile Header */}
      <div className="skills-mobile-content">
        <div className="skills-mobile-det">
          <img
            src={SkillIcon}
            alt="Skills Icon"
            className="image-fluid img-icon-sty"
          />
          &nbsp;<h4 className="text-center bg-primary">Skills</h4>
        </div>
      </div>

      {/* ✅ Desktop/Tablet Left Icon */}
      <div className="skills-left">
        <div className="skills-logo-sty">
          <div className="icon-wrapper">
            <img src={SkillIcon} alt="Skills Icon" className="skills-icon" />
          </div>
          <h4>Skills</h4>
        </div>
      </div>

      {/* ✅ Right Panel */}
      <div className="skills-right" style={bgStyle}>
        <div className="skills-sections">
        {/*
  🔹 Key Technical Skills (circular cards)
  {Array.isArray(keySkills) && keySkills.length > 0 && (
    <div className="skills-section skills-section--key">
      <div className="skills-section-header">
        <h4 className="text-bold">Key Technical Skills</h4>
      </div>
      <div className="key-skills-wrapper">
        {keySkills.map((skill, idx) => (
          <KeySkillCard
            key={`${skill?.name || "key"}-${idx}`}
            {...skill}
          />
        ))}
      </div>
    </div>
  )}
*/}

          {/* 🔹 Programming Skills (chips with optional logos) */}
          <SkillTagging
            title="Programming Skills"
            items={ProgrammingSkills}
            className="skills-section--programming"
          />

          <SkillTagging
            title="AI & Machine Learning Systems"
            items={AI_ML_Systems}
            className="skills-section--programming"
          />

          <SkillTagging
            title="Data Streaming Tools"
            items={Data_Streaming}
            className="skills-section--programming"
          />


          <SkillTagging
            title="Backend & Web Frameworks "
            items={Backend_Web_Frameworks}
            className="skills-section--programming"
          />
          <SkillTagging
            title="Frontend & UI"
            items={Front_End_UI}
            className="skills-section--programming"
          />
          <SkillTagging
            title="Database Monitoring"
            items={Monitoring_Databases}
            className="skills-section--programming"
          />
          <SkillTagging
            title="BI & Analytics"
            items={BI_Analytics}
            className="skills-section--programming"
          />

          {/* 🔹 Soft Skills (chips) */}
          <SkillTagging
            title="Soft Skills"
            items={SoftSkills}
            className="skills-section--soft"
          />
        </div>
      </div>
    </div>
  );
};

export default Skill;
