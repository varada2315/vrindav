import React from 'react';
import { CorianderSketchSVG, BayLeavesSketchSVG, CardamomSketchSVG } from './SpiceSketches';

const trustStandards = [
  {
    id: 'quality',
    title: 'Premium Quality',
    description: 'Carefully sourced raw materials selected for superior color, aroma, purity, and consistency across every batch.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
      </svg>
    )
  },
  {
    id: 'hygiene',
    title: 'Hygienic Processing',
    description: 'Processed in clean, controlled environments following strict hygiene standards to ensure food-safe, pure products.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l5.58-5.58c.94-.94.94-2.48 0-3.42L12 2z" />
        <circle cx="5" cy="5" r="1.5" />
      </svg>
    )
  },
  {
    id: 'partnerships',
    title: 'Long-Term Partnerships',
    description: 'We build lasting B2B relationships built on trust, consistency, and a deep understanding of your business needs.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

const AboutUs = () => {
  return (
    <div id="about-section" className="about-main-wrapper">
      
      {/* SECTION 1: Summary Overview */}
      <section className="about-overview-section">
        {/* Decorative background leaves/herbs */}
        <img
          src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-36.png"
          alt=""
          className="about-bg-leaf-left"
        />
        <img
          src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-38.png"
          alt=""
          className="about-bg-rosemary-right"
        />
        
        <div className="container">
          <div className="about-header-redesign">
            <span className="about-section-tag">Pure Sourcing & Global Export</span>
            <h2 className="about-title-redesign">About Us</h2>
            <div className="about-divider"></div>
          </div>

          <div className="about-overview-grid">
            {/* Left Image Column */}
            <div className="about-overview-image-wrap">
              <img
                src="/images/about_bowl.jpg"
                alt="Artisanal spice jars and scoop bowl"
                className="about-overview-img"
              />
              <div className="about-image-card-badge">
                <span className="badge-title">100% Pure</span>
                <span className="badge-subtitle">Quality Guaranteed</span>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="about-overview-text-wrap">
              <h3 className="about-overview-subtitle">Our Commitment to Absolute Purity</h3>
              <p className="about-overview-desc-p">
                Vrindav Enterprises is your trusted manufacturer and bulk supplier of pure and natural spices. Sourced directly from local farming cooperatives and processed hygienically, our products deliver the rich aroma, authentic taste, and maximum freshness that food brands, wholesale distributors, and food service businesses demand.
              </p>
              
              <div className="about-values-quick-list">
                <div className="quick-value-item">
                  <div className="quick-value-icon-circle green-theme">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 8a7.5 7.5 0 0 1-9 10z" />
                      <path d="M9 22v-4" />
                    </svg>
                  </div>
                  <div className="quick-value-desc-wrap">
                    <h5>Direct Farmgate Sourcing</h5>
                    <p>Securing pure crops directly from farmers to keep pricing and quality consistent.</p>
                  </div>
                </div>

                <div className="quick-value-item">
                  <div className="quick-value-icon-circle gold-theme">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 11 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="quick-value-desc-wrap">
                    <h5>Hygienic Processing</h5>
                    <p>Washed, dehydrated, and ground in clean, temperature-controlled facilities.</p>
                  </div>
                </div>

                <div className="quick-value-item">
                  <div className="quick-value-icon-circle rust-theme">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>
                  <div className="quick-value-desc-wrap">
                    <h5>Global Export Packaging</h5>
                    <p>Vacuumed, moisture-sealed, and bulk packed to ensure peak flavor upon delivery.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: B2B Trust Stats Counter Bar */}
      <section className="about-stats-section">
        <div className="container">
          <div className="about-stats-grid">
            <div className="stat-card">
              <div className="stat-number-wrap">
                <span className="stat-number">50+</span>
              </div>
              <div className="stat-label">Premium Spices & Dehydrated Products</div>
            </div>
            <div className="stat-card">
              <div className="stat-number-wrap">
                <span className="stat-number">100%</span>
              </div>
              <div className="stat-label">Natural, Clean & Chemical-Free</div>
            </div>
            <div className="stat-card">
              <div className="stat-number-wrap">
                <span className="stat-number">11+</span>
              </div>
              <div className="stat-label">Safety & Quality Accreditations</div>
            </div>
            <div className="stat-card">
              <div className="stat-number-wrap">
                <span className="stat-number">24/7</span>
              </div>
              <div className="stat-label">Dedicated Wholesale Logistics Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Journey & Story Section */}
      <section className="decor-container about-story-section">
        <div className="decor-sketch decor-sketch-tl">
          <CorianderSketchSVG />
        </div>
        <img
          src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-38.png"
          alt=""
          className="decor-rosemary decor-rosemary-left"
        />
        <div className="container">
          <div className="about-story-grid">
            <div className="story-text-column">
              <span className="story-section-tag">Established Sourcing Leaders</span>
              <h2 className="story-section-title">Our Journey & Story</h2>
              <div className="story-divider-bar"></div>
              <p className="story-p-desc">
                Vrindav Enterprises is a trusted supplier and exporter of pure and natural spices, committed to delivering high-quality ingredients sourced directly from local farmers. We began with a simple but strong belief: that every kitchen deserves access to the rich aroma, authentic taste, and maximum freshness of unadulterated agro-products. Today, we operate as a professionally managed spices exporter based in Rajnandgaon, Chhattisgarh, with deep roots in agricultural sourcing and modern processing capabilities.
              </p>
              <p className="story-p-desc">
                We process, pack, and export over 50+ premium spices, including blended spices, custom seasoning spices, dehydrated food products, and certified Organic Spices & Herbal Products. Our portfolio has since expanded beyond whole spices to include powdered spices, superfoods, oilseeds, millets, staples, and FMCG goods — supplying global importers, traders, wholesalers, and food brands with reliability and transparency. Our commitment to 100% purity ensures every batch meets rigorous international standards of hygiene, flavor retention, and color consistency.
              </p>
            </div>

            <div className="story-image-column">
              <div className="story-image-wrapper">
                <div className="story-underlay-shape"></div>
                <img
                  src="/images/about_bowl.png"
                  alt="Vrindav Enterprises Spices Sourcing"
                  className="story-featured-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Farm-to-Export Sourcing Journey Stepper */}
      <section className="decor-container about-journey-timeline-section">
        <div className="decor-sketch decor-sketch-tr">
          <CardamomSketchSVG />
        </div>
        <div className="container">
          <div className="journey-header">
            <span className="journey-tag">Quality Process Flow</span>
            <h2 className="journey-title">From Sowing to Shipping</h2>
            <p className="journey-subtitle">Our meticulous step-by-step process ensures premium grade B2B spice supply chains.</p>
            <div className="journey-divider"></div>
          </div>

          <div className="journey-stepper-grid">
            <div className="journey-step-card">
              <div className="step-badge-circle">1</div>
              <h4 className="step-card-title">Direct Sourcing</h4>
              <p className="step-card-desc">Partnering directly with local farming cooperatives across India to procure native, high-grade crops.</p>
            </div>

            <div className="journey-step-card">
              <div className="step-badge-circle">2</div>
              <h4 className="step-card-title">Sorting & Washing</h4>
              <p className="step-card-desc">Advanced mechanical sorting and multi-stage washing to remove soil and foreign elements cleanly.</p>
            </div>

            <div className="journey-step-card">
              <div className="step-badge-circle">3</div>
              <h4 className="step-card-title">Hygienic Drying</h4>
              <p className="step-card-desc">Dehydrated using controlled, low-temperature solar/electrical dryers to preserve volatile essential oils.</p>
            </div>

            <div className="journey-step-card">
              <div className="step-badge-circle">4</div>
              <h4 className="step-card-title">Purity Assay</h4>
              <p className="step-card-desc">Every batch undergoes lab tests to check for chemical residue, moisture levels, color, and aroma strength.</p>
            </div>

            <div className="journey-step-card">
              <div className="step-badge-circle">5</div>
              <h4 className="step-card-title">Sealed Shipping</h4>
              <p className="step-card-desc">Vacuum-sealed, thick-gauge bags packed in export boxes, shipped worldwide via tracked logistics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Mission & Vision Section (Glowing Split Cards with Botanical SVGs) */}
      <section className="decor-container about-mv-section">
        <div className="decor-sketch decor-sketch-tr">
          <BayLeavesSketchSVG />
        </div>
        <img
          src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-36.png"
          alt=""
          className="decor-leaf decor-leaf-right"
        />
        
        <div className="container">
          <div className="about-mv-grid">
            {/* Mission Card */}
            <div className="mv-card-glass mission-card">
              <div className="mv-card-header">
                <div className="mv-card-tag orange-theme">Commitment</div>
                <div className="mv-card-icon-wrap orange-theme">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 11 2 2 4-4" />
                  </svg>
                </div>
              </div>
              <h3 className="mv-card-title">Our Mission</h3>
              <p className="mv-card-p">
                To consistently deliver the purest, highest-quality spices and dehydrated food products using advanced hygienic processing techniques that preserve authentic Indian flavors. We are committed to building long-term, trust-based B2B partnerships with food manufacturers, wholesalers, and retail distributors across India and globally.
              </p>
              <div className="mv-sketch-watermark">
                <CorianderSketchSVG />
              </div>
            </div>

            {/* Vision Card */}
            <div className="mv-card-glass vision-card">
              <div className="mv-card-header">
                <div className="mv-card-tag green-theme">Global Reach</div>
                <div className="mv-card-icon-wrap green-theme">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
              </div>
              <h3 className="mv-card-title">Our Vision</h3>
              <p className="mv-card-p">
                To become a leading name in the global spice manufacturing industry, recognized for unwavering quality standards, innovation, ethical sourcing, and dependable supply solutions that meet the evolving culinary and health needs of food businesses worldwide.
              </p>
              <div className="mv-sketch-watermark">
                <BayLeavesSketchSVG />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Trust Elements Section (Redesigned Grid) */}
      <section className="decor-container about-trust-section">
        <div className="decor-sketch decor-sketch-bl">
          <CardamomSketchSVG />
        </div>
        <img
          src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-37.png"
          alt=""
          className="decor-leaf decor-rosemary-right"
        />
        
        <div className="container">
          <div className="trust-section-header">
            <span className="trust-section-tag">Quality Framework</span>
            <h2 className="trust-section-title">Trust & Quality Standards</h2>
            <p className="trust-section-subtitle">We adhere to strict quality regulations and export-grade processes to protect your supply chain.</p>
            <div className="trust-divider-bar"></div>
          </div>

          <div className="trust-elements-premium-grid">
            {trustStandards.map((item) => (
              <div key={item.id} className="trust-card-premium">
                <div className="trust-card-glow-effect"></div>
                <div className="trust-card-inner">
                  <div className="trust-card-icon-circle">
                    {item.icon}
                  </div>
                  <h4 className="trust-card-title-text">{item.title}</h4>
                  <p className="trust-card-desc-text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Quality Assurance & Certifications */}
      <section className="decor-container about-certs-section">
        <div className="decor-sketch decor-sketch-tl" style={{ opacity: 0.15 }}>
          <CorianderSketchSVG />
        </div>
        <div className="container">
          <div className="certs-section-header">
            <span className="certs-section-tag">Global Accreditations</span>
            <h2 className="certs-section-title">Quality & Certifications</h2>
            <div className="certs-divider-bar"></div>
            <p className="certs-section-subtitle">
              We adhere to the highest international food safety, hygiene, and export standards. Sourced and processed under globally recognized quality benchmarks.
            </p>
          </div>

          <div className="logo-marquee-outer-container">
            <div className="logo-marquee-grid-layout">
              {certs.map((cert) => (
                <div
                  key={cert.id}
                  className="logo-card-hover-redesign"
                  title={`${cert.title} - ${cert.description}`}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="cert-logo-img"
                  />
                  <span className="cert-logo-title">{cert.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
