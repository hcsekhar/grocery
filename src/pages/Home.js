import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

import Apple from '../assets/fruits/Apple.jpg';
import Banana from '../assets/fruits/Banana.jpg';
import Orange from '../assets/fruits/Orange.jpg';
import Papaya from '../assets/fruits/Papaya.jpg';
import Pineapple from '../assets/fruits/Pineapple.jpg';
import Pomegranate from '../assets/fruits/Pomegranate.jpg';
import Watermelon from '../assets/fruits/Watermelon.jpg';

import Tomato from '../assets/vegtables/Tomato.jpg';
import Cabbage from '../assets/vegtables/Cabbage.jpg';
import Carrot from '../assets/vegtables/Carrot.jpg';
import Ginger from '../assets/vegtables/Ginger.jpg';
import Onion from '../assets/vegtables/Onion.jpg';
import Potato from '../assets/vegtables/Potato.jpg';
import Sweetcorn from '../assets/vegtables/Sweetcorn.jpg';

import Rice from '../assets/rice/Daawat Sonamasoori.jpg';
import Rice1 from '../assets/rice/Daawat everydayrice.jpg';
import Rice2 from '../assets/rice/Dawath Basumathi.jpg';
import Rice3 from '../assets/rice/HMT Kolam.jpg';
import Rice4 from '../assets/rice/Indiagate basmati.jpg';
import Rice5 from '../assets/rice/indiagate jeerarice.jpg';

import Anjeer from '../assets/dryfruits/Anjeer.jpg';
import Badam from '../assets/dryfruits/Badam.jpg';
import Dates from '../assets/dryfruits/Dates.jpg';
import Flaxseeds from '../assets/dryfruits/Flaxseeds.jpg';
import Kaju from '../assets/dryfruits/Kaju.jpg';
import Kishmish from '../assets/dryfruits/Kishmish.jpg';
import Pista from '../assets/dryfruits/Pista.jpg';
import pumpkin from '../assets/dryfruits/pumpkin.jpg';
import Sunflower from '../assets/dryfruits/Sunflower.jpg';
import walnut from '../assets/dryfruits/walnut.jpg';

import Fortune from '../assets/oils/Fortune Kachi Ghani Oil.jpg';
import Fortune1 from '../assets/oils/Fortune Ricebran Oil.jpg';
import Fortune2 from '../assets/oils/Fortune Soyabean Oil.jpg';
import Fortune3 from '../assets/oils/Fortune Sunflower Oil.jpg';
import Freedom from '../assets/oils/Freedom Groundnut Oil.jpg';
import Freedom1 from '../assets/oils/Freedom Mustard Oil.jpg';
import Freedom2 from '../assets/oils/Freedom Ricebranoil.jpg';
import Freedom3 from '../assets/oils/Freedom Sunfloweroil.jpg';
import Goldwinner from '../assets/oils/Goldwinner Sunflower Oil.jpg';

import Heritage from '../assets/oils/ghee/Heritage Buffalo ghee.jpg';
import Heritage1 from '../assets/oils/ghee/Heritage Cow ghee.jpg';
import Jersey from '../assets/oils/ghee/Jersey Cow Ghee.jpg';
import Shreeja from '../assets/oils/ghee/Shreeja Cow Gee.jpg';
import nadhini from '../assets/oils/ghee/nadhini cow ghee.jpg';


// Products List
const products = [
  { id: 1, name: 'Apple', price: 150, image: Apple, category: 'Fruits' },
  { id: 2, name: 'Banana', price: 50, image: Banana, category: 'Fruits' },
  { id: 3, name: 'Orange', price: 50, image: Orange, category: 'Fruits' },
  { id: 4, name: 'Papaya', price: 40, image: Papaya, category: 'Fruits' },
  { id: 5, name: 'Pineapple', price: 150, image: Pineapple, category: 'Fruits' },
  { id: 6, name: 'Pomegranate', price: 50, image: Pomegranate, category: 'Fruits' },
  { id: 7, name: 'Watermelon', price: 150, image: Watermelon, category: 'Fruits' },

  { id: 8, name: 'Tomato', price: 40, image: Tomato, category: 'Vegetables' },
  { id: 9, name: 'Cabbage', price: 40, image: Cabbage, category: 'Vegetables' },
  { id: 10, name: 'Carrot', price: 45, image: Carrot, category: 'Vegetables' },
  { id: 11, name: 'Ginger', price: 40, image: Ginger, category: 'Vegetables' },
  { id: 12, name: 'Onion', price: 150, image: Onion, category: 'Vegetables' },
  { id: 13, name: 'Potato', price: 40, image: Potato, category: 'Vegetables' },
  { id: 14, name: 'Sweetcorn', price: 34, image: Sweetcorn, category: 'Vegetables' },

  { id: 15, name: 'Sona Masoori Rice', price: 719, image: Rice, category: 'Rice' },
  { id: 16, name: 'EveryDay Rice', price: 325, image: Rice1, category: 'Rice' },
  { id: 17, name: 'Basmati Rice', price: 730, image: Rice2, category: 'Rice' },
  { id: 18, name: 'HMT Kolam Rice', price: 128, image: Rice3, category: 'Rice' },
  { id: 19, name: 'Basmati Classic Rice', price: 1155, image: Rice4, category: 'Rice' },
  { id: 20, name: 'Jeera Rice', price: 119, image: Rice5, category: 'Rice' },

  { id: 21, name: 'Anjeer', price: 119, image: Anjeer, category: 'Dry Fruits' },
  { id: 22, name: 'Badam', price: 119, image: Badam, category: 'Dry Fruits' },
  { id: 23, name: 'Dates', price: 119, image: Dates, category: 'Dry Fruits' },
  { id: 24, name: 'Flaxseeds', price: 119, image: Flaxseeds, category: 'Dry Fruits' },
  { id: 25, name: 'Kaju', price: 119, image: Kaju, category: 'Dry Fruits' },
  { id: 26, name: 'Kishmish', price: 119, image: Kishmish, category: 'Dry Fruits' },
  { id: 27, name: 'Pista', price: 119, image: Pista, category: 'Dry Fruits' },
  { id: 28, name: 'Pumpkin', price: 119, image: pumpkin, category: 'Dry Fruits' },
  { id: 29, name: 'Sunflower', price: 119, image: Sunflower, category: 'Dry Fruits' },
  { id: 30, name: 'Walnut', price: 119, image: walnut, category: 'Dry Fruits' },

  { id: 31, name: 'Fortune Kachighani Oil', price: 119, image: Fortune, category: 'Ghee & Cooking Oils' },
  { id: 32, name: 'Fortune Ricebran Oil', price: 119, image: Fortune1, category: 'Ghee & Cooking Oils' },
  { id: 33, name: 'Fortune Soyahealth Oil', price: 119, image: Fortune2, category: 'Ghee & Cooking Oils' },
  { id: 34, name: 'Fortune Sunlite Oil', price: 119, image: Fortune3, category: 'Ghee & Cooking Oils' },
  { id: 35, name: 'Freedom Groundnut Oil', price: 119, image: Freedom, category: 'Ghee & Cooking Oils' },
  { id: 36, name: 'Freedom Mustard Oil', price: 119, image: Freedom1, category: 'Ghee & Cooking Oils' },
  { id: 37, name: 'Freedom Ricebran Oil', price: 119, image: Freedom2, category: 'Ghee & Cooking Oils' },
  { id: 38, name: 'Freedom Sunflower Oil', price: 119, image: Freedom3, category: 'Ghee & Cooking Oils' },
  { id: 39, name: 'Goldwinner Sunflower Oil', price: 119, image: Goldwinner, category: 'Ghee & Cooking Oils' },
  { id: 40, name: 'Heritage Buffalo Ghee', price: 119, image: Heritage, category: 'Ghee & Cooking Oils' },
  { id: 41, name: 'Heritage Cow Ghee', price: 119, image: Heritage1, category: 'Ghee & Cooking Oils' },
  { id: 42, name: 'Jersey Cow Ghee', price: 119, image: Jersey, category: 'Ghee & Cooking Oils' },
  { id: 43, name: 'Shreeja Cow Ghee', price: 119, image: Shreeja, category: 'Ghee & Cooking Oils' },
  { id: 44, name: 'Nadhini Cow Ghee', price: 119, image: nadhini, category: 'Ghee & Cooking Oils' },

];

const Home = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products based on the selected category
  const filteredProducts = 
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Products</h2>

      {/* Category Filter Buttons */}
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        {['All', 'Fruits', 'Vegetables', 'Rice', 'Dry Fruits', 'Ghee & Cooking Oils'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              margin: '5px',
              padding: '10px 20px',
              backgroundColor: selectedCategory === category ? '#007bff' : '#e0e0e0',
              color: selectedCategory === category ? '#fff' : '#000',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))
        ) : (
          <p style={{ textAlign: 'center', fontSize: '18px' }}>
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
