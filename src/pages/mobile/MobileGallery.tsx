import React from 'react';

const MobileGallery: React.FC = () => {
  const images = [
    { id: 1, src: 'https://source.unsplash.com/random/800x600/?soccer-match', alt: 'Soccer Match' },
    { id: 2, src: 'https://source.unsplash.com/random/800x600/?soccer-training', alt: 'Training Session' },
    { id: 3, src: 'https://source.unsplash.com/random/800x600/?soccer-trophy', alt: 'Trophy Ceremony' },
    { id: 4, src: 'https://source.unsplash.com/random/800x600/?soccer-team', alt: 'Team Photo' },
    { id: 5, src: 'https://source.unsplash.com/random/800x600/?soccer-goal', alt: 'Scoring a Goal' },
    { id: 6, src: 'https://source.unsplash.com/random/800x600/?soccer-fans', alt: 'Fan Support' },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Gallery</h1>
      <div className="grid gap-4">
        {images.map((image) => (
          <div key={image.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={image.src} alt={image.alt} className="w-full h-48 object-cover" />
            <div className="p-3">
              <p className="text-gray-700 text-sm">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-xl font-bold mb-4">Check out more content on social media:</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white px-3 py-2 rounded text-sm hover:bg-pink-700">Instagram</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700">YouTube</a>
        </div>
      </div>
    </div>
  );
};

export default MobileGallery;