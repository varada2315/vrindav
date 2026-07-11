import React from 'react';

const OurSpices = () => {
  return (
    <section className="circle-section">
      {/* Floating abstract herbs */}
      <img 
        src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-36.png" 
        alt="" 
        className="circle-bg-leaf"
      />
      <div className="container">
        
        {/* Row 1: Top centered bowl */}
        <div className="circle-row-top">
          <div className="circle-image-top-wrap">
            <img 
              src="/images/our_spices_bowl_top.png" 
              alt="Oregano Bowl" 
              className="circle-bowl-top-img"
            />
          </div>
        </div>

        {/* Row 2: Bottom layout (Left Bowl + Right Content) */}
        <div className="circle-row-bottom">
          <div className="circle-col-left">
            <div className="circle-image-bottom-wrap">
              <img 
                src="/images/our_spices_bowl_bottom.png" 
                alt="Salt Bowl" 
                className="circle-bowl-bottom-img"
              />
            </div>
          </div>
          
          <div className="circle-col-right">
            <div className="circle-text-content">
              <h2>Our<br />Spices</h2>
              <p>
                We offer a wide range of over 50+ spice powders, blended spices, 
                seasoning spices, dehydrated food products, and Organic Spices & Herbal Products. 
                Our commitment to delivering 100% pure agro products ensures every batch meets 
                high standards of purity and flavor.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurSpices;

