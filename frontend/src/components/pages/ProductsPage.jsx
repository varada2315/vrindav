import React, { useState } from 'react';
import { BotanicalBackgroundSVG, CorianderSketchSVG, BayLeavesSketchSVG } from '../SpiceSketches';

const ProductsPage = ({ spices }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [inquiryForm, setInquiryForm] = useState({ name: '', email: '', company: '', quantity: '', notes: '' });
  const [status, setStatus] = useState({ success: false, loading: false });

  const categories = [
    'All',
    'Natural Spices & Herbal Products',
    'Seasoning & Blended Spices',
    'Dehydrated Products',
    'Organic Products'
  ];

  const filteredSpices = activeCategory === 'All'
    ? spices
    : spices.filter(spice => spice.category === activeCategory);

  const openInquiryModal = (product) => {
    setSelectedProduct(product);
    setIsInquiryModalOpen(true);
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: false, loading: true });

    const payload = {
      name: inquiryForm.name,
      email: inquiryForm.email,
      phone: inquiryForm.quantity ? `Qty Required: ${inquiryForm.quantity}` : '',
      message: `B2B Inquiry for product: ${selectedProduct.name}. Company: ${inquiryForm.company || 'N/A'}. Details: ${inquiryForm.notes || 'No extra notes.'}`
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus({ success: true, loading: false });
        setInquiryForm({ name: '', email: '', company: '', quantity: '', notes: '' });
        setTimeout(() => {
          setIsInquiryModalOpen(false);
          setStatus({ success: false, loading: false });
          setSelectedProduct(null);
        }, 2000);
      } else {
        setStatus({ success: false, loading: false });
        alert('Failed to submit inquiry. Please try again.');
      }
    } catch (err) {
      setStatus({ success: false, loading: false });
      alert('Error sending inquiry. Direct WhatsApp option is recommended.');
    }
  };

  // Premap WhatsApp prefilled message
  const getWhatsAppLink = (productName) => {
    const text = encodeURIComponent(`Hello Vrindav Enterprises, I am interested in placing a bulk B2B inquiry for "${productName}". Please share the quotation and catalog.`);
    return `https://wa.me/917647096525?text=${text}`;
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingBottom: '80px' }}>

      {/* Subpage Hero Header Section */}
      <section className="products-hero-banner-section">
        <div className="products-hero-banner-content">
          <span className="products-hero-banner-subtitle">The Finest Spices and Herbs</span>
          <h1 className="products-hero-banner-title">Our Products</h1>
          <p className="products-hero-banner-desc">
            Exporter of pure natural agro products, offering 50+ blended seasonings, dehydrated ingredients, and certified organic herbs.
          </p>
        </div>
      </section>

      {/* Category Selection Tabs */}
      <section style={{ padding: '30px 0 50px' }}>
        <div className="container">
          <div style={styles.tabContainer}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  ...styles.tabBtn,
                  backgroundColor: activeCategory === cat ? '#d35400' : '#ffffff',
                  color: activeCategory === cat ? '#ffffff' : '#111116',
                  boxShadow: activeCategory === cat ? '0 8px 16px rgba(211,84,0,0.15)' : '0 2px 8px rgba(0,0,0,0.03)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="decor-container">
        <div className="decor-sketch decor-sketch-tl">
          <CorianderSketchSVG />
        </div>
        <div className="decor-sketch decor-sketch-br">
          <BayLeavesSketchSVG />
        </div>
        <img
          src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-38.png"
          alt=""
          className="decor-rosemary decor-rosemary-right"
          style={{ top: '30%' }}
        />
        <img
          src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-36.png"
          alt=""
          className="decor-leaf decor-leaf-left"
          style={{ top: '65%' }}
        />
        <div className="container">
          <div style={styles.productsGrid}>
            {filteredSpices.map((product) => (
              <div key={product.id} className="product-card-grid">
                <div style={styles.imageCol}>
                  <img src={product.image} alt={product.name} style={styles.productImg} />
                </div>
                <div className="products-page-content-col" style={styles.contentCol}>
                  <span style={styles.categoryTag}>{product.category}</span>
                  <h3 style={styles.productName}>{product.name}</h3>
                  <p style={styles.productSubtitle}>{product.subtitle}</p>
                  <p style={styles.productDesc}>{product.description}</p>

                  {product.specifications && (
                    <div style={styles.specsBox}>
                      <strong>Specifications:</strong> {product.specifications}
                    </div>
                  )}

                  {product.tags && (
                    <div style={styles.tagsContainer}>
                      {product.tags.map(tag => (
                        <span key={tag} style={styles.tagLabel}>{tag}</span>
                      ))}
                    </div>
                  )}

                  <div style={styles.actionsBox}>
                    <button
                      onClick={() => openInquiryModal(product)}
                      style={styles.inquireBtn}
                    >
                      📩 Bulk Quote Inquiry
                    </button>
                    <a
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.waBtn}
                    >
                      💬 WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Quote Modal */}
      {isInquiryModalOpen && selectedProduct && (
        <div className="modal-backdrop" style={modalStyles.backdrop}>
          <div className="modal-content" style={modalStyles.content}>
            <div style={modalStyles.header}>
              <h3 style={modalStyles.title}>Request B2B Quote</h3>
              <button onClick={() => setIsInquiryModalOpen(false)} style={modalStyles.closeBtn}>&times;</button>
            </div>

            <p style={{ fontSize: '13px', color: '#666', marginBottom: '15px' }}>
              Inquiring for: <strong>{selectedProduct.name}</strong> ({selectedProduct.category})
            </p>

            {status.success ? (
              <div style={modalStyles.successBox}>
                <span style={{ fontSize: '24px' }}>✓</span>
                <p>Quote request submitted! We will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} style={modalStyles.form}>

                <div style={modalStyles.formGroup}>
                  <label htmlFor="name" style={modalStyles.label}>Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={inquiryForm.name}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                    style={modalStyles.input}
                    placeholder="Parikshit Ramani"
                    required
                  />
                </div>

                <div style={modalStyles.formGroup}>
                  <label htmlFor="email" style={modalStyles.label}>Work Email</label>
                  <input
                    type="email"
                    id="email"
                    value={inquiryForm.email}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                    style={modalStyles.input}
                    placeholder="buyer@foodcompany.com"
                    required
                  />
                </div>

                <div style={modalStyles.formGroup}>
                  <label htmlFor="company" style={modalStyles.label}>Company / Brand Name</label>
                  <input
                    type="text"
                    id="company"
                    value={inquiryForm.company}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, company: e.target.value })}
                    style={modalStyles.input}
                    placeholder="Enterprises Ltd"
                  />
                </div>

                <div style={modalStyles.formGroup}>
                  <label htmlFor="quantity" style={modalStyles.label}>Estimated Quantity Required (Kg/Tons)</label>
                  <input
                    type="text"
                    id="quantity"
                    value={inquiryForm.quantity}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, quantity: e.target.value })}
                    style={modalStyles.input}
                    placeholder="e.g. 500 Kg or 2 Metric Tons"
                    required
                  />
                </div>

                <div style={modalStyles.formGroup}>
                  <label htmlFor="notes" style={modalStyles.label}>Sourcing Requirements / Comments</label>
                  <textarea
                    id="notes"
                    value={inquiryForm.notes}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, notes: e.target.value })}
                    style={{ ...modalStyles.input, height: '70px' }}
                    placeholder="Packing preference, destination port, customization..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  style={modalStyles.submitBtn}
                >
                  {status.loading ? 'Submitting Request...' : 'Send Inquiry Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
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
  tabContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    justifyContent: 'center'
  },
  tabBtn: {
    padding: '12px 24px',
    border: 'none',
    borderRadius: '30px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '30px',
    maxWidth: '900px',
    margin: '0 auto'
  },
  productCard: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '30px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '40px',
    alignItems: 'center',
    transition: 'transform 0.3s ease'
  },
  imageCol: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '180px'
  },
  productImg: {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain',
    filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.06))'
  },
  contentCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  categoryTag: {
    fontSize: '11px',
    color: '#7fad39',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '6px'
  },
  productName: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#111116',
    marginBottom: '4px'
  },
  productSubtitle: {
    fontSize: '14px',
    color: '#d35400',
    fontWeight: '600',
    marginBottom: '12px'
  },
  productDesc: {
    fontSize: '14px',
    color: '#55555d',
    lineHeight: '1.6',
    marginBottom: '16px'
  },
  specsBox: {
    backgroundColor: '#faf8f5',
    borderLeft: '3px solid #f39c12',
    padding: '8px 12px',
    fontSize: '13px',
    color: '#55555d',
    marginBottom: '16px',
    borderRadius: '0 8px 8px 0',
    width: '100%'
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '24px'
  },
  tagLabel: {
    fontSize: '11px',
    backgroundColor: '#f1f5f9',
    color: '#475569',
    padding: '4px 10px',
    borderRadius: '12px',
    fontWeight: '500'
  },
  actionsBox: {
    display: 'flex',
    gap: '12px',
    width: '100%'
  },
  inquireBtn: {
    backgroundColor: '#d35400',
    color: '#ffffff',
    border: 'none',
    borderRadius: '30px',
    padding: '12px 24px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 8px 16px rgba(211,84,0,0.15)',
    transition: 'all 0.3s ease'
  },
  waBtn: {
    backgroundColor: '#25D366',
    color: '#ffffff',
    border: 'none',
    borderRadius: '30px',
    padding: '12px 24px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 16px rgba(37,211,102,0.15)',
    transition: 'all 0.3s ease'
  }
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
    justifyContent: 'between',
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
    gap: '12px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  label: {
    fontSize: '11px',
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
  submitBtn: {
    backgroundColor: '#d35400',
    color: '#ffffff',
    border: 'none',
    borderRadius: '30px',
    padding: '12px 24px',
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
  }
};

export default ProductsPage;
