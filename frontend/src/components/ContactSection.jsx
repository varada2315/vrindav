import React, { useState } from 'react';

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState({ success: false, error: '', loading: false });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: false, error: '', loading: true });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ success: true, error: '', loading: false });
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => {
          setIsModalOpen(false);
          setStatus({ success: false, error: '', loading: false });
        }, 2000);
      } else {
        setStatus({ success: false, error: data.error || 'Failed to submit form', loading: false });
      }
    } catch (err) {
      setStatus({ success: false, error: 'Network error. Please check if backend is running.', loading: false });
    }
  };

  return (
    <section className="contact-section">
      {/* Floating abstract herbs */}
      <img 
        src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-38.png" 
        alt="" 
        className="contact-bg-rosemary"
      />
      <div className="container">
        <div className="contact-grid" style={{ alignItems: 'stretch' }}>
          
          {/* Left Column: White Card with Yellow Blob Background */}
          <div className="contact-left" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className="contact-blob-bg"></div>
            
            <div className="contact-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box', flex: 1 }}>
              <div className="contact-card-title">Contact Us</div>
              
              <div className="contact-info-block">
                <p><strong>Vrindav Enterprises</strong><br />Agro Products Sourcing & Export<br />India</p>
              </div>
              
              <div className="contact-info-block">
                <h4>Phone & WhatsApp</h4>
                <p>+91 76470 96525</p>
                <p style={{ fontSize: '13px', fontWeight: '500', color: '#777', marginTop: '4px' }}>Info@vrindaventerprise.com</p>
              </div>
              
              <div className="contact-info-block" style={{ marginBottom: '40px' }}>
                <h4>Working Hours</h4>
                <p>9am - 8pm</p>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'auto' }}>
                <a href="https://wa.me/917647096525" target="_blank" rel="noopener noreferrer" className="btn-link" style={{ alignSelf: 'flex-start' }}>Direct WhatsApp Chat</a>
                <button 
                  className="btn-pill-solid" 
                  style={{ fontSize: '13px', padding: '10px 20px', alignSelf: 'flex-start', marginTop: '10px' }}
                  onClick={() => setIsModalOpen(true)}
                >
                  Send us a Message
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Column: Google Maps Embed */}
          <div className="contact-right" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className="contact-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box', flex: 1 }}>
              <div className="contact-card-title">Find Us</div>
              <div style={{ flex: 1, position: 'relative', overflow: 'hidden', borderRadius: '16px', minHeight: '300px' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118552.79373977402!2d81.0035071!3d21.1065697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a291f09c693a74b%3A0x6a053c713b190c1f!2sRajnandgaon%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1721123456789!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vrindav Enterprises Location Map"
                ></iframe>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Interactive Modal Backdrop & Window */}
      {isModalOpen && (
        <div className="modal-backdrop" style={modalStyles.backdrop}>
          <div className="modal-content" style={modalStyles.content}>
            <div style={modalStyles.header}>
              <h3 style={modalStyles.title}>Get in Touch</h3>
              <button onClick={() => setIsModalOpen(false)} style={modalStyles.closeBtn}>&times;</button>
            </div>
            
            {status.success ? (
              <div style={modalStyles.successBox}>
                <span style={{ fontSize: '24px' }}>✓</span>
                <p>Thank you! Your message has been sent.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={modalStyles.form}>
                {status.error && <div style={modalStyles.errorBox}>{status.error}</div>}
                
                <div style={modalStyles.formGroup}>
                  <label htmlFor="name" style={modalStyles.label}>Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={modalStyles.input}
                    placeholder="Parikshit Ramani"
                    required
                  />
                </div>
                
                <div style={modalStyles.formGroup}>
                  <label htmlFor="email" style={modalStyles.label}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={modalStyles.input}
                    placeholder="buyer@vrindav.com"
                    required
                  />
                </div>

                <div style={modalStyles.formGroup}>
                  <label htmlFor="phone" style={modalStyles.label}>Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={modalStyles.input}
                    placeholder="+91 76470 96525"
                  />
                </div>
                
                <div style={modalStyles.formGroup}>
                  <label htmlFor="message" style={modalStyles.label}>Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{ ...modalStyles.input, height: '90px', resize: 'vertical' }}
                    placeholder="Tell us what spices or herbal products you need..."
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={status.loading} 
                  className="btn-pill-solid"
                  style={{ width: '100%', marginTop: '10px' }}
                >
                  {status.loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

const modalStyles = {
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '20px'
  },
  content: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '30px',
    width: '100%',
    maxWidth: '440px',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
    position: 'relative'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #f1f5f9',
    paddingBottom: '12px',
    marginBottom: '20px'
  },
  title: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#0f172a',
    flexGrow: 1
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    fontSize: '28px',
    color: '#64748b',
    cursor: 'pointer',
    padding: '0 5px',
    lineHeight: 1
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
    fontSize: '12px',
    fontWeight: '600',
    color: '#475569',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  input: {
    padding: '10px 14px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '14px',
    color: '#0f172a',
    outline: 'none',
    fontFamily: 'inherit'
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

export default ContactSection;
