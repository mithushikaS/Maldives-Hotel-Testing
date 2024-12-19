// Gallery.jsx
import React from 'react';
import './Gallery.css'; // Import the CSS file for styling

const galleryImages = [
  {
    src: '/images/beach1.jpg',
    alt: 'Beautiful beach view at the resort',
  },
  {
    src: '/images/spa.jpg',
    alt: 'Luxurious spa at the hotel',
  },
  {
    src: '/images/pool.jpg',
    alt: 'Infinity pool with ocean view',
  },
  {
    src: '/images/restaurant.jpg',
    alt: 'Fine dining restaurant',
  },
  {
    src: '/images/room.jpg',
    alt: 'Elegant hotel room',
  },
  {
    src: '/images/sunset.jpg',
    alt: 'Sunset view from the resort',
  },
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
