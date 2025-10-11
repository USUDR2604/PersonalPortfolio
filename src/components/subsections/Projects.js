import React from "react";
import "./CSS/Projects.css";
import data from "../DataFiles/data.json";
import ProjectIcon from "../Images/Logos/SubSectionLogo/ProjectDetailLogo.jpg";
import logoMap from "./logoMap"; // Maps logo keys to image imports
import PersonIcon from "../Images/Logos/SubSectionLogo/PersonIcon.jpg";

const Projects = () => {
  const { ProjectDetails, ProjectSectionBackgroundColor } = data;

  return (
    <div className="project-flex" style={{ backgroundColor: ProjectSectionBackgroundColor }}>
      {/* ✅ Mobile Title View */}
      <div className="project-mobile-content">
        <div className="project-mobile-det">
          <img src={ProjectIcon} alt="Project Icon" className="img-icon-sty" />
          &nbsp;<span>Project Details</span>
        </div>
      </div>

      {/* ✅ Left Side Icon and Title */}
      <div className="project-left">
        <div className="project-logo-sty">
          <div className="proj-icon-wrapper">
            <img src={ProjectIcon} alt="Project Icon" className="project-icon" />
          </div>
          <h4>Project Details</h4>
        </div>
      </div>

      {/* ✅ Right Side Content */}
      <div className="project-right">
        <div className="ordered-item-list">
          <ul className="ordered-list">
            {ProjectDetails.filter((proj) => proj.is_published === "True").map((proj, index) => (
              <li className="ordered-item" key={index}>
                <div className="project-detail-sty">
                  {/* 🔷 Project Title */}
                  <h3 className="proj-title-sty text-bold">{proj.name}</h3>

                  {/* 🔷 Associated Organization */}
                  {proj.associated_with && proj.Associated_Comp_Logo && (
                    <div className="proj-associate">
                      <img
                        src={logoMap[proj.Associated_Comp_Logo]}
                        alt="Associated Logo"
                        className="proj-associ-logo"
                      />
                      <span>Associated with {proj.associated_with}</span>
                    </div>
                  )}

                  {/* 🔷 Location and Duration */}
                  <div className="proj-locdur-sty">
                    <div className="proj-loc-sty">
                      {proj.Location.City}, {proj.Location.State_SF}, {proj.Location.Country_SF}
                    </div>
                    <div className="proj-dur-sty">
                      {proj.Duration.Start_Date} –{" "}
                      {proj.Duration.is_present === "True" ? "Present" : proj.Duration.End_Date}
                    </div>
                  </div>

                  {/* 🔷 Project URL */}
                  {proj.proj_url?.trim() && (
                    <div className="proj-url-sty">
                      <div className="proj-url-block">
                        <span className="proj-url-label">🔗 Project URL:</span>
                        <a href={proj.proj_url} target="_blank" rel="noopener noreferrer">
                          {proj.proj_url}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* 🔷 Contributors */}
                  {proj.project_contrib_mem > 0 && proj.projects_contributors?.length > 0 && (
                    <div className="proj-contrib-inline">
                      <span className="proj-contrib-label">👥 Contributors:</span>
                      <div className="proj-contrib-list">
                        {proj.projects_contributors.map((name, i) => (
                          <span key={i} className="contrib-badge">
                            <img
                              src={PersonIcon}
                              className="person-logo-icon"
                              alt="person-icon"
                            />
                            {name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 🔷 Description */}
                  <div className="proj-description font-italic">
                    <b>Description: </b>{proj.project_description}
                  </div>

                  {/* 🔷 Tasks, Skills (Shown only on large screen) */}
                  <div className="project-screen-content">
                    {proj.project_tasks?.length > 0 && (
                      <div className="proj-task-sty">
                        <div className="text-italic"><b>Tasks and Responsibilities:</b></div>
                        <ul className="proj-tasks">
                          {proj.project_tasks.map((task, i) => (
                            <li key={i}>{task}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {proj.skills_used?.length > 0 && (
                      <div className="proj-skills">
                        <span className="skill-headsty">Skills:</span>
                        <div className="skill-badge-container">
                          {proj.skills_used.map((skill, i) => (
                            <span key={i} className="skill-badge">{skill}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 🔷 Tags */}
                  {proj.tags?.length > 0 && (
                    <div className="proj-tag-content">
                      <span className="text-bold">Tags:</span>
                      {proj.tags.map((tag, i) => (
                        <span key={i} className="proj-tag-badge">#{tag}</span>
                      ))}
                    </div>
                  )}
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

export default Projects;
