import React from 'react';

const MobileStore: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Signature Soccer Jersey',
      price: 59.99,
      image: 'https://source.unsplash.com/random/300x300/?soccer-jersey',
    },
    {
      id: 2,
      name: 'Autographed Soccer Ball',
      price: 99.99,
      image: 'https://source.unsplash.com/random/300x300/?soccer-ball',
    },
    {
      id: 3,
      name: 'Training Shorts',
      price: 29.99,
      image: 'https://source.unsplash.com/random/300x300/?sports-shorts',
    },
    {
      id: 4,
      name: 'Fan T-Shirt',
      price: 24.99,
      image: 'https://source.unsplash.com/random/300x300/?sports-tshirt',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Store</h1>
      <div className="grid gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-3">${product.price.toFixed(2)}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 w-full">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileStore;