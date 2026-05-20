"use client";

import React from "react";
import TechStackMarquee from "./TechStackMarquee";
import { FaChevronDown, FaDownload } from "react-icons/fa";
import { useLocale } from "./utils/LocaleContext";

export default function AboutMe() {
  const { t } = useLocale();

  return (
    <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 relative">
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-16">
        
        {/* Top row: Image & Text */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
          {/* GitHub Image */}
          <div className="relative shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <img 
              src="https://github.com/mmajewsky133.png" 
              alt="Martin Majewsky Zelaya" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Description & CV Button */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl gap-6">
            <h2 className="text-4xl md:text-5xl font-bold font-signature text-white drop-shadow-md">
              {t("about.title")}
            </h2>
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-light hover:text-zinc-100 transition-colors duration-300">
              {t("about.description")}
            </p>

            <a 
              href={t("about.cv_link")}
              download="Martin_Majewsky_CV.pdf"
              className="mt-4 flex items-center gap-3 px-8 py-3 rounded-full bg-purple-500/10 border border-purple-500/50 text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              <FaDownload />
              {t("about.cv")}
            </a>
          </div>
        </div>

        {/* Bottom row: Tech Stack */}
        <div className="flex flex-col items-center w-full gap-8">
          <h3 className="text-3xl font-bold text-center border-b border-zinc-700 pb-2 text-white">
            {t("about.stack")}
          </h3>
          <TechStackMarquee />
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <a
        href="#projects" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer animate-bounce"
      >
        <span className="text-zinc-500 text-sm font-medium uppercase tracking-widest group-hover:text-purple-400 transition-colors duration-300">
          {t("about.scroll")}
        </span>
        <div className="p-2 bg-zinc-800/50 rounded-full border border-zinc-700/50 text-zinc-400 group-hover:text-purple-400 group-hover:border-purple-500/50 transition-colors duration-300">
          <FaChevronDown size={16} />
        </div>
      </a>
    </section>
  );
}
