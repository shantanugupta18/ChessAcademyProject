import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import logo from "../assets/logo.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHome = () => {
    document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" });
  };

    const handleClasses = () => {
    document.getElementById("courses-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContact = () => {
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`header-nav${scrolled ? " scrolled" : ""}`}>
      <div className="header-content">
        <div
          className={`header-logo${scrolled ? " scrolled" : " top"}`}
          onClick={handleHome}
        >
          <img
            src={logo}
            alt="Viansh Chess Academy Logo"
            className={scrolled ? "logo-scrolled" : "logo-top"}
          />
          <span className={scrolled ? "logo-text-scrolled" : "logo-text-top"}>
            Viansh Chess Academy
          </span>
        </div>
        <nav className={`header-links${scrolled ? " scrolled" : " top"}`}>
          <button
            className={scrolled ? "header-link-scrolled" : "header-link-top"}
            onClick={handleHome}
          >
            HOME
          </button>
            <button
            className={scrolled ? "header-link-scrolled" : "header-link-top"}
            onClick={handleClasses}
          >
            CLASSES
          </button>
          <button
            className={scrolled ? "header-link-scrolled" : "header-link-top"}
            onClick={handleContact}
          >
            CONTACT US
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
