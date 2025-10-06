import React from 'react';

const BenefitsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-6 animate-gradient-shift">
              Why Join IdeaForge Global?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              "Success comes down to hard work plus passion, over time."
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6 hover-lift animate-bounce-in">
              <div className="text-4xl sm:text-6xl mb-4 floating-element">🌍</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Global Connection</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Connect with students worldwide</p>
            </div>

            <div className="text-center p-4 sm:p-6 hover-lift animate-bounce-in stagger-1">
              <div className="text-4xl sm:text-6xl mb-4 floating-element" style={{ animationDelay: '-1s' }}>💡</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Real Solutions</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Turn ideas into community impact</p>
            </div>

            <div className="text-center p-4 sm:p-6 hover-lift animate-bounce-in stagger-2">
              <div className="text-4xl sm:text-6xl mb-4 floating-element" style={{ animationDelay: '-2s' }}>🛠</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Skill Building</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Develop entrepreneurship expertise</p>
            </div>

            <div className="text-center p-4 sm:p-6 hover-lift animate-bounce-in stagger-3">
              <div className="text-4xl sm:text-6xl mb-4 floating-element" style={{ animationDelay: '-3s' }}>🏆</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Recognition</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Prizes, certificates & internships</p>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 text-center animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
              alt="Startup competition winners celebration"
              className="rounded-2xl shadow-2xl mx-auto w-full max-w-4xl hover-lift"
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-bounce-in">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 animate-gradient-shift bg-gradient-to-r from-white via-yellow-300 to-white bg-clip-text text-transparent">
              Your Time is Now 🔥
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in stagger-2">
              "The future belongs to those who believe in the beauty of their dreams."
              Join thousands of passionate young entrepreneurs changing the world.
            </p>
            <p className="text-white/80 animate-fade-in stagger-3 text-sm sm:text-base">
              Imagine your idea featured on Google, celebrated by mentors, peers, and global leaders — opening
              doors to your bright future.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenefitsPage;
