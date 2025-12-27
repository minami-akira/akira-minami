"use client";

import { motion } from "framer-motion";
import { Github, Mail, Phone, ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Akira Minami
              </span>
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl md:text-4xl font-semibold mb-6 text-[#d0d0d0]"
          >
            Senior Software Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl mb-8 text-[#a0a0a0]"
          >
            AI & Geospatial | Full-Stack Development
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="mailto:contact@akiraminami.com"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105"
              aria-label="Email"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/minami-akira"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] border border-[#3a3a3a] text-white rounded-lg hover:bg-[#2a2a2a] transition-all transform hover:scale-105"
              aria-label="GitHub"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="tel:+385518940054"
              className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] border border-[#3a3a3a] text-white rounded-lg hover:bg-[#2a2a2a] transition-all transform hover:scale-105"
              aria-label="Phone"
            >
              <Phone size={20} />
              <span>Phone</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <p className="text-lg mb-4 text-[#a0a0a0] max-w-3xl mx-auto">
              10+ years building production platforms across geospatial analytics and fintech.
              Proven impact includes reducing manual GIS processing by ~80% and achieving #1 rank
              on Bittensor Subnet 62.
            </p>
            <motion.button
              onClick={() => scrollToSection("about")}
              className="mt-8 animate-bounce"
              aria-label="Scroll to about"
            >
              <ArrowDown size={32} className="text-[#a0a0a0] hover:text-[#ededed]" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

