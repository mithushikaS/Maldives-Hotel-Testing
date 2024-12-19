import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import RoomsAndSuites from './components/RoomsAndSuites';
import DiningAndRestaurants from './components/DiningAndRestaurants';
import SpecialOffers from './components/SpecialOffers';
import Gallery from './components/Gallery';
import GuestReviews from './components/GuestReviews';
import LocationAndGettingHere from './components/LocationAndGettingHere';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';

// Define HomePage as a functional component
const HomePage = () => (
  <div>
    <HeroSection />
    <AboutUs />
    <RoomsAndSuites />
    <DiningAndRestaurants />
    <SpecialOffers />
    <Gallery />
    <GuestReviews />
    <LocationAndGettingHere />
    <ContactUs />
    <Blog />
    <FAQ />
    <Footer />
  </div>
);

// Main App Component
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<HomePage />} />

        {/* Booking Page Route */}
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

export default App;














