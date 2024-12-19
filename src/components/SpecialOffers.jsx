import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './SpecialOffers.css'; // Import the CSS file for styling

const offersData = [
  {
    title: 'Romantic Getaway',
    description: 'Enjoy a romantic escape with your partner, including a private dinner on the beach and a couples spa treatment.',
    discount: '20% off',
    imageUrl: '/images/romantic.webp',
  },
  {
    title: 'Family Fun Package',
    description: 'A perfect package for families, including kid-friendly activities, complimentary meals for children, and a family beach picnic.',
    discount: '15% off',
    imageUrl: '/images/family.webp',
  },
  {
    title: 'Honeymoon Special',
    description: 'Celebrate your honeymoon with exclusive benefits, such as a candlelight dinner, room upgrades, and complimentary champagne.',
    discount: '25% off',
    imageUrl: '/images/honeymoon.webp',
  },
];

const SpecialOffers = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleBookNow = () => {
    navigate('/booking'); // Navigate to the booking page
  };

  return (
    <div className="offers-container">
      <h2>Special Offers & Packages</h2>
      <div className="offers-grid">
        {offersData.map((offer, index) => (
          <div className="offer-card" key={index}>
            <img src={offer.imageUrl} alt={offer.title} className="offer-image" />
            <div className="offer-details">
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <span className="offer-discount">{offer.discount}</span>
              <button className="book-now-btn" onClick={handleBookNow}>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;

