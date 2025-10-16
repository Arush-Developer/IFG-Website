import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  MessageCircle,
  ShoppingBag,
  LayoutDashboard,
  Info,
  Phone,
  Gift,
  Menu,
  X,
} from "lucide-react";
import Header from "./Header";
import ChatBot from "./ChatBot";
import { useAuth } from "../contexts/AuthContext"; // ✅ for login status

const Layout: React.FC = () => {
  const [showChatBot, setShowChatBot] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { currentUser } = useAuth(); // ✅ Supabase/AuthContext user

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Header />

      <main>
        <Outlet />
      </main>

      {/* ===================== FOOTER ===================== */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {/* Column 1 */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/user copy.jpg"
                  alt="IdeaForge Global Logo"
                  className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg object-cover pulse-glow"
                />
                <span className="text-lg sm:text-xl font-bold">
                  IdeaForge Global
                </span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Empowering the Next Generation of Global Innovators
              </p>
              <div className="mt-4 space-y-1 text-xs text-gray-400">
                <p>
                  <a
                    href="mailto:ideaforgeglobal.official@gmail.com"
                    className="hover:text-white"
                  >
                    Email: ideaforgeglobal.official@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    href="http://www.ideaforgeglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Website: www.ideaforgeglobal.com
                  </a>
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-bold mb-4 text-sm sm:text-base">
                Quick Links
              </h4>
              <div className="space-y-2">
                <a
                  href="/about"
                  className="block text-gray-400 hover:text-white transition-colors text-sm hover-scale"
                >
                  About Us
                </a>
                <a
                  href="/benefits"
                  className="block text-gray-400 hover:text-white transition-colors text-sm hover-scale"
                >
                  Benefits
                </a>
                <a
                  href="/contact"
                  className="block text-gray-400 hover:text-white transition-colors text-sm hover-scale"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-bold mb-4 text-sm sm:text-base">Support</h4>
              <div className="space-y-2">
                <a
                  href="/contact"
                  className="block text-gray-400 hover:text-white transition-colors text-sm hover-scale"
                >
                  Help Center
                </a>
                <a
                  href="/contact"
                  className="block text-gray-400 hover:text-white transition-colors text-sm hover-scale"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors text-sm hover-scale"
                >
                  Community
                </a>
              </div>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-bold mb-4 text-sm sm:text-base">Connect</h4>
              <div className="space-y-2">
                <a
                  href="https://www.linkedin.com/company/ideaforge-global"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-white transition-colors text-sm hover-scale"
                >
                  LinkedIn
                </a>
                <a
                  href="https://instagram.com/ideaforgeglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-white transition-colors text-sm hover-scale"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-xs sm:text-sm">
              &copy; 2025 IdeaForge Global. All rights reserved. Built with ❤
              for young entrepreneurs worldwide.
            </p>
          </div>
        </div>
      </footer>

      {/* ===================== COLLAPSIBLE SIDEBAR ===================== */}
      <div
        className={`fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 
        ${
          sidebarOpen
            ? "w-48 sm:w-56 bg-black/70 backdrop-blur-lg rounded-2xl py-4 px-3 shadow-2xl"
            : "w-14 sm:w-16"
        }`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-500 to-white text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center mb-4"
          title={sidebarOpen ? "Close Menu" : "Open Menu"}
        >
          {sidebarOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          ) : (
            <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-golden" />
          )}
        </button>

        {/* Menu Items */}
        <div
          className={`flex flex-col items-center gap-3 transition-all duration-500 overflow-hidden ${
            sidebarOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <Link
            to="/marketplace"
            className="sidebar-btn"
            title="Marketplace"
          >
            <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="sidebar-text">Marketplace</span>
          </Link>

          <Link
            to="/benefits"
            className="sidebar-btn"
            title="Benefits"
          >
            <Gift className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="sidebar-text">Benefits</span>
          </Link>

          <Link
            to="/about"
            className="sidebar-btn"
            title="About"
          >
            <Info className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="sidebar-text">About</span>
          </Link>

          <Link
            to="/contact"
            className="sidebar-btn"
            title="Contact"
          >
            <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="sidebar-text">Contact</span>
          </Link>

          {/* Show Dashboard only if logged in */}
          {currentUser && (
            <Link
              to="/dashboard"
              className="sidebar-btn"
              title="Dashboard"
            >
              <LayoutDashboard className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="sidebar-text">Dashboard</span>
            </Link>
          )}
        </div>
      </div>

      {/* ===================== CHATBOT BUTTON ===================== */}
      <button
        onClick={() => setShowChatBot(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 hero-gradient text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-40 pulse-glow"
        title="Need Help? Chat with our AI Assistant"
      >
        <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-golden" />
      </button>

      {showChatBot && <ChatBot onClose={() => setShowChatBot(false)} />}
    </div>
  );
};

export default Layout;
