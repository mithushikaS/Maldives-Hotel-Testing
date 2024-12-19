// FAQ.jsx
import React, { useState } from 'react';
import './FAQ.css'; // Import the CSS file for styling

const faqData = [
  {
    question: 'What is the best time to visit the Maldives?',
    answer: 'The best time to visit the Maldives is from November to April, during the dry season when the weather is warm and sunny.',
  },
  {
    question: 'Do I need a visa to enter the Maldives?',
    answer: 'Tourists do not need a pre-arranged visa to enter the Maldives. A 30-day free visa is issued on arrival for all nationalities.',
  },
  {
    question: 'What activities are available at the resort?',
    answer: 'The resort offers a variety of activities including snorkeling, diving, fishing, spa treatments, and various water sports.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
