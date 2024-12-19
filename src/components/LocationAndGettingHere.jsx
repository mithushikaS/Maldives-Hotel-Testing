// LocationAndGettingHere.jsx
import React from 'react';
import './LocationAndGettingHere.css'; // Import the CSS file for styling

const LocationAndGettingHere = () => {
  return (
    <div className="location-container">
      <h2>Location & Getting Here</h2>
      <div className="location-content">
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193572.74416963414!2d73.04729482824061!3d3.2027789553471826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x249f5c5bcd2b72e3%3A0x399b1f8c17e9d946!2sMaldives!5e0!3m2!1sen!2s!4v1616607182801!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="location-details">
          <p>
            Our hotel is situated in the stunning Maldives, surrounded by crystal-clear waters and pristine beaches. The resort is accessible by a scenic seaplane flight from the main international airport in Malé.
          </p>
          <h3>Transportation Options</h3>
          <ul>
            <li>Seaplane transfer from Malé International Airport (30 minutes)</li>
            <li>Private speedboat transfers available upon request</li>
            <li>Local ferries operate to nearby islands</li>
          </ul>
          <h3>Address</h3>
          <p>Paradise Island Resort, North Malé Atoll, Maldives</p>
        </div>
      </div>
    </div>
  );
};

export default LocationAndGettingHere;
