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

      {/* 🔁 Updated Message Section */}
      <div className="py-16 bg-black text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide text-white drop-shadow-sm">
  Redeemed for a Reason
</h2>

          <p className="text-lg md:text-xl text-red-400 italic max-w-2xl mx-auto mb-10">
            Because grace doesn’t wait for perfection — it starts with truth.
          </p>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            “This is a faithful saying and worthy of all acceptance: that Christ Jesus came into the world to save sinners — of whom I am chief.” <br />
            <span className="text-sm text-gray-500">(1 Timothy 1:15)</span>
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto mb-4">
            When Paul calls himself the <strong>chief sinner</strong>, he’s expressing profound humility and gratitude. Once a fierce persecutor of the church, Paul’s transformation shows the power of Christ’s forgiveness and grace.
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto mb-4">
            By acknowledging his past, he sets an example for all of us: <strong>no one is beyond God’s reach</strong>. Recognizing our own brokenness is the first step toward accepting God’s mercy.
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto">
            The name <strong>CHIEF SINNER</strong> is a reminder that even in our flaws, there is hope, redemption, and purpose. Is there a place in your life where you need to fully embrace God's grace?
          </p>
        </div>
      </div>

      {/* 🔥 Waitlist Form */}
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
