import React from 'react';

const Hero = ({ setCurrentPage }) => {
  return (
    <section className="hero">
      {/* Absolutely positioned glass jar on the left side of the hero section */}
      <img 
        src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-37.png" 
        alt="Artisanal glass spice jar" 
        className="hero-jar"
      />

      <div className="container">
        <div className="hero-grid">
          
          {/* Left Column: Title, Description & CTA */}
          <div className="hero-content">
            <h1 className="hero-title">
              Spices <span>& Herbs</span>
            </h1>
            <p className="hero-desc">
              Your trusted Supplier & Exporter of Pure and natural spices. 
              We deliver hygienically packed, high-quality agro ingredients sourced directly from farmers.
            </p>
            <div className="hero-cta-wrapper">
              <button 
                onClick={() => setCurrentPage('products')} 
                className="hero-cta-btn"
              >
                Browse All Now
              </button>
            </div>
          </div>
          
          {/* Right Column: Clean Wooden Plate composition */}
          <div className="hero-image-container">
            {/* Center Wooden Plate with Spices (without the small bowl and separate herbs) */}
            <div className="hero-plate-wrapper">
              <img 
                src="/images/hero_wooden_plate_clean_transparent.png" 
                alt="Wooden dish with Indian spices" 
                className="hero-main-plate"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
