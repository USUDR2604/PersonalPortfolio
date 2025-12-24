import React from 'react';
import './Home.css';
import ProfilePicture from '../Images/Logos/UdayDeepPic.png';
import programIcon from '../Images/Logos/SubSectionLogo/Prog-icon.png';
import { Tools, Mortarboard } from 'react-bootstrap-icons';

import Summary from '../subsections/Summary';
import Experience from '../subsections/Experience';
import Education from '../subsections/Education';
import Skill from '../subsections/Skill';
import Projects from '../subsections/Projects';
import LicenseCertifys from '../subsections/LicenseCertify';
import Volunteer from "../subsections/Volunteer.js";
import CourseDetails from "../subsections/CourseDetail.js";
import References from "../subsections/ReferenceDetail.js";
import ProfessionalSummary from "../subsections/ProfessionalSummary.js"

import data from '../DataFiles/data.json';

function Home() {
  const {
    SummarySectionBackgroundColor,
    VolunteerContentbackground,
    LicenseCertificationBGColor,
    SkillSectionBackgroundColor,
    ProjectSectionBackgroundColor,
    EducationSectionBackgroundColor,
    ExperienceSectionBackgroundColor,
    CourseDetailBackgroundColor,
    ReferenceDetailbackgoundColor
  } = data;

  const scrollToSummary = () => {
    const section = document.querySelector(".SummarySectionSty");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="home-section">
        <div className="left">
          <div className="image-wrapper">
            <img src={ProfilePicture} alt="Profile" className="profile-img" />
          </div>
        </div>
        <div className="right mobile-content">
          <div className="text-content">
            <div className='IconSty'>
              <img src={programIcon} alt="Logo" className="profile-log-img" />
            </div>
            <div className="ProfileContentSty">
              <h1>
                <span className="hello">Hello <span className="handwave">👋</span>,</span>
                <br />
                <span className="im-text">I'm</span>{' '}
                <span className="name-animated">
                  <span className="word delay-1">Uday</span>{' '}
                  <span className="word delay-2">Deep</span>{' '}
                  <span className="word delay-3">Reddy</span>
                </span>
              </h1>
              <h4 className="taglinesty">
                <i>Data Analyst | Full Stack Developer | AI Innovator</i>
              </h4>
              <p>
                <Tools className="icon-inline" /> Skilled in Python, React, MongoDB, and AI/ML tools — from backend APIs to frontend UI.
              </p>
              <p>
                <Mortarboard className="icon-inline" /> Currently pursuing a Master’s in Computer Science at the University of Missouri–Kansas City (UMKC).
              </p>
              <button className='btn btn-secondary w-50' onClick={scrollToSummary}>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="SummarySectionSty" style={{ backgroundColor: SummarySectionBackgroundColor }}>
        <div className="container">
          <ProfessionalSummary />
        </div>
      </section>

      <section className="WorkExperienceSectionSty" style={{ backgroundColor: ExperienceSectionBackgroundColor }}>
        <div className="container">
          <Experience />
        </div>
      </section>

      <section className="EducationSectionSty" style={{ backgroundColor: EducationSectionBackgroundColor }}>
        <div className="container">
          <Education />
        </div>
      </section>

      <section className="SkillSectionSty" style={{ backgroundColor: SkillSectionBackgroundColor }}>
        <div className="container">
          <Skill />
        </div>
      </section>

      <section className="ProjectSectionSty" style={{ backgroundColor: ProjectSectionBackgroundColor }}>
        <div className="container">
          <Projects />
        </div>
      </section>

      <section className="LicenseCertificationSectionSty" style={{ backgroundColor: LicenseCertificationBGColor }}>
        <div className="container">
          <LicenseCertifys />
        </div>
      </section>

      <section className="VolunteerSectionSty" style={{ backgroundColor: VolunteerContentbackground }}>
        <div className="container">
          <Volunteer />
        </div>
      </section>

      <section className="CourseSectionSty" style={{ backgroundColor: CourseDetailBackgroundColor}}>
       <div className="container">
         <CourseDetails />
       </div>
      </section>
          <section className ="ReferenceSectionSty" style = {{backgroundColor : ReferenceDetailbackgoundColor}}>
          <div className = "container">
          <References/>
          </div>
      </section>
    </>
  );
}

export default Home;
