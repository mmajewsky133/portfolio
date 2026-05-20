import React from "react";
import TextTransitionAnimation from "./utils/TextTransitionAnimation";
import { FaChevronDown } from "react-icons/fa";

export default function Hero() {
  const jobs = [
    "Software Engineer", 
    "Backend Architect", 
    "Full-Stack Developer", 
    "Technical Lead",
    "Project Manager"
  ];

  return (
    <section id="home" className="relative flex flex-col items-center justify-center px-4 w-full mx-auto gap-8 text-center min-h-screen">
      <h1 className="text-5xl md:text-7xl font-bold font-signature drop-shadow-md text-white hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300">
        Martin Majewsky Zelaya
      </h1>

      <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-700/50 flex justify-center p-4 rounded-xl w-full max-w-md shadow-lg hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:border-purple-500/30 transition-all duration-300">
        <h2 className="text-purple-400 font-extrabold text-2xl md:text-3xl tracking-wide drop-shadow-md">
          <TextTransitionAnimation list={jobs} />
        </h2>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-8">
        <a href="#contact" className="px-8 py-3 rounded-full bg-purple-500/10 border border-purple-500/50 text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
          Get in Touch
        </a>
        <a href="#projects" className="px-8 py-3 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 font-semibold hover:border-zinc-500 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          View Projects
        </a>
      </div>

      {/* Scroll Down Arrow */}
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer animate-bounce"
      >
        <span className="text-zinc-500 text-sm font-medium uppercase tracking-widest group-hover:text-purple-400 transition-colors duration-300">
          About Me
        </span>
        <div className="p-2 bg-zinc-800/50 rounded-full border border-zinc-700/50 text-zinc-400 group-hover:text-purple-400 group-hover:border-purple-500/50 transition-colors duration-300">
          <FaChevronDown size={16} />
        </div>
      </a>
    </section>
  );
}
