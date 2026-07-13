import React from 'react';

const IconGrid = () => {
  const items = [
    { 
      id: 1, 
      label: 'Whole Spices', 
      iconUrl: 'https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-15.png' 
    },
    { 
      id: 2, 
      label: 'Fresh Aromatics', 
      iconUrl: 'https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-17.png' 
    },
    { 
      id: 3, 
      label: 'Dried Herbs', 
      iconUrl: 'https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/06/spice-shop-69.png' 
    },
    { 
      id: 4, 
      label: 'Home & Kitchen', 
      iconUrl: 'https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-22.png' 
    },
    { 
      id: 5, 
      label: 'Ground Spices', 
      iconUrl: 'https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-21.png' 
    },
    { 
      id: 6, 
      label: 'Dried Spices', 
      iconUrl: 'https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-20.png' 
    },
    { 
      id: 7, 
      label: 'Extracts', 
      iconUrl: 'https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-16.png' 
    },
    { 
      id: 8, 
      label: 'Peppers', 
      iconUrl: '/images/peppers_icon.png' 
    }
  ];

  return (
    <section className="icons-section">
      {/* Floating abstract herbs */}
      <img 
        src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-38.png" 
        alt="" 
        className="icons-bg-rosemary"
      />
      <div className="container">
        <div className="icons-grid">
          {items.map(item => (
            <div key={item.id} className="icon-item">
              <div className="icon-wrapper">
                <img 
                  src={item.iconUrl} 
                  alt={item.label} 
                  className="icon-sketch-img"
                />
              </div>
              <span className="icon-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconGrid;
