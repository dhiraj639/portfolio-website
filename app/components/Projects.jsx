"use client";

import { motion } from "framer-motion";

export default function Projects() {

  const projects = [
    {
      title: "Student Result App",
      desc: "Java Dockerized project",
      link: "https://github.com/dhiraj639/student-result-app"
    },
    {
      title: "Portfolio Website",
      desc: "React + Next.js Portfolio",
      link: "https://github.com/dhiraj639/portfolio-website"
    },
    {
      title: "AWS Deployment",
      desc: "EC2 + Docker deployment",
      link: "https://github.com/dhiraj639"
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#020617] text-white px-10 py-24"
    >
      <h2 className="text-5xl font-bold text-center mb-20">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            whileHover={{
              scale: 1.05,
              y: -10
            }}
            className="bg-black border border-slate-800 rounded-3xl p-8 cursor-pointer shadow-lg hover:shadow-blue-500/20 transition"
          >
            <h3 className="text-3xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400">
              {project.desc}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}