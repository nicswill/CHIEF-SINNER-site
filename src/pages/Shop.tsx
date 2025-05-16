import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    title: 'T-Shirts',
    image: '/shirt.jpg',
    link: '/shop/tshirts',
  },
  {
    title: 'Hats',
  },
  {
    title: 'Sweatshirts',
  },
  {
    title: 'Sweatpants',
  },
  {
    title: 'Sneakers',
  },
];

const Shop: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">Shop CHIEF SINNER</h1>
        <p className="text-red-500 mt-4 italic text-lg">Dress Loud. Faithe Louder.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.title}
            className="border border-gray-800 p-6 flex flex-col items-center justify-center text-center bg-black hover:border-red-600 transition duration-300"
          >
            {product.image ? (
              <Link to={product.link || '#'}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="mb-4 w-full h-48 object-cover border border-gray-700"
                />
                <h2 className="text-xl font-semibold">{product.title}</h2>
              </Link>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                <span className="bg-red-600 text-white px-4 py-1 rounded uppercase tracking-widest text-sm font-bold">
                  Coming Soon
                </span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
