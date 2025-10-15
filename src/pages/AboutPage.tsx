import React from 'react';
import CompetitionSignup from '../components/CompetitionSignup';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#08122B] to-[#0A1833] text-white">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* OUR STORY */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-flow">
              Our Story
            </h2>
            <p className="text-gray-200 text-lg sm:text-xl max-w-4xl mx-auto mb-6">
              IdeaForge Global (IFG) began with a simple observation: thousands of students have brilliant ideas, but few get the chance to bring them to life.
            </p>
            <p className="text-gray-200 text-lg sm:text-xl max-w-4xl mx-auto mb-6">
              Founded by students, IFG was built on a belief — that innovation should be accessible to everyone. We started small, with local idea-sharing initiatives, and have now grown into a global community connecting youth from different countries and academic backgrounds.
            </p>
            <p className="text-gray-200 text-lg sm:text-xl max-w-4xl mx-auto">
              Our journey isn't about being the biggest — it's about being the most impactful.
            </p>
          </div>

          {/* VISION, MISSION, CORE VALUES */}
          <div className="grid md:grid-cols-2 gap-12 sm:gap-16 items-center mb-16">
            <div className="animate-slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Global networking illustration"
                className="rounded-2xl shadow-[0_0_25px_rgba(255,215,0,0.2)] w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-8 animate-slide-in-right">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-flow mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-200 text-base sm:text-lg">
                  To empower students globally by giving them the courage, confidence, and connections to transform ideas into reality.
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-flow mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-200 text-base sm:text-lg">
                  To create a global ecosystem of innovation by organizing international idea challenges, mentorship programs, and student-led collaborations that inspire creativity and problem-solving.
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-flow mb-4">
                  Our Core Values
                </h3>
                <p className="text-gray-200 text-base sm:text-lg">
                  Inclusivity • Integrity • Innovation • Collaboration • Impact
                </p>
              </div>
            </div>
          </div>

          {/* WHAT MAKES IFG UNIQUE */}
          <div className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-flow text-center">
              What Makes IFG Unique
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-200">
              {[
                { title: "Completely Student-Led", desc: "Built by students, for students" },
                { title: "Global Reach", desc: "Connecting innovators worldwide" },
                { title: "Accessible to All", desc: "Free participation for everyone" },
                { title: "Recognition That Matters", desc: "Certificates, LORs, and awards" },
                { title: "Partnerships with Institutions", desc: "Collaborating with leading organizations" },
                { title: "Mentorship & Support", desc: "Guidance from industry experts" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 p-6 rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.1)] hover:shadow-[0_0_35px_rgba(255,215,0,0.2)] hover:scale-[1.02] transition-all"
                >
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* OUR TEAM */}
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-flow mb-4">
              Our Team
            </h3>
            <p className="text-gray-200 text-lg max-w-3xl mx-auto">
              We are a passionate collective of students working together to create world-class opportunities for youth. Everyone at IFG shares one goal — to make the next generation of entrepreneurs unstoppable.
            </p>
          </div>

          {/* WHY WE EXIST */}
          <div className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-8 text-center mb-16 shadow-[0_0_25px_rgba(255,215,0,0.1)] hover:shadow-[0_0_40px_rgba(255,215,0,0.2)] transition-all">
            <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-flow mb-4">
              Why We Exist
            </h3>
            <p className="text-gray-200 text-lg max-w-3xl mx-auto mb-6">
              We believe innovation should not be limited by resources, geography, or privilege. Every student — no matter where they come from — deserves a place to share their vision and be heard.
            </p>
            <p className="text-gray-200 text-lg max-w-3xl mx-auto font-semibold">
              That's what IdeaForge Global stands for. We're not just hosting competitions — we're building a community where ideas meet purpose, and creativity meets opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* COMPETITION SECTION */}
      <section className="py-16 border-t border-yellow-400/10" style={{ backgroundColor: '#0A1833' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-10 shadow-[0_0_25px_rgba(255,215,0,0.1)] hover:shadow-[0_0_40px_rgba(255,215,0,0.2)] transition-all">
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-flow text-center">
              🏆 Global Youth Entrepreneurship Challenge (GYEC)
            </h2>
            
            <p className="text-gray-200 text-lg mb-4">
              GYEC is not just a competition — it’s a journey of exploration, innovation, and growth.
            </p>
            <p className="text-gray-200 text-lg mb-6">
              We invite students to submit ideas that can improve lives, communities, or industries. The challenge is designed to be inclusive and easy to join — because what matters most is your creativity, not your background.
            </p>

            {/* How to Participate */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-flow">📋 How to Participate</h3>
              <ol className="list-decimal list-inside text-gray-200 space-y-1">
                <li>Register: Fill the official IFG registration form.</li>
                <li>Prepare Your Idea: Write a short concept (150–250 words) or a 2-minute video pitch.</li>
                <li>Submit: Send it via our submission form before the deadline.</li>
                <li>Evaluation: Our team and judges review all submissions fairly.</li>
                <li>Shortlisting: Best ideas are shortlisted for the final round.</li>
                <li>Presentation: Finalists present their ideas live online.</li>
                <li>Results: Winners are announced and featured globally.</li>
              </ol>
            </div>

            {/* Guidelines for Submission */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-flow">🧾 Guidelines for Submission</h3>
              <ul className="list-disc list-inside text-gray-200 space-y-1">
                <li>Original ideas only (no copied work).</li>
                <li>You may submit as an individual or a team.</li>
                <li>Choose a category: Business, Sustainability, Innovation, or Social Impact.</li>
                <li>Submissions must clearly state the problem and your proposed solution.</li>
                <li>Optional visuals or sketches are welcome.</li>
              </ul>
            </div>

            {/* Judging Criteria */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-flow">⚙️ Judging Criteria</h3>
              <ul className="list-disc list-inside text-gray-200 space-y-1">
                <li>Creativity and uniqueness</li>
                <li>Practicality and feasibility</li>
                <li>Impact and relevance</li>
                <li>Clarity and presentation</li>
              </ul>
            </div>

            {/* Rewards & Timeline */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-flow">🎁 Rewards & Recognition</h3>
              <ul className="list-disc list-inside text-gray-200 space-y-1">
                <li>Certificates of Excellence</li>
                <li>Amazon / Flipkart Gift Cards</li>
                <li>Mystery Entrepreneur Box</li>
                <li>Personalized LOR from IFG</li>
                <li>Opportunity to collaborate with partner universities</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-flow">🕐 Timeline</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-gray-200 border-collapse border border-yellow-400/20">
                  <thead>
                    <tr className="border-b border-yellow-400/20">
                      <th className="p-2 text-left">Phase</th>
                      <th className="p-2 text-left">Description</th>
                      <th className="p-2 text-left">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { phase: "Registration Opens", desc: "Students begin to register", date: "To be updated" },
                      { phase: "Submission Deadline", desc: "Last date for idea submission", date: "To be updated" },
                      { phase: "Shortlisting", desc: "Evaluation and finalist selection", date: "To be updated" },
                      { phase: "Final Round", desc: "Virtual presentations", date: "To be updated" },
                      { phase: "Results Announcement", desc: "Winners revealed", date: "To be updated" },
                    ].map((item, idx) => (
                      <tr key={idx} className="border-b border-yellow-400/20">
                        <td className="p-2">{item.phase}</td>
                        <td className="p-2">{item.desc}</td>
                        <td className="p-2">{item.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Signup Component */}
            <div className="mt-8">
              <CompetitionSignup />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
