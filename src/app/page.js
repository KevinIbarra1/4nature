"use client";
import Image from "next/image";
import {
  Heart,
  Leaf,
  Users,
  Globe,
  Mail,
  MapPin,
  ArrowRight,
  Menu,
  X,
  Instagram,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Image
                src="/4natureLogo.png"
                alt="4Nature Logo"
                width={48}
                height={48}
                className="rounded-full object-cover"
                priority
              />
              {/* Always show the title, even on mobile */}
              <div>
                <h1 className="text-2xl font-bold text-black">4 Nature PR</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-black font-medium transition-all duration-300 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#mission"
                className="text-gray-700 hover:text-black font-medium transition-all duration-300 relative group"
              >
                Our Work
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#impact"
                className="text-gray-700 hover:text-black font-medium transition-all duration-300 relative group"
              >
                Impact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-black font-medium transition-all duration-300 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium transform hover:scale-105 shadow-lg hover:shadow-xl">
                Donate
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav
        className={`fixed inset-0 bg-black z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="absolute top-4 right-4">
          <button onClick={() => setIsMenuOpen(false)} className="text-white">
            <X className="h-8 w-8" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a
            href="#about"
            className="text-white text-2xl hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#mission"
            className="text-white text-2xl hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Work
          </a>
          <a
            href="#impact"
            className="text-white text-2xl hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Impact
          </a>
          <a
            href="#contact"
            className="text-white text-2xl hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <button
            className="bg-white text-black px-8 py-3 rounded-full text-xl font-medium hover:bg-gray-200 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Donate
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-800 to-gray-600"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-gray-300 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-500"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fadeInUp">
            Sowing hope <br />
            <span className="text-gray-300">cultivating the future </span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed text-gray-200 animate-fadeInUp delay-300">
            Bridging humanitarian aid and environmental conservation to create
            sustainable futures for communities and ecosystems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fadeInUp delay-500">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-xl hover:shadow-2xl">
              Support Our Mission <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-1"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Integrated Approach
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe human welfare and environmental health are inseparable.
              Every project we undertake strengthens both communities and the
              natural world they depend on.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="h-64 bg-gradient-to-br from-gray-800 to-black relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Heart className="h-12 w-12 mb-2 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <Heart className="h-6 w-6 text-black" />
                  </div>
                  <h4 className="text-2xl font-bold text-black">
                    Humanitarian Impact
                  </h4>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Providing essential support to underserved communities across
                  Latin America through healthcare, education, and emergency
                  relief that builds lasting resilience.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                    Medical outreach
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                    Education programs
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                    Emergency response
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                    Community development
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="h-64 bg-gradient-to-br from-gray-600 to-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Leaf className="h-12 w-12 mb-2 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <Leaf className="h-6 w-6 text-black" />
                  </div>
                  <h4 className="text-2xl font-bold text-black">
                    Ocean & Coastal Conservation
                  </h4>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Cleaning beaches and protecting sea life through
                  community-driven initiatives that restore marine ecosystems
                  and raise awareness about ocean health.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                    Beach Cleanup
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                    Pollution Awareness Campaigns
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                    Sea Turtle Protection
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                    Marine Education
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Environmental Impact
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From clearing plastics off our shores to safeguarding sea life,
              here’s how we’ve made waves together.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-bold text-black mb-2">50+</div>
              <div className="text-gray-700 font-medium">Beach Cleanups</div>
              <div className="text-sm text-gray-500 mt-1">events run</div>
            </div>
            <div className="text-center bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-bold text-black mb-2">25T+</div>
              <div className="text-gray-700 font-medium">
                Tons of Debris Removed
              </div>
              <div className="text-sm text-gray-500 mt-1">from our coasts</div>
            </div>
            <div className="text-center bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-bold text-black mb-2">500+</div>
              <div className="text-gray-700 font-medium">Attendees</div>
              <div className="text-sm text-gray-500 mt-1">
                in the beach Cleanups
              </div>
            </div>
            <div className="text-center bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-bold text-red mb-2">100+</div>
              <div className="text-gray-700 font-medium">
                Families Supported
              </div>
              <div className="text-sm text-gray-500 mt-1">
                through local programs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-black mb-8">
                Building Bridges Between{" "}
                <span className="text-gray-600">People</span> and{" "}
                <span className="text-gray-600">Planet</span>
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded on the understanding that human wellbeing and
                environmental health are fundamentally connected, 4Nature PR works
                hand-in-hand with communities across Latin America to create
                lasting, positive change.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our integrated approach ensures that every humanitarian project
                incorporates environmental stewardship, while our conservation
                efforts always prioritize the needs and wisdom of local
                communities.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-black text-lg">
                      Community-Centered
                    </div>
                    <div className="text-gray-600">
                      Led by local voices and needs
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-black text-lg">
                      Sustainable Impact
                    </div>
                    <div className="text-gray-600">
                      Solutions that last for generations
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-4 bg-gradient-to-br from-gray-200 to-gray-400 rounded-2xl"></div>
              <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-300 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <Users className="h-24 w-24 mx-auto mb-4" />
                  <p className="text-lg font-medium">Community Partnership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-gray-900 to-black"></div>
          <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-5 animate-pulse"></div>
          <div className="absolute bottom-0 -right-4 w-72 h-72 bg-gray-300 rounded-full mix-blend-overlay filter blur-xl opacity-5 animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h3>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-300">
            Every contribution helps us extend our reach and deepen our impact.
            Together, we can build a more sustainable and equitable future for
            Latin America.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex-1 shadow-xl hover:shadow-2xl">
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Let&apos;s Connect
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to join our mission? We&apos;d love to hear from you and explore
              how we can work together.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Email Card */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3">Email Us</h4>
              <p className="text-gray-600 mb-4">
                Get in touch for partnerships, volunteering, or general
                inquiries.
              </p>
              <a
                href="mailto:4natureandus@gmail.com"
                className="text-black font-semibold hover:underline"
              >
                4natureandus@gmail.com
              </a>
            </div>

            {/* Instagram Card */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Instagram className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3">Follow Us</h4>
              <p className="text-gray-600 mb-4">
                Support us by giving us a follow and keeping up with the latest
                posts
              </p>
              <a
                href="https://www.instagram.com/4naturepr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-semibold hover:underline"
              >
                @4naturepr
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 4Nature PR. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
