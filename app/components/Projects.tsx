"use client";

import React, { useState } from "react";
import { FaTimes, FaJava, FaPhp, FaReact, FaAngular, FaDocker, FaGitAlt, FaCode, FaNetworkWired } from "react-icons/fa";
import { SiSpringboot, SiKotlin, SiLaravel, SiTypescript, SiNextdotjs, SiTailwindcss, SiDotnet, SiMysql, SiOracle, SiMongodb } from "react-icons/si";
import { useLocale } from "./utils/LocaleContext";

// Helper to resolve icon from string
const getTechIcon = (tech: string) => {
  const iconMap: { [key: string]: React.ElementType } = {
    "Java": FaJava,
    "Spring Boot": SiSpringboot,
    "Angular": FaAngular,
    "Oracle PL/SQL": SiOracle,
    "Kotlin (KMP)": SiKotlin,
    "Kotlin (Android)": SiKotlin,
    "Laravel": SiLaravel,
    "MySQL": SiMysql,
    "ASP.NET": SiDotnet,
    "C#": SiDotnet,
  };
  const Icon = iconMap[tech] || FaCode;
  return <Icon className="text-purple-400 text-sm" />;
};

export default function Projects() {
  const { t } = useLocale();
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  // Define projects with localized details inside the component
  const projectsData = [
    {
      id: 1,
      title: "SIVIPCAN v5",
      description: t("project.sivipcan.desc"),
      role: t("project.sivipcan.role"),
      techStack: ["Java", "Spring Boot", "Angular", "Oracle PL/SQL"],
      softSkills: [
        t("project.sivipcan.skills.0"),
        t("project.sivipcan.skills.1"),
        t("project.sivipcan.skills.2"),
      ],
      imageAlt: "SIVIPCAN v5",
      img: "/portfolio/sivipcan5.png",
      pictures: ["/portfolio/sivipcan5.png"],
    },
    {
      id: 2,
      title: "SAI-MCN",
      description: t("project.saimcn.desc"),
      role: t("project.saimcn.role"),
      techStack: ["Kotlin (KMP)", "Laravel", "MySQL"],
      softSkills: [
        t("project.saimcn.skills.0"),
        t("project.saimcn.skills.1"),
        t("project.saimcn.skills.2"),
      ],
      imageAlt: "SAI-MCN",
      img: "/portfolio/saimcn.png",
      pictures: ["/portfolio/saimcn.png"],
    },
    {
      id: 3,
      title: "Mininos UCA Platform",
      description: t("project.mininos.desc"),
      role: t("project.mininos.role"),
      techStack: ["C#", "ASP.NET", "Kotlin (Android)"],
      softSkills: [
        t("project.mininos.skills.0"),
        t("project.mininos.skills.1"),
        t("project.mininos.skills.2"),
        t("project.mininos.skills.3"),
      ],
      imageAlt: "Mininos UCA Platform",
      img: "/portfolio/mininos.png",
      pictures: ["/portfolio/mininos.png"],
    },
  ];

  const selectedProject = projectsData.find((p) => p.id === selectedProjectId) || null;

  // Close modal when clicking background overlay
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedProjectId(null);
    }
  };

  return (
    <section id="projects" className="min-h-screen w-full flex flex-col justify-center py-24 px-4 relative">
      <div className="max-w-6xl mx-auto w-full">
        <h3 className="text-4xl font-bold mb-16 text-center border-b border-zinc-700 pb-4 inline-block mx-auto justify-center text-white drop-shadow-md">
          {t("projects.title")}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProjectId(project.id)}
              className="bg-zinc-900/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-zinc-700 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 flex flex-col cursor-pointer group"
            >
              {/* Card Image */}
              <div className="w-full h-48 bg-zinc-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                {project.img ? (
                  <img
                    src={project.img}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <span className="text-zinc-500 font-medium z-0 text-center px-4">
                    [Image: {project.imageAlt}]
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow gap-4">
                <h4 className="text-2xl font-bold text-zinc-100 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-zinc-400 text-sm flex-grow leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Pills (Simplified for Card) */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-1.5 bg-zinc-800 text-zinc-300 text-xs px-3 py-1.5 rounded-full border border-zinc-700"
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={handleOverlayClick}
        >
          <div className="relative bg-zinc-900 border border-zinc-700 rounded-2xl w-full max-w-5xl h-[85vh] md:h-[70vh] flex flex-col md:flex-row overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.15)] animate-in fade-in zoom-in-95 duration-300">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProjectId(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-zinc-800 rounded-full text-zinc-400 hover:text-white hover:bg-purple-600 transition-colors"
            >
              <FaTimes size={20} />
            </button>

            {/* Left Half: Scrollable Pictures */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full border-b md:border-b-0 md:border-r border-zinc-700 overflow-y-auto bg-zinc-950 p-6 flex flex-col gap-6 custom-scrollbar">
              <h4 className="text-zinc-400 font-semibold tracking-wider text-sm uppercase">{t("projects.gallery")}</h4>
              {selectedProject.pictures && selectedProject.pictures.length > 0 ? (
                selectedProject.pictures.map((pic, idx) => (
                  <div key={idx} className="w-full aspect-video bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700/50 overflow-hidden relative group">
                    {pic && !pic.includes("placeholder") ? (
                      <img 
                        src={pic} 
                        alt={`${selectedProject.title} gallery ${idx + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <span className="text-zinc-500 font-medium text-sm">[{pic}]</span>
                    )}
                  </div>
                ))
              ) : (
                <div className="w-full aspect-video bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700/50">
                  <span className="text-zinc-500 font-medium text-sm">{t("projects.no_images")}</span>
                </div>
              )}
            </div>

            {/* Right Half: Details */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-y-auto p-8 flex flex-col gap-8 custom-scrollbar">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <p className="text-purple-400 font-medium text-lg">{selectedProject.role}</p>
              </div>

              <div>
                <h4 className="text-zinc-400 font-semibold tracking-wider text-sm uppercase mb-3">{t("projects.about")}</h4>
                <p className="text-zinc-300 leading-relaxed font-light">{selectedProject.description}</p>
              </div>

              <div>
                <h4 className="text-zinc-400 font-semibold tracking-wider text-sm uppercase mb-3">{t("projects.technologies")}</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <span key={index} className="flex items-center gap-2 bg-zinc-800/50 text-zinc-200 text-sm px-4 py-2 rounded-lg border border-zinc-700/50 hover:border-purple-500/30 transition-colors cursor-default">
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-zinc-400 font-semibold tracking-wider text-sm uppercase mb-3">{t("projects.skills")}</h4>
                <ul className="list-disc list-inside text-zinc-300 font-light space-y-1">
                  {selectedProject.softSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
