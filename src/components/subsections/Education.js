import React from "react";
import "./CSS/Education.css";
import EducationIcon from "../Images/Logos/SubSectionLogo/Education_Logo.jpg";
import UMKCLogo from "../Images/Logos/OrganizationLogo/UMKC_Logo.png"; // Example
import SastraLogo from "../Images/Logos/OrganizationLogo/SASTRA_Logo.png"; // Example
import data from "../DataFiles/data.json"; 
const Education = () => {
  const { educationList } = data;

  const logoMap = {
    UMKC: UMKCLogo,
    SASTRA: SastraLogo,
  };

  return (
    <div className="education-flex">
    <div className="education-mobile-content">
    <div className="education-mobile-det">
      <img src={EducationIcon} alt="Education Icon" className='image-fluid img-icon-sty' />&nbsp;
      <span>Education Details</span>
      </div>
    </div>
      <div className="education-left">
      <div className="education-logo-sty">
        <div className="icon-wrapper">
          <img src={EducationIcon} alt="Work Icon" className="education-icon" />
        </div>
        <h4>Education Details</h4>
            </div>
      </div>

      <div className="education-right">
        <div className="ordered-item-list">
          <ul className="ordered-list">
            {educationList.map((edu, index) => (
              <li className="ordered-item" key={index} style={{ "--i": index }}>
                <div className="education-detail-sty">
                  <div className="education-logsty">
                    <div className="edu-logoicon">
                      <img
                        src={logoMap[edu.University_Shortform]}
                        alt="edu-logo"
                        className="edu-logo"
                      />
                    </div>
                    <div className="edu-compsty">
                      <div className="text-bold">
                        {edu.Degree} in {edu.Field_of_Study}
                      </div>
                      <div className="edu-company-title">
                        <p>{edu.University_Name}</p>
                      </div>
                      <div className="edu-locdursty">
                        <div className="edu-locsty">
                          {edu.Location.City},&nbsp;{edu.Location.State_SF}
                          ,&nbsp;{edu.Location.Country_SF}&nbsp;(
                          <span className="edu-grade">
                            Grade: {edu.Grade_Type.Grade} /{" "}
                            {edu.Grade_Type.OutGrade}
                          </span>
                          )
                        </div>
                        <div className="edu-dursty">
                          {edu.Duration.Start_Date} - {edu.Duration.End_Date}
                          &nbsp;&nbsp;
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="edu-desc">
                    <p>{edu.Description}</p>
                  </div>
                  {edu.Activity_Achievements && (
                    <div className="edu-activities">
                      <p className="text-bold">Activities & Achievements:</p>
                      <ul>
                        {edu.Activity_Achievements.map((activity, i) => (
                          <li key={i}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="education-screen-content">
                  {edu.Projects_Contributed && (
                    <div className="edu-projects">
                      <span className="skill-headsty">Projects: </span>
                      {edu.Projects_Contributed.map((project, i) => (
                        <span className="skill-badge" key={i}>
                          {project}
                        </span>
                      ))}
                    </div>
                  )}
                  {edu.Courses_Learned && (
                    <div className="edu-courses">
                      <span className="skill-headsty">Courses: </span>
                      {edu.Courses_Learned.map((course, i) => (
                        <span className="skill-badge" key={i}>
                          {course}
                        </span>
                      ))}
                    </div>
                  )}

                  {edu.Skills && (
                    <div className="edu-skills">
                      <span className="skill-headsty">Skills: </span>
                      {edu.Skills.map((skill, i) => (
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

export default Education;
