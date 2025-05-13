import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden bg-gray-900 aspect-square mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-30 flex items-center justify-center">
          <button className="bg-red-600 text-white font-bold py-2 px-6 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 tracking-wide">
            ADD TO CART
          </button>
        </div>
      </div>
      
      <h3 className="text-white text-lg font-bold tracking-wide">{product.name}</h3>
      
      <p className="text-red-600 font-medium">${product.price}</p>
    </div>
  );
};

export default ProductCard;