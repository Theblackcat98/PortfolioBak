import React from 'react';
import HeaderComponent from '../components/Header'; // Adjusted path
import HeroSection from '../components/HeroSection'; // Uncommented
import AboutSection from '../components/AboutSection'; // Uncommented
import PortfolioSection from '../components/PortfolioSection'; // Uncommented
import ContactSection from '../components/ContactSection'; // Uncommented
import FooterComponent from '../components/FooterComponent'; // Uncommented
// Import other section components here as they are created
// import FooterComponent from '../components/FooterComponent';

export default function HomePage() {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Background Animation - ensure styles are in globals.css */}
      <div className="bg-animation">
        <div className="gradient-circle-1"></div>
        <div className="gradient-circle-2"></div>
        <div className="gradient-circle-3"></div>
      </div>

      <HeaderComponent />

      <main className="flex-grow">
        <HeroSection /> {/* Added HeroSection */}
        <div id="about"> {/* Added wrapper div with ID for navigation */}
          <AboutSection />
        </div>
        <div id="portfolio"> {/* Added wrapper div with ID for navigation */}
          <PortfolioSection />
        </div>
        <div id="contact"> {/* Wrapper div with ID for navigation */}
          <ContactSection />
        </div>
        {/* <div id="contact"><ContactSection /></div> */}
      </main>

      <FooterComponent /> {/* Added FooterComponent */}
      
      {/* Back to Top Button might be a global component or placed in Footer */}
      {/* <BackToTopButton /> */}
    </div>
  );
} 