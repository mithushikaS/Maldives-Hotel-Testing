// DiningAndRestaurants.jsx
import React from 'react';
import './DiningAndRestaurants.css'; // Import the CSS file for styling

const diningData = [
  {
    title: 'The Ocean Grill',
    description: 'A seafood restaurant offering the freshest catch of the day with stunning ocean views.',
    imageUrl: '/images/ocean grill.webp',
  },
  {
    title: 'Tropical Breeze',
    description: 'A casual dining experience with a menu featuring local and international dishes.',
    imageUrl: '/images/Breeze.webp',
  },
  {
    title: 'Sunset Lounge',
    description: 'Enjoy cocktails and tapas with breathtaking sunset views from our rooftop bar.',
    imageUrl: '/images/Sunset.webp',
  },
];

const DiningAndRestaurants = () => {
  return (
    <div className="dining-container">
      <h2>Dining & Restaurants</h2>
      <div className="dining-grid">
        {diningData.map((restaurant, index) => (
          <div className="restaurant-card" key={index}>
            <img src={restaurant.imageUrl} alt={restaurant.title} className="restaurant-image" />
            <h3>{restaurant.title}</h3>
            <p>{restaurant.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiningAndRestaurants;
