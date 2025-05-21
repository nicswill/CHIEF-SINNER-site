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

        {/* About and Terms */}
        <div className="text-center text-sm leading-relaxed text-gray-400">
          <p>
            <strong>Chief Sinner</strong> was founded by musical artist <strong>AC Sinner</strong> as a bold expression of truth—we are all <strong>SINNERS</strong> saved by <strong>GRACE</strong>. This brand exists to remind us that it's not about perfection, but transformation. Crafted from quality materials and grounded in simple yet powerful designs, each piece reflects a deeper message: <em>"Amazing grace, how sweet the sound, that saved a WRETCH like me"—not a perfect person, but a WRETCH in need of AMAZING GRACE!</em>
          </p>

          <p className="mt-4">
            Our mission is not to claim perfection, but to pursue a life of faith—walking daily by the power of <em>Ruach HaKodesh</em> (Holy Spirit)—so that over time <em>Adoni</em> might make us sin less, until one day we stand sin-less in His presence.
          </p>

          <p className="mt-4">
            Just as <em>Yeshua</em> transformed <em>Shaul</em> (Paul)—a chief sinner—on the road to Damascus, we believe that same grace is available to you and me. It’s not by works, but by <strong>FAITH</strong> and <strong>FAITH</strong> alone. This is more than apparel—it’s a declaration.
          </p>

          <p className="mt-4 text-xs text-gray-500">
            <strong>Terms & Conditions:</strong> By using our site and placing an order, you agree to our terms of service. All content and designs are property of <strong>CHIEF SINNER</strong> and may not be reproduced without permission. We reserve the right to update product availability, pricing, and policies at any time.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right">
          <h4 className="text-md font-semibold mb-2">Get in Touch</h4>
          <p className="text-sm text-gray-400">
            Email: <a href="mailto:CNOenterprise@aol.com" className="underline hover:text-red-500">CNOenterprise@aol.com</a>
          </p>
          <p className="text-sm text-gray-400">Instagram: @chiefsinnerbrand</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
