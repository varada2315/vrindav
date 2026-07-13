import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      id: 'products',
      value: '50+',
      label: 'Spice Products',
      description: 'Premium powders, custom blends, seasonings, and dehydrated varieties.',
      // Spice seed/leaf outline icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stat-icon-svg">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      id: 'purity',
      value: '100%',
      label: 'Natural & Pure',
      description: 'Zero fillers, zero artificial additives, completely pesticide-free.',
      // Bio leaf outline icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stat-icon-svg">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 8a7.5 7.5 0 0 1-9 10z" />
          <path d="M9 22v-4" />
        </svg>
      )
    },
    {
      id: 'orders',
      value: '500+',
      label: 'Bulk Orders Fulfilled',
      description: 'Timely bulk shipments delivering consistency to corporate and wholesale clients.',
      // Delivery package box outline icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stat-icon-svg">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    },
    {
      id: 'distribution',
      value: '24+',
      label: 'States Supplied',
      description: 'Seamless logistics chain spanning the length and breadth of India.',
      // Map pin/network outline icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stat-icon-svg">
          <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    }
  ];

  return (
    <section className="stats-section">
      {/* Decorative leaf background */}
      <img 
        src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-38.png" 
        alt="" 
        className="stats-bg-rosemary"
      />
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-icon-container">
                {stat.icon}
              </div>
              <h3 className="stat-value">{stat.value}</h3>
              <h4 className="stat-label">{stat.label}</h4>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
