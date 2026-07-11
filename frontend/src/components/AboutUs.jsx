import React from 'react';

const AboutUs = ({ setCurrentPage }) => {
  return (
    <section className="about-section">
      {/* Decorative background leaves/herbs */}
      <img 
        src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-36.png" 
        alt="" 
        className="about-bg-leaf-left"
      />
      <img 
        src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-38.png" 
        alt="" 
        className="about-bg-rosemary-right"
      />
      <div className="container">
        
        {/* Row 1: Title and Large Centered Image */}
        <div className="about-header">
          <h2 className="about-title">About Us</h2>
          <div className="about-image-wrapper">
            <img 
              src="/images/about_bowl.jpg" 
              alt="Artisanal spice jars and scoop bowl" 
              className="about-main-img"
            />
          </div>
        </div>

        {/* Row 2: Shifted Description Text (3/5 Empty, 2/5 Text Column) */}
        <div className="about-details-row">
          <div className="about-empty-col"></div>
          <div className="about-text-col">
            <p className="about-desc">
              Your trusted Supplier of Pure and natural spices. Sourced directly 
              from farmers and hygienically packed, our products deliver the rich 
              aroma, authentic taste, and maximum freshness food businesses demand.
            </p>
            <div className="about-cta-wrapper">
              <button 
                onClick={() => setCurrentPage('about')}
                className="about-cta-btn"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
