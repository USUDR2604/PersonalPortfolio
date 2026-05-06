import React from 'react';
import './ResumePage.css';
import { Download } from 'react-bootstrap-icons';
import Footer from './Footer';

const ResumePage = () => {
  const downloadName = `SaiUdayR_Udumula_Resume-${(() => {
    const d = new Date();
    const date = [
      String(d.getDate()).padStart(2, '0'),
      String(d.getMonth() + 1).padStart(2, '0'),
      String(d.getFullYear()).slice(2)
    ].join('');
    const time = [
      String(d.getHours()).padStart(2, '0'),
      String(d.getMinutes()).padStart(2, '0'),
      String(d.getSeconds()).padStart(2, '0')
    ].join('');
    return `${date}-${time}`;
  })()}.pdf`;

  return (
    <>
      <div className="resume-page">

        {/* Header */}
        <div className="resume-header">
          <div className="resume-header-left">
            <h2 className="resume-title">Sai Uday R Udumula</h2>
            <p className="resume-subtitle">Data Engineer · AI/ML & LLM Engineer · Data Scientist</p>
          </div>
          <a
            href={`${process.env.PUBLIC_URL}/SaiUdayR_Udumula_DEng_Resume.pdf`}
            download={downloadName}
            className="resume-download-btn"
          >
            <Download size={16} className="me-1" /> Download Resume
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="resume-viewer">
          <iframe
            src={`${process.env.PUBLIC_URL}/SaiUdayR_Udumula_DEng_Resume.pdf`}
            title="Sai Uday R Udumula Resume"
            width="100%"
            height="100%"
          />
        </div>

      </div>
      <Footer />
    </>
  );
};

export default ResumePage;
