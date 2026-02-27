// src/components/subsections/Skill.js
import React, { useMemo } from "react";
import "./CSS/Skill.css";
import SkillIcon from "../Images/Logos/SubSectionLogo/Skill_Icon.jpg";
import data from "../DataFiles/data.json";
import SkillTagging from "./SkillTagging";
import logoMap from "./logoMap";

import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const getLogoSrc = (item) => {
  const key = item && typeof item === "object" ? item.logo : undefined;
  return key && logoMap && logoMap[key] ? logoMap[key] : null;
};

const Skill = () => {
  const skillData = useMemo(() => (data?.skills ? data.skills : data) || {}, []);

  const {
    keySkills = [],
    ProgrammingSkills = [],
    AI_ML_Systems = [],
    Data_Streaming = [],
    Backend_Web_Frameworks = [],
    Front_End_UI = [],
    Monitoring_Databases = [],
    BI_Analytics = [],
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
          <img src={SkillIcon} alt="Skills Icon" className="image-fluid img-icon-sty" />
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

          {/* ✅ Key Skills: Bootstrap Card + Text Outside */}
          {Array.isArray(keySkills) && keySkills.length > 0 && (
  <div className="skills-key-wrapper">
    <h5 className="skills-key-title">Key Skills</h5>

    <div className="row g-3 justify-content-start">
      {keySkills.map((s, idx) => {
        const logoSrc = getLogoSrc(s);
        const pct = Number(s?.percentage ?? 0);

        return (
          <div
            key={`${s?.name || "skill"}-${idx}`}
            className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-2"
          >
            <div className="skill-card text-center">
              <div className="skill-circle-wrapper mx-auto">
                <CircularProgressbarWithChildren
                  value={pct}
                  styles={buildStyles({
                    pathColor: s?.color || "#0d6efd",
                    trailColor: "#e6e6e6",
                  })}
                >
                  {logoSrc && (
                    <img
                      src={logoSrc}
                      alt={s?.name}
                      className="skill-circle-icon"
                      loading="lazy"
                    />
                  )}
                </CircularProgressbarWithChildren>
              </div>

              <div className="skill-circle-text mt-2">
                <div className="skill-circle-name">{s?.name}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
)}



          {/* 🔹 Skill Tag Sections */}
          <SkillTagging title="Programming Skills" items={ProgrammingSkills} className="skills-section--programming" />
          <SkillTagging title="AI & Machine Learning Systems" items={AI_ML_Systems} className="skills-section--programming" />
          <SkillTagging title="Data Streaming Tools" items={Data_Streaming} className="skills-section--programming" />
          <SkillTagging title="Backend & Web Frameworks" items={Backend_Web_Frameworks} className="skills-section--programming" />
          <SkillTagging title="Frontend & UI" items={Front_End_UI} className="skills-section--programming" />
          <SkillTagging title="Database Monitoring" items={Monitoring_Databases} className="skills-section--programming" />
          <SkillTagging title="BI & Analytics" items={BI_Analytics} className="skills-section--programming" />

          {/* 🔹 Soft Skills */}
          <SkillTagging title="Soft Skills" items={SoftSkills} className="skills-section--soft" />

        </div>
      </div>
    </div>
  );
};

export default Skill;
