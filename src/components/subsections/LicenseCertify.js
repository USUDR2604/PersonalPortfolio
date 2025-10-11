import React, { useState } from "react";
import "./CSS/LicenseCertify.css";
import "./CSS/OrderedListStyling.css";
import data from "../DataFiles/data.json";
import logoMap from "./logoMap";
import LicenseCertificationLogo from "../Images/Logos/SubSectionLogo/LicenseCertificationIcon.png";

const LicenseCertifys = () => {
  const { LicenseCertifyDetails } = data;
  const [expandedIndex, setExpandedIndex] = useState(null);

  const getDurationDisplay = (duration) => {
    const { Start_Date, End_Date, is_present, is_expirable } = duration;
    if (is_present === "True") return `${Start_Date} - Still Pursuing`;
    else if (is_expirable === "True" && End_Date) return `${Start_Date} - ${End_Date}`;
    else return `Issued on ${Start_Date}`;
  };

  return (
    <div className="LicenseCertify-flex">
      {/* ✅ Mobile Title */}
      <div className="LicenseCertify-mobile-content">
        <div className="LicenseCertify-mobile-det">
          <img
            src={LicenseCertificationLogo}
            alt="License Icon"
            className="image-fluid img-icon-sty"
          />
          &nbsp;<span>License Certifications</span>
        </div>
      </div>

      {/* ✅ Left Side Icon */}
      <div className="LicenseCertify-left">
        <div className="proj-icon-wrapper">
          <img
            src={LicenseCertificationLogo}
            alt="License Icon"
            className="LicenseCertify-icon"
          />
          <h3 className="pt-2 pb-2 text-center">LicenseCertify Details</h3>
        </div>
      </div>

      {/* ✅ Right Side Details */}
      <div className="LicenseCertify-right">
        <div className="ordered-item-list">
          <ul className="ordered-list">
            {LicenseCertifyDetails.filter((lic) => lic.is_published === "True").map((lic, index) => (
              <li
                className="ordered-item"
                key={index}
                style={{ "--i": index }}
              >
                <div className="LicenseCertify-detail-sty">
                  <div className="licencertification-logsty">
                    <div className="licencert-logoicon">
                      <img
                        src={logoMap[lic.LicenseCertify_Logo] || LicenseCertificationLogo}
                        alt={lic.LicenseCertify_Name || "Certification"}
                        className="licencert-logo"
                      />
                    </div>

                    <div className="licencert-coursedetsty">
                      <div className="text-bold">{lic.LicenseCertify_Name}</div>

                      <div className="licencert-org-title">
                        Certified Organization: {lic.Certification_Company}
                      </div>

                      {lic.Associated_With && (
                        <div className="licencert-Associated_Det">
                          <img
                            src={logoMap[lic.Associated_With_Comp_Logo] || LicenseCertificationLogo}
                            alt="Associated Organization"
                            className="proj-associ-logo"
                          />
                          <span>Associated with {lic.Associated_With}</span>
                        </div>
                      )}

                      <div className="licencert-locdursty">
                        <div className="licencert-locsty">
                          {lic.Location.City}, {lic.Location.State_SF}, {lic.Location.Country_SF}
                        </div>
                        <div className="licencert-dursty">
                          {getDurationDisplay(lic.Duration)}
                        </div>
                      </div>

                      {lic.Certificate_ID && lic.Certificate_ID.trim() && (
                        <div className="licencert-certid-block">
                          <span className="licencert-certid-label">🆔 Certificate ID: </span>
                          <span className="licencert-certid">{lic.Certificate_ID}</span>
                        </div>
                      )}

                      {lic.Credential_URL && lic.Credential_URL.trim() && (
                        <div className="licencert-url-block">
                          <span className="licencert-url-label">License URL: </span>
                          <a
                            href={lic.Credential_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="licencert-url-button"
                          >
                            Show Credential&nbsp;
                            <i className="fas fa-external-link-alt"></i>
                          </a>
                        </div>
                      )}

                      {/* ✅ Skills Section */}
                      {lic.Skills && lic.Skills.length > 0 && (
                        <div className="liccencert-Skill-sty pt-1 pb-1">
                          <span className="text-bold">Skills:</span>&nbsp;
                          {(expandedIndex === index ? lic.Skills : lic.Skills.slice(0, 6)).map(
                            (skill, i) => (
                              <span className="skill-badge" key={i}>
                                {skill}
                              </span>
                            )
                          )}
                          {lic.Skills.length > 6 && (
                            <button
                              className="show-more-btn"
                              onClick={() =>
                                setExpandedIndex(expandedIndex === index ? null : index)
                              }
                            >
                              {expandedIndex === index ? "Show Less" : "Show More"}
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LicenseCertifys;
