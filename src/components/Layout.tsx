import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { MessageCircle, ShoppingBag, LayoutDashboard, Home, Mail } from 'lucide-react';
import Header from './Header';
import ChatBot from './ChatBot';

const Layout: React.FC = () => {
  const [showChatBot, setShowChatBot] = useState(false);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarMinimized((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#000814] via-[#020617] to-[#000] text-white">
      <Header />

      {/* Main content */}
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#020617] text-white pt-12 pb-8 mt-0 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {/* Logo + Description */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/user copy.jpg"
                  alt="IdeaForge Global Logo"
                  className="w-10 h-10 rounded-lg object-cover animate-pulse-glow"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-white via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  IdeaForge Global
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering the Next Generation of Global Innovators.
              </p>
              <div className="mt-4 space-y-1 text-sm text-gray-400">
                <p>
                  <a href="mailto:ideaforgeglobal.official@gmail.com" className="hover:text-yellow-400 transition">
                    Email: ideaforgeglobal.official@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    href="http://www.ideaforgeglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-400 transition"
                  >
                    Website: www.ideaforgeglobal.com
                  </a>
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-lg text-yellow-400">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/about" className="block text-gray-300 hover:text-white">About Us</Link>
                <Link to="/about#competition" className="block text-gray-300 hover:text-white">Competition</Link>
                <Link to="/benefits" className="block text-gray-300 hover:text-white">Benefits</Link>
                <Link to="/contact" className="block text-gray-300 hover:text-white">Contact</Link>
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4 text-lg text-yellow-400">Support</h4>
              <div className="space-y-2">
                <Link to="/contact" className="block text-gray-300 hover:text-white">Help Center</Link>
                <Link to="/contact" className="block text-gray-300 hover:text-white">Contact Us</Link>
                <a href="#" className="block text-gray-300 hover:text-white">Community</a>
                <a href="#" className="block text-gray-300 hover:text-white">Resources</a>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold mb-4 text-lg text-yellow-400">Connect</h4>
              <div className="space-y-2">
                <a
                  href="https://www.linkedin.com/company/ideaforge-global"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white"
                >
                  LinkedIn
                </a>
                <a
                  href="https://instagram.com/ideaforgeglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white"
                >
                  Instagram
                </a>
                <a href="mailto:ideaforgeglobal.official@gmail.com" className="block text-gray-300 hover:text-white">
                  Email
                </a>
                <a
                  href="http://www.ideaforgeglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white"
                >
                  Website
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p className="text-sm">
              © 2025 IdeaForge Global. Built with <span className="text-yellow-400">❤</span> for young innovators.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Sidebar (non-overlapping) */}
      <div className={`fixed right-4 bottom-24 flex flex-col items-center gap-3 z-50 ${isSidebarMinimized ? 'w-12' : 'w-16'}`}>
        <Link
          to="/"
          className={`w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-white text-black shadow-lg flex items-center justify-center hover:scale-110 transition-transform ${isSidebarMinimized ? 'p-1' : ''}`}
          title="Home"
          onClick={toggleSidebar} // Toggle sidebar on Home button click
        >
          <Home className="w-6 h-6" />
        </Link>
        <Link
          to="/marketplace"
          className={`w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-white text-black shadow-lg flex items-center justify-center hover:scale-110 transition-transform ${isSidebarMinimized ? 'p-1' : ''}`}
          title="Marketplace"
        >
          <ShoppingBag className="w-6 h-6" />
        </Link>
        <Link
          to="/dashboard"
          className={`w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-white text-black shadow-lg flex items-center justify-center hover:scale-110 transition-transform ${isSidebarMinimized ? 'p-1' : ''}`}
          title="Dashboard"
        >
          <LayoutDashboard className="w-6 h-6" />
        </Link>
        <Link
          to="/contact"
          className={`w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-white text-black shadow-lg flex items-center justify-center hover:scale-110 transition-transform ${isSidebarMinimized ? 'p-1' : ''}`}
          title="Contact"
        >
          <Mail className="w-6 h-6" />
        </Link>
      </div>

      {/* Chatbot Button */}
      <button
        onClick={() => setShowChatBot(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 hero-gradient text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-40 pulse-glow hover-lift"
        title="Need Help? Chat with our AI Assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {showChatBot && <ChatBot onClose={() => setShowChatBot(false)} />}
    </div>
  );
};

export default Layout;
