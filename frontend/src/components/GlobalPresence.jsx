import React from 'react';

const GlobalPresence = () => {
  // Major export target locations for pins (percentage coordinates mapped to generated image)
  const locations = [
    { id: 1, name: 'North America (USA)', x: 20, y: 38, label: 'United States' },
    { id: 2, name: 'North America (Canada)', x: 28, y: 28, label: 'Canada' },
    { id: 3, name: 'South America', x: 31, y: 62, label: 'Brazil' },
    { id: 4, name: 'United Kingdom', x: 48, y: 35, label: 'United Kingdom' },
    { id: 5, name: 'Western Europe', x: 54, y: 39, label: 'Germany / France' },
    { id: 6, name: 'Eastern Europe', x: 58, y: 36, label: 'Poland' },
    { id: 7, name: 'Middle East (Saudi Arabia)', x: 58, y: 48, label: 'Saudi Arabia' },
    { id: 8, name: 'Middle East (UAE)', x: 61, y: 46, label: 'UAE' },
    { id: 9, name: 'Africa (South Africa)', x: 54, y: 62, label: 'South Africa' },
    { id: 10, name: 'East Africa', x: 58, y: 52, label: 'Kenya' },
    { id: 11, name: 'India (Source Hub)', x: 69, y: 46, label: 'India (Sourcing Hub)', isSource: true },
    { id: 12, name: 'Southeast Asia (Singapore)', x: 77, y: 56, label: 'Singapore' },
    { id: 13, name: 'Southeast Asia (Malaysia)', x: 76, y: 54, label: 'Malaysia' },
    { id: 14, name: 'East Asia (Japan)', x: 84, y: 34, label: 'Japan' },
    { id: 15, name: 'Australia', x: 82, y: 66, label: 'Australia' }
  ];

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
            {/* Detailed Dotted World Map Image */}
            <img 
              src="/images/world_map_dots.png" 
              alt="World Map Export Network" 
              className="dotted-world-map-img" 
            />

            {/* Glowing Map Pins */}
            {locations.map((loc) => (
              <div 
                key={loc.id} 
                className={`presence-pin-wrapper ${loc.isSource ? 'source-pin' : ''}`}
                style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                title={loc.name}
              >
                <div className="pin-pulse"></div>
                <div className="pin-dot"></div>
                <span className="pin-tooltip">{loc.label}</span>
              </div>
            ))}
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
