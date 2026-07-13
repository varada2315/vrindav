import React from 'react';

const CategoryShowcase = ({ setCurrentPage }) => {
  const categories = [
    {
      id: 'spice-products',
      title: 'Spice Products',
      image: '/images/card_ground_spices.png',
    },
    {
      id: 'blended-masalas',
      title: 'Blended Masalas',
      image: '/images/bowl_chili.png',
    },
    {
      id: 'seasoning-spices',
      title: 'Seasoning Spices',
      image: '/images/bowl_oregano.png',
    },
    {
      id: 'dehydrated-products',
      title: 'Dehydrated Food Products',
      image: '/images/temp_59.png',
    },
  ];

  return (
    <section className="category-showcase-section">
      <div className="container">
        <h2 className="category-showcase-title">Our Premium Ranges</h2>
        <p className="category-showcase-subtitle">
          Explore our professionally processed category selections, sourced from trusted farmgates and exported globally.
        </p>
      </div>

      <div className="category-showcase-grid">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="category-showcase-card"
            onClick={() => setCurrentPage('products')}
          >
            <div 
              className="category-showcase-card-bg"
              style={{ backgroundImage: `url('${cat.image}')` }}
            ></div>
            <div className="category-showcase-card-overlay">
              <h3 className="category-showcase-card-title">{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryShowcase;
