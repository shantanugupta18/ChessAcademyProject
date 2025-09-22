import React from "react";
import { useState } from "react";
import "../styles/AboutSection.css";
import { ABOUT } from "../constants/texts";



const AboutSection = () => {
  const [showFideChart, setShowFideChart] = useState(false);
  const aboutText = ABOUT.text;
  return (
    <section className="about-section">
      <h2>About VCA</h2>
      <p>{aboutText}</p>
      <div>
        <strong>Nitesh Yadav</strong> achieved a FIDE rating in just six months and is currently ranked among the top young players in India.
      </div>
      <button className="view-fide-chart-button" onClick={() => setShowFideChart(true)}>
        {ABOUT.CTA_Button_Label}
      </button>
      {showFideChart && (
        <IframeWithLoader />
      )}
    </section>
  );
};

const IframeWithLoader = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div style={{ margin: "2rem auto", maxWidth: "900px", position: "relative" }}>
      {loading && (
        <div className="iframe-loader">
          <div className="loader"></div>
        </div>
      )}
      <iframe
        src="https://ratings.fide.com/profile/531020100/chart"
        title="FIDE Rating Chart"
        width="100%"
        height="500"
        style={{ border: "1px solid #ccc", borderRadius: "8px" }}
        allowFullScreen
        loading="lazy"
        onLoad={() => setLoading(false)}
      ></iframe>
      {/* Loader animation keyframes */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
export default AboutSection;