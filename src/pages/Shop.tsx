// Shop.tsx
import React from 'react';

const Shop: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Shop CHIEF SINNER</h1>
        <p className="text-lg text-gray-400 mb-12">Select a category below to view products</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* T-Shirts */}
          <a
            href="https://shopcno.com/products/chief-sinner-unisex-softstyle-t-shirt-faith-and-belief-statement-tee"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 hover:border-red-600 transition rounded p-6 flex flex-col items-center justify-center text-center"
          >
            <span className="text-xl font-semibold mb-2">T-Shirts</span>
            <span className="text-sm text-gray-400">View Available Styles</span>
          </a>

          {/* Hats */}
          <div className="border border-gray-700 rounded p-6 flex flex-col items-center justify-center text-center">
            <span className="text-xl font-semibold mb-2">Hats</span>
            <span className="text-sm text-gray-500">Coming Soon</span>
          </div>

          {/* Sweatshirts */}
          <div className="border border-gray-700 rounded p-6 flex flex-col items-center justify-center text-center">
            <span className="text-xl font-semibold mb-2">Sweatshirts</span>
            <span className="text-sm text-gray-500">Coming Soon</span>
          </div>

          {/* Sneakers */}
          <div className="border border-gray-700 rounded p-6 flex flex-col items-center justify-center text-center">
            <span className="text-xl font-semibold mb-2">Sneakers</span>
            <span className="text-sm text-gray-500">Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
