import React from 'react';
import { Skull } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <Skull className="h-8 w-8 text-red-600 mr-2" />
              <span className="text-white font-extrabold text-xl tracking-wider">CHIEF SINNER</span>
            </div>
            <p className="text-gray-400 mt-2 max-w-md">
              Repent loud. Dress louder. Premium streetwear for those who embrace their flaws.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:gap-20">
            <div>
              <h3 className="text-lg font-bold mb-4">SHOP</h3>
              <ul className="space-y-2">
                <li><a href="/shop/tshirts" className="text-gray-400 hover:text-red-500 transition-colors">T-Shirts</a></li>
                <li><a href="/shop/hats" className="text-gray-400 hover:text-red-500 transition-colors">Hats</a></li>
                <li><a href="/shop/sweatshirts" className="text-gray-400 hover:text-red-500 transition-colors">Sweatshirts</a></li>
                <li><a href="/shop/sweatpants" className="text-gray-400 hover:text-red-500 transition-colors">Sweatpants</a></li>
                <li><a href="/shop/sneakers" className="text-gray-400 hover:text-red-500 transition-colors">Sneakers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">INFO</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Shipping</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center md:text-left text-gray-500">
          <p>&copy; {new Date().getFullYear()} CHIEF SINNER. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;