"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl"
      />

      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-bold z-10"
      >
        Dhiraj
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 text-xl text-gray-300 z-10"
      >
        Full Stack Developer • DevOps • Cloud Engineer
      </motion.p>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        className="mt-10 bg-blue-600 px-8 py-3 rounded-full glow z-10"
      >
        View Projects
      </motion.a>
    </section>
  );
}