
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import PainPointsSection from '../components/PainPointsSection';
import VideoSection from '../components/VideoSection';
import PricingSection from '../components/PricingSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <PainPointsSection />
        <VideoSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
