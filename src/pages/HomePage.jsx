import React from "react";
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

const HomePage = () => {
  return (
    <>
      <Header />
      <main style={{ width: '100%', minHeight: '100vh', background: '#f7f8fa', margin: 0, padding: 0 }}>
        <div style={{ width: '100%', margin: 0, padding: 0 }}>
          <HeroSection />
          <NoticeBoard />
          <FeaturesSection />
          <AchievementsSection />
          <ImageCarousel />
          <CoursesSection />
          <KeyFeaturesSection />
          <FAQSection />
          {/* <TestimonialsSection /> */}
          <ContactSection />
        </div>
      </main>
    </>
  );
};

export default HomePage;
