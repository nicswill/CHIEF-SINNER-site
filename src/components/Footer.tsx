// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <img
            src="/chief-sinner-logo.png"
            alt="Chief Sinner Logo"
            className="w-10 h-10 drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]"
          />
          <span className="text-lg font-bold tracking-wide">CHIEF SINNER</span>
        </div>
        <p className="text-sm text-gray-400 text-center md:text-right">
          Dress Loud. Faithe Louder.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
