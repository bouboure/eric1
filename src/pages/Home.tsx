import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to My Soccer Journey</h1>
      
      <Slider {...sliderSettings} className="mb-12">
        <div>
          <img src="https://source.unsplash.com/random/800x400/?soccer" alt="Soccer 1" className="w-full h-96 object-cover" />
        </div>
        <div>
          <img src="https://source.unsplash.com/random/800x400/?football" alt="Soccer 2" className="w-full h-96 object-cover" />
        </div>
        <div>
          <img src="https://source.unsplash.com/random/800x400/?soccer-field" alt="Soccer 3" className="w-full h-96 object-cover" />
        </div>
      </Slider>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700">
          Hi, I'm [Your Name], a passionate young soccer player with big dreams. I've been playing soccer since I was 5 years old, and it's become an integral part of my life. Through this website, I want to share my journey, experiences, and growth as I pursue my goal of becoming a professional soccer player.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
          <ul className="list-disc list-inside">
            <li className="mb-2"><Link to="/blog" className="text-blue-600 hover:underline">My First International Tournament</Link></li>
            <li className="mb-2"><Link to="/blog" className="text-blue-600 hover:underline">Training Routine: A Day in My Life</Link></li>
            <li className="mb-2"><Link to="/blog" className="text-blue-600 hover:underline">Overcoming Injuries: My Comeback Story</Link></li>
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Follow My Journey</h2>
          <p className="mb-4">Stay updated with my latest matches, training sessions, and behind-the-scenes content on social media:</p>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">YouTube</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;