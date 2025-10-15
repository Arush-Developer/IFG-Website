import React from "react";

const BenefitsPage: React.FC = () => {
  return (
    <section
      id="benefits"
      className="min-h-screen bg-gradient-to-b from-[#020617] to-[#000] text-white overflow-hidden relative"
    >
      {/* Floating glows */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gold-gradient rounded-full blur-[140px] opacity-20 animate-float-slow"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gold-gradient rounded-full blur-[160px] opacity-15 animate-float"></div>

      {/* Hero */}
      <div className="max-w-6xl mx-auto text-center pt-28 pb-20 px-6">
        <h1 className="text-5xl md:text-6xl font-bold animate-gold-flow">
          Why Participate in IFG Challenges?
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Every challenge is an opportunity — to learn, showcase, and become
          part of a global innovation movement. IFG empowers you to grow beyond
          limits.
        </p>
      </div>

      {/* For Students */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-8 py-20">
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold animate-gold-flow">
            For Students
          </h2>
          <p className="text-gray-300 animate-fade-in-delay">
            Discover your potential through competitions that challenge your
            creativity and technical skills. Collaborate, build, and grow with a
            community that shares your passion for innovation.
          </p>
          <ul className="list-disc list-inside text-gray-400">
            <li>Hands-on experience through real-world tasks</li>
            <li>Networking with global participants</li>
            <li>Exclusive mentorship and guidance</li>
          </ul>
        </div>
        <div className="relative flex justify-center">
          <div className="w-72 h-72 bg-glass rounded-2xl flex items-center justify-center text-center animate-float-fast">
            <span className="text-xl font-medium text-gold-gradient">
              “Learn. Build. Excel.”
            </span>
          </div>
        </div>
      </div>

      {/* For Winners */}
      <div className="relative py-24 bg-gradient-to-b from-transparent to-[#050505]">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-semibold animate-gold-flow mb-10">
            For Winners
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Recognition", "Internships", "Global Exposure"].map(
              (title, i) => (
                <div
                  key={i}
                  className="p-8 bg-glass rounded-3xl hover:scale-105 transition-transform duration-500 hover:shadow-gold animate-fade-in-delay"
                >
                  <h3 className="text-2xl font-semibold text-gold-gradient">
                    {title}
                  </h3>
                  <p className="text-gray-400 mt-4">
                    Achieve the spotlight through IFG’s unique recognition
                    program. Gain mentorship, work with leading professionals,
                    and represent your innovations on a global stage.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* For Active Members */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center py-28 px-8">
        <div className="relative flex justify-center">
          <div className="absolute w-60 h-60 bg-gold-gradient blur-[130px] opacity-20 animate-float"></div>
          <div className="w-72 h-72 bg-glass rounded-full flex items-center justify-center text-center animate-float-fast">
            <span className="text-xl font-semibold text-gold-gradient">
              “Consistency brings excellence.”
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-semibold animate-gold-flow">
            For Active Members
          </h2>
          <p className="text-gray-300 mt-4">
            Stay engaged with IFG’s dynamic ecosystem and unlock long-term
            growth opportunities — leadership roles, exclusive projects, and
            continuous learning.
          </p>
        </div>
      </div>

      {/* For Schools & Universities */}
      <div className="py-24 bg-gradient-to-b from-[#050505] to-black">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-semibold animate-gold-flow mb-10">
            For Schools & Universities
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Collaborate with IFG to foster innovation-driven culture within your
            institutions. Empower students to participate, learn, and make an
            impact that extends beyond classrooms.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-28 relative">
        <h2 className="text-5xl font-bold animate-gold-flow">
          Your Time Is Now
        </h2>
        <p className="text-gray-400 mt-4">
          Join the movement that’s redefining innovation.
        </p>
        <button className="mt-8 px-10 py-4 text-lg rounded-full bg-glass text-gold-gradient border border-gold hover:bg-gold hover:text-black transition-all duration-700 animate-glow-btn">
          Join the Challenge
        </button>
      </div>
    </section>
  );
};

export default BenefitsPage;
