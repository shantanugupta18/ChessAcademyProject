import React from "react";
import "../styles/KeyFeaturesSection.css";
import { KEYFEATURES } from "../constants/texts";

const keyFeatures = KEYFEATURES; // Array of feature objects

const KeyFeaturesSection = () => (
  <section className="key-features-section">
    <h2>Key Features of All Courses</h2>
    <div className="key-features-grid">
      {keyFeatures.map((feature, idx) => (
        <div className="key-feature-card" key={idx}>
          <h3>{feature.title}</h3>
          <p>{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default KeyFeaturesSection;
