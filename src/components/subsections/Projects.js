import React from "react";
import "./CSS/Projects.css";
import data from "../DataFiles/data.json";
import ProjectIcon from "../Images/Logos/SubSectionLogo/ProjectDetailLogo.jpg";
import logoMap from "./logoMap";
import PersonIcon from "../Images/Logos/SubSectionLogo/PersonIcon.jpg";

const Projects = () => {
  const { ProjectDetails } = data;

  return (
    <div className="project-flex">

      {/* Mobile Header */}
      <div className="project-mobile-content">
        <div className="project-mobile-det">
          <img src={ProjectIcon} alt="Project Icon" className="img-icon-sty" />
          <span>Project Details</span>
        </div>
      </div>

      {/* Desktop/Tablet Left Icon */}
      <aside className="project-left">
        <div className="project-logo-sty">
          <div className="icon-wrapper">
            <img src={ProjectIcon} alt="Project Icon" className="project-icon" />
          </div>
          <h4 className="project-left-title">Project Details</h4>
        </div>
      </aside>

      {/* Right Side */}
      <main className="project-right">
        <div className="ordered-item-list">
          <ul className="ordered-list">
            {ProjectDetails.filter((proj) => proj.is_published === "True").map((proj, index) => (
              <li className="ordered-item" key={index}>
                <article className="proj-card">

                  {/* Header */}
                  <header className="proj-header">
                    <div className="proj-logo-wrap">
                      <img
                        src={logoMap[proj.Associated_Comp_Logo]}
                        alt="Associated Logo"
                        className="proj-logo"
                      />
                    </div>
                    <div className="proj-headtext">

                      {/* Title */}
                      <h3 className="proj-title">{proj.name}</h3>

                      {/* Associated With */}
                      {proj.associated_with && (
                        <div className="proj-associate">
                          <span>Associated with {proj.associated_with}</span>
                        </div>
                      )}

                      {/* Meta — location left, duration right */}
                      <div className="proj-meta">
                        <span className="proj-location">
                          {proj.Location.City}, {proj.Location.State_SF}, {proj.Location.Country_SF}
                        </span>
                        <span className="proj-duration">
                          {proj.Duration.Start_Date} –{" "}
                          {proj.Duration.is_present === "True" ? "Present" : proj.Duration.End_Date}
                        </span>
                      </div>

                    </div>
                  </header>

                  {/* Description */}
                  {proj.project_description && (
                    <section className="proj-section">
                      <p className="proj-desc">{proj.project_description}</p>
                    </section>
                  )}

                  {/* Tasks */}
                  {proj.project_tasks && proj.project_tasks.length > 0 && (
                    <section className="proj-section">
                      <div className="proj-section-title proj-section-title--italic">Tasks & Responsibilities</div>
                      <ul className="proj-tasks">
                        {proj.project_tasks.map((task, i) => (
                          <li key={i}>
                            <span className="proj-star" aria-hidden="true">★</span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Contributors */}
                  {proj.project_contrib_mem > 0 && proj.projects_contributors?.length > 0 && (
                    <section className="proj-section">
                      <div className="proj-section-title proj-section-title--italic">Contributors</div>
                      <div className="proj-contrib-list">
                        {proj.projects_contributors.map((name, i) => (
                          <span key={i} className="contrib-badge">
                            <img src={PersonIcon} className="person-logo-icon" alt="person" />
                            {name}
                          </span>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Project URL */}
                  {proj.proj_url?.trim() && (
                    <section className="proj-section">
                      <div className="proj-section-title proj-section-title--italic">Project URL</div>
                      <a href={proj.proj_url} target="_blank" rel="noopener noreferrer" className="proj-url">
                        {proj.proj_url}
                      </a>
                    </section>
                  )}

                  {/* Skills */}
                  {proj.skills_used && proj.skills_used.length > 0 && (
                    <section className="proj-section project-screen-content">
                      <div className="proj-section-title proj-section-title--italic">Skills Used</div>
                      <div className="proj-badges">
                        {proj.skills_used.map((skill, i) => (
                          <span key={i} className="skill-badge">{skill}</span>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Tags */}
                  {proj.tags && proj.tags.length > 0 && (
                    <section className="proj-section">
                      <div className="proj-tags">
                        {proj.tags.map((tag, i) => (
                          <span key={i} className="proj-tag-badge">#{tag}</span>
                        ))}
                      </div>
                    </section>
                  )}

                </article>
                <hr className="horizsontalsty" />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Projects;
