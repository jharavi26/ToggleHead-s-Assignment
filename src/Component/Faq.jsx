import React, { useState } from 'react';
import "../styles/faq.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: 'How does an investor gain access to MF Utility?', answer: 'Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
    { question: 'Will investors be able to have multiple Common Account Numbers?', answer: 'Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
    { question: 'How does an investor gain access to MF Utility?', answer: 'Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h2>FAQ</h2>
      <div className="faq-items">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => handleToggle(index)}>
              <span>{faq.question}</span>
              <button className={`toggle-btn ${activeIndex === index ? 'active' : ''}`}>
                {activeIndex === index ? '-' : '+'}
              </button>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;