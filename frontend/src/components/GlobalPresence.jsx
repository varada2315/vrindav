import React from 'react';

const GlobalPresence = () => {
  // Major export target locations and India sourcing hub with label alignments
  const locations = [
    { id: 1, name: 'Canada', x: 25, y: 22, label: 'Canada', labelAlign: 'top' },
    { id: 2, name: 'United States', x: 20, y: 36, label: 'United States', labelAlign: 'left' },
    { id: 3, name: 'Brazil', x: 33, y: 66, label: 'Brazil', labelAlign: 'right' },
    { id: 4, name: 'United Kingdom', x: 48, y: 28, label: 'UK', labelAlign: 'left-top' },
    { id: 5, name: 'Netherlands', x: 50.5, y: 28, label: 'Netherlands', labelAlign: 'top' },
    { id: 6, name: 'Germany', x: 52, y: 29, label: 'Germany', labelAlign: 'right-top' },
    { id: 7, name: 'France', x: 50, y: 32, label: 'France', labelAlign: 'left-bottom' },
    { id: 8, name: 'Italy', x: 52.5, y: 34.5, label: 'Italy', labelAlign: 'bottom' },
    { id: 9, name: 'Saudi Arabia', x: 59, y: 47, label: 'Saudi Arabia', labelAlign: 'left' },
    { id: 10, name: 'UAE', x: 61.5, y: 47.5, label: 'UAE', labelAlign: 'right' },
    { id: 11, name: 'South Africa', x: 55, y: 78, label: 'South Africa', labelAlign: 'bottom' },
    { id: 12, name: 'Kenya', x: 58, y: 57, label: 'Kenya', labelAlign: 'right' },
    { id: 13, name: 'Tanzania', x: 58, y: 61, label: 'Tanzania', labelAlign: 'bottom' },
    { id: 14, name: 'India', x: 68.5, y: 48.5, label: 'India', isSource: true, labelAlign: 'top' },
    { id: 15, name: 'China', x: 77, y: 39, label: 'China', labelAlign: 'top' },
    { id: 16, name: 'Japan', x: 85.5, y: 35, label: 'Japan', labelAlign: 'right' },
    { id: 17, name: 'Vietnam', x: 77.5, y: 51.5, label: 'Vietnam', labelAlign: 'right' },
    { id: 18, name: 'Malaysia', x: 76.5, y: 57.5, label: 'Malaysia', labelAlign: 'left' },
    { id: 19, name: 'Singapore', x: 77, y: 60.5, label: 'Singapore', labelAlign: 'right' },
    { id: 20, name: 'Indonesia', x: 79.5, y: 62.5, label: 'Indonesia', labelAlign: 'bottom' },
    { id: 21, name: 'Australia', x: 85.5, y: 76.5, label: 'Australia', labelAlign: 'top' }
  ];

  const getLabelStyle = (align) => {
    const base = {
      position: 'absolute',
      fontSize: '9px',
      fontWeight: '700',
      color: '#e2e8f0',
      textShadow: '0 1px 3px rgba(0,0,0,0.95), 0 0 2px rgba(0,0,0,0.95)',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      fontFamily: 'var(--font-sans)',
      letterSpacing: '0.4px',
      transition: 'color 0.3s ease, transform 0.3s ease'
    };

    switch (align) {
      case 'top':
        return { ...base, bottom: '16px', left: '50%', transform: 'translateX(-50%)' };
      case 'bottom':
        return { ...base, top: '16px', left: '50%', transform: 'translateX(-50%)' };
      case 'left':
        return { ...base, right: '16px', top: '50%', transform: 'translateY(-50%)' };
      case 'right':
        return { ...base, left: '16px', top: '50%', transform: 'translateY(-50%)' };
      case 'left-top':
        return { ...base, right: '12px', bottom: '12px' };
      case 'right-top':
        return { ...base, left: '12px', bottom: '12px' };
      case 'left-bottom':
        return { ...base, right: '12px', top: '12px' };
      case 'right-bottom':
        return { ...base, left: '12px', top: '12px' };
      default:
        return { ...base, top: '16px', left: '50%', transform: 'translateX(-50%)' };
    }
  };

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
            {/* Detailed Dotted World Map Image (Clean Background) */}
            <img 
              src="/images/world_map_clean.png" 
              alt="World Map Export Network" 
              className="dotted-world-map-img" 
            />

            {/* Glowing Map Pins */}
            {locations.map((loc) => (
              <div 
                key={loc.id} 
                className={`presence-pin-wrapper ${loc.isSource ? 'source-pin' : ''}`}
                style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
              >
                <div className="pin-pulse"></div>
                <div className="pin-dot"></div>
                <span className="pin-label-text" style={getLabelStyle(loc.labelAlign)}>
                  {loc.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Serving Countries Footer Block */}
        <div className="presence-footer-badge" style={{ marginTop: '40px' }}>
          <span className="serving-text">Serving</span>
          <span className="serving-number">20+</span>
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
