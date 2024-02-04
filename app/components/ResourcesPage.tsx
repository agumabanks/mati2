'use client'

import React, { useState } from 'react';
import FAQComponent from './FAQComponent';
import CareersComponent from './CareersComponent';
import CompanyNews from './CompanyNews';
import ScrollButton from './scrollbutton';
import { motion } from 'framer-motion';
import { staggerTransition } from './framer-motion/staggerTransition';

// Interface for Help Form
interface HelpForm {
  title: string;
  description: string;
}



// Interface for Help Form
interface HelpForm {
    title: string;
    description: string;
  }
  
  // Interface for Code of Conduct
  interface CodeOfConduct {
    title: string;
    content: string;
  }
  
  // Interface for News
  interface NewsItem {
    title: string;
    date: string;
    content: string;
  }
  
  // Interface for Affiliates Relations
  interface AffiliatesRelations {
    title: string;
    description: string;
  }
  
  // Interface for FAQ
  interface FAQItem {
    question: string;
    answer: string;
  }
  
  // Interface for Career Opportunities
  interface CareerOpportunity {
    position: string;
    location: string;
    description: string;
  }
  
  const ResourcesPage: React.FC = () => {
    // Sample data for Help Form
    const helpFormData: HelpForm = {
      title: 'Help Form',
      description: 'Need assistance or have a question? Fill out our help form, and our support team will get back to you as soon as possible.',
    };
  
    // Sample data for Code of Conduct
    const codeOfConductData: CodeOfConduct = {
      title: 'Code of Conduct',
      content: 'Read our code of conduct to understand the guidelines and principles that govern our community and interactions.',
    };
  
    // Sample data for News
    const newsData: NewsItem[] = [
      {
        title: 'Exciting News!',
        date: 'January 10, 2024',
        content: 'Stay tuned for upcoming events and product releases. We have exciting news to share with our community!',
      },
      // Add more news items as needed
    ];
  
    // Sample data for Affiliates Relations
    const affiliatesData: AffiliatesRelations = {
      title: 'Affiliates Relations',
      description: 'Learn about our affiliates program and how you can partner with us.',
    };
  
    // Sample data for FAQ
    const faqData: FAQItem[] = [
      {
        question: 'How can I contact customer support?',
        answer: 'You can reach our customer support team through the contact form on our Help page.',
      },
      // Add more FAQ items as needed
    ];
  
    // Sample data for Career Opportunities
    const careerData: CareerOpportunity[] = [
      {
        position: 'Frontend Developer',
        location: 'Remote',
        description: 'Join our team as a frontend developer and contribute to building cutting-edge web applications.',
      },
      // Add more career opportunities as needed
    ];
const HelpResourcesPage: React.FC = () => {
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform any client-side validation if needed

    // Simulate sending data to support email (replace with actual implementation)
    const emailContent = `
      Message: ${formData.message}
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
    `;

    // Log the email content to the console (replace with actual email sending logic)
    console.log('Email content:', emailContent);
  };

  // Sample data for Help Form
  const helpFormData: HelpForm = {
    title: 'Technical Help and Support    ',
    description: 'Need assistance or have a question? Fill out our help form, and our support team will get back to you as soon as possible.',
  };

  // function staggerTranslation(arg0: number): import("framer-motion").Variants | undefined {
  //   throw new Error('Function not implemented.');
  // }

  return (
    <section className="border-t-2 border-gray-300 pt-8 mt-8">
    

    <motion.div 
      variants={staggerTransition(0.025)}
      className='grid grid-cols-1 sm:grid-cols-3 mt-12'>
        <h2 className="col-span-1 sm:col-span-1 text-3xl font-semibold mb-4">{helpFormData.title}</h2>
        
        <div className="col-span-1 sm:col-span-2">
        
        <div className=''>
                <p className='text-lg px-12 '>
                {helpFormData.description}
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 p-12 '>
                    <div>
                      <p className='text-lg font-bold py-2 '>For Technical Help and Support:</p>
                      <p><span className='font-bold'>Email: { }</span> support@maticent.com</p>
                      <p> <span className='font-bold'>WhatsApp: { }</span> +243 (0) 999 999 146</p>
                      <p><span className='font-bold'>Support hours: { }</span> Monday to Friday, 9 AM - 5 PM</p>



                    </div>

                    <div>
                      <p className='text-lg font-bold py-2 '>For Software Support:</p>
                      <p><span className='font-bold'>Email: </span>support@maticent.com</p>
                      <p> <span className='font-bold'>WhatsApp:</span> +243 (0) 853 304 015</p>
                      <p><span className='font-bold'>Support hours:</span> Monday to Friday, 9 AM - 5 PM</p>
                    </div>



                </div>


                <form onSubmit={handleSubmit} className="my-4 px-12">
                    <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                        />
                    </div>
                    </div>

                    <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                    </div>

                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Submit
                    </button>
                </form>



            </div>
        </div>
           
    </motion.div>

    
    </section>
  );
};

// export default ResourcesPage;



  return (
    <div className="container mx-auto min-h-screen transition-colors duration-150 w-full px-4 pt-5 pb-9 md:px-6 md:pb-10 md:pt-6 lg:px-7 lg:pb-12 3xl:px-8 ">
     
     <div className='min-h-screen w-full '>
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <div className="w-1/2 text-5xl font-bold px-10 pb-5">
            <div className="flex flex-col items-center justify-between">
              <div className="text-7xl font-extrabold  text-center mb-4 md:mb-0">The rise of</div>
              <div className=" font-extrabold italic   text-center md:mt-4 md:ml-2">African Technology</div>
            </div>
          </div>


        <div className='text-center text-lg	w-1/2 tracking-wide'>
        We're a dynamic tech company leading the African tech revolution, based in Kinshasa (DRC). Our diverse team of 
        experts collaboratively envisions 
        and assesses groundbreaking ideas, driving the mission to elevate African technology.      
        </div>

        <div className='flex sticky top-40 z-50 p-5 '>
        <ScrollButton targetId="news" displayName="Matic News" />
        <ScrollButton targetId="Careers" displayName="Careers" />
        <ScrollButton targetId="faq" displayName="FAQ" />
        <ScrollButton targetId="help" displayName="Help" />

        </div>
      </div>

     </div>

      <section id='news' className="pt-8 mt-8">
        {/* <h2 className="text-3xl font-semibold mb-4">News</h2> */}
        <CompanyNews />
      </section>

      <section id='help' className=" pt-8 mt-8">
       
        <HelpResourcesPage />
      </section>


      <section id='Careers' className="border-t-2 border-gray-300 pt-8 mt-8">
        
        <div className='grid grid-cols-1 sm:grid-cols-3 my-12'>
            <h2 className="col-span-1 sm:col-span-1 text-3xl font-semibold mb-4">Career Opportunities</h2>
            
            <div className="col-span-1 sm:col-span-2">
                <CareersComponent  /> 
            </div>
              
            </div>
    
      </section>
        

    <section id='faq' className="border-t-2 border-gray-300 pt-8 mt-8">
    
        

        <div className='grid grid-cols-1 sm:grid-cols-3 my-12'>
            <h2 className="col-span-1 sm:col-span-1 text-3xl font-semibold mb-4">FAQs</h2>
            
            <div className="col-span-1 sm:col-span-2">
                <FAQComponent />
            </div>
              
        </div>
    </section>

    </div>
  );
};

export default ResourcesPage;
