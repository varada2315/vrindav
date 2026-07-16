import React from 'react';

const GlobalPresence = () => {
  return (
    <section className="global-presence-section" id="global-presence">
      <div className="container">
        {/* Section Header */}
        <div className="presence-header">
          <span className="presence-tag">Global Export Distribution</span>
          <h2 className="presence-title">Vintage Values, Tomorrow's Technology, Global Presence</h2>
          <div className="presence-divider"></div>
        </div>

        {/* Map Container */}
        <div className="presence-map-wrapper">
          <div className="presence-map-container">
            {/* Detailed Dotted World Map Image with baked pins */}
            <img 
              src="/images/world_map_baked.png" 
              alt="World Map Export Network" 
              className="dotted-world-map-img" 
            />
          </div>
        </div>

        {/* Serving Countries Footer Block */}
        <div className="presence-footer-badge">
          <span className="serving-text">Serving</span>
          <span className="serving-number">15+</span>
          <span className="serving-countries-text">Countries</span>
          <div className="serving-globe-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="serving-globe-icon">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
