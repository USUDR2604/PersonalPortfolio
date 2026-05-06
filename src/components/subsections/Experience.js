import React, { useState } from "react";
import "./CSS/Experience.css";
import WorkIcon from "../Images/Logos/SubSectionLogo/WorkIcon.jpg";
import TcsLogo from "../Images/Logos/OrganizationLogo/TCS_Logo.png";
import UMKCLogo from "../Images/Logos/OrganizationLogo/UMKC_Logo.png";
import TwoWaitsLogo from "../Images/Logos/OrganizationLogo/TwoWaitsLogo.png";
import data from "../DataFiles/data.json";

const Experience = () => {
  const { experienceList } = data;
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const logoMap = {
    TcsLogo: TcsLogo,
    UMKCLogo: UMKCLogo,
    TwoWaitsLogo: TwoWaitsLogo,
  };

  return (
    <div className="experience-flex">
      {/* Mobile Header */}
      <div className="experience-mobile-content">
        <div className="experience-mobile-det">
          <img src={WorkIcon} alt="Work Icon" className="img-icon-sty" />
          <span>Experience Details</span>
        </div>
      </div>

      {/* Desktop/Tablet Left Icon */}
      <aside className="experience-left">
        <div className="experience-logo-sty">
          <div className="icon-wrapper">
            <img src={WorkIcon} alt="Work Icon" className="experience-icon" />
          </div>
          <h4 className="experience-left-title">Experience Details</h4>
        </div>
      </aside>

      {/* Right Side */}
      <main className="experience-right">
        <div className="ordered-item-list">
          <ul className="ordered-list">
            {experienceList.map((exp, index) => (
              <li className="ordered-item" key={index}>
                <article className="exp-card">

                  {/* Header */}
                  <header className="exp-header">
                    <div className="exp-logo-wrap">
                      <img
                        src={logoMap[exp.logo] || WorkIcon}
                        alt={`${exp.company} logo`}
                        className="exp-logo"
                      />
                    </div>
                    <div className="exp-headtext">
                      <div className="exp-title-row">
                        <h3 className="exp-title">{exp.title}</h3>
                      </div>
                      <p className="exp-company">{exp.company}</p>
                      <div className="exp-meta">
                        <span className="exp-location">
                          {exp.Location.City}, {exp.Location.State}, {exp.Location.Country}
                        </span>
                        <span className="exp-duration">
                          {exp.Duration.Start_Date} – {exp.Duration.End_Date}
                        </span>
                      </div>
                    </div>
                  </header>

                  {/* Overview */}
                  {exp.Overview && (
                    <section className="exp-section">
                      <div className="exp-overview">
                        {Array.isArray(exp.Overview)
                          ? exp.Overview.map((para, i) => (
                              <p key={i} className="exp-overview-para">{para}</p>
                            ))
                          : <p className="exp-overview-para">{exp.Overview}</p>
                        }
                      </div>
                    </section>
                  )}

                  {/* Team & Scale */}
                  {exp.Team_Scale && (
                    <section className="exp-section">
                      <div className="exp-team-pills">
                        <span className="exp-team-pill">
                          👥 {exp.Team_Scale.team_size}
                        </span>
                        <span className="exp-team-pill">
                          📊 {exp.Team_Scale.scale}
                        </span>
                        <span className="exp-team-pill">
                          ☁️ {exp.Team_Scale.cloud}
                        </span>
                        <span className="exp-team-pill">
                          🔧 {exp.Team_Scale.scope}
                        </span>
                      </div>
                      {exp.Team_Scale.overview && (
                        <p className="exp-team-overview">{exp.Team_Scale.overview}</p>
                      )}
                    </section>
                  )}

                  {/* Show More / Less Toggle */}
                  <button
                    className="exp-toggle-btn"
                    onClick={() => toggleExpand(index)}
                  >
                    {expanded[index] ? "Show Less ▲" : "Show More ▼"}
                  </button>

                  {/* Expandable Content */}
                  {expanded[index] && (
                    <div className="exp-expanded">

                      {/* Responsibilities */}
                      {exp.Responsibilities && exp.Responsibilities.length > 0 && (
                        <section className="exp-section">
                          <div className="exp-section-title exp-section-title--italic">Responsibilities</div>
                          <ul className="exp-tasks">
                            {exp.Responsibilities.map((item, i) => (
                              <li key={i}>
                                <span className="exp-star" aria-hidden="true">★</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </section>
                      )}

                      {/* Key Deliverables */}
                      {exp.Key_Deliverables && exp.Key_Deliverables.length > 0 && (
                        <section className="exp-section">
                          <div className="exp-section-title exp-section-title--italic">Key Deliverables</div>
                          <ul className="exp-tasks">
                            {exp.Key_Deliverables.map((item, i) => (
                              <li key={i}>
                                <span className="exp-star" aria-hidden="true">★</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </section>
                      )}

                      {/* Achievements */}
                      {exp.Achievements && exp.Achievements.length > 0 && (
                        <section className="exp-section">
                          <div className="exp-section-title exp-section-title--italic">Achievements</div>
                          <ul className="exp-tasks">
                            {exp.Achievements.map((item, i) => (
                              <li key={i}>
                                <span className="exp-star" aria-hidden="true">★</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </section>
                      )}

                    </div>
                  )}

                  {/* Skills — always visible */}
                  {exp.skills && exp.skills.length > 0 && (
                    <section className="exp-section experience-screen-content">
                      <div className="exp-section-title exp-section-title--italic">Skills</div>
                      <div className="exp-skills">
                        {exp.skills.map((skill, i) => (
                          <span className="skill-badge" key={i}>{skill}</span>
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

export default Experience;
