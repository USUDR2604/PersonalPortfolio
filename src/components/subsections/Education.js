import React from "react";
import "./CSS/Education.css";
import EducationIcon from "../Images/Logos/SubSectionLogo/Education_Logo.jpg";
import UMKCLogo from "../Images/Logos/OrganizationLogo/UMKC_Logo.png";
import SastraLogo from "../Images/Logos/OrganizationLogo/SASTRA_Logo.png";
import data from "../DataFiles/data.json";

const Education = () => {
  const { educationList } = data;

  const logoMap = {
    UMKC: UMKCLogo,
    SASTRA: SastraLogo,
  };

  return (
    <div className="education-flex">

      {/* Mobile Header */}
      <div className="education-mobile-content">
        <div className="education-mobile-det">
          <img src={EducationIcon} alt="Education Icon" className="img-icon-sty" />
          <span>Education Details</span>
        </div>
      </div>

      {/* Desktop/Tablet Left Icon */}
      <aside className="education-left">
        <div className="education-logo-sty">
          <div className="icon-wrapper">
            <img src={EducationIcon} alt="Education Icon" className="education-icon" />
          </div>
          <h4 className="education-left-title">Education Details</h4>
        </div>
      </aside>

      {/* Right Side */}
      <main className="education-right">
        <div className="ordered-item-list">
          <ul className="ordered-list">
            {educationList.map((edu, index) => (
              <li className="ordered-item" key={index}>
                <article className="edu-card">

                  {/* Header */}
                  <header className="edu-header">
                    <div className="edu-logo-wrap">
                      <img
                        src={logoMap[edu.University_Shortform]}
                        alt={`${edu.University_Name} logo`}
                        className="edu-logo"
                      />
                    </div>
                    <div className="edu-headtext">
                      <h3 className="edu-title">
                        {edu.Degree} in {edu.Field_of_Study}
                      </h3>
                      <p className="edu-company">{edu.University_Name}</p>
                      <div className="edu-meta">
                        <span className="edu-location">
                          {edu.Location.City}, {edu.Location.State_SF}, {edu.Location.Country_SF}
                        </span>
                        <span className="edu-grade">
                          Grade: {edu.Grade_Type.Grade} / {edu.Grade_Type.OutGrade}
                        </span>
                        <span className="edu-duration">
                          {edu.Duration.Start_Date} – {edu.Duration.End_Date}
                        </span>
                      </div>
                    </div>
                  </header>

                  {/* Overview */}
                  {edu.Overview && (
                    <section className="edu-section">
                      <div className="edu-section-title edu-section-title--italic">Overview</div>
                      <p className="edu-overview">{edu.Overview}</p>
                    </section>
                  )}

                  {/* Activities & Achievements */}
                  {edu.Activity_Achievements && edu.Activity_Achievements.length > 0 && (
                    <section className="edu-section">
                      <div className="edu-section-title edu-section-title--italic">Activities & Achievements</div>
                      <ul className="edu-tasks">
                        {edu.Activity_Achievements.map((item, i) => (
                          <li key={i}>
                            <span className="edu-star" aria-hidden="true">★</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Hackathons */}
                  {edu.Hackathons && edu.Hackathons.length > 0 && (
                    <section className="edu-section">
                      <div className="edu-section-title edu-section-title--italic">Hackathons</div>
                      <ul className="edu-tasks">
                        {edu.Hackathons.map((item, i) => (
                          <li key={i}>
                            <span className="edu-star" aria-hidden="true">★</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Workshops & Seminars */}
                  {edu.Workshops_Seminars && edu.Workshops_Seminars.length > 0 && (
                    <section className="edu-section">
                      <div className="edu-section-title edu-section-title--italic">Workshops & Seminars</div>
                      <ul className="edu-tasks">
                        {edu.Workshops_Seminars.map((item, i) => (
                          <li key={i}>
                            <span className="edu-star" aria-hidden="true">★</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Key Projects */}
                  {edu.Key_Projects && edu.Key_Projects.length > 0 && (
                    <section className="edu-section education-screen-content">
                      <div className="edu-section-title edu-section-title--italic">Key Projects</div>
                      <div className="edu-badges">
                        {edu.Key_Projects.map((project, i) => (
                          <span className="skill-badge" key={i}>{project}</span>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Relevant Courses */}
                  {edu.Relevant_Courses && edu.Relevant_Courses.length > 0 && (
                    <section className="edu-section education-screen-content">
                      <div className="edu-section-title edu-section-title--italic">Relevant Courses</div>
                      <div className="edu-badges">
                        {edu.Relevant_Courses.map((course, i) => (
                          <span className="skill-badge" key={i}>{course}</span>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Certifications */}
                  {edu.Certifications && edu.Certifications.length > 0 && (
                    <section className="edu-section education-screen-content">
                      <div className="edu-section-title edu-section-title--italic">Certifications</div>
                      <ul className="edu-tasks">
                        {edu.Certifications.map((cert, i) => (
                          <li key={i}>
                            <span className="edu-star" aria-hidden="true">★</span>
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Online Learning */}
                  {edu.Online_Learning && edu.Online_Learning.length > 0 && (
                    <section className="edu-section education-screen-content">
                      <div className="edu-section-title edu-section-title--italic">Online Learning</div>
                      <ul className="edu-tasks">
                        {edu.Online_Learning.map((item, i) => (
                          <li key={i}>
                            <span className="edu-star" aria-hidden="true">★</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Volunteer Work (Bachelor's only) */}
                  {edu.Volunteer_Work && edu.Volunteer_Work.length > 0 && (
                    <section className="edu-section">
                      <div className="edu-section-title edu-section-title--italic">Volunteer Work</div>
                      <ul className="edu-tasks">
                        {edu.Volunteer_Work.map((item, i) => (
                          <li key={i}>
                            <span className="edu-star" aria-hidden="true">★</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Skills */}
                  {edu.Skills && edu.Skills.length > 0 && (
                    <section className="edu-section education-screen-content">
                      <div className="edu-section-title edu-section-title--italic">Skills</div>
                      <div className="edu-badges">
                        {edu.Skills.map((skill, i) => (
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

export default Education;
