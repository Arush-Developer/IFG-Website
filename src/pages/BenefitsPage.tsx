import React from "react";
import { useNavigate } from "react-router-dom";

const BenefitsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
   <section
  id="benefits"
  className="min-h-screen bg-gradient-to-b from-[#000814] via-[#031B3A] to-[#1A1A1A] text-white overflow-hidden relative"
>
  {/* ✨ Soft Gold Mist and Waves */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#D4AF37]/10 via-transparent to-transparent opacity-70 blur-[90px]"></div>
    <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#FFD700]/10 to-transparent rounded-full blur-[160px] animate-float-slow"></div>
    <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#007BFF]/20 to-transparent rounded-full blur-[200px] animate-float"></div>
  </div>
      {/* Decorative background glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-gradient rounded-full blur-[180px] opacity-10 animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/40 rounded-full blur-[220px] opacity-10 animate-float"></div>

      <div className="max-w-7xl mx-auto px-8 py-24 space-y-24 relative z-10">
        {/* WHY PARTICIPATE */}
        <div className="border border-gold/20 rounded-3xl p-10 backdrop-blur-lg bg-white/5 shadow-lg animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-center animate-gold-flow">
            Why Participate in IFG
          </h1>
          <p className="text-gray-300 text-center mt-6 text-lg max-w-3xl mx-auto">
            Every participant in IFG becomes part of a global community that believes in ideas. 
            Whether you win or not, the experience itself is transformative.
          </p>
          <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
            You’ll learn how to communicate your vision, pitch your idea, and connect with other dreamers like you.
          </p>
        </div>

        {/* STUDENTS SECTION */}
        <div className="relative border border-gold/20 rounded-3xl p-10 backdrop-blur-lg bg-gradient-to-b from-white/5 to-transparent animate-fade-in-delay">
          <h2 className="text-4xl md:text-5xl font-semibold text-gold-gradient mb-6">
            🎯 For Students
          </h2>
          <ul className="space-y-3 text-gray-300 leading-relaxed">
            <li>Showcase your innovation on an international platform.</li>
            <li>Receive certificates and LORs that strengthen university applications.</li>
            <li>Build leadership, creativity, and teamwork skills.</li>
            <li>Gain exposure to global mentors and industry experts.</li>
            <li>Be part of a community that believes in collaboration over competition.</li>
          </ul>
        </div>

        {/* WINNERS SECTION */}
        <div className="relative border border-gold/20 rounded-3xl p-10 bg-gradient-to-b from-[#0f0f0f] to-[#020617] backdrop-blur-xl shadow-gold animate-fade-in-delay">
          <h2 className="text-4xl md:text-5xl font-semibold text-gold-gradient mb-6">
            🏆 For Winners
          </h2>
          <p className="text-gray-300 mb-4">
            Winning at IFG isn’t just about trophies — it’s about opportunity.
          </p>
          <ul className="space-y-3 text-gray-300 leading-relaxed">
            <li>Certificates of Excellence</li>
            <li>Amazon/Flipkart Gift Cards</li>
            <li>Mystery Entrepreneur Box</li>
            <li>Feature on IFG’s website and social media</li>
            <li>Opportunity to work on IFG’s future initiatives</li>
          </ul>
        </div>

        {/* ACTIVE MEMBERS SECTION */}
        <div className="relative border border-gold/20 rounded-3xl p-10 bg-white/5 backdrop-blur-lg animate-fade-in-delay">
          <h2 className="text-4xl md:text-5xl font-semibold text-gold-gradient mb-6">
            💼 For Active Members
          </h2>
          <ul className="space-y-3 text-gray-300 leading-relaxed">
            <li>Leadership experience through real project management</li>
            <li>Certificates for contribution and performance</li>
            <li>Priority access to IFG programs and mentorship</li>
          </ul>
        </div>

        {/* SCHOOLS SECTION */}
        <div className="relative border border-gold/20 rounded-3xl p-10 bg-gradient-to-b from-[#020617] to-[#000] backdrop-blur-lg animate-fade-in-delay">
          <h2 className="text-4xl md:text-5xl font-semibold text-gold-gradient mb-6">
            🏫 For Schools & Universities
          </h2>
          <ul className="space-y-3 text-gray-300 leading-relaxed">
            <li>International recognition as a supporter of youth innovation</li>
            <li>Access to collaboration with our competitions</li>
            <li>Early invitations for your students to participate</li>
            <li>Opportunities to host joint workshops or mentorship sessions</li>
          </ul>
          <a
            href="mailto:ideaforgeglobal.official@gmail.com"
            className="inline-block mt-6 px-8 py-3 rounded-full border border-gold text-gold-gradient hover:bg-gold hover:text-black transition-all duration-500 animate-glow-btn"
          >
            📧 Partner With Us
          </a>
        </div>

        {/* JOIN US SECTION */}
        <div className="relative border border-gold/20 rounded-3xl p-10 bg-white/5 backdrop-blur-xl animate-fade-in">
          <h2 className="text-5xl font-bold text-center animate-gold-flow mb-10">
            🤝 Join Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            {/* Student */}
            <div className="bg-glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-gold">
              <h3 className="text-2xl text-gold-gradient mb-3">🧭 Join as a Student</h3>
              <p className="text-gray-300 mb-4">
                Join our challenge and showcase your creativity to a global audience.
                All you need is an idea that inspires.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="px-6 py-3 rounded-full border border-gold text-gold-gradient hover:bg-gold hover:text-black transition-all duration-500 animate-glow-btn"
              >
                Register Now
              </button>
            </div>

            {/* Partner */}
            <div className="bg-glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-gold">
              <h3 className="text-2xl text-gold-gradient mb-3">💬 Join as a Partner</h3>
              <p className="text-gray-300 mb-4">
                Partner with IFG to create new pathways for student innovation.
                Host co-branded challenges and gain recognition.
              </p>
              <a
                href="mailto:ideaforgeglobal.official@gmail.com"
                className="px-6 py-3 inline-block rounded-full border border-gold text-gold-gradient hover:bg-gold hover:text-black transition-all duration-500 animate-glow-btn"
              >
                Partner With Us
              </a>
            </div>

            {/* Team */}
            <div className="bg-glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-gold">
              <h3 className="text-2xl text-gold-gradient mb-3">👥 Join the IFG Team</h3>
              <p className="text-gray-300 mb-4">
                Become an ambassador or intern with IFG and grow your leadership journey.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="px-6 py-3 rounded-full border border-gold text-gold-gradient hover:bg-gold hover:text-black transition-all duration-500 animate-glow-btn"
              >
                Apply Now
              </button>
            </div>
          </div>

          <div className="mt-16 text-center text-gray-400 text-sm">
            📫 Email: ideaforgeglobal.official@gmail.com
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsPage;
