import React from 'react';

const GlobalPresence = () => {
  // Major export target locations for pins (percentage coordinates)
  const locations = [
    { id: 1, name: 'North America (USA)', x: 18, y: 32, label: 'United States' },
    { id: 2, name: 'North America (Canada)', x: 22, y: 22, label: 'Canada' },
    { id: 3, name: 'South America', x: 28, y: 68, label: 'Brazil' },
    { id: 4, name: 'United Kingdom', x: 47, y: 25, label: 'United Kingdom' },
    { id: 5, name: 'Western Europe', x: 50, y: 28, label: 'Germany / France' },
    { id: 6, name: 'Eastern Europe', x: 55, y: 25, label: 'Poland' },
    { id: 7, name: 'Middle East (Saudi Arabia)', x: 58, y: 46, label: 'Saudi Arabia' },
    { id: 8, name: 'Middle East (UAE)', x: 62, y: 48, label: 'UAE' },
    { id: 9, name: 'Africa (South Africa)', x: 56, y: 74, label: 'South Africa' },
    { id: 10, name: 'East Africa', x: 56, y: 56, label: 'Kenya' },
    { id: 11, name: 'India (Source Hub)', x: 68, y: 48, label: 'India (Sourcing Hub)', isSource: true },
    { id: 12, name: 'Southeast Asia (Singapore)', x: 78, y: 62, label: 'Singapore' },
    { id: 13, name: 'Southeast Asia (Malaysia)', x: 76, y: 58, label: 'Malaysia' },
    { id: 14, name: 'East Asia (Japan)', x: 84, y: 35, label: 'Japan' },
    { id: 15, name: 'Australia', x: 86, y: 76, label: 'Australia' }
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
            {/* Dotted World Map SVG */}
            <svg viewBox="0 0 1000 450" className="dotted-world-map-svg" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {/* Dot Grid Pattern */}
                <pattern id="dotGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="3" cy="3" r="1.5" fill="rgba(255, 255, 255, 0.22)" />
                </pattern>
              </defs>

              {/* Simplified Continent Paths filled with dotGrid pattern */}
              {/* North America */}
              <path 
                d="M 60 120 Q 80 80 150 70 T 260 90 T 280 140 T 260 220 T 170 240 T 140 180 T 110 180 T 60 120 Z" 
                fill="url(#dotGrid)" 
              />
              <path 
                d="M 120 40 Q 180 30 220 50 T 280 50 Z" 
                fill="url(#dotGrid)" 
              />
              {/* South America */}
              <path 
                d="M 200 240 Q 230 260 250 300 T 270 380 T 230 420 T 200 340 T 180 270 T 200 240 Z" 
                fill="url(#dotGrid)" 
              />
              {/* Greenland */}
              <path 
                d="M 330 30 Q 380 40 370 70 T 320 80 Z" 
                fill="url(#dotGrid)" 
              />
              {/* Africa */}
              <path 
                d="M 460 200 Q 520 180 580 230 T 580 320 T 540 390 T 490 320 T 450 250 T 460 200 Z" 
                fill="url(#dotGrid)" 
              />
              {/* Eurasia */}
              <path 
                d="M 460 180 Q 480 120 560 80 T 700 80 T 840 90 T 860 150 T 880 220 T 800 280 T 740 230 T 680 250 T 600 200 T 460 180 Z" 
                fill="url(#dotGrid)" 
              />
              {/* Great Britain & Iceland */}
              <path d="M 440 95 r 8" fill="url(#dotGrid)" />
              <path d="M 465 110 r 10" fill="url(#dotGrid)" />
              {/* Japan */}
              <path 
                d="M 850 130 Q 860 150 855 180" 
                stroke="rgba(255, 255, 255, 0.25)" 
                strokeWidth="6" 
                strokeLinecap="round" 
                fill="none" 
              />
              {/* Indonesia / SE Asia Islands */}
              <path 
                d="M 720 280 Q 770 290 810 300" 
                stroke="rgba(255, 255, 255, 0.25)" 
                strokeWidth="5" 
                strokeLinecap="round" 
                fill="none" 
              />
              {/* Australia */}
              <path 
                d="M 780 340 Q 840 330 870 360 T 820 410 T 770 370 T 780 340 Z" 
                fill="url(#dotGrid)" 
              />
            </svg>

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
