import React from "react";
import data from "../DataFiles/data.json";
import "./CSS/CourseDet.css";
import logoMap from "./logoMap";
import CourseDetailIcon from "../Images/Logos/SubSectionLogo/CourseDetailIcon.jpg";

const CourseDetails = () => {
  const { CourseDetails, CourseDetailBackgroundColor } = data;

  return (
    <>
      <div
        className="course-flex"
        style={{ backgroundColor: CourseDetailBackgroundColor }}
      >
        {/* ✅ Mobile View Header */}
        <div className="course-mobile-content">
          <div className="course-mobile-det">
            <img
              src={CourseDetailIcon}
              alt="Course Icon"
              className="img-icon-sty"
            />
            <span>Course Details</span>
          </div>
        </div>

        {/* ✅ Left Panel with Icon */}
        <div className="course-left">
          <div className="course-logo-sty">
            <div className="course-icon-wrapper">
              <img
                src={CourseDetailIcon}
                alt="Course Icon"
                className="course-icon"
              />
            </div>
            <h4>Course Details</h4>
          </div>
        </div>

        {/* ✅ Main Right Content Area */}
        <div className="course-right">
          <div className="ordered-item-list">
            <ul className="ordered-list">
              {CourseDetails.map((course, index) => (
                <li className="ordered-item" key={index}>
                  <div className="course-detail-sty">
                    {/* 🔹 Course Logo (Left 30%) */}
                    <div className="course-main-logo">
                      <img
                        className = "image-fluid course-img-logo"
                        src={logoMap[course.Course_Logo]}
                        alt={course.Course_Name}
                      />
                    </div>

                    {/* 🔹 Course Info (Right 70%) */}
                    <div className="course-content">
                      <div className="course-text">
                        <h5>{course.Course_Name}&nbsp;<span>({course.Course_Code})</span></h5>

                        <div className="assoc-institution">
                          <img
                            src={logoMap[course.Associated_Comp_Logo]}
                            alt={course.Assoc_Comp}
                          />
                          <span>
                            Associated with {course.Assoc_Comp}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="horizsontalsty" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
