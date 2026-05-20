import React from 'react';
import { 
  FaJava, FaPhp, FaReact, FaAngular, FaDocker, FaGitAlt, FaCode, FaNetworkWired, 
  FaInfinity
} from 'react-icons/fa';
import { 
  SiSpringboot, SiKotlin, SiLaravel, SiTypescript, 
  SiNextdotjs, SiTailwindcss, SiDotnet, SiMysql, 
  SiOracle, SiMongodb, 
  SiPython,
  SiFastapi,
  SiCsharp,
  SiPostgresql
} from 'react-icons/si';

const skills = [
  { name: 'Java', Icon: FaJava, color: 'group-hover:text-orange-500', hoverBorder: 'hover:border-orange-500/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]' },
  { name: 'Spring Boot', Icon: SiSpringboot, color: 'group-hover:text-green-500', hoverBorder: 'hover:border-green-500/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(34,197,94,0.2)]' },
  { name: 'Kotlin', Icon: SiKotlin, color: 'group-hover:text-purple-500', hoverBorder: 'hover:border-purple-500/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]' },
  { name: 'Kotlin (KMP)', Icon: SiKotlin, color: 'group-hover:text-purple-400', hoverBorder: 'hover:border-purple-400/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(192,132,252,0.2)]' },
  { name: 'PHP', Icon: FaPhp, color: 'group-hover:text-indigo-400', hoverBorder: 'hover:border-indigo-400/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(129,140,248,0.2)]' },
  { name: 'Laravel', Icon: SiLaravel, color: 'group-hover:text-red-500', hoverBorder: 'hover:border-red-500/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]' },
  { name: 'Python', Icon: SiPython, color: 'group-hover:text-yellow-500', hoverBorder: 'hover:border-yellow-500/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(250,204,21,0.2)]' },
  { name: 'FastAPI', Icon: SiFastapi, color: 'group-hover:text-teal-500', hoverBorder: 'hover:border-teal-500/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]' },
  { name: 'C#', Icon: SiCsharp, color: 'group-hover:text-purple-500', hoverBorder: 'hover:border-purple-500/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]' },
  { name: 'ASP.NET', Icon: SiDotnet, color: 'group-hover:text-blue-600', hoverBorder: 'hover:border-blue-600/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(37,99,235,0.2)]' },
  { name: 'TypeScript', Icon: SiTypescript, color: 'group-hover:text-blue-500', hoverBorder: 'hover:border-blue-500/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]' },
  { name: 'React', Icon: FaReact, color: 'group-hover:text-cyan-400', hoverBorder: 'hover:border-cyan-400/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]' },
  { name: 'Next.js', Icon: SiNextdotjs, color: 'group-hover:text-white', hoverBorder: 'hover:border-zinc-300/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]' },
  { name: 'Angular', Icon: FaAngular, color: 'group-hover:text-red-600', hoverBorder: 'hover:border-red-600/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(220,38,38,0.2)]' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: 'group-hover:text-teal-400', hoverBorder: 'hover:border-teal-400/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(45,212,191,0.2)]' },
  { name: 'MySQL', Icon: SiMysql, color: 'group-hover:text-blue-400', hoverBorder: 'hover:border-blue-400/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(96,165,250,0.2)]' },
  { name: 'Oracle PL/SQL', Icon: SiOracle, color: 'group-hover:text-red-500', hoverBorder: 'hover:border-red-500/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]' },
  { name: 'MongoDB', Icon: SiMongodb, color: 'group-hover:text-green-500', hoverBorder: 'hover:border-green-500/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(34,197,94,0.2)]' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: 'group-hover:text-blue-400', hoverBorder: 'hover:border-blue-400/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(96,165,250,0.2)]' },
  { name: 'Docker', Icon: FaDocker, color: 'group-hover:text-blue-500', hoverBorder: 'hover:border-blue-500/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]' },
  { name: 'Git', Icon: FaGitAlt, color: 'group-hover:text-orange-600', hoverBorder: 'hover:border-orange-600/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(234,88,12,0.2)]' },
  { name: 'REST APIs', Icon: FaCode, color: 'group-hover:text-emerald-400', hoverBorder: 'hover:border-emerald-400/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(52,211,153,0.2)]' },
  { name: 'Microservices', Icon: FaNetworkWired, color: 'group-hover:text-indigo-400', hoverBorder: 'hover:border-indigo-400/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(129,140,248,0.2)]' },
  { name: 'CI/CD', Icon: FaInfinity, color: 'group-hover:text-blue-400', hoverBorder: 'hover:border-blue-400/50', hoverShadow: 'hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]' },
];

export default function TechStackMarquee() {
  return (
    <div 
      className="w-full relative overflow-hidden py-10 my-8 bg-zinc-900/40 backdrop-blur-md border-y border-zinc-700/50"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}
    >
      {/* Marquee Container */}
      <div className="flex w-max group">
        {[0, 1].map((trackIdx) => (
          <div
            key={trackIdx}
            className="flex gap-6 pr-6 animate-marquee"
            aria-hidden="true"
          >
            {skills.map((skill, idx) => {
              const { Icon } = skill;
              return (
                <div
                  key={idx}
                  className={`group/skill flex items-center gap-3 bg-zinc-800/40 border border-zinc-700/50 px-5 py-3 rounded-full cursor-pointer transition-all duration-300 ${skill.hoverBorder} ${skill.hoverShadow} hover:bg-zinc-800/80`}
                >
                  <Icon className={`text-xl text-zinc-400 transition-colors duration-300 ${skill.color}`} />
                  <span className="text-zinc-300 font-medium whitespace-nowrap text-sm tracking-wide group-hover/skill:text-zinc-100 transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
