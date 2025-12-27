"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL"],
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Vue",
      "Nuxt",
      "Redux/Pinia",
      "Tailwind CSS",
      "MUI",
      "HTML/CSS",
    ],
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Backend",
    skills: [
      "FastAPI",
      "Flask",
      "Node.js",
      "NestJS",
      "Express",
      "REST",
      "GraphQL",
      "WebSockets",
      "Microservices",
    ],
    color: "from-pink-400 to-pink-600",
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS (EC2, Lambda, S3, RDS)",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "GitHub Actions",
      "Jenkins",
      "GitLab CI",
    ],
    color: "from-green-400 to-green-600",
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis"],
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "AI, GIS & Specialized",
    skills: [
      "LLM Integration",
      "OpenAI API",
      "Computer Vision",
      "Cesium.js",
      "Geoprocessing",
      "GPS Workflows",
      "Blockchain",
    ],
    color: "from-indigo-400 to-indigo-600",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Skills & Technologies
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#3a3a3a] transition-all"
            >
              <h3
                className={`text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + skillIndex * 0.05,
                    }}
                    className="px-3 py-1.5 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-sm text-[#d0d0d0] hover:border-blue-400 hover:text-blue-400 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

