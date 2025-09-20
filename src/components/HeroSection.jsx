import React, { useState, useEffect } from "react";
import "../styles/HeroSection.css";
import { HERO, COURSES } from "../constants/texts";

const HeroSection = () => {
  const [type, setType] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  useEffect(() => {
    const handler = (e) => {
      setType("COURSE");
      setSelectedCourse(e.detail);
    };
    window.addEventListener("enrollCourse", handler);
    return () => window.removeEventListener("enrollCourse", handler);
  }, []);

  const courseOptions = COURSES.slice(1).map((c) => c.title);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const courseText = type === "COURSE" ? `interested in the course: ${selectedCourse}` : `have a query: ${form.query}`;
    const message = `Hi, I am ${form.name} and ${courseText}.\n\nMy contacts and details are:\n• Email: ${form.email}\n• Phone: ${form.phone}\n• City: ${form.city}`;
    const url = `https://wa.me/919956720520?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section id="hero-form" className="hero-section hero-bg">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>{HERO.title}</h1>
          <p>{HERO.subtitle}</p>
        </div>
        <div className="hero-form-wrapper" id="hero-form">
          <form className="demo-form" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <input
              name="city"
              type="text"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              required
            />

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="QUERY">QUERY</option>
              <option value="COURSE">COURSE</option>
            </select>
            {type === "QUERY" && (
              <textarea
                name="query"
                placeholder="Your Query"
                rows="3"
                value={form.query}
                onChange={handleChange}
                required
              ></textarea>
            )}
            {type === "COURSE" && (
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Course
                </option>
                {courseOptions.map((title, idx) => (
                  <option key={idx} value={title}>
                    {title}
                  </option>
                ))}
              </select>
            )}
            <button type="submit">Submit Your Query</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
