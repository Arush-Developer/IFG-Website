import React, { useState } from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const { user, signOut } = useAuth();

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300 animate-slide-in-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <div className="flex items-center space-x-3 animate-bounce-in">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl hover-scale animate-pulse-glow">
                IFG
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-shift">
                  IdeaForge Global
                </h1>
                <p className="text-sm text-gray-600 animate-fade-in stagger-1">
                  Global Youth Entrepreneurship
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 animate-fade-in stagger-2">
              <a href="#home" className="text-gray-700 hover:text-purple-600 font-medium transition-colors hover-scale">Home</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors hover-scale">About</a>
              <a href="#competition" className="text-gray-700 hover:text-purple-600 font-medium transition-colors hover-scale">Competition</a>
              <a href="#benefits" className="text-gray-700 hover:text-purple-600 font-medium transition-colors hover-scale">Benefits</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 font-medium transition-colors hover-scale">Contact</a>
              
              {user ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 animate-fade-in">
                    <User className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-700">{user?.user_metadata?.full_name || user?.email}</span>
                  </div>
                  <a
                    href="/dashboard"
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, '', '/dashboard');
                      window.location.reload();
                    }}
                    className="text-gray-700 hover:text-purple-600 font-medium transition-colors hover-scale"
                  >
                    Dashboard
                  </a>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors hover-scale"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleAuthClick('signin')}
                    className="text-gray-700 hover:text-purple-600 font-medium transition-colors hover-scale"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => handleAuthClick('signup')}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform animate-pulse-glow"
                  >
                    Join Now
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-gray-700">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700">About</a>
              <a href="#competition" className="block px-3 py-2 text-gray-700">Competition</a>
              <a href="#benefits" className="block px-3 py-2 text-gray-700">Benefits</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700">Contact</a>
              
              {user ? (
                <div className="px-3 py-2 space-y-2">
                  <div className="text-sm text-gray-700">{user?.user_metadata?.full_name || user?.email}</div>
                  <a
                    href="/dashboard"
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, '', '/dashboard');
                      window.location.reload();
                    }}
                    className="block w-full text-left text-gray-700"
                  >
                    Dashboard
                  </a>
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left text-red-600 hover:text-red-700"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="px-3 py-2 space-y-2">
                  <button
                    onClick={() => handleAuthClick('signin')}
                    className="block w-full text-left text-gray-700"
                  >
                    Sign In
                  </button>

                  {/* Logo + Join Now for Mobile */}
                  <img 
                    src="/logo.jpg" 
                    alt="IdeaForge Global Logo" 
                    className="w-12 h-12 rounded-xl object-cover hover-scale animate-pulse-glow"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div
                    className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl hover-scale animate-pulse-glow"
                    style={{ display: 'none' }}
                  >
                    IFG
                  </div>

                  <button
                    onClick={() => handleAuthClick('signup')}
                    className="block w-full text-left bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform animate-pulse-glow"
                  >
                    Join Now
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </>
  );
};

export default Header;