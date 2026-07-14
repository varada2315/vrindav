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
              <div className="about-value-icon-wrapper theme-green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="about-value-icon">
                  <path d="M7 20h10" />
                  <path d="M10 20c5.5-2.5 8-6.4 8-12" />
                  <path d="M12 11.5a14.7 14.7 0 0 0-4.5-3.5 15.5 15.5 0 0 0-1.4 7" />
                  <path d="M12 14c-1.5-2-3.5-3-5.5-3" />
                  <path d="M14 6c-2 0-3.5 1-4.5 2.5" />
                </svg>
              </div>
              <div className="about-value-text">
                <h4 className="about-value-title">Direct Farmgate Sourcing</h4>
                <p className="about-value-desc">Securing pure crops directly from local farming cooperatives.</p>
              </div>
            </div>
            
            <div className="about-value-item">
              <div className="about-value-icon-wrapper theme-gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="about-value-icon">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 11 2 2 4-4" />
                </svg>
              </div>
              <div className="about-value-text">
                <h4 className="about-value-title">Hygienic Processing</h4>
                <p className="about-value-desc">Processed and packed under certified, clean standards.</p>
              </div>
            </div>
            
            <div className="about-value-item">
              <div className="about-value-icon-wrapper theme-rust">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="about-value-icon">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
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
