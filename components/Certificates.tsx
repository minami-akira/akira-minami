"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  skills: string[];
  link?: string;
}

const certificates: Certificate[] = [
  {
    title: "Frontend Developer",
    issuer: "HackerRank",
    skills: ["React", "JavaScript", "CSS"],
    link: "https://www.hackerrank.com",
  },
  {
    title: "Software Engineer",
    issuer: "HackerRank",
    skills: ["SQL", "REST API"],
    link: "https://www.hackerrank.com",
  },
];

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="certificates"
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
            Certificates
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#3a3a3a] transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">{cert.title}</h3>
                    <p className="text-[#a0a0a0]">{cert.issuer}</p>
                  </div>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a0a0a0] hover:text-blue-400 transition-colors"
                    aria-label={`View ${cert.title} certificate on ${cert.issuer}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-sm text-[#d0d0d0]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

