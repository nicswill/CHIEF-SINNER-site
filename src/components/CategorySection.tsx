// CategorySection.tsx
import React from 'react';

const CategorySection: React.FC = () => {
  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Categories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* T-Shirts */}
          <a
            href="https://shopcno.com/products/chief-sinner-unisex-softstyle-t-shirt-faith-and-belief-statement-tee"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 rounded p-4 block"
          >
            <h3 className="text-xl font-semibold mb-4 text-center">T-Shirts</h3>
            <div className="flex flex-col items-center">
              <img
                src="/tshirt-front.jpg"
                alt="Chief Sinner T-Shirt Front"
                className="mb-4 w-full max-w-xs rounded"
              />
              <img
                src="/tshirt-back.jpg"
                alt="Chief Sinner T-Shirt Back"
                className="w-full max-w-xs rounded"
              />
            </div>
          </a>

          {/* Hats */}
          <div className="border border-gray-700 rounded p-6 flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-semibold mb-2">Hats</h3>
            <span className="text-sm text-gray-500">Coming Soon</span>
          </div>

          {/* Sweatshirts */}
          <div className="border border-gray-700 rounded p-6 flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-semibold mb-2">Sweatshirts</h3>
            <span className="text-sm text-gray-500">Coming Soon</span>
          </div>

          {/* Sweatpants */}
          <div className="border border-gray-700 rounded p-6 flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-semibold mb-2">Sweatpants</h3>
            <span className="text-sm text-gray-500">Coming Soon</span>
          </div>

          {/* Sneakers */}
          <div className="border border-gray-700 rounded p-6 flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-semibold mb-2">Sneakers</h3>
            <span className="text-sm text-gray-500">Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
