import React from 'react';

const AboutUs = () => {
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

        {/* Row 2: Brand Values Highlights & Description Text */}
        <div className="about-details-row">
          {/* Left Column: Brand Commitments */}
          <div className="about-values-col">
            <div className="about-value-item">
              <div className="about-value-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="about-value-icon">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="about-value-text">
                <h4 className="about-value-title">Direct Farmgate Sourcing</h4>
                <p className="about-value-desc">Securing pure crops directly from local farming cooperatives.</p>
              </div>
            </div>
            
            <div className="about-value-item">
              <div className="about-value-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="about-value-icon">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="about-value-text">
                <h4 className="about-value-title">Hygienic Processing</h4>
                <p className="about-value-desc">Processed and packed under certified, clean standards.</p>
              </div>
            </div>
            
            <div className="about-value-item">
              <div className="about-value-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="about-value-icon">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="about-value-text">
                <h4 className="about-value-title">Global Export Quality</h4>
                <p className="about-value-desc">Secure, moisture-sealed bulk packaging built for exports.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Description Text */}
          <div className="about-text-col">
            <span className="about-tagline">Our Commitment to Purity</span>
            <p className="about-desc">
              Your trusted Supplier of Pure and natural spices. Sourced directly
              from farmers and hygienically packed, our products deliver the rich
              aroma, authentic taste, and maximum freshness food businesses demand.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
