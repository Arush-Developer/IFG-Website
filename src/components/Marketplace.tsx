import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Marketplace: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#020617] to-[#08122B] flex items-center justify-center">
      <div className="text-center px-6 py-12">
        {/* Back to Home Button */}
        <div className="absolute top-5 left-5">
          <Link
            to="/"
            className="flex items-center space-x-2 text-[#FFD700] hover:text-[#FFDF00] font-medium transition-all ease-in-out"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Coming Soon Message */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white mb-4">
          Coming Soon
        </h1>
        <p className="text-2xl text-[#F5F5F5] mb-6">
          We're working hard to bring this feature to you!
        </p>

        {/* Animated Text */}
        <div className="animate-pulse">
          <p className="text-xl text-[#B0B0B0]">Stay tuned for updates...</p>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
