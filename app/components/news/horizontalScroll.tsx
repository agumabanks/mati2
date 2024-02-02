'use client'
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface NewsPost {
    id: number;
    title: string;
    date: string;
    description: string;
    imageUrl: string;
  }



interface NewsPostProps {
  post: NewsPost;
}


const newsPosts: NewsPost[] = [
    {
      id: 1,
      title: 'Exploring Expansion Opportunities in Kenya',
      date: 'Date Here',
      description: 'Highlights Matic\'s efforts to tailor computers for the African market and explore synergies with the Kenyan tech landscape.',
      imageUrl: '/picsfloder/news/n1.png',
    },
    {
      id: 2,
      title: 'Emerging Congolese Startup Shines at the Official Launch of Ici et Ailleurs Magazine in 2022',
      date: 'Date Here',
      description: 'Discusses Matic\'s compelling presentation, achievements, and vision for the future at the launch, showcasing its cutting-edge computers in Congo.',
      imageUrl: '/picsfloder/news/n2.png',
    },
    {
      id: 3,
      title: 'Unlocking Congo\'s Tech Potential: Matic Enterprises at the East African Entrepreneurship and Conference Expo 2023',
      date: 'Date Here',
      description: 'Explores Matic\'s role in shedding light on tech opportunities in Congo and the need for collaborations and investments in the Congolese tech ecosystem.',
      imageUrl: '/picsfloder/news/n3.png',
    },
    {
      id: 4,
      title: 'Exploring Collaborative Ventures at US Africa Business Summit in Washington DC',
      date: 'Date Here',
      description: 'Details Matic\'s exploration of collaborative ventures and partnerships with international entities during the US Africa Business Summit.',
      imageUrl: '/picsfloder/news/n4.png',
    },
    {
      id: 5,
      title: 'Tech Innovation Partnership: Matic Enterprises and the Congolese Government Unite',
      date: 'Date Here',
      description: 'Discusses the collaborative initiatives between Matic Enterprises and the Ministry of SMEs in Congo, focusing on technology support for startups and SMEs.',
      imageUrl: '/picsfloder/news/n5.png',
    },
    {
      id: 6,
      title: 'Global Expansion: Matic Enterprises Inks OEM Agreement with Chinese Factory',
      date: 'Date Here',
      description: 'Highlights the pivotal moment in 2017 when Matic signed an OEM agreement with a Chinese factory in Shenzhen, emphasizing global recognition and expansion.',
      imageUrl: '/picsfloder/news/n6.png',
    },
    {
      id: 7,
      title: 'Taking the Stage at the Africa SME Championship Forum in Kampala',
      date: 'Date Here',
      description: 'Explores Matic\'s active participation in knowledge-sharing sessions, networking, and collaboration opportunities at the forum to support SME growth.',
      imageUrl: '/picsfloder/news/n7.png',
    },
    {
      id: 8,
      title: ' Unveiling Technological Marvels: A Showcase for the Local Community',
      date: 'Date Here',
      description: 'Details Matic\'s product presentation and interactive demonstrations, showcasing technology designed to address local community challenges.',
      imageUrl: '/picsfloder/news/n8.png',
    },
    {
      id: 9,
      title: ' A Top 10 Innovator in Uganda – Milestone Achievement in 2017',
      date: 'Date Here',
      description: 'Reflects on Matic\'s impactful presence in Uganda, participation in tech events, and contribution to Uganda\'s innovation ecosystem.',
      imageUrl: '/picsfloder/news/n9.png',
    },
    {
      id: 10,
      title: 'Awards and Recognition: Matic Enterprises Among Top 50 in the Africa Entrepreneurship Award 2017',
      date: 'Date Here',
      description: 'Celebrates Matic\'s achievement in securing a spot among the top 50 award winners of the Africa Entrepreneurship Award, highlighting the company\'s positive impact.',
      imageUrl: '/picsfloder/news/n10.png',
    },
    { id: 11, 
      title: 'Matic Enterprises Joins East Africa Manufacturer Association: A Catalyst for Regional Growth',
      date: 'Date Here',
      description: 'Discusses Matic\'s decision to become a member of the East Africa Manufacturer Association, positioning the company as a catalyst for regional growth and collaboration.',
      imageUrl: '/picsfloder/news/n11.png',
    },
    { id:12,
      title: 'Empowering Engineers: Matic Enterprises and Intellimedia Networks\' Strategic Partnership with KCB Leadership Center',
      date: 'Date Here',
      description: 'Explores the collaboration\'s focus on empowering Matic\'s engineering team through tailored training programs at the KCB Leadership Center.',
      imageUrl: '/picsfloder/news/n12.png',
    },
  ];
  

const NewsPostCard: React.FC<NewsPostProps> = ({ post }) => {
  return (
    
    <div className="h-full w-auto bg-slate-200 hover:bg-slate-50 
                    p-4 shadow-lg  rounded  hover:shadow-lg m-4 dark:text-gray-500">
      {/* Your post card content */}
      <img  className="w-full h-[200px]  block object-cover  rounded-md"  src={post.imageUrl}  alt={post.title} />

      <h3 className='text-lg font-bold line-clamp-2 mt-5 dark:text-gray-600'>{post.title}</h3>
      <p className='line-clamp-3 hover:line-clamp-5 pt-4 mb-4'>{post.description}</p>
      {/* Add other elements as needed */}
    </div>




  );
};

const AutoHorizontalScroll: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust as needed
  };

  return (
    <div className="auto-horizontal-scroll p-2">
      <Slider {...settings}>
        {newsPosts.map((post) => (
          <NewsPostCard key={post.id} post={post} />
        ))}
      </Slider>
    </div>
  );
};

export default AutoHorizontalScroll;
