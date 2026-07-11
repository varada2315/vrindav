import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SpecialtyGrid from './components/SpecialtyGrid';
import AboutUs from './components/AboutUs';
import IconGrid from './components/IconGrid';
import OurSpices from './components/OurSpices';
import SpiceList from './components/SpiceList';
import Testimonial from './components/Testimonial';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Subpages
import AboutPage from './components/pages/AboutPage';
import ProductsPage from './components/pages/ProductsPage';
import B2bPage from './components/pages/B2bPage';
import ContactPage from './components/pages/ContactPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [spices, setSpices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpices = async () => {
      try {
        const response = await fetch('/api/spices');
        if (!response.ok) {
          throw new Error('Failed to fetch spices');
        }
        const data = await response.json();
        setSpices(data);
      } catch (err) {
        console.error('Error fetching spices, using fallback data:', err);
        // Fallback dataset that mimics the updated server data to keep UI functional
        setSpices([
          {
            id: "turmeric",
            name: "Pure Turmeric Powder",
            category: "Natural Spices & Herbal Products",
            subtitle: "High Curcumin & Natural Color",
            description: "Finest grade turmeric powder sourced directly from farmers. Handpicked and ground hygienically to retain high curcumin levels, perfect for culinary and wellness diets.",
            image: "/images/bowl_turmeric.png",
            sketchKey: "ginger"
          },
          {
            id: "chilli",
            name: "Red Chilli Powder",
            category: "Natural Spices & Herbal Products",
            subtitle: "Rich Aroma & Vibrant Taste",
            description: "Vibrant red chilli powder with outstanding consistency in color and purity. Solar-dried and ground to perfection to deliver consistent heat and flavor for food processing units.",
            image: "/images/bowl_chili.png",
            sketchKey: "chilli"
          },
          {
            id: "moringa",
            name: "Herbal Moringa Powder",
            category: "Natural Spices & Herbal Products",
            subtitle: "Nutritional Herbal Supplement",
            description: "Finely ground dehydrated moringa leaves loaded with vitamins and antioxidants. Popularly sourced for dietary supplements, health foods, and herbal wellness recipes.",
            image: "/images/bowl_oregano.png",
            sketchKey: "dried_herbs"
          },
          {
            id: "garam-masala",
            name: "Premium Garam Masala",
            category: "Seasoning & Blended Spices",
            subtitle: "Authentic Indian Spice Blend",
            description: "A secret ratio blend of cardamom, cloves, cinnamon, and black pepper. Adds authentic Indian flavor and a rich, warm aroma to B2B catering and food services.",
            image: "/images/card_ground_spices.png",
            sketchKey: "whole_spices"
          },
          {
            id: "dehydrated-onion",
            name: "Dehydrated Onion Flakes",
            category: "Dehydrated Products",
            subtitle: "Long Shelf Life & Fresh Aroma",
            description: "Premium dehydrated white and red onion flakes. Offers maximum freshness and quick rehydration, perfect for bulk distribution and canned soups or sauces.",
            image: "/images/bowl_salt.png",
            sketchKey: "ground_spices"
          },
          {
            id: "dehydrated-garlic",
            name: "Dehydrated Garlic Powder",
            category: "Dehydrated Products",
            subtitle: "Pure Flavor & Zero Moisture",
            description: "Processed from fresh garlic cloves using advanced hygienic drying technology. Delivers robust garlic flavor with zero moisture clumping, ideal for seasoning packs.",
            image: "/images/bowl_salt.png",
            sketchKey: "ground_spices"
          },
          {
            id: "organic-turmeric",
            name: "Organic Turmeric Powder",
            category: "Organic Products",
            subtitle: "Certified Pesticide-Free",
            description: "Certified organic turmeric powder. Sourced from certified eco-farms practicing fully chemical-free and sustainable agriculture. Recommended for natural healthcare lines.",
            image: "/images/bowl_turmeric.png",
            sketchKey: "ginger"
          },
          {
            id: "organic-moringa",
            name: "Organic Moringa Powder",
            category: "Organic Products",
            subtitle: "Certified Superfood Powder",
            description: "Strictly organic moringa leaf powder. Verified free of pesticides, processed hygienically under temperature-controlled settings to preserve natural nutrition profiles.",
            image: "/images/bowl_oregano.png",
            sketchKey: "dried_herbs"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchSpices();
  }, []);

  // Smooth scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Page Routing Switch
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <SpecialtyGrid setCurrentPage={setCurrentPage} />
            <AboutUs setCurrentPage={setCurrentPage} />
            <IconGrid />
            <OurSpices />
            <SpiceList spices={spices.slice(0, 3)} /> {/* Preview first 3 spices on homepage */}
            <Testimonial />
            <ContactSection />
          </>
        );
      case 'products':
        return <ProductsPage spices={spices} />;
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'b2b':
        return <B2bPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <Hero setCurrentPage={setCurrentPage} />;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const container = document.getElementById('layout-container');
      const parent = document.getElementById('scale-parent');
      
      if (container && parent) {
        if (width < 1200) {
          const scale = width / 1200;
          container.style.width = '1200px';
          container.style.transform = `scale(${scale})`;
          container.style.transformOrigin = 'top left';
          
          // Set parent height to match the scaled height
          const rect = container.getBoundingClientRect();
          parent.style.height = `${rect.height}px`;
        } else {
          container.style.width = '100%';
          container.style.transform = 'none';
          parent.style.height = 'auto';
        }
      }
    };

    const container = document.getElementById('layout-container');
    let resizeObserver;
    if (container) {
      resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(container);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [currentPage]);

  return (
    <div id="scale-parent" style={{ overflow: 'hidden', width: '100%' }}>
      <div id="layout-container">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main>
          {renderPage()}
        </main>
        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default App;
