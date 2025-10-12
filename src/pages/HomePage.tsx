import React from 'react';

const HomePage: React.FC = () => {
  return (
    <section id="home" className="homeone-bg bg-pattern flex flex-col relative overflow-hidden">
      {/* HERO SECTION */}
      <div className="flex-grow min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex md:flex-row flex-col gap-12 items-center py-20">
          {/* TEXT SECTION */}
          <div className="text-white space-y-8 animate-slide-in-left flex-1">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-blue-100">
                Empowering the Next Generation of Global Innovators
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl animate-slide-in-left stagger-2">
                A youth-led international initiative helping students transform ideas into real opportunities through creativity, entrepreneurship, and collaboration.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-right stagger-3">
              <a
                href="/about#competition"
                className="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 text-gray-900 px-6 sm:px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl text-center hover-lift animate-pulse-glow"
              >
                Join the Challenge
              </a>
              <a
                href="/about#competition"
                className="border-2 border-white text-white px-6 sm:px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all hover-scale text-center"
              >
                Submit Your Idea
              </a>
            </div>

            {/* WELCOME TO IFG MESSAGE */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-8 animate-fade-in stagger-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-yellow-300">Welcome to IdeaForge Global (IFG)</h2>
                <p className="text-white text-base sm:text-lg leading-relaxed mb-4">
                  Every big change begins with a small idea — and every idea deserves a stage.
                </p>
                <p className="text-white text-base sm:text-lg leading-relaxed mb-4">
                  At IdeaForge Global (IFG), we are redefining how young people bring innovation to life. We are a youth-led, student-driven platform built for one purpose — to empower you to turn imagination into impact.
                </p>
                <p className="text-white text-base sm:text-lg leading-relaxed">
                  IFG connects students worldwide through idea challenges, mentorship, and opportunities that extend beyond the classroom. Whether you dream of launching a startup, solving a community problem, or changing the world through innovation — this is where it starts.
                </p>
              </div>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="relative animate-slide-in-right stagger-2 flex-1">
            <div className="floating-element">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Young entrepreneurs collaborating"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover hover-lift"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-24 sm:w-32 h-24 sm:h-32 bg-yellow-300 rounded-full opacity-20 floating-element"></div>
            <div
              className="absolute -bottom-10 -left-10 w-16 sm:w-24 h-16 sm:h-24 bg-pink-300 rounded-full opacity-20 floating-element"
              style={{ animationDelay: '-2s' }}
            ></div>
          </div>
        </div>
      </div>

      {/* GYEC SECTION (same UI, only positioning fixed) */}
      <section className="bg-gradient-to-t from-black/50 to-transparent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-4">
              The Global Youth Entrepreneurship Challenge (GYEC)
            </h2>
            <p className="text-white text-base sm:text-lg leading-relaxed mb-4">
              The Global Youth Entrepreneurship Challenge (GYEC) is IFG's flagship international competition. It gives students from across the globe a chance to submit unique, creative ideas that solve real-world challenges — from sustainability to social innovation to new business concepts.
            </p>
            <p className="text-white text-base sm:text-lg leading-relaxed mb-6">
              Each participant competes not only to win but to learn, collaborate, and grow. Through this competition, we aim to create a culture of fearless creativity — where no idea is too small to make a difference.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-white text-sm sm:text-base">
              <div className="flex items-start space-x-2">
                <span className="text-yellow-300">✓</span>
                <span>Open to students worldwide (ages 15–22)</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-yellow-300">✓</span>
                <span>Individual or team participation (up to 4 members)</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-yellow-300">✓</span>
                <span>Submit your innovative idea or video pitch</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-yellow-300">✓</span>
                <span>Global judging panel from leading institutions</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-yellow-300">✓</span>
                <span>Winners receive certificates, rewards, and global exposure</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-yellow-300">📅</span>
                <span>Registration Deadline: To be updated</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomePage;
