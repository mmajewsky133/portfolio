import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 relative">
      <div className="max-w-3xl mx-auto w-full text-center flex flex-col items-center gap-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold font-signature text-white drop-shadow-md mb-6">
            Get In Touch
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            I&apos;m currently open to new opportunities! Whether you have a question, a project proposal, 
            or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <a 
            href="mailto:mmajewsky133aee@gmail.com"
            target = "_blank"
            rel = "noopener noreferrer"
            className="flex items-center justify-center gap-4 px-8 py-4 rounded-xl bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 group"
          >
            <div className="p-3 bg-zinc-800 rounded-full group-hover:bg-purple-500/20 transition-colors">
              <FaEnvelope className="text-2xl text-purple-400" />
            </div>
            <div className="text-left">
              <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Email Me</p>
              <p className="text-zinc-200 font-medium group-hover:text-purple-300 transition-colors">majewsky133@gmail.com</p>
            </div>
          </a>

          <a 
            href="https://www.linkedin.com/in/martin-majewsky-z/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 px-8 py-4 rounded-xl bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 group"
          >
            <div className="p-3 bg-zinc-800 rounded-full group-hover:bg-purple-500/20 transition-colors">
              <FaLinkedin className="text-2xl text-purple-400" />
            </div>
            <div className="text-left">
              <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Connect</p>
              <p className="text-zinc-200 font-medium group-hover:text-purple-300 transition-colors">LinkedIn Profile</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
