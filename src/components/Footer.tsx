// Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-3">
            <img
              src="/chief-sinner-logo.png"
              alt="Chief Sinner Logo"
              className="w-10 h-10 drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]"
            />
            <span className="text-lg font-bold tracking-wide">CHIEF SINNER</span>
          </div>
          <p className="text-sm text-gray-400">Dress Loud. Faithe Louder.</p>
        </div>

        {/* Navigation Links */}
        <div className="text-center">
          <h4 className="text-md font-semibold mb-2">Navigate</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-red-500">About</Link></li>
            <li><Link to="/contact" className="hover:text-red-500">Contact</Link></li>
            <li><Link to="/shop" className="hover:text-red-500">Shop</Link></li>
            <li><Link to="/privacy" className="hover:text-red-500">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right">
          <h4 className="text-md font-semibold mb-2">Get in Touch</h4>
          <p className="text-sm text-gray-400">Email: info@chiefsinner.com</p>
          <p className="text-sm text-gray-400">Instagram: @chiefsinnerbrand</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
