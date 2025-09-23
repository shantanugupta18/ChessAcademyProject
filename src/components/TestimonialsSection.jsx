import React from "react";
import "../styles/TestimonialsSection.css";

const testimonials = [
  {
    name: "Priya Sen",
    text: "My child is thriving at Viansh Chess Academy! The trainers are supportive and the environment is perfect for learning.",
    rating: 5
  }
];

const TestimonialsSection = () => (
  <section className="testimonials-section">
    <h2>Testimonials</h2>
    <div className="testimonials-list">
      {testimonials.map((t, idx) => (
        <div className="testimonial-card" key={idx}>
          <div className="testimonial-name">{t.name}</div>
          <div className="testimonial-text">{t.text}</div>
          <div className="testimonial-rating">{"★".repeat(t.rating)}</div>
        </div>
      ))}
    </div>
    <div className="google-reviews">
      <h3>Help Us Make a Difference – Write a Google Review</h3>
      <div className="google-review-placeholder">Google review widget placeholder</div>
    </div>
  </section>
);

export default TestimonialsSection;
