"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  link?: string;
  highlights: string[];
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Miner / AI Agent Engineer",
    company: "Bittensor Subnet 62 (Ridges)",
    period: "09/2025 – Present",
    location: "Remote",
    link: "https://bittensor.com",
    highlights: [
      "Achieved #1 rank on Subnet 62 by iterating on a production-grade coding agent with tool routing and patch delivery",
      "Built fault-tolerant inference layer with multi-model retry/failover and strict response parsing",
      "Implemented balanced-brace extraction and fallback JSON parsing for resilient workflows",
      "Added operational guardrails—cost/usage caps, global timeouts, and progress tracking",
      "Built automated test-failure triage system producing actionable fix recommendations",
    ],
    tech: [
      "Python",
      "LLM APIs/SDKs",
      "Agent Tooling",
      "Docker",
      "Linux",
      "JSON/Schema Validation",
    ],
  },
  {
    title: "Senior Full Stack Developer",
    company: "GeoBit.ai",
    period: "04/2024 – 08/2025",
    location: "Remote",
    link: "https://geobit.ai",
    highlights: [
      "Architected and launched AI-driven geospatial intelligence platform combining Python (Flask), React, Cesium, and Redis on AWS",
      "Delivered Chat-to-Map conversational workflow (LLM-powered) for natural language geoprocessing",
      "Implemented advanced GIS capabilities including geospatial search, 3D terrain modeling, and GPS-driven analytics",
      "Built computer-vision pipelines for satellite/drone/LiDAR imagery, reducing manual GIS processing by ~80%",
      "Designed real-time geoprocessing using Redis + WebSockets for live spatial data flows",
      "Optimized infrastructure and caching strategies, reducing map generation time from hours to under 5 minutes",
    ],
    tech: [
      "Python (Flask)",
      "React",
      "Cesium",
      "Redux",
      "Socket.io",
      "WebSockets",
      "Redis",
      "AWS",
      "Terraform",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    title: "Senior Full-Stack Developer",
    company: "S-PRO",
    period: "07/2020 – 04/2024",
    location: "Remote",
    highlights: [
      "Developed backend services for regulated digital-asset banking platform with asset creation, offerings, and trading workflows",
      "Shipped full-stack features using Node.js (NestJS) + TypeScript and React",
      "Designed and optimized PostgreSQL schemas with TypeORM for critical financial flows",
      "Implemented event-driven integrations using Kafka for high-volume trade/order lifecycle processing",
      "Integrated AWS services (S3, SES, RDS) for secure storage and transactional email delivery",
      "Built robust UI experiences with React Query, Valtio, and MUI for financial actions",
    ],
    tech: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "React",
      "React Query",
      "Valtio",
      "MUI",
      "PostgreSQL",
      "TypeORM",
      "Kafka",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Gianty",
    period: "05/2016 – 07/2020",
    location: "Remote",
    highlights: [
      "Delivered multiple client-facing products end-to-end across backend, frontend, databases, and DevOps",
      "Built backend services and APIs using Node.js (Express/NestJS) and/or Python (FastAPI/Flask)",
      "Developed modern UIs with React and/or Vue (Nuxt) with reusable component patterns",
      "Designed persistence layers using PostgreSQL and/or MongoDB with schema optimization",
      "Implemented asynchronous workflows using message queues for high-throughput features",
      "Containerized services with Docker and supported Kubernetes deployments",
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "Express/NestJS",
      "Python",
      "FastAPI/Flask",
      "React",
      "Vue/Nuxt",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS/GCP",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Professional Experience
          </span>
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-6 md:p-8 hover:border-[#3a3a3a] transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-blue-400">{exp.title}</h3>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#a0a0a0] hover:text-blue-400 transition-colors"
                        aria-label={`Visit ${exp.company} website`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  <h4 className="text-xl md:text-2xl font-semibold text-purple-400 mb-3">
                    {exp.company}
                  </h4>
                  <div className="flex flex-wrap items-center gap-4 text-[#a0a0a0]">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="text-lg font-semibold mb-3 text-[#d0d0d0]">Key Achievements:</h5>
                <ul className="space-y-2 mb-6">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-[#d0d0d0]">
                      <span className="text-green-400 mr-3 mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full text-sm text-[#a0a0a0] hover:border-blue-400 hover:text-blue-400 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

