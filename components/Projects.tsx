"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Code } from "lucide-react";

interface Project {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  link?: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "GeoBit.ai - AI-Powered GIS Platform",
    description:
      "AI-driven geospatial intelligence platform with Chat-to-Map conversational workflow enabling natural language geoprocessing.",
    highlights: [
      "Reduced manual GIS processing by ~80%",
      "Optimized map generation from hours to under 5 minutes",
      "Real-time geoprocessing with Redis + WebSockets",
      "Computer vision pipelines for satellite/drone/LiDAR imagery",
      "3D terrain modeling and GPS-driven analytics",
    ],
    tech: [
      "Python (Flask)",
      "React",
      "Cesium.js",
      "Redux",
      "Socket.io",
      "Redis",
      "AWS",
      "Terraform",
      "Kubernetes",
    ],
    link: "https://geobit.ai",
    category: "AI & Geospatial",
  },
  {
    title: "Bittensor Subnet 62 - AI Coding Agent",
    description:
      "Production-grade coding agent that achieved #1 rank on Bittensor Subnet 62 through advanced tool routing and evaluation systems.",
    highlights: [
      "Achieved #1 rank on Subnet 62",
      "Fault-tolerant inference layer with multi-model retry/failover",
      "Automated test-failure triage system",
      "Operational guardrails with cost/usage caps",
      "Balanced-brace extraction and fallback JSON parsing",
    ],
    tech: [
      "Python",
      "LLM APIs/SDKs",
      "Agent Tooling",
      "Docker",
      "Linux",
      "JSON/Schema Validation",
    ],
    link: "https://bittensor.com",
    category: "AI & Blockchain",
  },
  {
    title: "S-PRO Digital Asset Bank Platform",
    description:
      "Regulated digital-asset banking platform enabling asset creation, tokenization, offerings, and secondary-market trading.",
    highlights: [
      "Full-stack features with Node.js (NestJS) + TypeScript and React",
      "Event-driven integrations using Kafka",
      "PostgreSQL schema optimization with TypeORM",
      "AWS integration (S3, SES, RDS)",
      "Financial workflows with React Query and MUI",
    ],
    tech: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "React",
      "PostgreSQL",
      "TypeORM",
      "Kafka",
      "AWS",
      "Kubernetes",
    ],
    category: "Fintech",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
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
            Featured Projects
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#3a3a3a] transition-all flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="text-blue-400" size={20} />
                    <span className="text-xs px-2 py-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded text-purple-400">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-400 mb-2">{project.title}</h3>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a0a0a0] hover:text-blue-400 transition-colors"
                    aria-label={`Visit ${project.title} website`}
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>

              <p className="text-[#d0d0d0] mb-4 flex-grow">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-[#a0a0a0] mb-2">Key Highlights:</h4>
                <ul className="space-y-1">
                  {project.highlights.slice(0, 3).map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-sm text-[#d0d0d0]">
                      <span className="text-green-400 mr-2 mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-2 py-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded text-xs text-[#a0a0a0]"
                  >
                    {tech}
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

