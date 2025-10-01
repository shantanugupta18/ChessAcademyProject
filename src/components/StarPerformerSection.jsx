import React, { useEffect, useRef, useState } from "react";
import "../styles/StarPerformerSection.css";
import { ABOUT, FIDE_RATING_URL, STAR_PERFORMER } from "../constants/texts";
import performerImg from "../assets/star-performer.png";
import achievementGif from "../assets/achievements.gif";
import chessboardLoadingGif from "../assets/chess-animation.gif";
import { IframeWithLoader } from "./About"; // Assumes this component is already set up for showing an iframe in a modal
import WebviewModal from "./WebViewModal.jsx";


const StarPerformerSection = () => {
  const [showFideChart, setShowFideChart] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const ctaLabel = modalOpen ? "Close" : ABOUT.CTA_Button_Label;
  const handleCtaClick = () => setModalOpen((prev) => !prev);
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
          <p>
            <strong>{STAR_PERFORMER.star_name}</strong>{" "}
            {STAR_PERFORMER.description}
          </p>
          <div className="star-performer-highlight">
            {STAR_PERFORMER.highlight}
          </div>
          <div className="star-performer-gif">
            <button
              className="view-fide-chart-button"
              onClick={handleCtaClick}
            >
              {ctaLabel}
            </button>
            {/* <img
              src={chessboardLoadingGif}
              alt="Chessboard loading animation"
              className="about-chessboard-gif"
            /> */}
          </div>
        </div>
      </div>
      <WebviewModal
        show={modalOpen}
        url={FIDE_RATING_URL.ishank_fide_chart}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}

export default StarPerformerSection;
