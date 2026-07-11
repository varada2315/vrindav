import React, { useState } from 'react';
import { BotanicalBackgroundSVG, CorianderSketchSVG, CardamomSketchSVG } from '../SpiceSketches';

const B2bPage = () => {
  const [b2bForm, setB2bForm] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    productOfInterest: '',
    volume: '',
    requirements: ''
  });
  const [status, setStatus] = useState({ success: false, loading: false });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setB2bForm({ ...b2bForm, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: false, loading: true });

    const payload = {
      name: b2bForm.contactPerson,
      email: b2bForm.email,
      phone: b2bForm.phone || `Volume: ${b2bForm.volume}`,
      message: `B2B Wholesale Inquiry: Company: ${b2bForm.companyName}. Product: ${b2bForm.productOfInterest}. Target Volume: ${b2bForm.volume}. Spec: ${b2bForm.requirements}`
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus({ success: true, loading: false });
        setB2bForm({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          productOfInterest: '',
          volume: '',
          requirements: ''
        });
        setTimeout(() => setStatus({ success: false, loading: false }), 4000);
      } else {
        setStatus({ success: false, loading: false });
        alert('Failed to submit bulk request.');
      }
    } catch (err) {
      setStatus({ success: false, loading: false });
      alert('Error connecting to backend.');
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* Subpage Hero Header Section */}
      <section className="b2b-hero-banner-section">
        <div className="b2b-hero-banner-content">
          <img 
            src="/images/about_hero_zigzag_small.png" 
            alt="" 
            className="b2b-hero-banner-zigzag"
          />
          <span className="b2b-hero-banner-subtitle">Export & Wholesale</span>
          <h1 className="b2b-hero-banner-title">B2B & Exports</h1>
          <p className="b2b-hero-banner-desc">
            Vrindav Enterprises supplies premium, pesticide-free bulk spices and dehydrated agro products globally with guaranteed supply consistency.
          </p>
          <div>
            <button 
              onClick={() => {
                document.getElementById('b2b-quote-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="b2b-hero-banner-btn"
            >
              Request Quote
            </button>
          </div>
        </div>
      </section>

      {/* Sourcing & Quality Strengths */}
      <section className="decor-container" style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)' }}>
        <div className="decor-sketch decor-sketch-tl">
          <CorianderSketchSVG />
        </div>
        <img 
          src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-38.png" 
          alt="" 
          className="decor-rosemary decor-rosemary-left"
        />
        <img 
          src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-36.png" 
          alt="" 
          className="decor-leaf decor-leaf-right"
        />
        <div className="container">
          <div className="b2b-grid-row">
            
            <div style={styles.textCol}>
              <h2 style={styles.sectionHeader}>Why Partner with Vrindav Enterprises?</h2>
              <div style={styles.accentBar}></div>
              
              <div style={styles.strengthItem}>
                <span style={styles.strengthNum}>01</span>
                <div>
                  <h4 style={styles.strengthTitle}>Direct Sourcing from Farmers</h4>
                  <p style={styles.strengthText}>By eliminating middlemen, we guarantee that our spices are harvested at peak maturity and delivered directly, preserving their natural oils, color intensity, and robust flavor.</p>
                </div>
              </div>

              <div style={styles.strengthItem}>
                <span style={styles.strengthNum}>02</span>
                <div>
                  <h4 style={styles.strengthTitle}>Advanced Hygienic Processing</h4>
                  <p style={styles.strengthText}>Our production lines operate under strict GMP guidelines. All cleaning, grading, grinding, and blending are done using advanced machinery to keep human contact at absolute zero.</p>
                </div>
              </div>

              <div style={styles.strengthItem}>
                <span style={styles.strengthNum}>03</span>
                <div>
                  <h4 style={styles.strengthTitle}>Aroma-Lock Bulk Packaging</h4>
                  <p style={styles.strengthText}>We supply in multi-layered, vacuum-sealed kraft bags, HDPE bags, and food-grade drums, designed specifically to guard against moisture, light, and flavor dissipation during ocean shipping.</p>
                </div>
              </div>
            </div>

            <div id="b2b-quote-form" style={styles.formCol}>
              <div style={styles.formCard}>
                <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px', color: '#111116' }}>Bulk Quote Request</h3>
                <p style={{ fontSize: '13px', color: '#666', marginBottom: '20px' }}>Fill out the form below to receive a custom commercial quotation.</p>

                {status.success ? (
                  <div style={styles.successBox}>
                    <span style={{ fontSize: '24px' }}>✓</span>
                    <p>Thank you! Your quote request has been recorded. Our export division will send the CIF/FOB pricing within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} style={styles.form}>
                    <div style={styles.formRow}>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>Company Name</label>
                        <input
                          type="text"
                          name="companyName"
                          value={b2bForm.companyName}
                          onChange={handleInputChange}
                          style={styles.input}
                          placeholder="Food Brand Ltd"
                          required
                        />
                      </div>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>Contact Name</label>
                        <input
                          type="text"
                          name="contactPerson"
                          value={b2bForm.contactPerson}
                          onChange={handleInputChange}
                          style={styles.input}
                          placeholder="Parikshit Ramani"
                          required
                        />
                      </div>
                    </div>

                    <div style={styles.formRow}>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>Work Email</label>
                        <input
                          type="email"
                          name="email"
                          value={b2bForm.email}
                          onChange={handleInputChange}
                          style={styles.input}
                          placeholder="purchase@foodbrand.com"
                          required
                        />
                      </div>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={b2bForm.phone}
                          onChange={handleInputChange}
                          style={styles.input}
                          placeholder="+91 76470 96525"
                          required
                        />
                      </div>
                    </div>

                    <div style={styles.formRow}>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>Product Required</label>
                        <select
                          name="productOfInterest"
                          value={b2bForm.productOfInterest}
                          onChange={handleInputChange}
                          style={styles.select}
                          required
                        >
                          <option value="">Select a Product Category</option>
                          <option value="Natural Spices & Herbal Products">Natural Spices & Herbal Products</option>
                          <option value="Seasoning & Blended Spices">Seasoning & Blended Spices</option>
                          <option value="Dehydrated Products">Dehydrated Products</option>
                          <option value="Organic Products">Organic Products</option>
                        </select>
                      </div>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>Target Volume</label>
                        <input
                          type="text"
                          name="volume"
                          value={b2bForm.volume}
                          onChange={handleInputChange}
                          style={styles.input}
                          placeholder="e.g. 5 Tons (FCL)"
                          required
                        />
                      </div>
                    </div>

                    <div style={styles.formGroup}>
                      <label style={styles.label}>Packaging & Logistics Specifications</label>
                      <textarea
                        name="requirements"
                        value={b2bForm.requirements}
                        onChange={handleInputChange}
                        style={{ ...styles.input, height: '70px', resize: 'none' }}
                        placeholder="Specify packing sizes (e.g. 25Kg Bags), target port, CIF/FOB terms..."
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={status.loading}
                      style={styles.submitBtn}
                    >
                      {status.loading ? 'Submitting...' : 'Request Wholesale Quote'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Export Steps */}
      <section className="decor-container" style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="decor-sketch decor-sketch-br">
          <CardamomSketchSVG />
        </div>
        <img 
          src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-37.png" 
          alt="" 
          className="decor-leaf decor-rosemary-left"
        />
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '50px' }}>Our Export Process Flow</h2>
          
          <div className="b2b-steps-grid">
            <div style={styles.stepCard}>
              <div style={styles.stepNum}>01</div>
              <h4>Quote & Spec Alignment</h4>
              <p>We receive your custom purity/moisture/packaging specifications and share the commercial quotation.</p>
            </div>
            
            <div style={styles.stepCard}>
              <div style={styles.stepNum}>02</div>
              <h4>Sample Approval</h4>
              <p>We dispatch flight samples of the spice batch directly to your QC department for testing and approval.</p>
            </div>

            <div style={styles.stepCard}>
              <div style={styles.stepNum}>03</div>
              <h4>Hygienic Mill & Pack</h4>
              <p>Upon sample sign-off, we process and vacuum-pack your entire batch in our temperature-controlled factory.</p>
            </div>

            <div style={styles.stepCard}>
              <div style={styles.stepNum}>04</div>
              <h4>Port Dispatch</h4>
              <p>Containers are loaded under QC inspection and shipped under global CIF/FOB shipping terms with full documentation.</p>
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
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'start'
  },
  textCol: {
    display: 'flex',
    flexDirection: 'column'
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
    marginBottom: '40px'
  },
  strengthItem: {
    display: 'flex',
    gap: '24px',
    marginBottom: '35px'
  },
  strengthNum: {
    fontSize: '36px',
    fontWeight: '800',
    color: '#d35400',
    lineHeight: 1
  },
  strengthTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#111116',
    marginBottom: '8px'
  },
  strengthText: {
    fontSize: '14px',
    color: '#55555d',
    lineHeight: '1.6'
  },
  formCol: {
    display: 'flex',
    justifyContent: 'center'
  },
  formCard: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '40px',
    width: '100%',
    boxShadow: '0 15px 45px rgba(0, 0, 0, 0.08)',
    borderTop: '5px solid #d35400'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  label: {
    fontSize: '11px',
    fontWeight: '600',
    color: '#475569',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  input: {
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '14px',
    color: '#0f172a',
    outline: 'none',
    fontFamily: 'inherit'
  },
  select: {
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '14px',
    color: '#0f172a',
    outline: 'none',
    backgroundColor: '#ffffff',
    fontFamily: 'inherit'
  },
  submitBtn: {
    backgroundColor: '#d35400',
    color: '#ffffff',
    border: 'none',
    borderRadius: '30px',
    padding: '14px 28px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    width: '100%',
    marginTop: '10px',
    boxShadow: '0 10px 20px rgba(211, 84, 0, 0.2)'
  },
  successBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '30px 10px',
    color: '#15803d',
    fontWeight: '600',
    gap: '12px',
    fontSize: '14px',
    lineHeight: '1.6'
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '30px'
  },
  stepCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '30px 20px',
    position: 'relative',
    boxShadow: '0 6px 18px rgba(0,0,0,0.02)'
  },
  stepNum: {
    width: '40px',
    height: '40px',
    backgroundColor: '#d35400',
    color: '#ffffff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: '16px',
    margin: '0 auto 20px'
  },
  stepCardTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#111116',
    marginBottom: '10px'
  }
};

export default B2bPage;
