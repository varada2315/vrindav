import React from 'react';

const PromoGrid = () => {
  return (
    <section className="promo-section">
      <div className="container">
        <div className="promo-grid">
          
          {/* Card 1: Whole & Ground Spices (Tall, Spans 2 Rows) */}
          <div className="promo-card-1">
            <div 
              className="card-bg" 
              style={{ backgroundImage: `url('/images/card_ground_spices.png')` }}
            ></div>
            <div className="card-overlay">
              <h3>Whole &<br />Ground Spices</h3>
              <a href="#" className="btn-link" style={{ color: '#ffffff', borderBottom: '2px solid #ffffff', paddingBottom: '2px', display: 'inline-block', width: 'fit-content' }}>
                Shop Now
              </a>
            </div>
          </div>
          
          {/* Card 2: Small Image-only Card */}
          <div className="promo-card-2">
            <img src="/images/card_pink_salt.png" alt="Pink Himalayan Salt and Rosemary" />
          </div>
          
          {/* Card 3: Our Services */}
          <div className="promo-card-3">
            <div>
              <div className="card-tag-gold">Services</div>
              <h3>Our Services</h3>
              <p>We pride ourselves in fast international shipping, premium aroma-sealed packaging, and 100% organic certification for all herbs.</p>
            </div>
            <a href="#" className="btn-small-gold">
              Read More &rarr;
            </a>
          </div>
          
          {/* Card 4: Organic Spice (Horizontal layout) */}
          <div className="promo-card-4">
            <div className="card-content">
              <div className="card-tag-green">Fresh</div>
              <h3>Organic & Fresh</h3>
              <p>Direct from local organic farming co-ops. Hand-milled to preserve essential oils.</p>
              <a href="#" className="btn-green">Shop</a>
            </div>
            <div 
              className="card-image" 
              style={{ backgroundImage: `url('/images/card_organic.png')` }}
            ></div>
          </div>
          
          {/* Card 5: Spice Subscription Club */}
          <div className="promo-card-5">
            <div className="card-tag-white">Join the Family</div>
            <h3>Spice Subscription Club</h3>
            <p>Get a monthly curated box of rare, exotic whole spices and custom hand-blended seasonings from different cuisines, complete with recipe cards.</p>
            <a href="#" className="btn-black">Join Now</a>
          </div>
          
          {/* Card 6: 10% Off */}
          <div className="promo-card-6">
            <div 
              className="card-bg" 
              style={{ backgroundImage: `url('/images/card_discount.png')` }}
            ></div>
            <div className="card-overlay">
              <div className="card-tag-white">Special Offer</div>
              <h3>10% Off</h3>
              <p>On your first order today.</p>
              <a href="#" className="btn-white">Get Code</a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PromoGrid;
