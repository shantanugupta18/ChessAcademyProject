import React, { useEffect, useRef, useState } from "react";
import "../styles/StarPerformerSection.css";
import { STAR_PERFORMER } from "../constants/texts";
import performerImg from "../assets/star-performer.png";
import achievementGif from "../assets/achievements.gif";

const StarPerformerSection = () => {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <section className="star-performer-section">
      <div className="star-performer-content">
        <div
          className={`star-performer-img ${isVisible ? "appear" : "hidden"}`}
          ref={imgRef}
        >
          <img src={performerImg} alt={STAR_PERFORMER.title} />
        </div>
        <div className="star-performer-info">
          <h2>{STAR_PERFORMER.title}</h2>
          <p>{STAR_PERFORMER.description}</p>
          <div className="star-performer-highlight">
            {STAR_PERFORMER.highlight}
          </div>
          <div className="star-performer-gif">
            {/* <img src={achievementGif} alt="Biggest Achievement" /> */}
            <div className="star-performer-gif-caption"><strong>{STAR_PERFORMER.gifCaption}</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarPerformerSection;
