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

        {/* About Preview & Terms */}
        <div className="text-center text-sm text-gray-400">
          <p className="mb-2">
            <strong>Chief Sinner</strong> is a bold faith-driven brand reminding us it's not about perfection, but transformation.
          </p>
          <Link to="/about" className="underline hover:text-red-500 text-xs">
            Read Our Full Story →
          </Link>

          <p className="mt-4 text-xs text-gray-500">
            <strong>Terms & Conditions:</strong> By using our site and placing an order, you agree to our terms of service. All content and designs are property of <strong>CHIEF SINNER</strong> and may not be reproduced without permission.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right">
          <h4 className="text-md font-semibold mb-2">Get in Touch</h4>
          <p className="text-sm text-gray-400">
            Email: <a href="mailto:CNOenterprise@aol.com" className="underline hover:text-red-500">CNOenterprise@aol.com</a>
          </p>
          <p className="text-sm text-gray-400">
            Instagram: <a
              href="https://instagram.com/chiefsinnerbrand"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-red-500"
            >
              @chiefsinnerbrand
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
