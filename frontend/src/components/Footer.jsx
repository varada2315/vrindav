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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/parikshit-ramani-4a2a4a405?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn linkedin"
                title="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com/@vrindaventerprises?si=8xPuO6046uu5fSkr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn youtube"
                title="YouTube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.522 3.543 12 3.543 12 3.543s-7.522 0-9.388.513a3.003 3.003 0 0 0-2.11 2.107C0 8.029 0 12 0 12s0 3.971.502 5.837a3.003 3.003 0 0 0 2.11 2.107c1.866.513 9.388.513 9.388.513s7.522 0 9.388-.513a3.003 3.003 0 0 0 2.11-2.107C24 15.971 24 12 24 12s0-3.971-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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
