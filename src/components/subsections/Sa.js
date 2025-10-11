import React from "react";
import "./CSS/Projects.css";
import data from "./data.json";
import StarIcon from "../Images/Staricon.png";

// Logo map
import TcsLogo from "../Images/TCS_Logo.png";
import SASTRALogo from "../Images/SASTRA_Logo.png";

const logoMap = {
  TcsLogo,
  SASTRALogo
};

const Projects = () => {
  const { ProjectDetails, ProjectSectionBackground } = data;

  return (
    <div className="projects-container">
      {ProjectDetails.map((proj, index) => (
        <div
          className="project-card"
          key={index}
          style={{ backgroundColor: proj.proj_background_Color || "#f9f9f9" }}
        >
          <div className="project-left">
            {proj.Associated_Comp_Logo && (
              <img
                src={logoMap[proj.Associated_Comp_Logo]}
                alt="logo"
                className="project-logo-left"
              />
            )}
            <div className="project-left-text">
              <p className="project-left-label">Project Details</p>
            </div>
          </div>

          <div className="project-right">
            <div className="project-header">
              <div className="project-name-block">
                <h3 className="project-title">
                  {proj.name} {proj.is_featured === true && <span className="star-symbol">★</span>}
                </h3>
                <p className="project-associated">{proj.associated_with}</p>
              </div>
              {proj.Associated_Comp_Logo && (
                <img
                  src={logoMap[proj.Associated_Comp_Logo]}
                  alt="org-logo"
                  className="project-logo-inline"
                />
              )}
            </div>

            <div className="project-meta">
              <div className="project-location">{proj.Location.City}, {proj.Location.State}</div>
              <div className="project-duration">
                {proj.Duration.Start_Date} - {proj.Duration.is_present === "True" ? "Present" : proj.Duration.End_Date}
              </div>
            </div>

            {proj.project_contrib_mem > 0 && proj.projects_contributors && (
              <div className="project-contributors">
                <strong>Contributors:</strong> {proj.projects_contributors}
              </div>
            )}

            {proj.proj_url && (
              <div className="project-link">
                <a href={proj.proj_url} target="_blank" rel="noopener noreferrer">
                  View Project ↗
                </a>
              </div>
            )}

            <div className="project-description">
              <p>{proj.project_description}</p>
            </div>

            <div className="project-tasks">
              <p className="text-bold">Key Contributions</p>
              <ul>
                {proj.project_tasks && proj.project_tasks.map((task, i) => <li key={i}>{task}</li>)}
              </ul>
            </div>

            <div className="project-skills">
              <span className="skill-headsty">Skills:</span>
              {proj.skills_used.map((skill, i) => (
                <span className="skill-badge" key={i}>
                  {skill}
                </span>
              ))}
            </div>

            <div className="project-tags">
              {proj.tags && proj.tags.map((tag, i) => (
                <span className="tag-badge" key={i}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;