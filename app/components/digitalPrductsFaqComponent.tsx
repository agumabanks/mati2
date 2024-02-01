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
    question: 'What is Simba KYC Solution?',
    answer: 'Simba KYC Solution is a robust Know Your Customer (KYC) platform that enables businesses to verify and authenticate the identity of their customers securely.',
  },
  {
    question: 'How does Simba KYC ensure data security?',
    answer: 'Simba KYC employs advanced encryption and security measures to safeguard sensitive customer information, ensuring compliance with data protection regulations.',
  },
  {
    question: 'Can Simba KYC integrate with existing systems?',
    answer: 'Yes, Simba KYC is designed with flexibility in mind and can seamlessly integrate with various systems and applications to enhance the KYC process.',
  },
  {
    question: 'Is Matic secure with my enterprise data?',
    answer: 'Yes, Matic uses industry-standard best practices for data handling and retention. See our Privacy Policy for more details. All commercial deployments are covered by Anthropic\'s Data Protection Addendum, which is available upon request.',
  },
  {
    question: 'Where can I see your model card?',
    answer: 'Please find our model card for Matic 2.0 and Matic 2.1 [here](#).',
  },
  {
    question: 'How does the API work?',
    answer: 'Our API is designed to be a backend that incorporates Matic into any application you’ve developed. Your application sends text to our API, then receives a response via server-sent events, a streaming protocol for the web. We have API documentation with drop-in example code in Python and Typescript to get you started.',
  },
  {
    question: 'What benefits does a CRM system offer to businesses?',
    answer: 'A CRM system enhances customer interactions, streamlines processes, and provides valuable insights to improve customer satisfaction and retention.',
  },
  {
    question: 'Is the CRM system customizable to fit specific business needs?',
    answer: 'Yes, the CRM system is designed with flexibility in mind, allowing businesses to customize fields, workflows, and reports according to their requirements.',
  },
  {
    question: 'Is patient data stored securely in the HMS?',
    answer: 'Yes, the HMS follows strict security measures to ensure the confidentiality and integrity of patient records.',
  },
  {
    question: 'How does the appointment scheduling feature work in HMS?',
    answer: 'The appointment scheduling module allows easy and efficient scheduling of patient appointments, optimizing the workflow for both staff and patients.',
  },
  {
    question: 'Is patient data stored securely in the HMS?',
    answer: 'Yes, the HMS follows strict security measures to ensure the confidentiality and integrity of patient records.',
  },
  {
    question: 'How does the appointment scheduling feature work in HMS?',
    answer: 'The appointment scheduling module allows easy and efficient scheduling of patient appointments, optimizing the workflow for both staff and patients.',
  },
  {
    question: 'Can I track the progress of students using the LMS?',
    answer: 'Absolutely! The LMS provides robust tracking and reporting features, allowing educators to monitor student progress and performance.',
  },
  {
    question: 'What types of content can be delivered through the LMS?',
    answer: 'The LMS supports a variety of content formats, including video lectures, quizzes, assignments, and interactive learning materials.',
  }, 
  {
    question: 'What does "HHH" mean?',
    answer: 'Helpful, Honest, and Harmless (HHH) are three components of building AI systems (like Matic) that are aligned with people’s interests. - Helpful: Matic wants to help the user  - Honest: Matic shares information it believes to be true, and avoids made-up information - Harmless: Matic will not cooperate in aiding the user in harmful activities While no existing model is close to perfection on HHH, we are pushing the research frontier in this area and expect to continue to improve. For more information about how we evaluate HHH in our models, you can read our paper here.',
  },         
];

const FaqDComponent: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mx-auto p-8">
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

export default FaqDComponent;
