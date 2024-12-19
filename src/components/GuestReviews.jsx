// GuestReviews.jsx
import React from 'react';
import './GuestReviews.css'; // Import the CSS file for styling

const reviewsData = [
  {
    name: 'John Doe',
    review: 'Amazing stay! The resort was breathtaking and the staff were incredibly friendly. Highly recommended for a relaxing vacation.',
    date: 'September 2024',
  },
  {
    name: 'Jane Smith',
    review: 'A truly unforgettable experience. The overwater bungalow was stunning, and the dining was top-notch. We will definitely be back!',
    date: 'August 2024',
  },
  {
    name: 'Mike Johnson',
    review: 'The perfect getaway! Loved the spa and the sunset views. The service was exceptional, making our trip extra special.',
    date: 'July 2024',
  },
];

const GuestReviews = () => {
  return (
    <div className="reviews-container">
      <h2>Guest Reviews & Testimonials</h2>
      <div className="reviews-grid">
        {reviewsData.map((review, index) => (
          <div className="review-card" key={index}>
            <p className="review-text">"{review.review}"</p>
            <p className="review-author">- {review.name}, {review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestReviews;
