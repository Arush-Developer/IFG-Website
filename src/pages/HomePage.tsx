import React from 'react';

const HomePage: React.FC = () => {
  return (
    <section id="home" className="min-h-screen homeone-bg bg-pattern flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center py-20">
        <div className="text-white space-y-8 animate-slide-in-left">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm text-gray-300 animate-bounce-in">
              ✨ Global Youth Entrepreneurship Challenge
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-blue-100">
              From spark to success — <span className="typing-animation text-yellow-300">ignite yourself</span><br/>
              Innovation knows no age; <span className="text-blue-400">neither should opportunity</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-black max-w-2xl animate-slide-in-left stagger-2">
              "The biggest risk is not taking any risk. Your fearlessness and fresh perspective can lead to groundbreaking innovation."
              <span className="text-blue-100"> - Join thousands changing the world.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-right stagger-3">
            <a
              href="/about#competition"
              className="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 text-gray-900 px-6 sm:px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl text-center hover-lift animate-pulse-glow"
            >
              🚀 Start Your Journey
            </a>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all hover-scale">
              📺 Watch Demo
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-8 animate-fade-in stagger-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold animate-bounce-in">10,000+</div>
              <div className="text-xs sm:text-sm text-white/80">Young Entrepreneurs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold animate-bounce-in stagger-1">50+</div>
              <div className="text-xs sm:text-sm text-white/80">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold animate-bounce-in stagger-2">$1M+</div>
              <div className="text-xs sm:text-sm text-white/80">In Prizes</div>
            </div>
          </div>
        </div>

        <div className="relative animate-slide-in-right stagger-2">
          <div className="floating-element">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Young entrepreneurs collaborating"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover hover-lift"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-24 sm:w-32 h-24 sm:h-32 bg-yellow-300 rounded-full opacity-20 floating-element"></div>
          <div className="absolute -bottom-10 -left-10 w-16 sm:w-24 h-16 sm:h-24 bg-pink-300 rounded-full opacity-20 floating-element" style={{ animationDelay: '-2s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
