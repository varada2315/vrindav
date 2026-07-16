import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SpecialtyGrid from './components/SpecialtyGrid';
import AboutUs from './components/AboutUs';
import StatsSection from './components/StatsSection';
import CategoryShowcase from './components/CategoryShowcase';
import IconGrid from './components/IconGrid';
import OurSpices from './components/OurSpices';
import SpiceList from './components/SpiceList';
import Testimonial from './components/Testimonial';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import GlobalPresence from './components/GlobalPresence';

// Subpages
import AboutPage from './components/pages/AboutPage';
import ProductsPage from './components/pages/ProductsPage';
import B2bPage from './components/pages/B2bPage';
import ContactPage from './components/pages/ContactPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [initialCategory, setInitialCategory] = useState('All');
  const [spices, setSpices] = useState([]);
  const [loading, setLoading] = useState(true);

  const handlePageChange = (page) => {
    if (page === 'about') {
      setCurrentPage('home');
      setTimeout(() => {
        const aboutEl = document.getElementById('about-section');
        if (aboutEl) {
          aboutEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    setCurrentPage(page);
    if (page !== 'products') {
      setInitialCategory('All');
    }
  };

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
            id: "cinnamon-powder",
            name: "Cinnamon Powder",
            category: "Natural Spices & Herbal Products",
            subtitle: "Warm Aromatic Spice",
            description: "Finely ground cinnamon bark offering a naturally sweet aroma and warm flavor. Perfect for curries, biryanis, desserts, beverages, and baking.",
            image: "/images/cinnamon_powder.jpg",
            sketchKey: "cinnamon"
          },
          {
            id: "kashmiri-chilli",
            name: "Kashmiri Chilli Powder",
            category: "Natural Spices & Herbal Products",
            subtitle: "Rich Color & Mild Heat",
            description: "Made from premium Kashmiri red chillies to provide vibrant natural color with gentle spiciness. Ideal for curries, gravies, marinades, and tandoori dishes.",
            image: "/images/kashmiri_chilli_powder.jpg",
            sketchKey: "chilli"
          },
          {
            id: "natural-turmeric",
            name: "Natural Turmeric Powder",
            category: "Natural Spices & Herbal Products",
            subtitle: "High Curcumin & Natural Color",
            description: "Finest grade natural turmeric powder sourced directly from farmers. Handpicked and ground hygienically to retain high curcumin levels, perfect for culinary and wellness diets.",
            image: "/images/natural_turmeric.jpg",
            sketchKey: "ginger"
          },
          {
            id: "dehydrated-garlic",
            name: "Dehydrated Garlic Powder",
            category: "Dehydrated Products",
            subtitle: "Premium Garlic Seasoning",
            description: "Made from carefully selected garlic cloves and finely ground to deliver rich garlic flavor in a convenient powder form. Perfect for soups, sauces, marinades, and everyday cooking.",
            image: "/images/dehydrated_garlic.jpg",
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
            image: "/images/organic_moringa_powder.jpg",
            sketchKey: "dried_herbs"
          },
          {
            id: "dehydrated-moringa",
            name: "Organic Moringa Powder",
            category: "Dehydrated Products",
            subtitle: "Nutrient-Rich Herbal Supplement",
            description: "Made from carefully selected moringa leaves, finely ground to preserve natural nutrients and antioxidants. Ideal for smoothies, herbal drinks, soups, and healthy recipes.",
            image: "/images/dehydrated_moringa.jpg",
            sketchKey: "dried_herbs"
          },
          {
            id: "tomato-powder",
            name: "Tomato Powder",
            category: "Dehydrated Products",
            subtitle: "Natural Tomato Seasoning",
            description: "Made from ripe sun-dried tomatoes to deliver rich tomato flavor and vibrant color. Perfect for soups, sauces, gravies, snacks, and instant seasoning.",
            image: "/images/tomato_powder.jpg",
            sketchKey: "chilli"
          },
          {
            id: "tamarind-powder",
            name: "Tamarind Powder",
            category: "Dehydrated Products",
            subtitle: "Tangy Natural Seasoning",
            description: "Finely ground tamarind powder offering authentic sweet and sour flavor for chutneys, curries, sauces, snacks, and traditional Indian recipes.",
            image: "/images/tamarind_powder.jpg",
            sketchKey: "ginger"
          },
          {
            id: "palak-powder",
            name: "Palak Powder",
            category: "Dehydrated Products",
            subtitle: "Nutrient-Rich Spinach Powder",
            description: "Prepared from fresh spinach leaves to retain natural nutrients, vitamins, and antioxidants. Perfect for soups, smoothies, parathas, dals, and sauces.",
            image: "/images/palak_powder.jpg",
            sketchKey: "dried_herbs"
          },
          {
            id: "kasuri-methi",
            name: "Kasturi Methi Powder",
            category: "Dehydrated Products",
            subtitle: "Aromatic Fenugreek Leaves",
            description: "Made from premium dried fenugreek leaves to add authentic aroma and rich flavor to curries, gravies, dals, and traditional Indian recipes.",
            image: "/images/kasuri_methi.jpg",
            sketchKey: "dried_herbs"
          },
          {
            id: "green-chilli-powder",
            name: "Green Chilli Powder",
            category: "Dehydrated Products",
            subtitle: "Fresh & Fiery Chilli Powder",
            description: "Made from carefully selected green chillies to deliver vibrant color, fresh aroma, and spicy heat to curries, sauces, and marinades.",
            image: "/images/green_chilli_powder.jpg",
            sketchKey: "chilli"
          },
          {
            id: "mint-powder",
            name: "Mint Powder",
            category: "Dehydrated Products",
            subtitle: "Refreshing Herbal Seasoning",
            description: "Prepared from naturally dried mint leaves to provide cooling freshness and aroma. Ideal for raitas, chutneys, beverages, snacks, and marinades.",
            image: "/images/mint_powder.jpg",
            sketchKey: "dried_herbs"
          },
          {
            id: "pink-onion-powder",
            name: "Pink Onion Powder",
            category: "Dehydrated Products",
            subtitle: "Natural Onion Seasoning",
            description: "Made from premium pink onions to provide mild sweetness and savory depth. Perfect for soups, sauces, curries, marinades, and seasoning blends.",
            image: "/images/pink_onion_powder.jpg",
            sketchKey: "ground_spices"
          },
          {
            id: "white-onion-powder",
            name: "White Onion Powder",
            category: "Dehydrated Products",
            subtitle: "Mild & Aromatic Onion Powder",
            description: "Prepared from premium white onions to deliver mild sweetness and consistent flavor. Perfect for soups, gravies, sauces, marinades, and snacks.",
            image: "/images/white_onion_powder.jpg",
            sketchKey: "ground_spices"
          },
          {
            id: "natural-moringa-powder",
            name: "Natural Moringa powder",
            category: "Dehydrated Products",
            subtitle: "Pure Natural Green Superfood",
            description: "Premium grade natural moringa leaves dried under shade and ground finely. Packed with rich nutrients and natural aroma, suitable for standard culinary and health food uses.",
            image: "/images/natural_moringa_powder.jpg",
            sketchKey: "dried_herbs"
          },
          {
            id: "tomato-sweet-masala",
            name: "Tomato Special Masala",
            category: "Seasoning & Blended Spices",
            subtitle: "Tangy & Flavorful Seasoning Blend",
            description: "A specially crafted spice blend designed to enhance tomato-based dishes with the perfect balance of tanginess, mild spice, and rich aroma. Ideal for curries, gravies, soups, sauces, and fusion recipes.",
            image: "/images/tomato_sweet_masala.jpg",
            sketchKey: "chilli"
          },
          {
            id: "shahi-biryani-masala",
            name: "Shahi Biryani Masala",
            category: "Seasoning & Blended Spices",
            subtitle: "Royal Aromatic Biryani Blend",
            description: "An authentic blend of premium spices that delivers rich aroma, balanced heat, and traditional Mughlai flavor. Perfect for preparing delicious vegetarian and non-vegetarian biryani.",
            image: "/images/shahi_biryani_masala.jpg",
            sketchKey: "whole_spices"
          },
          {
            id: "schezwan-masala",
            name: "Schezwan Masala",
            category: "Seasoning & Blended Spices",
            subtitle: "Bold Indo-Chinese Seasoning",
            description: "A fiery blend of herbs and spices inspired by authentic Indo-Chinese cuisine. Ideal for noodles, fried rice, Manchurian, stir-fries, and fusion snacks.",
            image: "/images/schezwan_masala.jpg",
            sketchKey: "chilli"
          },
          {
            id: "sambar-masala",
            name: "Sambar Masala",
            category: "Seasoning & Blended Spices",
            subtitle: "Authentic South Indian Blend",
            description: "Prepared using carefully roasted spices and lentils to create traditional South Indian sambar with rich aroma, balanced spice, and delicious taste.",
            image: "/images/sambar_masala.jpg",
            sketchKey: "ginger"
          },
          {
            id: "sabji-masala",
            name: "Sabji Masala",
            category: "Seasoning & Blended Spices",
            subtitle: "Everyday Vegetable Seasoning",
            description: "A balanced spice blend specially made to enhance the flavor of dry and gravy vegetable dishes with rich aroma and authentic taste.",
            image: "/images/sabji_masala.jpg",
            sketchKey: "ground_spices"
          },
          {
            id: "pizza-masala",
            name: "Pizza Masala",
            category: "Seasoning & Blended Spices",
            subtitle: "Premium Italian Herb Blend",
            description: "A premium seasoning made with selected herbs and spices to deliver authentic Italian flavor for pizzas, garlic bread, pasta, sandwiches, and baked dishes.",
            image: "/images/pizza_masala.jpg",
            sketchKey: "dried_herbs"
          },
          {
            id: "peri-peri-masala",
            name: "Peri Peri Masala",
            category: "Seasoning & Blended Spices",
            subtitle: "Fiery & Tangy Seasoning",
            description: "A bold blend of chillies, herbs, and spices delivering spicy heat with smoky and tangy notes. Perfect for fries, popcorn, grilled vegetables, pasta, and snacks.",
            image: "/images/peri_peri_masala.jpg",
            sketchKey: "chilli"
          },
          {
            id: "pav-bhaji-masala",
            name: "Pav Bhaji Masala",
            category: "Seasoning & Blended Spices",
            subtitle: "Authentic Mumbai Style Blend",
            description: "A flavorful spice blend that brings authentic Mumbai-style pav bhaji to life with rich aroma, vibrant color, and perfectly balanced spices.",
            image: "/images/pav_bhaji_masala.jpg",
            sketchKey: "whole_spices"
          },
          {
            id: "pasta-masala",
            name: "Pasta Masala",
            category: "Seasoning & Blended Spices",
            subtitle: "Italian Pasta Seasoning",
            description: "A delicious blend of herbs and spices that enhances white sauce, red sauce, and fusion pasta recipes with rich aroma and balanced flavor.",
            image: "/images/pasta_masala.jpg",
            sketchKey: "dried_herbs"
          },
          {
            id: "papad-masala",
            name: "Papad Masala",
            category: "Seasoning & Blended Spices",
            subtitle: "Spicy Tangy Papad Seasoning",
            description: "A mouthwatering spice blend specially prepared for roasted and fried papad. Also perfect for salads, fruits, and snacks.",
            image: "/images/papad_masala.jpg",
            sketchKey: "ground_spices"
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
            <Hero setCurrentPage={handlePageChange} />
            <SpecialtyGrid setCurrentPage={handlePageChange} />
            <AboutUs />
            <StatsSection />
            <CategoryShowcase setCurrentPage={handlePageChange} setInitialCategory={setInitialCategory} />
            <IconGrid />
            <OurSpices />
            <SpiceList spices={spices.slice(0, 3)} /> {/* Preview first 3 spices on homepage */}
            <GlobalPresence />
            <Testimonial />
            <ContactSection />
          </>
        );
      case 'products':
        return <ProductsPage spices={spices} initialCategory={initialCategory} setInitialCategory={setInitialCategory} />;
      case 'about':
        return <AboutPage setCurrentPage={handlePageChange} />;
      case 'b2b':
        return <B2bPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <Hero setCurrentPage={handlePageChange} />;
    }
  };

  return (
    <div id="layout-container" style={{ width: '100%' }}>
      <Header currentPage={currentPage} setCurrentPage={handlePageChange} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={handlePageChange} />
    </div>
  );
};

export default App;
