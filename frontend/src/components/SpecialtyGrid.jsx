import React from 'react';

// Custom inline SVG Zigzag component matching the live demo design element
const Zigzag = ({ color }) => (
  <svg 
    width="32" 
    height="8" 
    viewBox="0 0 32 8" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    style={{ marginBottom: '16px', display: 'block' }}
  >
    <path 
      d="M1 6.5L6.2 1.5L11.4 6.5L16.6 1.5L21.8 6.5L27 1.5L31 5.5" 
      stroke={color} 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const SpecialtyGrid = ({ setCurrentPage }) => {
  return (
    <>
      {/* SECTION 1: Specialty Category Highlights */}
      <section className="specialty-section">
        {/* Floating abstract herbs */}
        <img 
          src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-38.png" 
          alt="" 
          className="specialty-bg-rosemary"
        />
        <div className="container">
          <div className="specialty-grid">
            
            {/* Column 1: Tall Card with ground spice background (spans Row 1 & Row 2) */}
            <div className="specialty-tall-card">
              <div className="specialty-tall-card-content">
                <Zigzag color="#e5a93b" />
                <h3>Whole &<br />Ground Spices</h3>
                <button 
                  onClick={() => setCurrentPage('products')} 
                  className="btn-rect btn-rect-white"
                >
                  Browse
                </button>
              </div>
            </div>

            {/* Column 2, Row 1: Image Card (Rosemary on Slate) */}
            <div 
              className="specialty-img-card specialty-card-rosemary" 
              style={{ backgroundImage: `url('https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-06.jpg')` }}
            ></div>

            {/* Column 3, Row 1: Text Card (50+ Spice Varieties) */}
            <div className="specialty-text-card specialty-card-recipes">
              <Zigzag color="#e5a93b" />
              <h3>50+ Spice Varieties</h3>
              <p>
                Over 50+ premium spice powders, blended spices, seasonings, and dehydrated products.
              </p>
              <button 
                onClick={() => setCurrentPage('products')} 
                className="btn-rect btn-rect-yellow"
              >
                Browse
              </button>
            </div>

            {/* Column 2, Row 2: Text Card (Organic) */}
            <div className="specialty-text-card specialty-card-organic">
              <Zigzag color="#6c8c4c" />
              <h3>Organic & Herbal</h3>
              <p>
                100% pure organic spices and herbal products verified free of pesticides and chemicals.
              </p>
              <button 
                onClick={() => setCurrentPage('products')} 
                className="btn-rect btn-rect-green"
              >
                Shop
              </button>
            </div>

            {/* Column 3, Row 2: Image Card (Metal Spice Tin) */}
            <div 
              className="specialty-img-card specialty-card-tin" 
              style={{ backgroundImage: `url('https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-05.jpg')` }}
            ></div>

          </div>
        </div>
      </section>

      {/* SECTION 2: B2B Sourcing & Global Exports Banners */}
      <section className="banners-section">
        {/* Floating abstract herbs */}
        <img 
          src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-36.png" 
          alt="" 
          className="banners-bg-leaf"
        />
        <div className="container">
          <div className="banners-grid">
            
            {/* Left Card: B2B Agro Sourcing (Solid Terracotta background) */}
            <div className="banner-card banner-card-club">
              <div className="banner-card-content">
                <Zigzag color="#ffffff" />
                <h3>B2B Agro Sourcing</h3>
                <p>
                  Consistently delivering the purest ingredients processed using advanced hygienic techniques.
                </p>
                <button 
                  onClick={() => setCurrentPage('contact')} 
                  className="btn-rect btn-rect-black"
                >
                  Inquire Now
                </button>
              </div>
            </div>

            {/* Right Card: Global Exports (Spice background image) */}
            <div className="banner-card banner-card-offer">
              <div className="banner-card-content">
                <Zigzag color="#ffffff" />
                <h3>Global Exports</h3>
                <p>
                  Committed to building long-term, trust-based partnerships with B2B clients worldwide.
                </p>
                <button 
                  onClick={() => setCurrentPage('products')} 
                  className="btn-rect btn-rect-white"
                >
                  Get Quotes
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialtyGrid;
