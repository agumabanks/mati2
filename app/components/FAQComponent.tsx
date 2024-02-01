// components/FAQComponent.tsx

import React, { useState } from 'react';

// Interface for FAQ item
interface FAQItem {
  question: string;
  answer: string;
}

// Sample data for FAQ
const sampleFAQ: FAQItem[] = [
  {
    question: 'How can I contact customer support?',
    answer: 'You can reach our customer support team through the contact form on our Help page.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we provide international shipping to various countries. Please check our shipping policies for more details.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept a variety of payment methods, including credit/debit cards, PayPal, and more. Check our payment options for the complete list.',
  },
 
  {
    question: 'Are your products eco-friendly?',
    answer: 'We are committed to sustainability. Many of our products are eco-friendly, and we strive to reduce our environmental impact.',
  },
  {
    question: 'Can I track my order?',
    answer: 'Yes, you can track your order by logging into your account or using the tracking number provided in your shipping confirmation email.',
  },
  {
    question: 'Is there a warranty on your products?',
    answer: 'Our products come with a standard warranty. Please refer to our warranty policy for more information.',
  },
 
  {
    question: 'Do you have a physical store?',
    answer: 'Currently, we operate as an online-only store. You can browse and purchase our products through our website.',
  },
  {
    question: 'Are there any discounts or promotions?',
    answer: 'We frequently run promotions and offer discounts. Keep an eye on our website and subscribe to our newsletter for the latest updates.',
  },
 
];

const FAQComponent: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-8">Frequently Asked Questions</h2>
      {sampleFAQ.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex justify-between items-center cursor-pointer border-b border-gray-500 p-4"
            onClick={() => handleToggle(index)}
          >
            <h3 className="text-xl font-semibold">{faq.question}</h3>
            <span>{expandedIndex === index ? '▲' : '▼'}</span>
          </div>
          {expandedIndex === index && (
            <div className="p-4 bg-gray-100">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
