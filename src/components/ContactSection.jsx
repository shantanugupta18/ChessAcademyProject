// ContactSection.jsx
import React from "react";
import "../styles/ContactSection.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";

const ContactSection = () => (
  <section id="contact-section" className="contact-section">
    <div className="contact-info-wrapper">
      <div className="contact-heading">Contact Info</div>
      <div className="contact-details">
        <div>
          <strong>Address:</strong> Sec 8 B, House No 34, opp. Radha Nikunj Park, Vrindavan Colony,<br />Lucknow, Uttar Pradesh 226019
        </div>
        <div>
          <strong>Main Branch:</strong> Lucknow, Uttar Pradesh <br />
          <strong>Another Branch:</strong> Kanpur, Uttar Pradesh
        </div>
        <div>
          <strong>Email:</strong> vianshacademy@gmail.com
        </div>
        <div>
          <strong>Phone:</strong>{" "}
          <a
            href="https://wa.me/919956720520?text=Hi%2C%20I%20want%20to%20know%20about%20your%20academy"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#25D366",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            +91 99567 20520
          </a>
        </div>
        <div>
          <strong>Working Hours:</strong> Mon-Sun 12:00am - 11:59pm
        </div>
        <div className="contact-social">
          <strong>Follow Us:</strong>
          {/* {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a> */}
          <a href="https://www.youtube.com/@vianshchessacademy" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a> 
          <a
            href="https://www.instagram.com/viansh.chessacademy?igsh=YTRiMnh0Znl0NDM1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
    <div className="contact-map">
      <div className="embed-map-responsive">
        <div className="embed-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.0772684467356!2d80.9642501!3d26.773806799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb70546d13bd%3A0x39bceebc1ebd8c00!2sRadha%20Nikunj%20jewellers!5e0!3m2!1sen!2sin!4v1758538468305!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Viansh Chess Academy Location"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
