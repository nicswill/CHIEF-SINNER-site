import React from 'react';

const Shop: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center mb-12 tracking-wider">
        SHOP CHIEF SINNER
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

        {/* T-Shirts (LIVE) */}
        <div id="tshirts" className="border border-red-600 p-6 shadow-xl bg-black">
          <h2 className="text-2xl font-bold text-red-500 mb-4">T-Shirts</h2>
          <p className="text-gray-300 mb-4">
            The official CHIEF SINNER statement tee — available in multiple bold colors.
          </p>

          <img 
            src="https://cdn.shopify.com/s/files/1/0554/2721/2213/products/mockup-42110e3c_720x.jpg?v=1700521660" 
            alt="Chief Sinner T-Shirt" 
            className="w-full max-w-xs mx-auto mb-4 rounded shadow-lg"
          />

          <a 
            href="https://shopcno.com/products/chief-sinner-unisex-softstyle-t-shirt-faith-and-belief-statement-tee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition-colors duration-300"
          >
            BUY NOW
          </a>
        </div>

        {/* Hats - Coming Soon */}
        <div id="hats" className="border border-gray-700 p-6 shadow-inner bg-black text-center">
          <h2 className="text-2xl font-bold text-gray-400 mb-2">Hats</h2>
          <p className="text-gray-500 italic">Coming Soon</p>
        </div>

        {/* Sweatshirts - Coming Soon */}
        <div id="sweatshirts" className="border border-gray-700 p-6 shadow-inner bg-black text-center">
          <h2 className="text-2xl font-bold text-gray-400 mb-2">Sweatshirts</h2>
          <p className="text-gray-500 italic">Coming Soon</p>
        </div>

        {/* Sweatpants - Coming Soon */}
        <div id="sweatpants" className="border border-gray-700 p-6 shadow-inner bg-black text-center">
          <h2 className="text-2xl font-bold text-gray-400 mb-2">Sweatpants</h2>
          <p className="text-gray-500 italic">Coming Soon</p>
        </div>

        {/* Sneakers - Coming Soon */}
        <div id="sneakers" className="border border-gray-700 p-6 shadow-inner bg-black text-center">
          <h2 className="text-2xl font-bold text-gray-400 mb-2">Sneakers</h2>
          <p className="text-gray-500 italic">Coming Soon</p>
        </div>

      </div>
    </div>
  );
};

export default Shop;
