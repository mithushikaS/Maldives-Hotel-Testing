import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './HeroSection.css'; // Import the CSS file for styling

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate for routing

  const handleBookNowClick = () => {
    navigate('/booking'); // Navigate to the booking page
  };

  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <h1>Welcome to Paradise</h1>
        <p>Experience the Maldives like never before</p>
        <button className="book-now-btn" onClick={handleBookNowClick}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

