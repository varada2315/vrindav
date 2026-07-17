import React, { useState, useEffect, useRef } from 'react';

const CategoryShowcase = ({ setCurrentPage, setInitialCategory }) => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      id: 'spice-products',
      title: '20+ Spice Products',
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
      id: 'dehydrated-food-products',
      title: 'Dehydrated Food Products',
      image: '/images/temp_59.png',
    },
  ];

  const handleCardClick = (title) => {
    if (setInitialCategory) {
      setInitialCategory(title);
    }
    setCurrentPage('products');
  };

  return (
    <section className="category-showcase-section" ref={sectionRef}>
      <div className="container">
        <h2 className="category-showcase-title">Our Premium Ranges</h2>
        <p className="category-showcase-subtitle">
          Explore our professionally processed category selections, sourced from trusted farmgates and exported globally.
        </p>
      </div>

      <div className="category-showcase-grid">
        {categories.map((cat, index) => (
          <div
            key={cat.id}
            className={`category-showcase-card${animate ? ' animate-in' : ''}`}
            onClick={() => handleCardClick(cat.title)}
            style={{ transitionDelay: `${index * 150}ms` }}
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
