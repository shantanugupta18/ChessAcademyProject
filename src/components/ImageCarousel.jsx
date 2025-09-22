import React, { useRef, useEffect, useState } from "react";
import "../styles/ImageCarousel.css";
import gallery_one from "../assets/gallery_one.jpeg";
import gallery_two from "../assets/gallery_two.jpeg";
import gallery_three from "../assets/gallery_three.jpeg";
import gallery_four from "../assets/gallery_four.jpeg";
import gallery_five from "../assets/gallery_five.jpeg";
import gallery_six from "../assets/gallery_six.jpg";
import gallery_seven from "../assets/gallery_seven.jpg";
import gallery_eight from "../assets/gallery_eight.jpg";
import gallery_nine from "../assets/gallery_nine.jpg";

const images = [
    gallery_one,
    gallery_two,
    gallery_three,
    gallery_four,
    gallery_five,
    gallery_six,
    gallery_seven,
    gallery_eight,
    gallery_nine
];

const ImageCarousel = () => {
  const trackRef = useRef(null);
  const [showPreview, setShowPreview] = useState(false);
  const [previewIdx, setPreviewIdx] = useState(0);

  // Duplicate images for seamless loop
  const loopImages = [...images, ...images];
  const totalImages = loopImages.length;

  useEffect(() => {
    let animationFrame;
    let position = 0;
    const speed = 0.5; // lower = slower
    const imageWidthPercent = 100 // 3.5 images visible
    const maxPosition = imageWidthPercent * images.length;
    const animate = () => {
      position += speed;
      if (trackRef.current) {
        // Seamless cyclic scroll
        if (position >= maxPosition) {
          position = 0;
        }
        trackRef.current.style.transform = `translateX(-${position}%)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const handleImageClick = (idx) => {
    setPreviewIdx(idx % images.length);
    setShowPreview(true);
  };

  const handleClosePreview = () => {
    setShowPreview(false);
  };

  return (
    <section className="carousel-section">
      <h2>Gallery</h2>
      <div className="carousel-container">
        <div className="carousel-track" ref={trackRef}>
          {loopImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`carousel-${idx}`}
              className="carousel-image"
              onClick={() => handleImageClick(idx)}
              onContextMenu={(e) => e.preventDefault()}
            />
          ))}
        </div>
        {/* Dots and preview logic can be kept as before, but dots will only show for original images */}
        {/* <div className="carousel-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={'dot'}
          />
        ))}
      </div> */}
        {showPreview && (
          <div
            className="carousel-preview-overlay"
            onClick={handleClosePreview}
          >
            <img
              src={images[previewIdx]}
              alt={`preview-${previewIdx}`}
              className="carousel-preview-image"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageCarousel;
