import React, { useState } from 'react';
import './About.css';
import ProfileImage from '../Images/Logos/SubSectionLogo/UdayPic.png';
import { Linkedin, Github, GeoAltFill, Download, EnvelopeFill } from 'react-bootstrap-icons';

const timelineData = [
  { id: 1, period: "2020 – 2021", company: "TwoWaits", title: "Software Engineer", subtitle: "Data Eng & Backend Systems", position: "top", color: "#1D9E75", colorClass: "node-teal" },
  { id: 2, period: "Feb – Jun 2022", company: "TCS — Intern", title: "Software Eng Intern", subtitle: "Data Eng & Big Data", position: "bottom", color: "#178EAF", colorClass: "node-blue" },
  { id: 3, period: "Jul 2022 – Dec 2023", company: "TCS", title: "Data Engineer", subtitle: "Big Data & Cloud Systems", position: "top", color: "#178EAF", colorClass: "node-blue" },
  { id: 4, period: "Jan – Dec 2025", company: "UMKC", title: "Big Data Analyst", subtitle: "Data Engineering", position: "bottom", color: "#BA7517", colorClass: "node-amber" },
  { id: 5, period: "Dec 2025 – Present", company: "CDF & Projects", title: "Data Scientist & AI", subtitle: "Volunteer + AI Platform", position: "top", color: "#533AB7", colorClass: "node-purple" },
];

const topSkills = [
  "PySpark", "Databricks", "Apache Airflow", "Snowflake",
  "dbt", "Delta Lake", "AWS", "LangChain", "RAG",
  "Agentic AI", "Python", "Docker"
];

const testimonials = [
  {
    name: "Harini Ala",
    title: "Backend Developer | Google Certified Cloud Engineer",
    linkedin: "https://www.linkedin.com/in/harini-ala-b902141b5/",
    relation: "Worked together at TCS, Feb 2023",
    quote: "You are good in functional understanding. Keep learning, keep growing."
  },
  {
    name: "Gopalakrishna Panditi",
    title: "Full-Stack Developer | AI/ML & Data Analytics Enthusiast",
    linkedin: "https://www.linkedin.com/in/gopala-krishna-panditi-807225207/",
    relation: "Studied together, Sep 2022",
    quote: "He leads by example and always kept the team morale up. The ability to work through crisis and develop new ways is inspiring. An excellent mentor for others."
  }
];

const AboutMe = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="about-container">

      {/* ══════════════════════════════
          LEFT SIDE
      ══════════════════════════════ */}
      <div className="about-left">

        {/* Profile Image */}
        <img src={ProfileImage} alt="Sai Uday" className="about-img" />

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/sai-uday-udumula/" target="_blank" rel="noopener noreferrer" className="linkedin-btn">
          <Linkedin size={18} className="me-1" /> Visit LinkedIn
        </a>

        {/* Open To */}
        <div className="about-left-inline">
          <h5 className="about-left-heading">Open To</h5>
          <span className="about-open-badge">Data Engineer</span>
          <p className="about-open-sub">Full-Time Opportunities</p>
        </div>

        {/* Location & Availability */}
        <div className="about-left-inline">
          <h5 className="about-left-heading">Location &amp; Availability</h5>
          <p className="about-location-item"><GeoAltFill size={13} /> Kansas City, MO</p>
          <p className="about-location-item">&#10003; Open to Remote</p>
          <p className="about-location-item">&#10003; Open to Relocation</p>
        </div>

        {/* Technical Skills Showcase */}
        <div className="about-left-card">
          <h5 className="about-left-heading">Top Skills</h5>
          <div className="about-skills-wrap">
            {topSkills.map((skill, i) => (
              <span className="about-skill-tag" key={i}>{skill}</span>
            ))}
          </div>
        </div>

        {/* Volunteer Work */}
        <div className="about-left-card">
          <h5 className="about-left-heading">Volunteer Work</h5>
          <p className="about-vol-org">Community Dream Foundation</p>
          <p className="about-vol-role">Data Scientist &amp; Analyst</p>
          <p className="about-vol-period">Dec 2025 – Present</p>
          <p className="about-vol-desc">Applying data engineering and analytics skills to support community-driven initiatives and data-informed decision making.</p>
        </div>

        {/* Testimonials */}
        <div className="about-left-card">
          <h5 className="about-left-heading">Testimonials</h5>
          {testimonials.map((t, i) => (
            <div className="about-testimonial" key={i}>
              <p className="about-testimonial-quote">"{t.quote}"</p>
              <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="about-testimonial-name">
                {t.name}
              </a>
              <p className="about-testimonial-title">{t.title}</p>
              <p className="about-testimonial-relation">{t.relation}</p>
              {i < testimonials.length - 1 && <hr className="about-testimonial-divider" />}
            </div>
          ))}
        </div>

        {/* Resume Download */}
        <a
        href={`${process.env.PUBLIC_URL}/SaiUdayR_Udumula_DEng_Resume.pdf`}
  download={`SaiUdayR_Udumula_Resume-${(() => {
    const d = new Date();
    const date = [
      String(d.getDate()).padStart(2,'0'),
      String(d.getMonth()+1).padStart(2,'0'),
      String(d.getFullYear()).slice(2)
    ].join('');
    const time = [
      String(d.getHours()).padStart(2,'0'),
      String(d.getMinutes()).padStart(2,'0'),
      String(d.getSeconds()).padStart(2,'0')
    ].join('');
    return `${date}-${time}`;
  })()}.pdf`}
  className="about-resume-btn"
>
  <Download size={16} className="me-1" /> Download Resume
</a>

        {/* Connect / Links */}
        <div className="about-left-inline">
          <h5 className="about-left-heading">Connect</h5>
          <a href="https://www.linkedin.com/in/sai-uday-udumula/" target="_blank" rel="noopener noreferrer" className="about-connect-link">
            <Linkedin size={15} /> LinkedIn
          </a>
          <a href="https://github.com/USUDR2604/" target="_blank" rel="noopener noreferrer" className="about-connect-link">
            <Github size={15} /> GitHub
          </a>
          <a href="mailto:usudaydeep26@gmail.com" className="about-connect-link">
            <EnvelopeFill size={15} /> usudaydeep26@gmail.com
          </a>
        </div>

      </div>

      {/* ══════════════════════════════
          RIGHT SIDE
      ══════════════════════════════ */}
      <div className="about-right">

        {/* Who I Am */}
        <h2>About Me</h2>
        <p>I'm <strong>Sai Uday R Udumula</strong>, a Data Engineer, AI/ML &amp; LLM Engineer, and Data Scientist with 4+ years of experience building large-scale data platforms across telecom, cloud, and academia.</p>
        <p>Master's Graduate in Computer Science with Data Science from the University of Missouri–Kansas City — focused on building reliable, scalable, and production-ready systems that sit at the intersection of Big Data, machine learning, and cloud-native architecture.</p>

        {/* What Drives Me */}
        <h3>What Drives Me</h3>
        <p>I don't just build pipelines — I build systems that make decisions faster, smarter, and at scale.</p>
        <p>Data means nothing if it doesn't move. I'm driven by the challenge of taking raw, messy, high-volume data and turning it into something that actually works in production — whether that's a Databricks Lakehouse processing 50M+ telecom events in real-time, or a RAG-powered AI resolving customer queries the moment they're asked.</p>
        <p>What keeps me going is the moment a system I built reduces someone's workload by 30%, or a dashboard I designed helps a team make a better decision in seconds instead of hours. That gap between raw data and real impact — that's exactly where I want to work.</p>

        {/* Career Timeline */}
        <h3>Career Timeline</h3>
        <div className="ct-wrapper">
          <div className="ct-timeline-track">
            <div className="ct-spine" />
            {timelineData.map((item) => (
              <div
                key={item.id}
                className={`ct-node-wrap ${item.position === "top" ? "ct-top" : "ct-bottom"}`}
                onClick={() => setActive(active === item.id ? null : item.id)}
              >
                <div className={`ct-card ${item.colorClass} ${active === item.id ? "ct-card--active" : ""}`}>
                  <span className="ct-period">{item.period}</span>
                  <strong className="ct-company">{item.company}</strong>
                  <span className="ct-title">{item.title}</span>
                  <span className="ct-subtitle">{item.subtitle}</span>
                </div>
                <div className="ct-stem" style={{ borderColor: item.color }} />
                <div className="ct-dot" style={{ background: item.color }} />
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience Highlights */}
        <h3>Work Experience Highlights</h3>
        <ul>
          <li>Built distributed PySpark pipelines on Databricks Lakehouse processing 50M+ daily Vodacom network events at TCS, reducing pipeline latency by 30% using Delta Lake ACID transactions and Medallion Architecture.</li>
          <li>Designed and operated 20+ Airflow ETL/ELT pipelines on Snowflake and Databricks at UMKC, reducing manual data preparation by 30% through automated ingestion, validation, and schema enforcement.</li>
          <li>Engineered 10+ dbt and Airflow ETL/ELT pipelines on AWS S3 and GCP Data Lake implementing CDC and SCD Type 1/2 patterns, improving pipeline reliability by 25%.</li>
          <li>Built full-stack Python Django backend and Angular/React frontend integrating MongoDB, Oracle SQL, and Redis — improving system response latency by 20%.</li>
          <li>Provisioned cloud infrastructure using Terraform and CloudFormation across AWS and GCP, deploying 10+ microservices via Docker and Kubernetes — improving scalability by 30%.</li>
        </ul>

        {/* Project Highlights */}
        <h3>Project Highlights</h3>
        <ul>
          <li>Built hybrid recommendation pipelines using PySpark and Snowflake on AWS, improving recommendation relevance by 18–20% through collaborative filtering and NLP-based feature engineering.</li>
          <li>Built Airflow and PySpark-orchestrated data pipelines on AWS for a Smart Blood Bank system — reducing blood supply risk by 30% through predictive matching and prioritization logic.</li>
          <li>Built a distributed real-time chat and broadcast system on AWS using Kafka and WebSockets, supporting sub-200ms end-to-end latency — improving throughput and reliability by 30%.</li>
        </ul>

        {/* Where I've Made Impact */}
        <h3>Where I've Made Impact</h3>
        <ul>
          <li>30% reduction in pipeline latency — Databricks Lakehouse, Vodacom 50M+ daily events.</li>
          <li>30% reduction in manual data preparation — 20+ Airflow pipelines at UMKC.</li>
          <li>25% reduction in support load — RAG-based AI chatbot with LangChain and LangGraph.</li>
          <li>20% improvement in system response latency — full-stack Django/React unified service layer.</li>
          <li>30% improvement in scalability — Docker, Kubernetes, Terraform on AWS and GCP.</li>
          <li>20% improvement in reporting accuracy — ELK Stack, Tableau, Power BI.</li>
          <li>15–20% improvement in resource allocation — PySpark and SQL operational analytics.</li>
          <li>18–20% improvement in recommendation relevance — collaborative filtering, NLP pipelines.</li>
        </ul>

        {/* Achievements */}
        <h3>Achievements</h3>
        <ul>
          <li>Architected a self-driven AI chatbot integrated with Big Data pipelines and RAG-based systems using LangChain, LangGraph, and Vector Databases — reducing Vodacom support load by 25%.</li>
          <li>Built an AI-powered assessment chatbot using RASA, LangChain, and LangGraph serving real users with adaptive difficulty and personalized performance reports — improving automated feedback accuracy by 25%.</li>
          <li>Built an NLP-driven educational chatbot using RASA serving 2,000+ users — improving query resolution by 20%.</li>
          <li>Delivered 15+ real-time Tableau and Power BI dashboards reducing reporting latency by 20% and operational efficiency by 15%.</li>
          <li>Certified in Generative AI for Software Engineers (IBM), Google Analytics, AI Foundations, and Generative AI for Data Scientists.</li>
        </ul>

        {/* What I've Done */}
        <h3>What I've Done</h3>
        <ul>
          <li>Built distributed PySpark pipelines on Databricks Lakehouse processing 50M+ daily Vodacom network events at TCS — reducing pipeline latency by 30%.</li>
          <li>Designed and operated 20+ Airflow ETL/ELT pipelines on Snowflake and Databricks, enabling real-time analytics and 15+ live Tableau and Power BI dashboards.</li>
          <li>Architected RAG-based AI chatbots using LangChain, LangGraph, and Vector Databases for real-time telecom query resolution — reducing support load by 25%.</li>
          <li>Built full-stack applications with Python Django/FastAPI backend and Angular/React frontend integrating MongoDB, Redis, and PostgreSQL.</li>
        </ul>

        {/* What I'm Currently Working On */}
        <h3>What I'm Currently Working On</h3>
        <ul>
          <li>Building an end-to-end AI platform on AWS combining Agentic AI, RAG, and multimodal analysis with real-time and batch processing pipelines.</li>
          <li>Developing an ATS Resume Builder and AI Code Reviewer powered by LLM workflows and Big Data pipelines.</li>
          <li>Volunteering as Data Scientist &amp; Analyst at Community Dream Foundation — applying data engineering and analytics for community-driven initiatives.</li>
        </ul>

        {/* Future Goals */}
        <h3>Future Goals</h3>
        <ul>
          <li>Build scalable, production-ready AI and Big Data platforms that drive real-world data-driven decision making.</li>
          <li>Lead innovation in Data Engineering and LLM-powered intelligent systems with global accessibility and enterprise impact.</li>
        </ul>

      </div>
    </div>
  );
};

export default AboutMe;
