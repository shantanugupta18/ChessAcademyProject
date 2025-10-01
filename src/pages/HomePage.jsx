import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import NoticeBoard from "../components/NoticeBoard";
import FeaturesSection from "../components/FeaturesSection";
import AchievementsSection from "../components/AchievementsSection";
import CoursesSection from "../components/CoursesSection";
import KeyFeaturesSection from "../components/KeyFeaturesSection";
import FAQSection from "../components/FAQSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import ImageCarousel from "../components/ImageCarousel";
import Header from "../components/Header";
import AboutSection from "../components/About";
import StarPerformerSection from "../components/StarPerformerSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <main style={{ width: '100%', minHeight: '100vh', background: '#f7f8fa', margin: 0, padding: 0 }}>
        <div style={{ width: '100%', margin: 0, padding: 0 }}>
          <HeroSection />
          <NoticeBoard />
          <AboutSection />
          <StarPerformerSection />
          <FeaturesSection />
          <AchievementsSection />
          <ImageCarousel />
          <CoursesSection />
          <KeyFeaturesSection />
          <FAQSection />
          {/* <TestimonialsSection /> */}
          <ContactSection />
          <footer style={{ width: '100%', textAlign: 'center', padding: '1.2rem 0', background: '#222', color: '#fff', fontSize: '1rem', letterSpacing: '0.02em' }}>
            © 2025 Viansh Chess Academy. All rights reserved.
          </footer>
        </div>
      </main>
    </>
  );
};

export default HomePage;
