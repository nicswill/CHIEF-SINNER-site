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
      {/* Solid background overlay */}
      <div className="absolute inset-0 bg-black z-10" aria-hidden="true" />

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center justify-start h-full text-center px-4 sm:px-6 lg:px-8 pt-32 gap-8">
        <h1
          className={`text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-wide transform transition-all duration-1000 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          CHIEF<span className="text-red-600"> SINNER</span>
        </h1>

        <p
          className={`text-gray-200 text-xl md:text-2xl font-bold max-w-2xl transform transition-all duration-1000 delay-300 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Dress Loud. Faithe Louder.
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
