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
import { motion } from "framer-motion";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // NEW
  const [liked, setLiked] = useState(false);
  const [leafLiked, setLeafLiked] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);

  /* ───────── SCROLL HANDLER (navbar transparency) ───────── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll(); // run once on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ───────── TEAM DATA ───────── */
  const teamMembers = [
    { id: 1, name: "María Aguilar", image: "/Maria.webp" },
    { id: 2, name: "Kevin Ibarra", image: "/Kev.webp" },
    { id: 3, name: "Naishka Rodríguez", image: "/Nai.webp" },
    { id: 4, name: "Karla Vega", image: "/Karla.webp" },
    { id: 5, name: "Alejandro Durán", image: "/ale.webp" },
    { id: 6, name: "Javier Guadalupe", image: "/jav.webp" },
  ];

  const galleryImages = [
    "/gallery1.webp",
    "/gallery2.webp",
    "/gallery3.webp",
    "/gallery4.webp",
    "/gallery5.webp",
  ];

  /* gradient wave animation (Ocean card) */
  const waveAnim = {
    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
  };

  /* Disable body scroll when mobile menu is open */
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  /* ---------- animation helpers ---------- */
  const cardVariants = {
    offscreen: { opacity: 0, y: 60 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white bg-opacity-95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo + Title */}
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/Asset3.png"
                  alt="4Nature Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-2xl font-bold text-white">4NaturePR</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                ["About", "#about"],
                ["Our Work", "#mission"],
                ["Impact", "#impact"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-700 hover:text-black font-medium transition-all duration-300 relative group"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium transform hover:scale-105 shadow-lg hover:shadow-xl">
                Donate
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-black hover:bg-gray-100"
                  : "text-white hover:bg-white/20"
              }`}
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
          {[
            ["About", "#about"],
            ["Our Work", "#mission"],
            ["Impact", "#impact"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-white text-2xl hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <button
            className="bg-white text-black px-8 py-3 rounded-full text-xl font-medium hover:bg-gray-200 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Donate
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      {/* ================= HERO SECTION (video background) ================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* ► Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          {/* MOV files often play fine in Safari but not everywhere.
             If you can, convert to MP4/WebM and add extra <source> tags. */}
          <source src="/temp_video_for_share(3).mov" type="video/mp4" />
        </video>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0" />

        {/* Decorative pulse blobs (kept) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-gray-300 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-[1000ms]" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-[500ms]" />
        </div>

        {/* Hero content */}
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
            <a
              href="#about"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100
                         transition-all duration-300 transform hover:scale-105 flex items-center justify-center
                         shadow-xl hover:shadow-2xl"
            >
              Support Our Mission <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Scroll indicator (kept) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-1" />
          </div>
        </div>
      </section>
      {/* Mission Section */}
      {/* ───────── Mission Section ───────── */}
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
            {/* ───── Humanitarian Impact ───── */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.35 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* animated header */}
              {/* header image */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <Image
                  src="/IMG_2405.jpeg"
                  alt="Humanitarian Impact"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-8">
                <div className="flex items-center mb-6">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 cursor-pointer"
                    onClick={() => setLiked((prev) => !prev)}
                    animate={{ scale: liked ? 1.3 : 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    whileTap={{ scale: 1.1 }}
                  >
                    <Heart
                      className="h-6 w-6"
                      strokeWidth={1.5}
                      color={liked ? "#e0245e" : "#000"}
                      fill={liked ? "#e0245e" : "none"}
                    />
                  </motion.div>
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
                  {[
                    "Medical outreach",
                    "Education programs",
                    "Emergency response",
                    "Community development",
                  ].map((item) => (
                    <div key={item} className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-2" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ───── Ocean & Coastal Conservation ───── */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.35 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <Image
                  src="/555E4D0B-132B-4777-9D45-AFF0C45DFD20.JPG"
                  alt="Humanitarian Impact"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-8">
                <div className="flex items-center mb-6">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 cursor-pointer"
                    onClick={() => setLeafLiked((prev) => !prev)}
                    animate={{ scale: leafLiked ? 1.3 : 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    whileTap={{ scale: 1.1 }}
                  >
                    <Leaf
                      className="h-6 w-6"
                      strokeWidth={1.4}
                      fill={leafLiked ? "#10B981" : "none"}
                      stroke={leafLiked ? "#047857" : "#000"}
                    />
                  </motion.div>
                  <h4 className="text-2xl font-bold text-black">
                    Ocean &amp; Coastal Conservation
                  </h4>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Cleaning beaches and protecting sea life through
                  community-driven initiatives that restore marine ecosystems
                  and raise awareness about ocean health.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  {[
                    "Beach Cleanup",
                    "Pollution Awareness Campaigns",
                    "Sea Turtle Protection",
                    "Marine Education",
                  ].map((item) => (
                    <div key={item} className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-2" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
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
                environmental health are fundamentally connected, 4NaturePR
                works hand-in-hand with communities across Latin America to
                create lasting, positive change.
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
              <div className="absolute inset-4 bg-gradient-to-br from-gray-200 to-gray-400 rounded-2xl" />
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                {/* ✅ NEW: actual photograph replaces placeholder */}
                <Image
                  src="/21D4E136-1EBC-4B51-8112-4A16C426F1F9.JPG"
                  alt="Community members collaborating on a project"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Meet Our <span className="text-gray-600">Team</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A diverse group of changemakers committed to a sustainable future.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map(({ id, name, role, image }) => (
              <motion.div
                key={id}
                className="relative w-full pb-[100%] rounded-2xl overflow-hidden shadow-lg group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority={id === 1}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white px-2">
                    <h4 className="font-semibold text-lg">{name}</h4>
                    {role && <p className="text-sm text-gray-300">{role}</p>}
                  </div>
                </div>
              </motion.div>
            ))}
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
            <button
              onClick={() => setShowDonateModal(true)}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex-1 shadow-xl hover:shadow-2xl"
            >
              Donate Now
            </button>
          </div>
        </div>
      </section>
      {/* Enhanced Donate Modal */}
      {showDonateModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowDonateModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100 animate-in fade-in-0 zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with dark background */}
            <div className="bg-black p-6 rounded-t-2xl text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-2xl font-bold mb-1">Support Our Cause</h4>
                  <p className="text-gray-300 text-sm">
                    Choose your preferred payment method
                  </p>
                </div>
                <button
                  onClick={() => setShowDonateModal(false)}
                  className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="space-y-4">
                {/* PayPal Option */}
                <a
                  href="https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-xl bg-gray-900 border border-gray-700 p-4 text-white shadow-lg hover:shadow-xl hover:bg-black transform hover:scale-[1.02] transition-all duration-200"
                >
                  <div className="relative flex items-center justify-center space-x-3">
                    <div className="bg-gray-800 p-2 rounded-full">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h8.418c2.508 0 4.684.95 5.82 2.542 1.048 1.467 1.097 3.4.133 5.302.964.428 1.72 1.266 2.099 2.498.4 1.304.202 2.705-.542 3.946-1.21 2.016-3.564 3.054-6.805 3.001h-1.564a.875.875 0 0 0-.862.734l-.306 1.944-.18 1.144a.424.424 0 0 1-.419.366z" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-lg">PayPal</div>
                      <div className="text-gray-400 text-sm">
                        Secure & trusted worldwide
                      </div>
                    </div>
                  </div>
                </a>

                {/* ATH Móvil Option */}
                <a
                  href="https://www.athmovil.com/4naturepr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-xl bg-gray-900 border border-gray-700 p-4 text-white shadow-lg hover:shadow-xl hover:bg-black transform hover:scale-[1.02] transition-all duration-200"
                >
                  <div className="relative flex items-center justify-center space-x-3">
                    <div className="bg-gray-800 p-2 rounded-full">
                      <svg
                        className="w-6 h-6 text-orange-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-lg">ATH Móvil</div>
                      <div className="text-gray-400 text-sm">
                        Popular in Puerto Rico
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Security Note */}
              <div className="mt-6 p-4 bg-gray-100 rounded-xl border border-gray-200">
                <div className="flex items-center space-x-2 text-gray-700">
                  <div className="bg-gray-300 p-1 rounded-full">
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Secure Payment</div>
                    <div className="text-xs text-gray-500">
                      Your transaction is protected and encrypted
                    </div>
                  </div>
                </div>
              </div>

              {/* Cancel Button */}
              <button
                onClick={() => setShowDonateModal(false)}
                className="w-full mt-4 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Let&apos;s Connect
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to join our mission? We&apos;d love to hear from you and
              explore how we can work together.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Email Card */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              {/* Icon wrapped in the mailto link */}
              <a
                href="mailto:4natureandus@gmail.com"
                className="inline-block mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <Mail className="h-8 w-8 text-white" />
                </div>
              </a>

              <h4 className="text-xl font-bold text-black mb-3">Email Us</h4>
              <p className="text-gray-600 mb-4">
                Get in touch for partnerships, volunteering, or general
                inquiries.
              </p>

              {/* Address link stays the same */}
              <a
                href="mailto:4natureandus@gmail.com"
                className="text-black font-semibold hover:underline"
              >
                4natureandus@gmail.com
              </a>
            </div>

            {/* Instagram Card */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              {/* Icon wrapped in link */}
              <a
                href="https://www.instagram.com/4naturepr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
              </a>

              <h4 className="text-xl font-bold text-black mb-3">Follow Us</h4>
              <p className="text-gray-600 mb-4">
                Support us by giving us a follow and keeping up with the latest
                posts
              </p>

              {/* Handle link stays the same */}
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
              © 2025 4NaturePR. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
