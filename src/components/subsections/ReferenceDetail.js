import React from "react";
import "./CSS/References.css"; // Create this CSS file for styling
import data from "../DataFiles/data.json";
import ReferenceIcon from "../Images/Logos/SubSectionLogo/ReferenceDetailLogo.jpg"; // Replace with your actual icon path

const References = () => {
  const { ReferenceDetails } = data;

  return (
    <div className="reference-flex">
      {/* Mobile Title View */}
      <div className="reference-mobile-content">
        <div className="reference-mobile-det">
          <img src={ReferenceIcon} alt="Reference Icon" className="img-icon-sty" />
          &nbsp;<span>Reference Details</span>
        </div>
      </div>

      {/* Left Side Icon and Title */}
      <div className="reference-left">
        <div className="reference-logo-sty">
          <div className="reference-icon-wrapper">
            <img src={ReferenceIcon} alt="Reference Icon" className="reference-icon" />
          </div>
          <h4>Reference Details</h4>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="reference-right">
        <div className="ordered-item-list">
          <ul className="ordered-list">
            {ReferenceDetails.filter(ref => ref.is_published === "True").map((ref, index) => (
              <li className="ordered-item" key={index}>
                <div className="reference-detail-sty">
                  {/* Reference Name */}
                  <h3 className="ref-name-sty text-bold">{ref.name}</h3>

                  {/* Role and Role Detail */}
                  <div className="ref-role-sty">
                    <span className="text-bold">{ref.Role}</span>
                    <div className="ref-role-detail">{ref.Role_Detail}</div>
                  </div>

                  {/* Date */}
                  <div className="ref-date-sty">
                    <span className="text-bold">Date:</span>{" "}
                    {`${ref.By_Date.Day} ${ref.By_Date.Month} ${ref.By_Date.Year}`}
                  </div>

                  {/* Description */}
                  <div className="ref-description font-italic">
                    <b>Description: </b>{ref.Description}
                  </div>
                </div>
                <hr className="horizontal-sty" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default References;
