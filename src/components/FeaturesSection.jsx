import React from "react";
import "../styles/FeaturesSection.css";
import { FEATURES } from "../constants/texts";

const FeaturesSection = () => (
  <section className="features-section">
    <div className="features-grid">
      {FEATURES.map((feature, idx) => (
        <div className="feature-card" key={idx}>
          <h3>{feature.title}</h3>
          <p>{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
