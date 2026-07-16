import React from 'react';

const Footer = ({ setCurrentPage }) => {
  const handleLinkClick = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  return (
    <footer className="footer">
      <div className="container">
        
        {/* Footer Top Grid */}
        <div className="footer-grid">
          
          {/* Column 1: Brand Info */}
          <div className="footer-col brand-col">
            <a href="#" onClick={(e) => handleLinkClick(e, 'home')} className="footer-logo">
              Vrindav<span> Enterprises</span>
            </a>
            <p className="footer-brand-desc">
              VRINDAV ENTERPRISES is a leading manufacturer and bulk supplier of premium quality spice powders, blended masalas, seasoning spices, and dehydrated food products.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="footer-col links-col">
            <h4 className="footer-col-title">Quick links</h4>
            <ul className="footer-links-list">
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'home')}>Home</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'about')}>About Us</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'products')}>Products</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'b2b')}>B2B & Exports</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'contact')}>Contact Us</a></li>
            </ul>
          </div>
          
          {/* Column 3: Products */}
          <div className="footer-col links-col">
            <h4 className="footer-col-title">Products</h4>
            <ul className="footer-links-list">
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'products')}>SPICE PRODUCT</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'products')}>BLENDED SPICES</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'products')}>DEHYDRATED FOOD PRODUCTS</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'products')}>SEASONING SPICES</a></li>
            </ul>
          </div>
          
          {/* Column 4: Contact Info */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Contact Information</h4>
            <ul className="footer-contact-list">
              <li className="contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:7647096525" className="contact-link">7647096525</a>
              </li>
              <li className="contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:vrindaventerprises.156@gmail.com" className="contact-link">vrindaventerprises.156@gmail.com</a>
              </li>
              <li className="contact-item align-start">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon mt-1">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="contact-text">
                  NEAR RAIPUR NAKA, G. E. ROAD RAJNANDGAON CHHATTISGARH INDIA
                </span>
              </li>
            </ul>
            
            {/* Social Media Links with SVG Icons */}
            <div className="footer-social-icons">
              <a 
                href="https://www.instagram.com/vrindav.enterprises?igsh=bDhhM3VwMHo1MjNo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn instagram"
                title="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/parikshit-ramani-4a2a4a405?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn linkedin"
                title="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="https://youtube.com/@vrindaventerprises?si=8xPuO6046uu5fSkr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn youtube"
                title="YouTube"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2a29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
          
        </div>
        
        {/* Footer Bottom Row */}
        <div className="footer-bottom-row">
          <p className="copyright-text">
            &copy; 2026 Vrindav Enterprises. All Rights Reserved. Sourced & Exported under leadership of Parikshit Ramani.
          </p>
          <p className="credit-text">
            Website designed by Globalb2bmart.com
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
