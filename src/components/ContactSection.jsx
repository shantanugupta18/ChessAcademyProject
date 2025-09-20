// ContactSection.jsx
import React from "react";
import "../styles/ContactSection.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactSection = () => (
  <section id="contact-section" className="contact-section">
    <div className="contact-info-wrapper">
      <div className="contact-heading">Contact Info</div>
      <div className="contact-details">
        <div><strong>Address:</strong> 123 Chess Street, Townsville</div>
        <div><strong>Email:</strong> vianshacademy@gmail.com</div>
        <div><strong>Phone:</strong> <a href="https://wa.me/919956720520?text=Hi%2C%20I%20want%20to%20know%20about%20your%20academy" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: 'bold' }}>+91 99567 20520</a></div>
        <div><strong>Working Hours:</strong> Mon-Sun 12:00am - 11:59pm</div>
        <div className="contact-social">
          <strong>Follow Us:</strong>
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a> */}
          <a href="https://www.instagram.com/viansh.chessacademy?igsh=YTRiMnh0Znl0NDM1" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
            
          </a>
        </div>
      </div>
    </div>
    <div className="contact-map">
      <div className="embed-map-responsive">
        <div className="embed-map-container">
          <iframe
            className="embed-map-frame"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=300&height=200&hl=en&q=kakadeo&t=&z=15&ie=UTF8&iwloc=B&output=embed"
            title="Chess Academy Location"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
