import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'CHIEF SINNER | Dress Loud. Faithe Louder.';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Banner Image */}
      <div
        className="w-full h-[300px] sm:h-[400px] bg-no-repeat bg-contain bg-top pt-16"
        style={{
          backgroundImage: "url('/background-image.jpg')",
        }}
      ></div>

      {/* Hero Section */}
      <Hero />

      {/* Message Section */}
      <div className="py-16 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide drop-shadow-sm">
            Redeemed for a Reason
          </h2>
          <p className="text-lg md:text-xl text-red-400 italic max-w-2xl mx-auto mb-10">
            Because grace doesn’t wait for perfection — it starts with truth.
          </p>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            “So here is a statement that you can have <strong>faithe</strong> in. One that fully deserves to be accepted: <strong>The Messiah Yeshua</strong> came into the world to save sinners; of whom I am <strong className="text-xl text-white font-bold">CHIEF SINNER!</strong>”
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto mb-4">
            When Shaul calls himself the <strong>chief sinner</strong>, he’s expressing profound humility and gratitude. Once a fierce persecutor of the faithers in Yeshua, Shaul’s transformation shows the power of the Messiah’s forgiveness and grace.
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto mb-4">
            By acknowledging his <strong>condition of sin</strong>, he sets an example for all of us: <strong>no one is beyond Adoni’s reach</strong>. Recognizing our brokenness is the first step toward accepting His mercy.
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto font-medium text-lg italic">
            Faithe is an action, based upon a belief, sustained by confidence, and it’s time now that we ALL start faithing in our Messiah Yeshua and his finished work at Calvary.
          </p>
        </div>
      </div>

      {/* Waitlist Form */}
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
