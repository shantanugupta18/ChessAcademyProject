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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902234234567!2d80.305!3d26.447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c38e2e2e2e2e2%3A0xabcdefabcdefabcd!2sViansh%20Chess%20Academy!5e0!3m2!1sen!2sin!4v1695200000000!5m2!1sen!2sin"
            title="Chess Academy Location"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
