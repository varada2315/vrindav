import React from 'react';
import { 
  GingerRootsSVG, 
  ChilliesSVG, 
  CinnamonSticksSVG,
  DriedHerbsSVG,
  WholeSpicesSVG,
  GroundSpicesSVG
} from './SpiceSketches';

const SpiceList = ({ spices }) => {
  // Map sketch keys to the corresponding inline SVG components
  const renderSketch = (key) => {
    switch (key) {
      case 'ginger':
        return <GingerRootsSVG />;
      case 'chilli':
        return <ChilliesSVG />;
      case 'cinnamon':
        return <CinnamonSticksSVG />;
      case 'dried_herbs':
        return <DriedHerbsSVG />;
      case 'whole_spices':
        return <WholeSpicesSVG />;
      case 'ground_spices':
        return <GroundSpicesSVG />;
      default:
        return null;
    }
  };

  return (
    <section className="spice-list-section">
      {/* Floating abstract herbs */}
      <img 
        src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-38.png" 
        alt="" 
        className="spicelist-bg-rosemary"
      />
      <div className="container">
        <div className="spice-list-container">
          {spices.map((spice) => (
            <div key={spice.id} className="spice-row">
              {/* Col 1: Sketch Icon */}
              <div className="spice-sketch-col">
                <div className="spice-sketch-wrapper">
                  {renderSketch(spice.sketchKey)}
                </div>
              </div>
              
              {/* Col 2: Spice Image (Round Circle) */}
              <div className="spice-image-col">
                <div className="spice-img-circle">
                  <img src={spice.image} alt={spice.name} />
                </div>
              </div>
              
              {/* Col 3: Spice Information */}
              <div className="spice-info-col">
                <h3>{spice.name}</h3>
                <p>{spice.description}</p>
                <a href="#" className="view-more-link" onClick={(e) => e.preventDefault()}>Buy Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpiceList;
