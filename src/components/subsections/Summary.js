import React from 'react';
import './CSS/Summary.css';
import SummaryIcon from '../Images/Logos/SubSectionLogo/SummaryIcon.png';
import data from '../DataFiles/data.json';

const Summary = () => {
  const summaryText = data.SummaryDetails?.Summary;

  return (
    <div className="summary-flex">
      {/* Mobile Title + Icon */}
      <div className="summary-mobile-content">
        <img src={SummaryIcon} alt="Summary Icon" className="summary-img-mobile-icon" />
        <h3 className="font-italic">Summary Details</h3>
      </div>

      {/* Desktop Left Block */}
      <div className="summary-left">
        <h3 className="font-italic">Summary Details</h3>
        <img src={SummaryIcon} alt="Summary Icon" className="summary-img-icon" />
      </div>

      <div className="summary-separator"></div>

      <div className="summary-right">
        {summaryText ? (
          <p className="summary-text">&emsp;&emsp;{summaryText}</p>
        ) : (
          <p>No summary available.</p>
        )}
      </div>
    </div>
  );
};

export default Summary;
