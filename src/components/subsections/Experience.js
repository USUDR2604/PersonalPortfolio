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
    UMKCLogo: UMKCLogo,
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

      {/* Right Side Experience Details */}
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
                        <h3 className="exp-title">
                          {exp.title}
                        </h3>
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

                  {/* Skills */}
                  {exp.skills && exp.skills.length > 0 && (
                    <section className="exp-section experience-screen-content">
                      <div className="exp-section-title exp-section-title--italic">Skills</div>
                      <div className="exp-skills">
                        {exp.skills.map((skill, i) => (
                          <span className="skill-badge" key={i}>
                            {skill}
                          </span>
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
