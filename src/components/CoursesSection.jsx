import React from "react";
import "../styles/CoursesSection.css";
import { COURSES } from "../constants/texts";

const CoursesSection = () => (
  <section id="courses-section" className="courses-section">
    <h2 className="courses-main-heading">{COURSES[0].title}</h2>
    <p className="course-description">
      {COURSES[0].description_parta}{" "}
      <strong>{COURSES[0].description_bold}</strong>{" "}
      {COURSES[0].description_partb}
    </p>
    <div className="highlight-message">{COURSES[0].highlight_text}</div>
    <div className="courses-grid">
      {COURSES.slice(1).map((course, idx) => (
        <div
          className="course-card animated" // Add animated class
          key={idx}
          tabIndex={0}
          aria-label={course.title}
        >
          <div className="course-header">
            <h3 className="course-title">{course.title}</h3>
            {course.discountedPrice ? (
              <div
                className="course-price"
                aria-label={`${course.title} price discounted from ${course.originalPrice} to ${course.discountedPrice} per class`}
              >
                <span className="price-old" aria-hidden="true">
                  {course.originalPrice}
                </span>
                <span className="price-new">{course.discountedPrice}</span>
                {/* <span className="price-unit">per class</span> */}
              </div>
            ) : (
              <span className="course-price">{course.price}</span>
            )}{" "}
          </div>
          <ul className="course-features">
            {course.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <button
            className="course-enroll-btn"
            onClick={() => {
              const event = new CustomEvent("enrollCourse", {
                detail: course.title,
              });
              window.dispatchEvent(event);
              document
                .getElementById("hero-form")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Enroll Now
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default CoursesSection;
