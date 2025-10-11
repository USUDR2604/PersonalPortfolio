import React from "react";
import data from "../DataFiles/data.json";
import KeySkillCard from "./KeySkillCard";
import SupportingSkillBar from "./SupportingSkillBar";
import SoftSkill from "./Softskill";
import RSkill from "./RSkill";
import "./CSS/Skill.css";
import SkillIcon from "../Images/Logos/SubSectionLogo/Skill_Icon.jpg";

const SkillsSection = () => {
  const {
    keySkills,
    supportingSkills,
    RemainingSkills,
    SoftSkills,
    SkillSectionBackgroundColor,
  } = data;

  return (
    <div
      className="skills-section-layout"
      style={{ backgroundColor: SkillSectionBackgroundColor }}
    >
      {/* ✅ Mobile Title Section */}
      <div className="skills-mobile-content">
        <div className="skills-mobile-det">
          <img
            src={SkillIcon}
            alt="Skills Icon"
            className="img-icon-sty"
          />
          <span>&nbsp;Technical Skills</span>
        </div>
      </div>

      {/* ✅ Left Panel */}
      <div className="skills-left-panel">
        <div className="skills-logo-sty">
          <div className="icon-wrapper">
            <img
              src={SkillIcon}
              alt="Skill Icon"
              className="skills-main-logo"
            />
          </div>
          <h4>Skills Overview</h4>
        </div>
      </div>

      {/* ✅ Right Panel */}
      <div className="skills-right-panel">
        <ul className="skills-list">
          {/* 🔹 Key Technical Skills */}
          {keySkills?.length > 0 && (
            <li className="skills-item">
              <div className="skills-detail-sty">
                <h4 className="text-bold">Key Technical Skills</h4>
                <div className="key-skills-wrapper">
                  {keySkills.map((skill, index) => (
                    <KeySkillCard key={index} {...skill} />
                  ))}
                </div>
              </div>
            </li>
          )}

          {/* 🔹 Supporting Skills */}
          {supportingSkills?.length > 0 && (
            <li className="skills-item">
              <div className="skills-detail-sty">
                <h4 className="text-bold">Supporting Skills</h4>
                <div className="supporting-skills-wrapper">
                  {supportingSkills.map((skill, index) => (
                    <div className="supporting-skill-bar" key={index}>
                      <SupportingSkillBar {...skill} />
                    </div>
                  ))}
                </div>
              </div>
            </li>
          )}

          {/* 🔹 Remaining Skills */}
          {RemainingSkills?.length > 0 && (
            <li className="skills-item">
              <div className="skills-detail-sty">
                <h4 className="text-bold">Other Skills</h4>
                <div className="ReaminingSkillContent">
                  <RSkill skills={RemainingSkills} />
                </div>
              </div>
            </li>
          )}

          {/* 🔹 Soft Skills */}
          {SoftSkills?.length > 0 && (
            <li className="skills-item">
              <div className="skills-detail-sty">
                <h4 className="text-bold">Soft Skills</h4>
                <div className="SoftSkillContent">
                  <SoftSkill skills={SoftSkills} />
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SkillsSection;