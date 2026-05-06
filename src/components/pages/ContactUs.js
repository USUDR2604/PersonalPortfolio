import React, { useState } from "react";
import "./ContactUs.css";
import ContactIcon from "../Images/Logos/SubSectionLogo/ContactPersonIcon.png";
import Footer from "./Footer";
import {
  ClockFill,
  PersonCheckFill,
  GearFill,
  ChatDotsFill,
  GeoAltFill,
  EnvelopeFill,
  Linkedin,
  Github
} from "react-bootstrap-icons";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "",
    phone: "", subject: "", message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = "First name is required.";
    if (!formData.lastName.trim()) errs.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Invalid email format.";
    }
    if (formData.phone && !/^\d{10,15}$/.test(formData.phone)) {
      errs.phone = "Phone must be 10–15 digits.";
    }
    if (!formData.subject.trim()) {
      errs.subject = "Subject is required.";
    } else if (formData.subject.length > 300) {
      errs.subject = "Subject cannot exceed 300 characters.";
    }
    if (!formData.message.trim()) {
      errs.message = "Message is required.";
    } else if (formData.message.length > 2000) {
      errs.message = "Message cannot exceed 2000 characters.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "subject") {
      setErrors((prev) => ({ ...prev, subject: value.length > 300 ? "Subject cannot exceed 300 characters." : "" }));
    }
    if (name === "message") {
      setErrors((prev) => ({ ...prev, message: value.length > 2000 ? "Message cannot exceed 2000 characters." : "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMsg({ type: "", text: "" });
    if (!validate()) return;
    try {
      setIsSending(true);
      const res = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const payload = await res.json();
      if (!res.ok || !payload.ok) throw new Error(payload?.error || "Failed to send message");
      setStatusMsg({ type: "success", text: "Message sent successfully!" });
      setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
      setErrors({});
    } catch (err) {
      setStatusMsg({ type: "error", text: "Failed to send. Please try again later." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <div className="cu-wrapper">
        <div className="cu-container">

          {/* ── LEFT PANEL ── */}
          <div className="cu-left">
            <h4 className="cu-left-title">Get In Touch</h4>
            <p className="cu-left-desc">
              Open to full-time Data Engineer roles, collaborations, and technical discussions.
              I respond to every message personally.
            </p>

            <div className="cu-offers">
              <div className="cu-offer-item">
                <ClockFill className="cu-offer-icon cu-icon-blue" />
                <div>
                  <strong>Reply within 24 hours</strong>
                  <p>Every inquiry gets a response within 1 business day.</p>
                </div>
              </div>
              <div className="cu-offer-item">
                <PersonCheckFill className="cu-offer-icon cu-icon-green" />
                <div>
                  <strong>Personalized Response</strong>
                  <p>No templates — every message gets genuine attention.</p>
                </div>
              </div>
              <div className="cu-offer-item">
                <GearFill className="cu-offer-icon cu-icon-amber" />
                <div>
                  <strong>Technical Discussions</strong>
                  <p>Data Engineering, AI/ML, LLMs, cloud architecture — happy to talk.</p>
                </div>
              </div>
              <div className="cu-offer-item">
                <ChatDotsFill className="cu-offer-icon cu-icon-teal" />
                <div>
                  <strong>Open to Opportunities</strong>
                  <p>Actively looking for full-time Data Engineer positions.</p>
                </div>
              </div>
            </div>

            <div className="cu-contact-info">
              <p><GeoAltFill size={13} /> Kansas City, MO · Open to Remote &amp; Relocation</p>
              <a href="mailto:usudaydeep26@gmail.com"><EnvelopeFill size={13} /> usudaydeep26@gmail.com</a>
              <a href="https://www.linkedin.com/in/sai-uday-udumula/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={13} /> LinkedIn
              </a>
              <a href="https://github.com/USUDR2604/" target="_blank" rel="noopener noreferrer">
                <Github size={13} /> GitHub
              </a>
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="cu-right">
            <div className="cu-form-header">
              <img src={ContactIcon} alt="Contact" className="cu-icon-img" />
              <h3 className="cu-form-title">Contact Me</h3>
              <p className="cu-form-sub">Fill in the form and I'll get back to you shortly.</p>
            </div>

            <form onSubmit={handleSubmit} className="cu-form">

              {statusMsg.text && (
                <div className={`cu-status ${statusMsg.type === "success" ? "cu-status--success" : "cu-status--error"}`}>
                  {statusMsg.text}
                </div>
              )}

              <div className="cu-row">
                <div className="cu-field">
                  <label className="cu-label">First Name</label>
                  <input
                    name="firstName"
                    className={`cu-input ${errors.firstName ? "cu-input--error" : ""}`}
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                  />
                  {errors.firstName && <span className="cu-error">{errors.firstName}</span>}
                </div>
                <div className="cu-field">
                  <label className="cu-label">Last Name</label>
                  <input
                    name="lastName"
                    className={`cu-input ${errors.lastName ? "cu-input--error" : ""}`}
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                  />
                  {errors.lastName && <span className="cu-error">{errors.lastName}</span>}
                </div>
              </div>

              <div className="cu-field">
                <label className="cu-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className={`cu-input ${errors.email ? "cu-input--error" : ""}`}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                />
                {errors.email && <span className="cu-error">{errors.email}</span>}
              </div>

              <div className="cu-field">
                <label className="cu-label">Phone <span className="cu-optional">(Optional)</span></label>
                <input
                  name="phone"
                  className={`cu-input ${errors.phone ? "cu-input--error" : ""}`}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />
                {errors.phone && <span className="cu-error">{errors.phone}</span>}
              </div>

              <div className="cu-field">
                <label className="cu-label">Subject</label>
                <input
                  name="subject"
                  className={`cu-input ${errors.subject ? "cu-input--error" : ""}`}
                  value={formData.subject}
                  onChange={handleChange}
                  maxLength={300}
                  placeholder="Enter subject"
                />
                <span className="cu-counter">{formData.subject.length}/300</span>
                {errors.subject && <span className="cu-error">{errors.subject}</span>}
              </div>

              <div className="cu-field">
                <label className="cu-label">Message</label>
                <textarea
                  name="message"
                  className={`cu-input cu-textarea ${errors.message ? "cu-input--error" : ""}`}
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={2000}
                  placeholder="Type your message..."
                />
                <span className="cu-counter">{formData.message.length}/2000</span>
                {errors.message && <span className="cu-error">{errors.message}</span>}
              </div>

              <div className="cu-submit-wrap">
                <button type="submit" className="cu-submit-btn" disabled={isSending}>
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
