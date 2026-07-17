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
                <a href="mailto:info@vrindaventerprise.com" className="contact-link">info@vrindaventerprise.com</a>
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
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fec564" />
                      <stop offset="25%" stopColor="#f73859" />
                      <stop offset="50%" stopColor="#d02b7f" />
                      <stop offset="100%" stopColor="#7c37c9" />
                    </linearGradient>
                  </defs>
                  <rect width="24" height="24" rx="5" fill="url(#instagram-gradient)" />
                  <rect x="5" y="5" width="14" height="14" rx="4" stroke="#ffffff" strokeWidth="1.5" fill="none" />
                  <circle cx="12" cy="12" r="3" stroke="#ffffff" strokeWidth="1.5" fill="none" />
                  <circle cx="16" cy="8" r="1" fill="#ffffff" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/parikshit-ramani-4a2a4a405?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn linkedin"
                title="LinkedIn"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="4" fill="#0077b5" />
                  <path d="M19.002 19h-2.923v-4.57c0-1.09-.02-2.493-1.52-2.493-1.52 0-1.753 1.186-1.753 2.414V19H9.883V9.61h2.806v1.282h.039c.39-.74 1.346-1.52 2.768-1.52 2.96 0 3.506 1.948 3.506 4.482V19zM6.883 8.324c-.937 0-1.697-.756-1.697-1.697 0-.939.76-1.697 1.697-1.697.939 0 1.698.758 1.698 1.697 0 .941-.759 1.697-1.698 1.697zM8.344 19H5.422V9.61h2.922V19z" fill="#ffffff"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com/@vrindaventerprises?si=8xPuO6046uu5fSkr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn youtube"
                title="YouTube"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.522 3.543 12 3.543 12 3.543s-7.522 0-9.388.513a3.003 3.003 0 0 0-2.11 2.107C0 8.029 0 12 0 12s0 3.971.502 5.837a3.003 3.003 0 0 0 2.11 2.107c1.866.513 9.388.513 9.388.513s7.522 0 9.388-.513a3.003 3.003 0 0 0 2.11-2.107C24 15.971 24 12 24 12s0-3.971-.502-5.837z" fill="#ff0000" />
                  <polygon points="9.545 15.568 9.545 8.432 15.818 12" fill="#ffffff" />
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
            
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
