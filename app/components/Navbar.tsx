"use client";

import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import EncryptedTextEffect from "./utils/EncryptedTextEffect";
import { useLocale } from "./utils/LocaleContext";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const { locale, setLocale, t } = useLocale();

  const links = [
    {
      id: 1,
      title: t("nav.about"),
      link: "#about",
    },
    {
      id: 2,
      title: t("nav.projects"),
      link: "#projects",
    },
    {
      id: 3,
      title: t("nav.contact"),
      link: "#contact",
    },
  ];

  const socials = [
    {
      id: "github",
      icon: <FaGithub size={24} />,
      link: "https://github.com/mmajewsky133",
    },
    {
      id: "linkedin",
      icon: <FaLinkedin size={24} />,
      link: "https://www.linkedin.com/in/martin-majewsky-z/",
    },
  ];

  return (
    <nav
      className="flex justify-between items-center w-full h-20 
        px-6 text-zinc-300 fixed top-0 left-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800/50 transition-all duration-300"
    >
      <div>
        <h1 className="text-4xl font-bold font-signature drop-shadow-md text-white hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(192,132,252,0.5)] transition-all duration-300 cursor-pointer">
          <a href="#home">MMZ</a>
        </h1>
      </div>

      <ul className="hidden md:flex items-center gap-2">
        {links.map(({ id, title, link }, index) => (
          <React.Fragment key={id}>
            <li
              className="px-4 cursor-pointer capitalize 
                        font-medium text-zinc-400 hover:text-zinc-100 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
            >
              <a href={link}>
                  <EncryptedTextEffect targetText={title} /> 
              </a>
            </li>
            {index < links.length - 1 && (
              <li className="text-zinc-700 font-light text-sm">|</li>
            )}
          </React.Fragment>
        ))}
      </ul>

      {/* Desktop Socials & Locale Switch */}
      <div className="hidden md:flex items-center gap-6">
        <ul className="flex gap-4">
          {socials.map(({ id, icon, link }) => (
            <li key={id} className="cursor-pointer text-zinc-400 hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(192,132,252,0.5)] transition-all duration-300">
              <a href={link} target="_blank" rel="noreferrer">{icon}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center bg-zinc-800/80 border border-zinc-700/50 rounded-full p-0.5 relative overflow-hidden select-none">
          <button
            onClick={() => setLocale("en")}
            className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase transition-all duration-300 z-10 ${
              locale === "en" ? "text-white bg-purple-600/80 shadow-[0_0_8px_rgba(168,85,247,0.4)] font-extrabold" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLocale("es")}
            className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase transition-all duration-300 z-10 ${
              locale === "es" ? "text-white bg-purple-600/80 shadow-[0_0_8px_rgba(168,85,247,0.4)] font-extrabold" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            ES
          </button>
        </div>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-50 text-zinc-400 hover:text-white transition-colors md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-zinc-950/95 backdrop-blur-xl flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center gap-8">
          {links.map(({ id, title, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize text-2xl
                        font-medium text-zinc-400 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300"
              onClick={() => setNav(false)}
            >
              <a href={link} onClick={() => setNav(false)}>{title}</a>
            </li>
          ))}
          <li className="flex flex-col items-center gap-6 mt-8">
            <div className="flex gap-8">
              {socials.map(({ id, icon, link }) => (
                <a key={id} href={link} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-purple-400 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(192,132,252,0.5)] transition-all duration-300">
                  {icon}
                </a>
              ))}
            </div>

            <div className="flex items-center bg-zinc-900/90 border border-zinc-800 rounded-full p-0.5 select-none">
              <button
                onClick={() => setLocale("en")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase transition-all duration-300 ${
                  locale === "en" ? "text-white bg-purple-600/80 shadow-[0_0_10px_rgba(168,85,247,0.4)]" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLocale("es")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase transition-all duration-300 ${
                  locale === "es" ? "text-white bg-purple-600/80 shadow-[0_0_10px_rgba(168,85,247,0.4)]" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                ES
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
