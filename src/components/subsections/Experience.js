import React from "react";
import "./CSS/Experience.css";
import WorkIcon from "../Images/Logos/SubSectionLogo/WorkIcon.jpg";
import TcsLogo from "../Images/Logos/OrganizationLogo/TCS_Logo.png";
import UMKCLogo from "../Images/Logos/OrganizationLogo/UMKC_Logo.png";
import data from "../DataFiles/data.json";

const Experience = () => {
  const { experienceList } = data;

  const logoMap = {
    TcsLogo: TcsLogo,
    UMKCLogo:UMKCLogo,
    // Add more mappings as needed
  };

  return (
    <div className="experience-flex">
      {/* ✅ Mobile Header */}
      <div className="experience-mobile-content">
        <div className="experience-mobile-det">
          <img src={WorkIcon} alt="Work Icon" className="image-fluid img-icon-sty" />
          &nbsp;
          <span>Experience Details</span>
        </div>
      </div>

      {/* ✅ Desktop/Tablet Left Icon */}
      <div className="experience-left">
        <div className="experience-logo-sty">
          <div className="icon-wrapper">
            <img src={WorkIcon} alt="Work Icon" className="experience-icon" />
          </div>
          <h4>Experience Details</h4>
        </div>
      </div>

      {/* ✅ Right Side Experience Details */}
      <div className="experience-right">
        <div className="ordered-item-list">
          <ul className="ordered-list">
            {experienceList.map((exp, index) => (
              <li className="ordered-item" key={index} style={{ "--i": index }}>
                <div className="experience-detail-sty">
                  {/* 🔷 Logo and Header */}
                  <div className="experience-logsty">
                    <div className="exp-logoicon">
                      <img
                        src={logoMap[exp.logo] || WorkIcon}
                        alt="exp-logo"
                        className="exp-logo"
                      />
                    </div>
                    <div className="exp-compsty">
                      <div className="text-bold">
                        {exp.title}
                        {exp.jobtype && (
                          <span className="exp-jobtype"> ({exp.jobtype})</span>
                        )}
                      </div>
                      <div className="exp-company-title">
                        <p>{exp.company}</p>
                      </div>

                      {/* 🔷 Location + Duration (inline) */}
                      <div className="exp-locdursty">
                        <div className="exp-locsty">
                          {exp.Location.City}, {exp.Location.State}, {exp.Location.Country}
                        </div>
                        <div className="exp-dursty">
                          {exp.Duration.Start_Date} – {exp.Duration.End_Date}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 🔷 Description */}
                  {exp.Description && (
                    <div className="exp-desc">
                      <p>{exp.Description}</p>
                    </div>
                  )}

                  {/* 🔷 Tasks */}
                  {exp.tasks && exp.tasks.length > 0 && (
                    <div className="exp-task-sty">
                      <p className="text-bold">Tasks and Responsibilities:</p>
                      <ul className="exp-tasks">
                        {exp.tasks.map((task, i) => (
                          <li key={i}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 🔷 Skills (only on desktop/tablet) */}
                  <div className="experience-screen-content">
                    {exp.skills && exp.skills.length > 0 && (
                      <div className="exp-skills">
                        <span className="skill-headsty">Skills:</span>
                        {exp.skills.map((skill, i) => (
                          <span className="skill-badge" key={i}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <hr className="horizsontalsty" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
