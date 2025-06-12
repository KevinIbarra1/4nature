/* ----------------------------------------------------------------
   File: app/(landing)/LandingPage.tsx
   ----------------------------------------------------------------*/
"use client";

import Image from "next/image";
import {
  Heart,
  Leaf,
  Users,
  Globe,
  Mail,
  ArrowRight,
  Menu,
  X,
  Instagram,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  /* ─── state ─────────────────────────── */
  const [isMenuOpen, setIsMenuOpen]   = useState(false);
  const [scrolled,   setScrolled]     = useState(false);
  const [liked,      setLiked]        = useState(false);
  const [leafLiked,  setLeafLiked]    = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);

  /* ─── scroll handler (navbar) ───────── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ─── block body-scroll when mobile nav open ─── */
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  /* ─── animation variants ─────────────── */
  const cardVariants = {
    offscreen: { opacity: 0, y: 60 },
    onscreen:  {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  /* ─── data ───────────────────────────── */
  const teamMembers = [
    { id: 1, name: "María Aguilar",    image: "/Maria.webp" },
    { id: 2, name: "Kevin Ibarra",     image: "/Kev.webp"   },
    { id: 3, name: "Naishka Rodríguez",image: "/Nai.webp"   },
    { id: 4, name: "Karla Vega",       image: "/Karla.webp" },
    { id: 5, name: "Alejandro Durán",  image: "/ale.webp"   },
    { id: 6, name: "Javier Guadalupe", image: "/jav.webp"   },
  ];

  /* ────────────────────────────────────────────────────────── */
  return (
    <div className="min-h-screen bg-gray-950 text-gray-50 scroll-smooth">
      {/* ================= HEADER ================= */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-950/90 backdrop-blur border-b border-gray-800 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo + brand */}
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/Asset3.png"
                  alt="4NaturePR logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-2xl font-bold">4NaturePR</h1>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                ["About",   "#about"],
                ["Our Work", "#mission"],
                ["Impact",  "#impact"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="relative font-medium text-gray-100 hover:text-white transition-colors duration-300 group"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <button className="px-6 py-2 rounded-full bg-white text-gray-950 font-medium shadow-lg hover:shadow-xl hover:bg-white transition">
                Donate
              </button>
            </nav>

            {/* Mobile burger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-100 hover:bg-white/10 transition"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE NAV ================= */}
      <nav
        className={`fixed inset-0 z-50 bg-gray-950 transform transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-gray-100 p-2"
        >
          <X className="h-8 w-8" />
        </button>
        <div className="flex flex-col h-full items-center justify-center space-y-8">
          {[
            ["About",   "#about"],
            ["Our Work", "#mission"],
            ["Impact",  "#impact"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-gray-100 hover:text-white transition"
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="bg-white text-gray-950 px-8 py-3 rounded-full text-xl font-medium hover:bg-white transition"
          >
            Donate
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/temp_video_for_share(3).mov" type="video/mp4" />
        </video>

        {/* dark overlay */}
        <div className="absolute inset-0 bg-gray-950/70" />

        {/* hero content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fadeInUp">
            Sowing hope <br />
            <span className="text-gray-400">cultivating the future</span>
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300 max-w-3xl mx-auto mb-8 animate-fadeInUp delay-300">
            Bridging humanitarian aid and environmental conservation to create
            sustainable futures for communities and ecosystems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fadeInUp delay-500">
            {/* FIXED: smooth-scrolls to the Building Bridges (#about) section */}
            <a
              href="#about"
              className="bg-white text-gray-950 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition inline-flex items-center justify-center"
            >
              Support&nbsp;Our&nbsp;Mission <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-100 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-100 rounded-full mt-1" />
          </div>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section id="mission" className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Our Integrated Approach
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We believe human welfare and environmental health are inseparable.
              Every project we undertake strengthens both communities and the
              natural world they depend on.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Humanitarian card */}
            <motion.div
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.35 }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/D7FF9191-0EE2-4FDE-AC06-BB3EAB0F951E.JPG"
                  alt="Humanitarian Impact"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <motion.div
                    onClick={() => setLiked(!liked)}
                    className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4 cursor-pointer"
                    animate={{ scale: liked ? 1.3 : 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    whileTap={{ scale: 1.1 }}
                  >
                    <Heart
                      className="h-6 w-6"
                      strokeWidth={1.5}
                      color={liked ? "#e0245e" : "#fff"}
                      fill={liked ? "#e0245e" : "none"}
                    />
                  </motion.div>
                  <h4 className="text-2xl font-bold">Humanitarian Impact</h4>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Providing essential support to underserved communities across
                  Latin America through healthcare, education, and emergency
                  relief that builds lasting resilience.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                  {[
                    "Medical outreach",
                    "Education programs",
                    "Emergency response",
                    "Community development",
                  ].map(item => (
                    <div key={item} className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-2" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Ocean conservation card */}
            <motion.div
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.35 }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/555E4D0B-132B-4777-9D45-AFF0C45DFD20.JPG"
                  alt="Ocean & Coastal Conservation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <motion.div
                    onClick={() => setLeafLiked(!leafLiked)}
                    className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4 cursor-pointer"
                    animate={{ scale: leafLiked ? 1.3 : 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    whileTap={{ scale: 1.1 }}
                  >
                    <Leaf
                      className="h-6 w-6"
                      strokeWidth={1.4}
                      fill={leafLiked ? "#10B981" : "none"}
                      stroke={leafLiked ? "#10B981" : "#fff"}
                    />
                  </motion.div>
                  <h4 className="text-2xl font-bold">
                    Ocean &amp; Coastal Conservation
                  </h4>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Cleaning beaches and protecting sea life through
                  community-driven initiatives that restore marine ecosystems
                  and raise awareness about ocean health.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                  {[
                    "Beach Cleanup",
                    "Pollution Awareness",
                    "Sea Turtle Protection",
                    "Marine Education",
                  ].map(item => (
                    <div key={item} className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-2" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-8">
                Building Bridges Between{" "}
                <span className="text-white">People</span> and{" "}
                <span className="text-white">Planet</span>
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Founded on the understanding that human wellbeing and
                environmental health are fundamentally connected, 4NaturePR
                works hand-in-hand with communities across Latin America to
                create lasting, positive change.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our integrated approach ensures that every humanitarian project
                incorporates environmental stewardship, while our conservation
                efforts always prioritize the needs and wisdom of local
                communities.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-gray-100" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Community-Centered</div>
                    <div className="text-gray-400">Led by local voices</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-gray-100" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Sustainable Impact</div>
                    <div className="text-gray-400">Solutions that last</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-4 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl" />
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/21D4E136-1EBC-4B51-8112-4A16C426F1F9.JPG"
                  alt="Community collaboration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section id="team" className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="text-white">Team</span>
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              A diverse group of changemakers committed to a sustainable future.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map(({ id, name, image }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full pb-[100%] rounded-2xl overflow-hidden shadow-lg group"
              >
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={id === 1}
                />
                <div className="absolute inset-0 bg-gray-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h4 className="text-lg font-semibold">{name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h3>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Every contribution helps us extend our reach and deepen our impact.
            Together, we can build a more sustainable and equitable future for
            Latin America.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
            <button
              onClick={() => setShowDonateModal(true)}
              className="bg-white text-gray-950 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition"
            >
              Donate&nbsp;Now
            </button>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Connect
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to join our mission? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Email card */}
            <div className="bg-gray-900 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 group">
              <a
                href="mailto:4natureandus@gmail.com"
                className="inline-block mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                  <Mail className="h-8 w-8 text-gray-100" />
                </div>
              </a>
              <h4 className="text-xl font-bold mb-3">Email Us</h4>
              <p className="text-gray-400 mb-4">
                Partnerships, volunteering, or general inquiries.
              </p>
              <a
                href="mailto:4natureandus@gmail.com"
                className="font-semibold hover:underline"
              >
                4natureandus@gmail.com
              </a>
            </div>

            {/* Instagram card */}
            <div className="bg-gray-900 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 group">
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
              <h4 className="text-xl font-bold mb-3">Follow Us</h4>
              <p className="text-gray-400 mb-4">
                Stay up to date with our latest work.
              </p>
              <a
                href="https://www.instagram.com/4naturepr/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline"
              >
                @4naturepr
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-950 py-12">
        <div className="container mx-auto px-6">
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 4NaturePR. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
