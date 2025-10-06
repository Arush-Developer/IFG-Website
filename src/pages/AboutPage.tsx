import React from 'react';
import CompetitionSignup from '../components/CompetitionSignup';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-6 animate-gradient-shift">
              "Innovation distinguishes between a leader and a follower"
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Welcome to IdeaForge Global (IFG) – a youth-led platform where bold ideas meet real-world action.
              We're building a global movement of student innovators, creators, and changemakers who want to shape
              the future through entrepreneurship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="animate-slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Global networking illustration"
                className="rounded-2xl shadow-xl w-full h-auto object-cover hover-lift"
              />
            </div>

            <div className="space-y-8 animate-slide-in-right">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-base sm:text-lg text-gray-600">
                  Help teens transform passion into purpose, with the tools, mentorship, and global network to
                  support every step. Whether you're launching a new venture, exploring startup opportunities, or looking to grow
                  as a young leader, IdeaForge is your launchpad.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover-scale">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 animate-bounce-in">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-600">Mentorship Support</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-cyan-50 to-green-50 rounded-xl hover-scale">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-600 animate-bounce-in stagger-1">100%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Free to Join</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="competition" className="py-12 sm:py-20" style={{ backgroundColor: '#FAEBD7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-6 animate-gradient-shift">
              The Challenge Awaits
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              "The best time to start a business is when you're young. Your time is now."
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div className="space-y-6 sm:space-y-8">
              <div className="grid gap-6 sm:gap-8">
                <div className="card-3d bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow hover-lift animate-slide-in-left">
                  <div className="text-center">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 hero-gradient rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mx-auto mb-4 sm:mb-6 pulse-glow">
                      🏆
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">Global Recognition</h3>
                    <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                      Winners receive certificates, exciting prizes, and global recognition, while top entries get
                      featured on Google.
                    </p>
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 animate-bounce-in">$50K+</div>
                    <div className="text-xs sm:text-sm text-gray-500">Total Prize Pool</div>
                  </div>
                </div>

                <div className="card-3d bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow hover-lift animate-slide-in-left stagger-2">
                  <div className="text-center">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 hero-gradient rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mx-auto mb-4 sm:mb-6 pulse-glow">
                      🌍
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">Global Network</h3>
                    <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                      Connect with students from around the world and share your vision on a global stage.
                    </p>
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 animate-bounce-in stagger-1">50+</div>
                    <div className="text-xs sm:text-sm text-gray-500">Countries Participating</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <CompetitionSignup />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
