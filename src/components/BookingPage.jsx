import React, { useState } from "react";
import "./BookingPage.css"; // Custom CSS file for styling
import { db } from "./firebaseConfig"; // Import Firestore instance
import { collection, addDoc } from "firebase/firestore";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const bookingsCollection = collection(db, "bookings"); // Reference to 'bookings' collection
      await addDoc(bookingsCollection, formData); // Save data to Firestore
      alert("Booking confirmed! Thank you for choosing us.");
      setFormData({
        name: "",
        email: "",
        checkIn: "",
        checkOut: "",
        roomType: "",
        guests: 1,
      }); // Reset form
    } catch (error) {
      console.error("Error saving booking: ", error);
      alert("An error occurred while saving your booking. Please try again.");
    }
  };

  return (
    <div className="booking-container">
      <h2>Book Your Stay</h2>
      <p>Plan your perfect getaway. Fill out the form below to reserve your room.</p>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkIn">Check-In Date</label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkOut">Check-Out Date</label>
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="roomType">Room Type</label>
          <select
            id="roomType"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a room type
            </option>
            <option value="Ocean View Suite">Ocean View Suite</option>
            <option value="Beachfront Villa">Beachfront Villa</option>
            <option value="Overwater Bungalow">Overwater Bungalow</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingPage;


