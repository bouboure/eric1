import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  isMobile: boolean;
}

const Footer: React.FC<FooterProps> = ({ isMobile }) => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} justify-between items-center`}>
          <div className={`${isMobile ? 'mb-4' : 'mb-0'}`}>
            <h3 className="text-xl font-bold">Soccer Star</h3>
            <p className="text-sm">Follow my soccer journey</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Instagram size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <Youtube size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Soccer Star. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;