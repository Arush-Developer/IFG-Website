import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigate from React Router

const HomePage: React.FC = () => {
  const navigate = useNavigate();  // Hook to navigate to other routes

  // Function to navigate to About page and scroll to competition section
  const handleRedirectToAbout = () => {
    // Navigate to the About page
    navigate('/about', { state: { scrollToCompetition: true } });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-b from-[#020617] via-[#08122B] to-[#0A1833] text-white"
    >
      {/* HERO SECTION */}
      <div className="flex-grow flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center py-24">
          {/* LEFT CONTENT */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-flow drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                Empowering the Next Generation of Global Innovators
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl">
                A youth-led international initiative helping students transform
                ideas into real opportunities through creativity,
                entrepreneurship, and collaboration.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleRedirectToAbout}
                className="px-8 py-4 rounded-full font-semibold text-lg text-gray-900 bg-gradient-flow shadow-lg hover:shadow-[0_0_25px_rgba(255,255,200,0.4)] hover:scale-105 transition-all text-center"
              >
                Join the Challenge
              </button>
              <button
                onClick={handleRedirectToAbout}
                className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-yellow-300 text-transparent bg-clip-text bg-gradient-flow hover:bg-yellow-200/10 hover:text-gray-900 transition-all hover:shadow-[0_0_25px_rgba(255,255,200,0.3)] text-center"
              >
                Submit Your Idea
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative animate-fade-in">
            <div className="floating-element">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Young entrepreneurs collaborating"
                className="rounded-2xl shadow-[0_0_25px_rgba(255,215,0,0.2)] w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT THE INITIATIVE */}
      <div className="bg-gradient-to-b from-[#020617] via-[#08122B] to-[#0A1833] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-flow mb-6">
            About IdeaForge Global
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            IdeaForge Global is a student-led organization that seeks to foster innovation and entrepreneurship among young minds across the globe. We aim to create an inclusive platform where students can bring their ideas to life.
          </p>
        </div>
      </div>

      {/* KEY BENEFITS SECTION */}
      <div className="bg-[#08122B] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-flow mb-6">
            Why Participate?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-yellow-300">Global Exposure</h3>
              <p className="text-gray-200">
                Get your ideas recognized on a global stage and connect with innovators from different parts of the world.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-yellow-300">Mentorship</h3>
              <p className="text-gray-200">
                Gain insights and feedback from industry professionals and mentors to refine your idea.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-yellow-300">Opportunities</h3>
              <p className="text-gray-200">
                Receive recognition, awards, and potential collaborations with top universities and institutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="bg-gradient-to-b from-[#020617] via-[#08122B] to-[#0A1833] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-flow mb-6">
            Ready to Make Your Mark?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-6">
            The journey to bringing your ideas to life starts here. Join the competition today!
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleRedirectToAbout}
              className="px-8 py-4 rounded-full font-semibold text-lg text-gray-900 bg-gradient-flow shadow-lg hover:shadow-[0_0_25px_rgba(255,255,200,0.4)] hover:scale-105 transition-all"
            >
              Join the Challenge
            </button>
            <button
              onClick={handleRedirectToAbout}
              className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-yellow-300 text-transparent bg-clip-text bg-gradient-flow hover:bg-yellow-200/10 hover:text-gray-900 transition-all hover:shadow-[0_0_25px_rgba(255,255,200,0.3)]"
            >
              Submit Your Idea
            </button>
          </div>
        </div>
      </div>

      {/* PARTNERS SECTION */}
      <div className="bg-[#08122B] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-flow mb-6">
            Our Partners
          </h2>
          <div className="grid md:grid-cols-4 gap-12">
            {/* Add logos of your partners here */}
            <img
              src="https://via.placeholder.com/150"
              alt="Partner 1"
              className="mx-auto"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Partner 2"
              className="mx-auto"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Partner 3"
              className="mx-auto"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Partner 4"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
