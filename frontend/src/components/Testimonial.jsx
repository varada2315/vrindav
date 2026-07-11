import React, { useState, useEffect } from 'react';
import { BotanicalBackgroundSVG } from './SpiceSketches';

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      quote: "We've been sourcing red chilli powder and turmeric from Vrindav Enterprises for over a year. The color and purity consistency is outstanding — exactly what our food processing unit needs.",
      author: "Shubham Patel, Food Processor"
    },
    {
      id: 2,
      quote: "Competitive pricing, prompt WhatsApp responses, and timely delivery. The Organic Turmeric & Moringa Powder and other products are highly recommended by our customers for their Health and Nutrition diets.",
      author: "Nita Kapoor, Wellness Brand Founder"
    },
    {
      id: 3,
      quote: "We have been sourcing Spices Products from Vrindav Enterprises for bulk distribution and their quality has been consistent. Rich aroma, freshness, and competitive pricing help us maintain a strong partnership.",
      author: "Rakesh Sharma, Bulk Distributor"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 6000); // Rotate every 6 seconds
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="testimonial-section">
      {/* Floating abstract herbs */}
      <img 
        src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/spice-shop-36.png" 
        alt="" 
        className="testimonial-bg-leaf"
      />
      {/* Background botanical sketches */}
      <div className="testimonial-bg-sketches">
        <div className="testimonial-sketch-left">
          <BotanicalBackgroundSVG />
        </div>
        <div className="testimonial-sketch-right">
          <BotanicalBackgroundSVG />
        </div>
      </div>
      
      <div className="container testimonial-container">
        {reviews.map((rev, idx) => (
          <div 
            key={rev.id} 
            style={{
              display: idx === activeIndex ? 'block' : 'none',
              animation: 'fadeIn 0.6s ease-in-out'
            }}
          >
            <blockquote className="testimonial-quote">
              "{rev.quote}"
            </blockquote>
            <div className="testimonial-author">
              &mdash; {rev.author}
            </div>
          </div>
        ))}

        {/* Carousel Slide Indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '40px' }}>
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: idx === activeIndex ? 'var(--color-rust)' : '#e2e8f0',
                cursor: 'pointer',
                transition: 'background-color 0.4s ease'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
