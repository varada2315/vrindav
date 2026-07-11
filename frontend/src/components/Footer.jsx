import React from 'react';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="footer" style={{ padding: '40px 0 30px' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        {/* Footer Top */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} style={{ fontSize: '20px', fontWeight: '800', color: '#ffffff' }}>
            Vrindav<span style={{ color: '#d35400' }}> Enterprises</span>
          </a>
          
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>Home</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('products'); }} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>Products</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>About Us</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('b2b'); }} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>B2B & Exports</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>Contact Us</a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)' }}>
            &copy; 2026 Vrindav Enterprises. All rights reserved. Sourced & Exported under leadership of Parikshit Ramani.
          </div>
          <div className="footer-socials" style={{ display: 'flex', gap: '16px' }}>
            <a 
              href="https://www.linkedin.com/in/parikshit-ramani-4a2a4a405?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link"
              style={{ fontSize: '13px' }}
            >
              LinkedIn
            </a>
            <a 
              href="https://instagram.com/vrindav.enterprises" 
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              style={{ fontSize: '13px' }}
            >
              Instagram
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
