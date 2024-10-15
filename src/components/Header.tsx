import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Soccer } from 'lucide-react';

interface HeaderProps {
  isMobile: boolean;
}

const Header: React.FC<HeaderProps> = ({ isMobile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Soccer size={24} className="mr-2" />
          <span>Soccer Star</span>
        </Link>
        {isMobile ? (
          <>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {isMenuOpen && (
              <nav className="absolute top-16 left-0 right-0 bg-blue-600 z-10">
                <div className="flex flex-col items-center py-4">
                  <Link to="/" className="py-2 hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>Home</Link>
                  <Link to="/blog" className="py-2 hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                  <Link to="/store" className="py-2 hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>Store</Link>
                  <Link to="/gallery" className="py-2 hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
                  <Link to="/contact" className="py-2 hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </div>
              </nav>
            )}
          </>
        ) : (
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-blue-200">Home</Link>
            <Link to="/blog" className="hover:text-blue-200">Blog</Link>
            <Link to="/store" className="hover:text-blue-200">Store</Link>
            <Link to="/gallery" className="hover:text-blue-200">Gallery</Link>
            <Link to="/contact" className="hover:text-blue-200">Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;