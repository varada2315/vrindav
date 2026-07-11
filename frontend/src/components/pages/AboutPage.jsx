import React from 'react';
import { BotanicalBackgroundSVG, CorianderSketchSVG, BayLeavesSketchSVG, CardamomSketchSVG } from '../SpiceSketches';

const AboutPage = ({ setCurrentPage }) => {
  return (
    <div className="about-page-container" style={{ paddingTop: '0px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      
      {/* Subpage Hero Header Section */}
      <section className="about-hero-section">
        <div className="container about-hero-container">
          <div className="about-hero-grid">
            
            {/* Left Column: Content */}
            <div className="about-hero-content-col">
              <img 
                src="/images/about_hero_zigzag_small.png" 
                alt="" 
                className="about-hero-zigzag-small"
              />
              <h1 className="about-hero-heading">About Us</h1>
              <p className="about-hero-description">
                Your trusted Supplier and Exporter of Pure, Natural Spices & Herbal Products. 
                Sourced directly from farmers and hygienically packed, our ingredients ensure 
                maximum aroma, authentic flavor, and export-grade purity.
              </p>
              <div className="about-hero-btn-wrap">
                <button 
                  onClick={() => setCurrentPage('contact')} 
                  className="about-hero-btn"
                >
                  Contact Us
                </button>
              </div>
            </div>
            
            {/* Right Column: Large Zigzag overlay */}
            <div className="about-hero-image-col">
              <img 
                src="/images/about_hero_bowls.png" 
                alt="" 
                className="about-hero-zigzag-large"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="decor-container" style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)' }}>
        <div className="decor-sketch decor-sketch-tl">
          <CorianderSketchSVG />
        </div>
        <img 
          src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-38.png" 
          alt="" 
          className="decor-rosemary decor-rosemary-left"
        />
        <div className="container">
          <div style={styles.storyGrid}>
            <div style={styles.storyTextCol}>
              <h2 style={styles.sectionHeader}>Our Journey & Story</h2>
              <div style={styles.accentBar}></div>
              <p style={styles.paragraph}>
                Vrindav Enterprises is a trusted supplier and exporter of pure and natural spices, committed to delivering high-quality ingredients sourced directly from local farmers. Under the leadership of Parikshit Ramani, we began with a simple but strong belief: that every kitchen deserves access to the rich aroma, authentic taste, and maximum freshness of unadulterated agro-products.
              </p>
              <p style={styles.paragraph}>
                We process, pack, and export a wide range of over 50+ premium spices, including blended spices, custom seasoning spices, dehydrated food products, and certified Organic Spices & Herbal Products. Our commitment to 100% purity ensures that every batch meets rigorous international standards of hygiene, flavor retention, and color consistency.
              </p>
            </div>
            
            <div style={styles.storyImageCol}>
              <div style={styles.imageOverlayContainer}>
                <div style={styles.yellowShapeUnderlay}></div>
                <img 
                  src="/images/about_bowl.png" 
                  alt="Vrindav Enterprises Spices Sourcing" 
                  style={styles.storyImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="decor-container" style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)' }}>
        <div className="decor-sketch decor-sketch-tr">
          <BayLeavesSketchSVG />
        </div>
        <img 
          src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-36.png" 
          alt="" 
          className="decor-leaf decor-leaf-right"
        />
        <div className="container">
          <div style={styles.missionVisionGrid}>
            
            {/* Mission Card */}
            <div className="promo-card-3" style={styles.mvCard}>
              <div className="card-tag-gold" style={{ color: '#d35400' }}>Commitment</div>
              <h3 style={{ fontSize: '24px', margin: '15px 0' }}>Our Mission</h3>
              <p style={{ fontSize: '15px', color: '#55555d', lineHeight: '1.7' }}>
                To consistently deliver the purest, highest-quality spices and dehydrated food products using advanced hygienic processing techniques that preserve authentic Indian flavors. We are committed to building long-term, trust-based B2B partnerships with food manufacturers, wholesalers, and retail distributors across India and globally.
              </p>
            </div>

            {/* Vision Card */}
            <div className="promo-card-3" style={{ ...styles.mvCard, borderTopColor: '#27ae60' }}>
              <div className="card-tag-green" style={{ color: '#27ae60' }}>Global Reach</div>
              <h3 style={{ fontSize: '24px', margin: '15px 0' }}>Our Vision</h3>
              <p style={{ fontSize: '15px', color: '#55555d', lineHeight: '1.7' }}>
                To become a leading name in the global spice manufacturing industry, recognized for unwavering quality standards, innovation, ethical sourcing, and dependable supply solutions that meet the evolving culinary and health needs of food businesses worldwide.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Elements Section */}
      <section className="decor-container" style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="decor-sketch decor-sketch-bl">
          <CardamomSketchSVG />
        </div>
        <img 
          src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-37.png" 
          alt="" 
          className="decor-leaf decor-rosemary-right"
        />
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '10px' }}>Trust & Quality Standards</h2>
          <p style={{ color: '#55555d', marginBottom: '50px', maxWidth: '600px', margin: '0 auto 50px' }}>
            We adhere to strict quality regulations to ensure export-grade quality.
          </p>
          
          <div style={styles.badgesGrid}>
            <div style={styles.badgeItem}>
              <div style={styles.badgeIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-rust)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h4 style={styles.badgeTitle}>Hygienically Packed</h4>
              <p style={styles.badgeDesc}>Modern vacuum-sealed packing processes to lock in absolute fresh aroma.</p>
            </div>
            <div style={styles.badgeItem}>
              <div style={styles.badgeIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 8a7.5 7.5 0 0 1-9 10z" />
                  <path d="M19 2c-2.26 4.33-5.27 7.14-8 10" />
                </svg>
              </div>
              <h4 style={styles.badgeTitle}>100% Pure & Natural</h4>
              <p style={styles.badgeDesc}>Direct farmer sourcing with zero chemical additives or artificial coloring agents.</p>
            </div>
            <div style={styles.badgeItem}>
              <div style={styles.badgeIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h4 style={styles.badgeTitle}>Certifications</h4>
              <p style={styles.badgeDesc}>Fully compliant with ISO, FSSAI, and Spices Board standards for exports.</p>
            </div>
            <div style={styles.badgeItem}>
              <div style={styles.badgeIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-navy-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h4 style={styles.badgeTitle}>B2B Global Exporter</h4>
              <p style={styles.badgeDesc}>Dependable container logistics supplying bulk food wholesalers internationally.</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

const styles = {
  subpageHero: {
    position: 'relative',
    padding: '80px 0 100px',
    backgroundColor: 'var(--bg-primary)',
    overflow: 'hidden'
  },
  subpageHeroBg: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '35%',
    height: '100%',
    backgroundColor: '#0f172a',
    clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)',
    borderWrap: '0 0 0 60%',
    zIndex: 1
  },
  subpageTitle: {
    fontSize: '56px',
    fontWeight: '800',
    color: '#111116',
    lineHeight: '1.1',
    marginBottom: '15px'
  },
  subpageSubtitle: {
    fontSize: '18px',
    color: '#55555d',
    maxWidth: '650px',
    lineHeight: '1.6'
  },
  storyGrid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '60px',
    alignItems: 'center'
  },
  storyTextCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  sectionHeader: {
    fontSize: '36px',
    fontWeight: '800',
    color: '#111116',
    marginBottom: '12px'
  },
  accentBar: {
    width: '60px',
    height: '4px',
    backgroundColor: '#d35400',
    marginBottom: '24px'
  },
  paragraph: {
    fontSize: '15px',
    color: '#55555d',
    lineHeight: '1.8',
    marginBottom: '20px'
  },
  storyImageCol: {
    display: 'flex',
    justifyContent: 'center'
  },
  imageOverlayContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '380px'
  },
  yellowShapeUnderlay: {
    position: 'absolute',
    top: '30px',
    left: '-30px',
    width: '100%',
    height: '100%',
    backgroundColor: '#ffd200',
    borderRadius: '40px 10px 40px 10px',
    zIndex: 1,
    opacity: 0.8
  },
  storyImg: {
    position: 'relative',
    width: '100%',
    borderRadius: '16px',
    zIndex: 2,
    filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.1))'
  },
  missionVisionGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px'
  },
  mvCard: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '50px 40px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
    borderTop: '5px solid #d35400',
    height: 'auto'
  },
  badgesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '30px'
  },
  badgeItem: {
    backgroundColor: '#faf8f5',
    borderRadius: '16px',
    padding: '30px 20px',
    textAlign: 'center',
    transition: 'all 0.3s ease'
  },
  badgeIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px',
    marginBottom: '15px'
  },
  badgeTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#111116',
    marginBottom: '10px'
  },
  badgeDesc: {
    fontSize: '13px',
    color: '#55555d',
    lineHeight: '1.5'
  }
};

export default AboutPage;
