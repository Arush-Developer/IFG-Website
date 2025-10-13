import React from "react";

const HomePage: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-b from-[#0A0A2E] via-[#151542] to-[#1E1E55] text-white"
    >
      {/* HERO SECTION */}
      <div className="flex-grow flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center py-24">
          {/* LEFT CONTENT */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                Empowering the Next Generation of Global Innovators
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl animate-fade-in stagger-2">
                A youth-led international initiative helping students transform
                ideas into real opportunities through creativity,
                entrepreneurship, and collaboration.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-right stagger-3">
              <a
                href="/about#competition"
                className="px-8 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 text-gray-900 shadow-xl hover:scale-105 transition-all hover:shadow-cyan-400/50 text-center"
              >
                Join the Challenge
              </a>
              <a
                href="/about#competition"
                className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-gray-900 transition-all hover:shadow-cyan-400/40 text-center"
              >
                Submit Your Idea
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative animate-slide-in-right stagger-2 translate-y-2">
            <div className="floating-element">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Young entrepreneurs collaborating"
                className="rounded-2xl shadow-[0_0_25px_rgba(0,255,255,0.2)] w-full h-auto object-cover hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] transition-all duration-500"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-28 sm:w-36 h-28 sm:h-36 bg-cyan-400/30 rounded-full blur-2xl animate-pulse" />
            <div
              className="absolute -bottom-10 -left-10 w-20 sm:w-28 h-20 sm:h-28 bg-purple-500/30 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "-2s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* WELCOME BOX */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 animate-fade-in">
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:shadow-[0_0_50px_rgba(0,255,255,0.2)] transition-all">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-cyan-300">
            Welcome to IdeaForge Global (IFG)
          </h2>
          <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-4">
            Every big change begins with a small idea — and every idea deserves
            a stage.
          </p>
          <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-4">
            At IdeaForge Global (IFG), we are redefining how young people bring
            innovation to life. We are a youth-led, student-driven platform
            built for one purpose — to empower you to turn imagination into
            impact.
          </p>
          <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
            IFG connects students worldwide through idea challenges, mentorship,
            and opportunities that extend beyond the classroom. Whether you
            dream of launching a startup, solving a community problem, or
            changing the world through innovation — this is where it starts.
          </p>
        </div>
      </div>

      {/* GYEC SECTION */}
      <section className="bg-gradient-to-t from-[#0A0A2E]/90 to-transparent py-16 border-t border-cyan-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-[0_0_25px_rgba(0,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,255,255,0.2)] transition-all">
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-300 mb-6">
              The Global Youth Entrepreneurship Challenge (GYEC)
            </h2>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-4">
              The Global Youth Entrepreneurship Challenge (GYEC) is IFG's
              flagship international competition. It gives students from across
              the globe a chance to submit unique, creative ideas that solve
              real-world challenges — from sustainability to social innovation
              to new business concepts.
            </p>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8">
              Each participant competes not only to win but to learn,
              collaborate, and grow. Through this competition, we aim to create
              a culture of fearless creativity — where no idea is too small to
              make a difference.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-blue-100 text-sm sm:text-base">
              {[
                "Open to students worldwide (ages 15–22)",
                "Individual or team participation (up to 4 members)",
                "Submit your innovative idea or video pitch",
                "Global judging panel from leading institutions",
                "Winners receive certificates, rewards, and global exposure",
                "📅 Registration Deadline: To be updated",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2 p-4 bg-gradient-to-r from-[#1E1E55]/70 to-[#2D2D77]/70 rounded-xl border border-cyan-400/20 hover:scale-[1.02] transition-all"
                >
                  <span className="text-cyan-300 text-lg font-semibold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomePage;
