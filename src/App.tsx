import React, { useEffect, useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import CompetitionSignup from './components/CompetitionSignup';
import UserDashboard from './components/UserDashboard';
import ChatBot from './components/ChatBot';
import Marketplace from './components/Marketplace';
import { MessageCircle } from 'lucide-react';

const AppContent: React.FC = () => {
  const { user, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState('home');
  const [showChatBot, setShowChatBot] = useState(false);

  // Check URL for dashboard route
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/dashboard') {
      setCurrentPage('dashboard');
    } else if (path === '/marketplace') {
      setCurrentPage('marketplace');
    } else {
      setCurrentPage('home');
    }
  }, []);

  // Handle navigation
  const navigateTo = (page: string) => {
    setCurrentPage(page);
    if (page === 'dashboard') {
      window.history.pushState({}, '', '/dashboard');
    } else if (page === 'marketplace') {
      window.history.pushState({}, '', '/marketplace');
    } else {
      window.history.pushState({}, '', '/');
    }
  };

  if (currentPage === 'dashboard') {
    if (!user && !loading) {
      // Redirect to home if not authenticated
      navigateTo('home');
      return null;
    }
    return <UserDashboard onNavigateHome={() => navigateTo('home')} />;
  }

  if (currentPage === 'marketplace') {
    return <Marketplace onNavigateHome={() => navigateTo('home')} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onNavigateToDashboard={() => navigateTo('dashboard')} 
        onNavigateToMarketplace={() => navigateTo('marketplace')}
      />
      
      {/* Hero Section */}
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
                href="#competition"
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

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 bg-white">
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

      {/* Competition Section */}
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

      {/* Benefits Section */}
      <section id="benefits" className="py-12 sm:py-20 bg-white">
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

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20" style={{ backgroundColor: '#FAEBD7' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Call to Action */}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 sm:w-10 h-8 sm:h-10 hero-gradient rounded-lg flex items-center justify-center text-white font-bold pulse-glow">
                  IFG
                </div>
                <span className="text-lg sm:text-xl font-bold">IdeaForge Global</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Where Bold Ideas Meet Global Impact - Forge Your Future, One Innovation at a Time
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm sm:text-base">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors text-sm hover-scale">About Us</a>
                <a href="#competition" className="block text-gray-400 hover:text-white transition-colors text-sm hover-scale">Competition</a>
                <a href="#benefits" className="block text-gray-400 hover:text-white transition-colors text-sm hover-scale">Benefits</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors text-sm hover-scale">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm sm:text-base">Support</h4>
              <div className="space-y-2">
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors text-sm hover-scale">Help Center</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors text-sm hover-scale">Contact Us</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm hover-scale">Community</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm hover-scale">Resources</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm sm:text-base">Connect</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm hover-scale">LinkedIn</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm hover-scale">Instagram</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm hover-scale">Twitter</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm hover-scale">YouTube</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-xs sm:text-sm">&copy; 2025 IdeaForge Global. All rights reserved. Built with ❤ for young entrepreneurs worldwide.</p>
          </div>
        </div>
      </footer>

      {/* Floating Chatbot Button */}
      <button
        onClick={() => setShowChatBot(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 hero-gradient text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-40 pulse-glow hover-lift"
        title="Need Help? Chat with our AI Assistant"
      >
        <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* ChatBot Modal */}
      {showChatBot && (
        <ChatBot onClose={() => setShowChatBot(false)} />
      )}
    </div>
  );
};

function App() {
  useEffect(() => {
    // Initialize AOS-like animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;