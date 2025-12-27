"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@akiraminami.com",
      href: "mailto:contact@akiraminami.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+385 51 894 0054",
      href: "tel:+385518940054",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/minami-akira",
      href: "https://github.com/minami-akira",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Get In Touch
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-[#a0a0a0] text-lg mb-12"
        >
          I&apos;m always open to discussing new opportunities, innovative projects, or potential
          collaborations.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={index}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#3a3a3a] transition-all group"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-[#d0d0d0] mb-2">{method.label}</h3>
                <p className="text-[#a0a0a0] group-hover:text-[#d0d0d0] transition-colors">
                  {method.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center text-[#a0a0a0]"
        >
          <p>© {new Date().getFullYear()} Akira Minami. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}

