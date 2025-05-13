import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';

interface CategoryBoxProps {
  category: Category;
  index: number;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ category, index }) => {
  return (
    <Link
      to={`/shop/${category.slug}`}
      className="group relative overflow-hidden block h-64 md:h-80 w-full transition-transform duration-500"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animation: 'fadeIn 0.8s ease-out forwards'
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${category.image})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-0">
        <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-wider mb-2">
          {category.name}
        </h3>
        
        <div className="h-1 w-16 bg-red-600 mb-4 transition-all duration-500 group-hover:w-24" />
        
        <div className="text-white opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="text-sm uppercase tracking-wider font-semibold">
            SHOP NOW
          </span>
          <span className="ml-2">→</span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryBox;