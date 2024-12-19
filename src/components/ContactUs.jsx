import React, { useState } from 'react';
import { db } from './firebaseConfig'; // Import Firestore instance
import { collection, addDoc } from 'firebase/firestore';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Add a new document to the "contacts" collection
      const docRef = await addDoc(collection(db, 'contacts'), formData);
      console.log('Document written with ID: ', docRef.id);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error sending message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      <div className="contact-info">
        <h3>Our Address</h3>
        <p>Paradise Island Resort, North Malé Atoll, Maldives</p>
        <p>Email: info@maldiveshotel.com</p>
        <p>Phone: +960 123-4567</p>
      </div>
    </div>
  );
};

export default ContactUs;

