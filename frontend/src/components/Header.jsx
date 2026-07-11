import React, { useState } from 'react';

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <a href="#" onClick={(e) => handleLinkClick(e, 'home')} className="logo">
          Vrindav<span> Enterprises</span>
        </a>
        
        {/* Menu Overlay */}
        <div 
          className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        <nav>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a 
                href="#" 
                onClick={(e) => handleLinkClick(e, 'home')} 
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => handleLinkClick(e, 'products')} 
                className={`nav-link ${currentPage === 'products' ? 'active' : ''}`}
              >
                Products
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => handleLinkClick(e, 'about')} 
                className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => handleLinkClick(e, 'b2b')} 
                className={`nav-link ${currentPage === 'b2b' ? 'active' : ''}`}
              >
                B2B & Exports
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => handleLinkClick(e, 'contact')} 
                className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu Toggle Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? (
            /* Close Icon (X) */
            <svg viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
