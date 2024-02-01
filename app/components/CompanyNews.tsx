// components/CompanyNews.tsx

import React from 'react';
import Image from 'next/image';


interface NewsPost {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

const CompanyNews: React.FC = () => {
  

  const newsPosts: NewsPost[] = [
    {
      title: 'Exploring Expansion Opportunities in Kenya',
      date: 'Date Here',
      description: 'Highlights Matic\'s efforts to tailor computers for the African market and explore synergies with the Kenyan tech landscape.',
      imageUrl: '/picsfloder/news/n1.png',
    },
    {
      title: 'Emerging Congolese Startup Shines at the Official Launch of Ici et Ailleurs Magazine in 2022',
      date: 'Date Here',
      description: 'Discusses Matic\'s compelling presentation, achievements, and vision for the future at the launch, showcasing its cutting-edge computers in Congo.',
      imageUrl: '/picsfloder/news/n2.png',
    },
    {
      title: 'Unlocking Congo\'s Tech Potential: Matic Enterprises at the East African Entrepreneurship and Conference Expo 2023',
      date: 'Date Here',
      description: 'Explores Matic\'s role in shedding light on tech opportunities in Congo and the need for collaborations and investments in the Congolese tech ecosystem.',
      imageUrl: '/picsfloder/news/n3.png',
    },
    {
      title: 'Exploring Collaborative Ventures at US Africa Business Summit in Washington DC',
      date: 'Date Here',
      description: 'Details Matic\'s exploration of collaborative ventures and partnerships with international entities during the US Africa Business Summit.',
      imageUrl: '/picsfloder/news/n4.png',
    },
    {
      title: 'Tech Innovation Partnership: Matic Enterprises and the Congolese Government Unite',
      date: 'Date Here',
      description: 'Discusses the collaborative initiatives between Matic Enterprises and the Ministry of SMEs in Congo, focusing on technology support for startups and SMEs.',
      imageUrl: '/picsfloder/news/n5.png',
    },
    {
      title: 'Global Expansion: Matic Enterprises Inks OEM Agreement with Chinese Factory',
      date: 'Date Here',
      description: 'Highlights the pivotal moment in 2017 when Matic signed an OEM agreement with a Chinese factory in Shenzhen, emphasizing global recognition and expansion.',
      imageUrl: '/picsfloder/news/n6.png',
    },
    {
      title: 'Taking the Stage at the Africa SME Championship Forum in Kampala',
      date: 'Date Here',
      description: 'Explores Matic\'s active participation in knowledge-sharing sessions, networking, and collaboration opportunities at the forum to support SME growth.',
      imageUrl: '/picsfloder/news/n7.png',
    },
    {
      title: ' Unveiling Technological Marvels: A Showcase for the Local Community',
      date: 'Date Here',
      description: 'Details Matic\'s product presentation and interactive demonstrations, showcasing technology designed to address local community challenges.',
      imageUrl: '/picsfloder/news/n8.png',
    },
    {
      title: ' A Top 10 Innovator in Uganda – Milestone Achievement in 2017',
      date: 'Date Here',
      description: 'Reflects on Matic\'s impactful presence in Uganda, participation in tech events, and contribution to Uganda\'s innovation ecosystem.',
      imageUrl: '/picsfloder/news/n9.png',
    },
    {
      title: 'Awards and Recognition: Matic Enterprises Among Top 50 in the Africa Entrepreneurship Award 2017',
      date: 'Date Here',
      description: 'Celebrates Matic\'s achievement in securing a spot among the top 50 award winners of the Africa Entrepreneurship Award, highlighting the company\'s positive impact.',
      imageUrl: '/picsfloder/news/n10.png',
    },
    {
      title: 'Matic Enterprises Joins East Africa Manufacturer Association: A Catalyst for Regional Growth',
      date: 'Date Here',
      description: 'Discusses Matic\'s decision to become a member of the East Africa Manufacturer Association, positioning the company as a catalyst for regional growth and collaboration.',
      imageUrl: '/picsfloder/news/n11.png',
    },
    {
      title: 'Empowering Engineers: Matic Enterprises and Intellimedia Networks\' Strategic Partnership with KCB Leadership Center',
      date: 'Date Here',
      description: 'Explores the collaboration\'s focus on empowering Matic\'s engineering team through tailored training programs at the KCB Leadership Center.',
      imageUrl: '/picsfloder/news/n12.png',
    },
  ];
  return (
    <div className=" py-16">
      <div className="container mx-auto rounded">
        <h2 className="text-4xl font-extrabold mb-12 text-center">Company News</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {newsPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer">
              <img  src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-1/2 hover:h-3/5  object-cover mb-4 rounded-sm" 
                    width={400}
                    height={32}
                />

              <h3 className="text-xl font-semibold line-clamp-1 my-2">{post.title}</h3>
              <p className="text-gray-500 mb-2">{post.date}</p>
              <p className="text-gray-700 line-clamp-4 hover:line-clamp-6">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyNews;
