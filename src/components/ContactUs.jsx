import React, { useState } from "react";
import "./ContactUs.css"; // Import the CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    mailClient: "default",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message, mailClient } = formData;
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    let mailtoLink;

    switch (mailClient) {
      case "gmail":
        mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=Admc.agro@gmail.com&su=${subject}&body=${body}`;
        break;
      case "outlook":
        mailtoLink = `https://outlook.live.com/owa/?path=/mail/action/compose&to=Admc.agro@gmail.com&subject=${subject}&body=${body}`;
        break;
      case "yahoo":
        mailtoLink = `https://compose.mail.yahoo.com/?to=Admc.agro@gmail.com&subject=${subject}&body=${body}`;
        break;
      default:
        mailtoLink = `mailto:Admc.agro@gmail.com?subject=${subject}&body=${body}`;
        break;
    }

    window.open(mailtoLink, "_blank");
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="mailClient">Select Email Client</label>
          <select
            id="mailClient"
            name="mailClient"
            value={formData.mailClient}
            onChange={handleChange}
          >
            <option value="default">Default Email Client</option>
            <option value="gmail">Gmail</option>
            <option value="outlook">Outlook</option>
            <option value="yahoo">Yahoo</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
