// components/DigitalSolutions.tsx
"use client"
import React from 'react'; import Image from 'next/image';
import { useSpring, animated } from 'react-spring';

import {motion} from 'framer-motion'
import FaqComponent from './digitalPrductsFaqComponent';
import FaqDComponent from './digitalPrductsFaqComponent';
// export default function Home() {
//   return (
//     <>
//       <motion.h1
//         initial={{ fontSize: "0px", color: "#00000" }}
//         animate={{ fontSize: "200px", color: "#ff2994" }}
//         >
//         Welcome to the website
//       </motion.h1>
//     </> public\
//     )
//   }

interface DigitalSolution {
  name: string;
  image: string;
  description: string;
}

const DigitalSolutions: React.FC = () => {
  const digitalSolutions: DigitalSolution[] = [
    {
      name: 'Hospital Management System (HMS)',
      image: '/picsfloder/software/hms.png',
      description: 'A comprehensive solution for managing all aspects of a hospital, from patient records to appointment scheduling and billing.',
    },
    {
      name: 'Learning Management System (LMS)',
      image: '/picsfloder/software/lms.jpg',
      description: 'An e-learning platform that facilitates the creation, delivery, and tracking of online courses and training programs.',
    },
    {
      name: 'Point of Sale (POS)',
      image: '/picsfloder/software/point-of-sale-systems.png',
      description: 'A system for processing sales transactions, managing inventory, and providing real-time analytics for retail businesses.',
    },
    {
      name: 'Customer Relationship Management (CRM)',
      image: '/picsfloder/software/customer-relationship-management-advice.png',
      description: 'Helps businesses manage interactions with current and potential customers, streamline processes, and improve profitability.',
    },
    {
      name: 'Enterprise Resource Planning (ERP)',
      image: '/picsfloder/software/erp.jpg',
      description: 'Integrates core business processes such as finance, HR, and supply chain management into a unified system.',
    },
    {
      name: 'Human Resources Management System (HRMs)',
      image: '/picsfloder/software/hms.png',
      description: 'Facilitates HR processes, including employee data management, payroll, benefits administration, and performance tracking.',
    },
    {
      name: 'Content Management System (CMS)',
      image: '/picsfloder/software/cmr.png',
      description: 'Enables the creation, modification, and management of digital content, often used for websites and blogs.',
    },
    {
      name: 'E-commerce Platform',
      image: '/picsfloder/software/ecom.jpg',
      description: 'Provides a platform for online businesses to sell products or services, manage inventory, and process payments.',
    },
    {
      name: 'Supply Chain Management (SCM)',
      image: '/picsfloder/software/a6.png',
      description: 'Optimizes the end-to-end process of delivering products, from the procurement of raw materials to distribution.',
    },
    {
      name: 'Business Intelligence (BI)',
      image: '/picsfloder/software/bi.png',
      description: 'Utilizes data analysis tools and processes to help businesses make informed decisions and gain insights into their operations.',
    },

    {
      name: 'Simba KYC Solution (Simba)',
      image: 'https://images.unsplash.com/photo-1548783102-9eed000b70ef?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Utilizes data analysis tools and processes to help businesses make informed decisions and gain insights into their operations.',
    },
    
  ];



const DigitalSolutions = () => {
  const props = useSpring({
    opacity: 0,
    transform: 'translateY(150)',
    from: { opacity: 1, transform: 'translateY(10px)' },
    config: { duration: 2000 },
    delay: 150, // Adjust the delay as needed
  });

  return (
    <animated.div style={props} className='flex mb-5 text-black'>
      <h2 className="text-6xl font-extrabold text-center">Digital </h2>
      <h2 className="text-6xl font-extrabold text-center ml-2 italic ">Solutions</h2>
    </animated.div>
  );
};

// export default DigitalSolutions;




const faqs = [
  {
    question: 'Is Claude secure with my enterprise data?',
    answer: 'Yes, Claude uses industry-standard best practices for data handling and retention. See our Privacy Policy for more details. All commercial deployments are covered by Anthropic\'s Data Protection Addendum, which is available upon request.',
  },
  {
    question: 'Where can I see your model card?',
    answer: 'Please find our model card for Claude 2.0 and Claude 2.1 [here](#).',
  },
  {
    question: 'How does the API work?',
    answer: 'Our API is designed to be a backend that incorporates Claude into any application you’ve developed. Your application sends text to our API, then receives a response via server-sent events, a streaming protocol for the web. We have API documentation with drop-in example code in Python and Typescript to get you started.',
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
  // Add more FAQs
];

const faqData = [
  {
    solution: 'Hospital Management System (HMS)',
    faqs: [
      {
        question: 'Is patient data stored securely in the HMS?',
        answer: 'Yes, the HMS follows strict security measures to ensure the confidentiality and integrity of patient records.',
      },
      {
        question: 'How does the appointment scheduling feature work in HMS?',
        answer: 'The appointment scheduling module allows easy and efficient scheduling of patient appointments, optimizing the workflow for both staff and patients.',
      },
    ],
  },
  {
    solution: 'Learning Management System (LMS)',
    faqs: [
      
    ],
  },
  {
    solution: 'Point of Sale (POS)',
    faqs: [
      {
        question: 'How does the POS system manage inventory?',
        answer: 'The POS system tracks inventory in real-time, updating stock levels with each sale and providing insights into product availability.',
      },
      {
        question: 'Can the POS system generate sales analytics and reports?',
        answer: 'Yes, the POS system offers comprehensive analytics, helping businesses analyze sales trends, track top-performing products, and make data-driven decisions.',
      },
    ],
  },
  {
    solution: 'Customer Relationship Management (CRM)',
    faqs: [
      
    ],
  },
  {
    solution: 'Enterprise Resource Planning (ERP)',
    faqs: [
      {
        question: 'How does the ERP system integrate different business processes?',
        answer: 'The ERP system consolidates various business processes into a unified platform, ensuring seamless communication and data flow between different departments.',
      },
      {
        question: 'Can the ERP system scale with the growth of the business?',
        answer: 'Absolutely! The ERP system is designed to adapt and scale, accommodating the changing needs and expanding operations of a growing business.',
      },
    ],
  },
];




  return (
    <div className="bg-gray-100 py-6 px-4">
      <div className="container mx-auto">
        <div className='min-h-screen border-b border-gray-500 mb-20'>
          <div className='flex min-h-screen flex-col items-center justify-center p-4'>
          
            <div className='flex mb-5 dark:text-black '>
              <h2 className="text-7xl font-extrabold  text-center ">Digital </h2>
              <h2 className="text-7xl font-extrabold  text-center ml-2 transition ease-in-out delay-150 italic "> Solutions</h2>
            </div>
                    {/* <DigitalSolutions /> */}
                    {/* <motion.h1
                initial={{ fontSize: "0px", color: "#00000" }}
                animate={{ fontSize: "200px", color: "#ff2994" }}
                >
                Welcome to the website
              </motion.h1> */}

            <div className='flex flex-col text-lg px-10 py-2 items-center justify-center text-xl dark:text-black'>
               A next-generation AI Based digital solutions for your tasks, <span> no matter the scale</span>
            </div>

            <div>
              <button type="button" className='py-2 px-5 m-3 bg-red-700 hover:bg-blue-800  rounded hover:rounded-md text-white'>Contact Sales</button>

            </div>

          </div>
                  

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 border-b border-gray-500 mb-20">
          {digitalSolutions.map((solution, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer mb-20">
                <img   src={solution.image} alt={solution.name} 
                className="w-full h-32 object-cover mb-4 rounded-md"  width={400}
                height={32}
                 />
              <h3 className="text-xl font-semibold mb-2">{solution.name}</h3>
              <p className="text-gray-700">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 my-12 p-12'>
            <h2 className="col-span-1 sm:col-span-1 text-3xl font-semibold mb-4 dark:text-black">Frequently Asked Questions</h2>

            <div className="col-span-1 sm:col-span-2 ">
                <FaqDComponent  /> 
            </div>
              
        </div>

       
      </div>
    </div>
  );
};

export default DigitalSolutions;
