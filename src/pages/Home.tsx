import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'CHIEF SINNER | Repent Loud. Dress Louder.';
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Hero />

      <div className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">EMBRACE YOUR SINS</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            CHIEF SINNER isn't just a brand — it's a statement. Our designs embrace the flaws that make us human. 
            Bold, unapologetic, and crafted for those who dare to stand out.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 border border-gray-800 hover:border-red-600 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-3">PREMIUM MATERIALS</h3>
              <p className="text-gray-400">Ethically sourced fabrics that stand the test of time and wear.</p>
            </div>
            <div className="p-6 border border-gray-800 hover:border-red-600 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-3">BOLD DESIGNS</h3>
              <p className="text-gray-400">Striking graphics and motifs that tell your story without saying a word.</p>
            </div>
            <div className="p-6 border border-gray-800 hover:border-red-600 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-3">LIMITED RUNS</h3>
              <p className="text-gray-400">Small batch production ensures you won't see your look on everyone else.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 Waitlist Form with Success Message */}
      <div className="max-w-md mx-auto mt-16 mb-12 px-4">
        {submitted ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">You're on the list!</h2>
            <p className="text-gray-400">We’ll notify you when the next drop hits. 🔥</p>
          </div>
        ) : (
          <form
            action="https://formspree.io/f/xeogpzjl"
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="bg-black border border-red-600 p-6 rounded shadow"
          >
            <h2 className="text-white text-xl font-bold mb-4 text-center">Join the Waitlist</h2>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 mb-4 text-black rounded"
            />
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Notify Me
            </button>
          </form>
        )}
      </div>

      <CategorySection />
      <Footer />
    </div>
  );
};

export default Home;
