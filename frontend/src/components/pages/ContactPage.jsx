import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState({ success: false, error: '', loading: false });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: false, error: '', loading: true });

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '',
      message: `Subject: ${formData.subject || 'General Inquiry'}. Message: ${formData.message}`
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus({ success: true, error: '', loading: false });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        setStatus({ success: false, error: data.error || 'Failed to submit form', loading: false });
      }
    } catch (err) {
      setStatus({ success: false, error: 'Network error. Please try again or contact via WhatsApp.', loading: false });
    }
  };

  const waLink = "https://wa.me/917647096525?text=Hello%20Vrindav%20Enterprises%2C%20I%20have%20an%20inquiry%20regarding%20spices%20supply.";

  return (
    <div style={{ paddingTop: '120px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* Subpage Hero Header Section */}
      <section className="subpage-hero" style={styles.subpageHero}>
        <div className="hero-bg-shape" style={styles.subpageHeroBg}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={styles.subpageTitle}>Contact <span>Vrindav Enterprises</span></h1>
          <p style={styles.subpageSubtitle}>Have questions about our products, certification, sample dispatches, or bulk exporting? Get in touch with us.</p>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={styles.grid}>
            
            {/* Left: Contact Info details */}
            <div style={styles.infoCol}>
              <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '30px' }}>Communication Channels</h2>
              
              <div style={styles.infoBox}>
                <div style={styles.infoIcon}>📞</div>
                <div>
                  <h4>Phone & WhatsApp</h4>
                  <p style={styles.infoText}>+91 76470 96525</p>
                  <p style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>Click to WhatsApp for immediate replies.</p>
                  <a 
                    href={waLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={styles.waButton}
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div style={styles.infoBox}>
                <div style={styles.infoIcon}>✉️</div>
                <div>
                  <h4>Official Business Email</h4>
                  <p style={styles.infoText}>Info@vrindaventerprise.com</p>
                  <p style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>Submit purchase orders, specifications, and RFQs.</p>
                </div>
              </div>

              <div style={styles.infoBox}>
                <div style={styles.infoIcon}>🏢</div>
                <div>
                  <h4>Export Division / Office</h4>
                  <p style={styles.infoText}>Vrindav Enterprises</p>
                  <p style={{ fontSize: '14px', color: '#55555d', marginTop: '4px' }}>Led by Parikshit Ramani</p>
                  <p style={{ fontSize: '14px', color: '#55555d' }}>India</p>
                </div>
              </div>

              <div style={{ marginTop: '40px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Follow Us Online</h4>
                <div style={styles.socialsFlex}>
                  <a 
                    href="https://www.linkedin.com/in/parikshit-ramani-4a2a4a405?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={styles.socialLink}
                  >
                    🔗 LinkedIn Profile
                  </a>
                  <a 
                    href="#" // User specified Instagram: vrindav.enterprises
                    style={styles.socialLink}
                  >
                    📸 Instagram: vrindav.enterprises
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div style={styles.formCol}>
              <div style={styles.formCard}>
                <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '10px' }}>Send us a Message</h3>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '24px' }}>Fill out the form below and our B2B representative will follow up.</p>

                {status.success ? (
                  <div style={styles.successBox}>
                    <span style={{ fontSize: '24px' }}>✓</span>
                    <p>Message submitted successfully! We will get in touch with you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={styles.form}>
                    {status.error && <div style={styles.errorBox}>{status.error}</div>}
                    
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        style={styles.input}
                        placeholder="Jane Smith"
                        required
                      />
                    </div>
                    
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={styles.input}
                        placeholder="jane@example.com"
                        required
                      />
                    </div>

                    <div style={styles.formGroup}>
                      <label style={styles.label}>Phone / Mobile Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={styles.input}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div style={styles.formGroup}>
                      <label style={styles.label}>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        style={styles.input}
                        placeholder="e.g. Export Inquiry, Custom Blending..."
                      />
                    </div>
                    
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Message Details</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        style={{ ...styles.input, height: '110px', resize: 'vertical' }}
                        placeholder="Write your sourcing specifications, packing requests, or questions here..."
                        required
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={status.loading} 
                      style={styles.submitBtn}
                    >
                      {status.loading ? 'Sending Message...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
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
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '60px',
    alignItems: 'start'
  },
  infoCol: {
    display: 'flex',
    flexDirection: 'column'
  },
  infoBox: {
    display: 'flex',
    gap: '20px',
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.02)',
    marginBottom: '24px'
  },
  infoIcon: {
    fontSize: '28px',
    lineHeight: 1
  },
  infoText: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#111116',
    marginTop: '4px'
  },
  waButton: {
    display: 'inline-block',
    backgroundColor: '#25D366',
    color: '#ffffff',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    marginTop: '12px',
    boxShadow: '0 4px 10px rgba(37,211,102,0.15)'
  },
  socialsFlex: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  socialLink: {
    fontSize: '14px',
    color: '#d35400',
    fontWeight: '600'
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
    gap: '14px'
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
    marginTop: '10px'
  },
  successBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '40px 10px',
    color: '#15803d',
    fontWeight: '600',
    gap: '12px'
  },
  errorBox: {
    backgroundColor: '#fef2f2',
    color: '#b91c1c',
    padding: '10px 14px',
    borderRadius: '8px',
    fontSize: '13px',
    border: '1px solid #fca5a5'
  }
};

export default ContactPage;
