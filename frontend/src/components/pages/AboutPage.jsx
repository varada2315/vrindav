import React from 'react';
import { BotanicalBackgroundSVG, CorianderSketchSVG, BayLeavesSketchSVG, CardamomSketchSVG } from '../SpiceSketches';

const trustStandards = [
  {
    id: 'quality',
    title: 'Premium Quality',
    description: 'Carefully sourced raw materials selected for superior color, aroma, purity, and consistency across every batch.',
    highlighted: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
      </svg>
    )
  },
  {
    id: 'hygiene',
    title: 'Hygienic Processing',
    description: 'Processed in clean, controlled environments following strict hygiene standards to ensure food-safe, pure products.',
    highlighted: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2h4" />
        <path d="M12 2v4" />
        <path d="M6 18V9c0-1.85 1.15-3.5 3-4h6c1.85.5 3 2.15 3 4v9a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4z" />
        <circle cx="12" cy="13" r="1.5" />
      </svg>
    )
  },
  {
    id: 'bulk',
    title: 'Bulk Supply Ready',
    description: 'Reliable and scalable bulk supply for wholesalers, distributors, food manufacturers, and restaurant chains.',
    highlighted: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  },
  {
    id: 'pricing',
    title: 'Competitive Pricing',
    description: 'Wholesale pricing structured for long-term business partnerships — giving you the best value without compromising on quality.',
    highlighted: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l5.58-5.58c.94-.94.94-2.48 0-3.42L12 2z" />
        <circle cx="5" cy="5" r="1.5" />
      </svg>
    )
  },
  {
    id: 'partnerships',
    title: 'Long-Term Partnerships',
    description: 'We build lasting B2B relationships built on trust, consistency, and a deep understanding of your business needs.',
    highlighted: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    id: 'delivery',
    title: 'Pan-India Delivery',
    description: 'Efficient logistics and timely delivery across India — ensuring your supply chain never faces disruptions.',
    highlighted: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    )
  },
  {
    id: 'purity',
    title: 'Purity Guaranteed',
    description: 'No artificial colors, fillers, or additives. Every product is 100% natural and tested for purity before dispatch.',
    highlighted: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12" />
        <path d="M12 3v12" />
        <path d="M9 15h6" />
        <path d="M5.5 21h13c.9 0 1.5-.8 1.1-1.6L15 11.2V3H9v8.2L4.4 19.4c-.4.8.2 1.6 1.1 1.6z" />
      </svg>
    )
  },
  {
    id: 'support',
    title: 'Dedicated Support',
    description: 'Responsive B2B support via WhatsApp and email — quick answers on pricing, samples, and order fulfilment.',
    highlighted: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    )
  }
];

const certs = [
  {
    id: 'fssai',
    title: 'FSSAI',
    image: '/images/cert_fssai.png',
    description: 'Food Safety & Standards Authority of India registration for certified food processing.'
  },
  {
    id: 'apeda',
    title: 'APEDA',
    image: '/images/cert_apeda.png',
    description: 'Agricultural & Processed Food Products Export Development Authority certification.'
  },
  {
    id: 'iso',
    title: 'ISO 22000',
    image: '/images/cert_iso.png',
    description: 'Food Safety Management System international compliance certification.'
  },
  {
    id: 'spicesboard',
    title: 'Spices Board India',
    image: '/images/cert_spicesboard.png',
    description: 'Ministry of Commerce & Industry certification for premium quality spice exports.'
  },
  {
    id: 'halal',
    title: 'HALAL Certified',
    image: '/images/cert_halal.png',
    description: 'Global standard compliance certifying products are processed under Halal guidelines.'
  },
  {
    id: 'nongmo',
    title: 'NON GMO Verified',
    image: '/images/cert_nongmo.png',
    description: 'Product verification assuring ingredients are completely free from genetically modified organisms.'
  },
  {
    id: 'haccp',
    title: 'HACCP Certified',
    image: '/images/cert_haccp.png',
    description: 'Hazard Analysis Critical Control Point standard for systemic hazard prevention.'
  },
  {
    id: 'fda',
    title: 'U.S. FDA Registered',
    image: '/images/cert_fda.png',
    description: 'Registration with the United States Food and Drug Administration for import clearance.'
  },
  {
    id: 'ghp',
    title: 'GHP Certified',
    image: '/images/cert_ghp.png',
    description: 'Good Hygiene Practices certification for pristine sanitary manufacturing standards.'
  },
  {
    id: 'gst',
    title: 'GST Registered',
    image: '/images/cert_gst.png',
    description: 'Goods and Services Tax registration under the Government of India for transparent invoicing.'
  },
  {
    id: 'dgft',
    title: 'DGFT (IEC)',
    image: '/images/cert_dgft.png',
    description: 'Directorate General of Foreign Trade registration and Import Export Code (IEC) compliance.'
  }
];

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
          <div className="about-story-grid" style={styles.storyGrid}>
            <div style={styles.storyTextCol}>
              <h2 style={styles.sectionHeader}>Our Journey & Story</h2>
              <div style={styles.accentBar}></div>
              <p style={styles.paragraph}>
                Vrindav Enterprises is a professionally managed spices exporter based in Rajnandgaon, Chhattisgarh, with deep roots in agricultural sourcing and modern processing capabilities. We supply high-quality spices and food products to global importers, traders, wholesalers, and food brands.
              </p>
              <p style={styles.paragraph}>
                Beyond whole spices, our portfolio has grown to include powdered spices, superfoods, oilseeds, millets, staples, and FMCG goods serving global markets with reliability and transparency.
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
          <div className="about-mission-grid" style={styles.missionVisionGrid}>
            
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
            We adhere to strict quality regulations and export-grade processes.
          </p>
          
          <div className="trust-standards-grid">
            {trustStandards.map((item) => (
              <div 
                key={item.id} 
                className={`trust-standard-card${item.highlighted ? ' highlighted' : ''}`}
              >
                <div className="trust-standard-card-icon-wrap">
                  {item.icon}
                </div>
                <h4 className="trust-standard-card-title">{item.title}</h4>
                <p className="trust-standard-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance & Certifications Section */}
      <section className="decor-container" style={{ padding: '80px 0', backgroundColor: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="decor-sketch decor-sketch-tl" style={{ opacity: 0.15 }}>
          <CorianderSketchSVG />
        </div>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={styles.sectionHeader}>Quality & Certifications</h2>
            <div style={{ ...styles.accentBar, margin: '15px auto 25px auto' }}></div>
            <p style={{ ...styles.paragraph, maxWidth: '700px', margin: '0 auto', fontSize: '15px', textAlign: 'center' }}>
              We adhere to the highest international food safety, hygiene, and export standards. Our products undergo rigorous quality checks to ensure compliance with global regulatory frameworks.
            </p>
          </div>
          
          <div className="certs-grid">
            {certs.map((cert) => (
              <div key={cert.id} className="cert-card">
                <div className="cert-image-wrapper">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="cert-img"
                  />
                </div>
                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-desc">{cert.description}</p>
              </div>
            ))}
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
