import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoomsAndSuites.css';

const roomsData = [
  {
    title: 'Ocean View Suite',
    description: 'A luxurious suite with stunning views of the ocean, a private balcony, and modern amenities.',
    price: '$500 per night',
    imageUrl: '/images/ocean.webp',
  },
  {
    title: 'Beachfront Villa',
    description: 'Enjoy direct access to the beach from your villa, featuring a private pool and outdoor shower.',
    price: '$700 per night',
    imageUrl: '/images/beach.webp',
  },
  {
    title: 'Overwater Bungalow',
    description: 'Experience the ultimate luxury with an overwater bungalow offering panoramic views of the lagoon.',
    price: '$900 per night',
    imageUrl: '/images/sea.jpg',
  },
];

const RoomsAndSuites = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/booking'); // Navigate to the booking page
  };

  return (
    <div className="rooms-container">
      <h2>Rooms & Suites</h2>
      <div className="rooms-grid">
        {roomsData.map((room, index) => (
          <div className="room-card" key={index}>
            <img src={room.imageUrl} alt={room.title} className="room-image" />
            <h3>{room.title}</h3>
            <p>{room.description}</p>
            <p className="room-price">{room.price}</p>
            <button className="book-now-btn" onClick={handleBooking}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsAndSuites;

