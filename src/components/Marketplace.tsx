import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Marketplace: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center">
      <div className="text-center px-6 py-12">
        {/* Back to Home Button */}
        <div className="absolute top-5 left-5">
          <Link
            to="/"
            className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Coming Soon Message */}
        <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
          Coming Soon
        </h1>
        <p className="text-2xl text-gray-600 mb-6">
          We're working hard to bring this feature to you!
        </p>

        {/* Animated Text */}
        <div className="animate-pulse">
          <p className="text-xl text-gray-500">Stay tuned for updates...</p>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
