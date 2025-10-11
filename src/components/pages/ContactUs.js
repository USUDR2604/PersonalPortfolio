import React, { useState } from "react";
import data from "../DataFiles/data.json";
import ContactIcon from "../Images/Logos/SubSectionLogo/ContactPersonIcon.png";

const ContactUs = () => {
  const { ContactUsSectionBackgroundColor } = data;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

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

    if (name === "subject" && value.length > 300) {
      setErrors((prev) => ({ ...prev, subject: "Subject cannot exceed 300 characters." }));
    } else if (name === "subject") {
      setErrors((prev) => ({ ...prev, subject: "" }));
    }

    if (name === "message" && value.length > 2000) {
      setErrors((prev) => ({ ...prev, message: "Message cannot exceed 2000 characters." }));
    } else if (name === "message") {
      setErrors((prev) => ({ ...prev, message: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert("✅ Message sent successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    setErrors({});
  };

  return (
    <div className="container py-5" style={{ backgroundColor: ContactUsSectionBackgroundColor }}>
      <div className="row g-5 align-items-start">
        
        {/* LEFT PANEL */}
        <div className="ContactUsLeft col-lg-5 text-light">
          <div className="p-4 bg-dark rounded shadow">
            <h4 className="mb-3">What We Offer</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="fas fa-reply me-2 text-primary"></i>
                <strong>Reply within 24 hours</strong><br />
                We respond to every inquiry within 1 business day.
              </li>
              <li className="mb-3">
                <i className="fas fa-hands-helping me-2 text-success"></i>
                <strong>Personalized Help</strong><br />
                Every project gets personal attention from us.
              </li>
              <li className="mb-3">
                <i className="fas fa-cogs me-2 text-warning"></i>
                <strong>Technical Guidance</strong><br />
                Backend, frontend, devops — we’ve got you covered.
              </li>
              <li className="mb-3">
                <i className="fas fa-user-check me-2 text-info"></i>
                <strong>Developer Support</strong><br />
                We're developers helping developers — no bots here.
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT PANEL - FORM */}
        <div className="ContactUsRight col-lg-7">
          <div className="text-center mb-4">
            <img src={ContactIcon} alt="Contact Icon" className="rounded-circle" style={{ width: "4rem" }} />
            <h3 className="mt-3 text-light">Contact Us</h3>
          </div>

          <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input
                  name="firstName"
                  className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                />
                <div className="invalid-feedback">{errors.firstName}</div>
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input
                  name="lastName"
                  className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                />
                <div className="invalid-feedback">{errors.lastName}</div>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
              <div className="invalid-feedback">{errors.email}</div>
            </div>

            <div className="mb-3">
              <label className="form-label">Phone (Optional)</label>
              <input
                name="phone"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
              <div className="invalid-feedback">{errors.phone}</div>
            </div>

            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input
                name="subject"
                className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                value={formData.subject}
                onChange={handleChange}
                maxLength={400}
                placeholder="Enter subject"
              />
              <div className="form-text text-end">{formData.subject.length}/300</div>
              <div className="invalid-feedback">{errors.subject}</div>
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                rows="6"
                value={formData.message}
                onChange={handleChange}
                maxLength={2200}
                placeholder="Type your message..."
              ></textarea>
              <div className="form-text text-end">{formData.message.length}/2000</div>
              <div className="invalid-feedback">{errors.message}</div>
            </div>

            <div className="text-end">
              <button type="submit" className="btn btn-primary px-4">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
