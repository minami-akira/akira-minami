"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            About Me
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <p className="text-lg md:text-xl leading-relaxed text-[#d0d0d0] mb-6">
            I&apos;m a <strong className="text-blue-400">Senior Software Engineer</strong> with over 10
            years of experience building production platforms across{" "}
            <strong className="text-purple-400">geospatial analytics</strong> and{" "}
            <strong className="text-blue-400">fintech</strong>. My expertise spans full-stack
            development, AI systems integration, and cloud-native architecture.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-[#d0d0d0] mb-6">
            I specialize in <strong className="text-blue-400">Python</strong> and{" "}
            <strong className="text-blue-400">TypeScript/Node.js</strong>, with deep experience in
            cloud-native delivery using <strong className="text-purple-400">AWS</strong>,{" "}
            <strong className="text-purple-400">Docker/Kubernetes</strong>, and{" "}
            <strong className="text-purple-400">Terraform</strong>. I have a proven track record of
            shipping LLM-powered features end-to-end, from data pipelines to APIs and user
            interfaces.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Key Achievements</h3>
              <ul className="space-y-3 text-[#d0d0d0]">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Reduced manual GIS processing by ~80%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Achieved #1 rank on Bittensor Subnet 62</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Optimized map generation time to under 5 minutes</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Core Expertise</h3>
              <ul className="space-y-3 text-[#d0d0d0]">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>LLM integration and AI agent development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Geospatial analytics and 3D visualization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Cloud infrastructure and DevOps automation</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

