// src/App.tsx
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (!user) return <Navigate to="/" replace />;
  return <>{children}</>;
};

const App: React.FC = () => {
  useEffect(() => {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    mobileMenuBtn?.addEventListener("click", () => {
      mobileMenu?.classList.toggle("hidden");
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href")!);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector("nav");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar?.classList.add("bg-white/95");
        navbar?.classList.remove("bg-white/90");
      } else {
        navbar?.classList.add("bg-white/90");
        navbar?.classList.remove("bg-white/95");
      }
    });
  }, []);

  const handleJoinFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailInput = document.getElementById("email") as HTMLInputElement;
    if (emailInput.value) {
      alert("Thanks for joining! We'll be in touch soon.");
      emailInput.value = "";
    }
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-gray-50">
                {/* Navbar */}
                <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center text-white font-bold text-xl pulse-glow">
                          IFG
                        </div>
                        <div>
                          <h1 className="text-2xl font-bold gradient-text">IdeaForge Global</h1>
                          <p className="text-sm text-gray-600">Global Youth Entrepreneurship</p>
                        </div>
                      </div>

                      <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                          Home
                        </a>
                        <a href="#about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                          About
                        </a>
                        <a href="#competition" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                          Competition
                        </a>
                        <a href="#benefits" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                          Benefits
                        </a>
                        <a href="#contact" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                          Contact
                        </a>
                        <button className="hero-gradient text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform glow-effect">
                          Join Now
                        </button>
                      </div>

                      <button className="md:hidden" id="mobileMenuBtn">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="md:hidden hidden" id="mobileMenu">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                      <a href="#home" className="block px-3 py-2 text-gray-700">
                        Home
                      </a>
                      <a href="#about" className="block px-3 py-2 text-gray-700">
                        About
                      </a>
                      <a href="#competition" className="block px-3 py-2 text-gray-700">
                        Competition
                      </a>
                      <a href="#benefits" className="block px-3 py-2 text-gray-700">
                        Benefits
                      </a>
                      <a href="#contact" className="block px-3 py-2 text-gray-700">
                        Contact
                      </a>
                      <button className="w-full mt-2 hero-gradient text-white px-6 py-2 rounded-full font-semibold">
                        Join Now
                      </button>
                    </div>
                  </div>
                </nav>

                {/* Hero Section */}
                <section
                  id="home"
                  className="min-h-screen hero-gradient bg-pattern flex items-center relative overflow-hidden pt-20"
                >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center py-20">
                    <div className="text-white space-y-8" data-aos="fade-right">
                      <div className="space-y-4">
                        <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm text-gray-200">
                          ✨ Global Youth Entrepreneurship Challenge
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                          From spark to success — <span className="typing-animation text-yellow-400">ignite yourself</span>
                          <br />
                          Innovation knows no age; <span className="text-blue-400">neither should opportunity</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
                          "The biggest risk is not taking any risk. Your fearlessness and fresh perspective can lead to groundbreaking innovation."{" "}
                          <span className="text-white">- Join thousands changing the world.</span>
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
                          🚀 Start Your Journey
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all">
                          📺 Watch Demo
                        </button>
                      </div>

                      <div className="flex items-center space-x-8 pt-8">
                        <div className="text-center">
                          <div className="text-3xl font-bold">10,000+</div>
                          <div className="text-sm text-white/80">Young Entrepreneurs</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold">50+</div>
                          <div className="text-sm text-white/80">Countries</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold">$1M+</div>
                          <div className="text-sm text-white/80">In Prizes</div>
                        </div>
                      </div>
                    </div>

                    <div className="relative" data-aos="fade-left">
                      <div className="floating-element">
                        <img
                          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                          alt="Young entrepreneurs collaborating"
                          className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                        />
                      </div>
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 floating-element"></div>
                      <div
                        className="absolute -bottom-10 -left-10 w-24 h-24 bg-pink-300 rounded-full opacity-20 floating-element"
                        style={{ animationDelay: "-2s" }}
                      ></div>
                    </div>
                  </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-20 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                        "Innovation distinguishes between a leader and a follower"
                      </h2>
                      <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        Welcome to IdeaForge Global (IFG) – a youth-led platform where bold ideas meet real-world action. We're building a global movement of student innovators, creators, and changemakers who want to shape the future through entrepreneurship.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                      <div data-aos="fade-right">
                        <img
                          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                          alt="Global networking illustration"
                          className="rounded-2xl shadow-xl w-full h-auto object-cover"
                        />
                      </div>

                      <div className="space-y-8" data-aos="fade-left">
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                          <p className="text-lg text-gray-600">
                            Help teens transform passion into purpose, with the tools, mentorship, and global network to support every step. Whether you're launching a new venture, exploring startup opportunities, or looking to grow as a young leader, IdeaForge is your launchpad.
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl">
                            <div className="text-3xl font-bold text-purple-600">24/7</div>
                            <div className="text-sm text-gray-600">Mentorship Support</div>
                          </div>
                          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl">
                            <div className="text-3xl font-bold text-blue-600">100%</div>
                            <div className="text-sm text-gray-600">Free to Join</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Competition Section */}
                <section id="competition" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" style={{ backgroundColor: 'antiquewhite' }}>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">The Challenge Awaits</h2>
                      <p className="text-xl text-gray-600">"The best time to start a business is when you're young. Your time is now."</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="card-3d bg-white p-8 rounded-2xl shadow-xl" data-aos="flip-left">
                        <div className="text-center">
                          <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">🏆</div>
                          <h3 className="text-2xl font-bold mb-4">Global Recognition</h3>
                          <p className="text-gray-600 mb-6">Winners receive certificates, exciting prizes, and global recognition, while top entries get featured on Google.</p>
                          <div className="text-3xl font-bold text-purple-600">$50K+</div>
                          <div className="text-sm text-gray-500">Total Prize Pool</div>
                        </div>
                      </div>

                      <div className="card-3d bg-white p-8 rounded-2xl shadow-xl" data-aos="flip-up" data-aos-delay="100">
                        <div className="text-center">
                          <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">🌍</div>
                          <h3 className="text-2xl font-bold mb-4">Global Network</h3>
                          <p className="text-gray-600 mb-6">Connect with students from around the world and share your vision on a global stage.</p>
                          <div className="text-3xl font-bold text-purple-600">50+</div>
                          <div className="text-sm text-gray-500">Countries Participating</div>
                        </div>
                      </div>

                      <div className="card-3d bg-white p-8 rounded-2xl shadow-xl" data-aos="flip-right" data-aos-delay="200">
                        <div className="text-center">
                          <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">💡</div>
                          <h3 className="text-2xl font-bold mb-4">Innovation Focus</h3>
                          <p className="text-gray-600 mb-6">Turn your innovative ideas into real solutions that can impact communities worldwide.</p>
                          <div className="text-3xl font-bold text-purple-600">24/7</div>
                          <div className="text-sm text-gray-500">Mentor Support</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Benefits Section */}
                <section id="benefits" className="py-20 bg-purple-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Why Join IFG?</h2>
                      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Unlock opportunities, mentorship, and global exposure. Build, connect, and grow with the next generation of young entrepreneurs.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                      {[
                        { icon: "🚀", title: "Launch Your Idea", desc: "Get mentorship to turn your idea into a real venture." },
                        { icon: "🤝", title: "Global Network", desc: "Collaborate with peers across the world." },
                        { icon: "🏅", title: "Recognition & Prizes", desc: "Win exciting prizes and global recognition." },
                      ].map((b, i) => (
                        <div
                          key={i}
                          className="bg-white rounded-2xl p-8 shadow-lg text-center hover:scale-105 transition-transform"
                          data-aos="fade-up"
                          data-aos-delay={i * 100}
                        >
                          <div className="text-4xl mb-4">{b.icon}</div>
                          <h3 className="text-2xl font-bold mb-2">{b.title}</h3>
                          <p className="text-gray-600">{b.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Contact / CTA Section */}
                <section id="contact" className="py-20 bg-gradient-to-br from-pink-100 to-purple-200">
                  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold gradient-text mb-6">Join the Challenge Now!</h2>
                    <p className="text-lg text-gray-700 mb-8">Enter your email and we'll keep you updated on upcoming events, resources, and prizes.</p>

                    <form onSubmit={handleJoinFormSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
                      <input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        required
                        className="px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 flex-1"
                      />
                      <button type="submit" className="hero-gradient px-6 py-3 rounded-full text-white font-bold hover:scale-105 transition-transform">
                        Join Now
                      </button>
                    </form>
                  </div>
                </section>

                {/* Footer */}
                <footer className="py-12 bg-gray-900 text-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">IdeaForge Global</h3>
                      <p className="text-gray-400">
                        Transforming ideas into global impact. Join thousands of young innovators shaping the future.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                      <ul className="space-y-2">
                        <li><a href="#home" className="hover:text-yellow-400 transition-colors">Home</a></li>
                        <li><a href="#about" className="hover:text-yellow-400 transition-colors">About</a></li>
                        <li><a href="#competition" className="hover:text-yellow-400 transition-colors">Competition</a></li>
                        <li><a href="#benefits" className="hover:text-yellow-400 transition-colors">Benefits</a></li>
                        <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4">Connect</h3>
                      <p className="text-gray-400">Email: info@ifgglobal.com</p>
                      <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
                      <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:text-yellow-400 transition-colors">🐦</a>
                        <a href="#" className="hover:text-yellow-400 transition-colors">📘</a>
                        <a href="#" className="hover:text-yellow-400 transition-colors">📸</a>
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-gray-500 mt-8">© 2025 IdeaForge Global. All rights reserved.</div>
                </footer>
              </div>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <div className="p-10">User Dashboard Placeholder</div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
