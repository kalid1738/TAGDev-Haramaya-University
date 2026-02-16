import React from 'react';
import Layout from '../components/Layout/Layout';
import AboutContent from '../components/About/AboutContent';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="/images/about-hero.jpg" 
            alt="About TAGDev 2.0" 
            className="hero-image"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.className = 'hero-background bg-gradient-to-r from-blue-800 to-green-700';
            }}
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="max-w-3xl">
            <h1 className="hero-title">
              About TAGDev 2.0
            </h1>
            <p className="hero-subtitle">
              Learn about our 10-year initiative, partnerships, and impact at Haramaya University
            </p>
          </div>
        </div>
      </section>

      <AboutContent />
    </Layout>
  );
};

export default AboutPage;