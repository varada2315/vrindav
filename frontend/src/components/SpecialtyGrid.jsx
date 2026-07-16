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
    <section className="specialty-section">
      {/* Specialty Category Highlights */}
        {/* Floating abstract herbs */}
        <img
          src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-38.png"
          alt=""
          className="specialty-bg-rosemary"
        />
        <div className="container">
          <div className="specialty-grid">

            {/* Column 1: Tall Card with ground spice background (spans Row 1 & Row 2) */}
            <div 
              className="specialty-tall-card"
              style={{ backgroundImage: `url('/images/card_ground_spices.png')` }}
            >
              <div className="specialty-tall-card-content">
                <Zigzag color="#e5a93b" />
                <h3>Spice<br />Products</h3>
                <button
                  onClick={() => setCurrentPage('products')}
                  className="btn-rect btn-rect-white"
                >
                  Browse
                </button>
              </div>
            </div>

            {/* Column 2, Row 1: Category Card (Blended Masalas) */}
            <div
              className="specialty-img-card specialty-card-masalas"
              style={{ backgroundImage: `url('/images/bowl_chili.png')` }}
              onClick={() => setCurrentPage('products')}
            >
              <div className="specialty-img-card-content">
                <Zigzag color="#e5a93b" />
                <h3>Blended Masalas</h3>
                <button className="btn-rect btn-rect-white">
                  Browse
                </button>
              </div>
            </div>

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

            {/* Column 3, Row 2: Category Card (Dehydrated Food Products) */}
            <div
              className="specialty-img-card specialty-card-dehydrated"
              style={{ backgroundImage: `url('/images/temp_59.png')` }}
              onClick={() => setCurrentPage('products')}
            >
              <div className="specialty-img-card-content">
                <Zigzag color="#e5a93b" />
                <h3>Dehydrated<br />Food Products</h3>
                <button className="btn-rect btn-rect-white">
                  Browse
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

  );
};

export default SpecialtyGrid;
