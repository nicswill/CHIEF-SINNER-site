import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"
        aria-hidden="true"
      />

      {/* Background image */}
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"
        style={{ 
          filter: 'brightness(0.6) contrast(1.2)',
          transform: loaded ? 'scale(1)' : 'scale(1.05)',
          transition: 'transform 6s ease-out, filter 1s ease-in-out'
        }}
      />

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        
        <h1 
          className={`text-white text-5xl md:text-7xl lg:text-8xl font-black mb-6 transform transition-all duration-1000 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <span className="tracking-wide">CHIEF</span>
          <span className="text-red-600 tracking-tight"> SINNER</span>
        </h1>
        
        <p 
          className={`text-gray-200 text-xl md:text-2xl font-bold mb-8 max-w-2xl transform transition-all duration-1000 delay-300 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          REPENT LOUD. DRESS LOUDER.
        </p>
        
        <div 
          className={`transform transition-all duration-1000 delay-500 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <Link 
            to="/shop" 
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-none tracking-wider uppercase text-lg transition-colors duration-300"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
