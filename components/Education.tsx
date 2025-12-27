"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Education
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#3a3a3a] transition-all"
        >
          <div className="flex items-start gap-6">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
              <GraduationCap className="text-white" size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">
                Bachelor of Computer Science
              </h3>
              <h4 className="text-xl font-semibold text-purple-400 mb-4">Kyoto University</h4>
              <p className="text-[#a0a0a0]">March 2012 – April 2016</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

