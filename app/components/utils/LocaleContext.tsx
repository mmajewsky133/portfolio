"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Locale = "en" | "es";

const translations = {
  en: {
    // Navbar
    "nav.about": "About Me",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.job.0": "Software Engineer",
    "hero.job.1": "Backend Architect",
    "hero.job.2": "Full-Stack Developer",
    "hero.job.3": "Technical Lead",
    "hero.job.4": "Project Manager",
    "hero.contact": "Get in Touch",
    "hero.projects": "View Projects",
    "hero.scroll": "About Me",

    // About Me
    "about.title": "About Me",
    "about.description": "I am an Information Systems Engineer with over three years of experience building and leading scalable technology solutions. From architecting national healthcare platforms to engineering cross-platform enterprise ecosystems, I specialize in robust backend infrastructure and modern frontends.",
    "about.cv": "Download CV",
    "about.stack": "My Technology Stack",
    "about.scroll": "My projects",
    "about.cv_link": "/portfolio/cv-en.pdf",

    // Projects
    "projects.title": "Featured Projects",
    "projects.gallery": "Gallery",
    "projects.about": "About The Project",
    "projects.technologies": "Technologies",
    "projects.skills": "Core Soft Skills",
    "projects.no_images": "No images available",
    "projects.close": "Close",

    // Project: SIVIPCAN v5
    "project.sivipcan.role": "Backend Architect & Developer",
    "project.sivipcan.desc": "Enterprise healthcare platform deployed nationwide across the Ministry of Health. Engineered as an independent microservice for the epidemiological monitoring of cancer screening tests.",
    "project.sivipcan.skills.0": "Leadership",
    "project.sivipcan.skills.1": "System Architecture",
    "project.sivipcan.skills.2": "Cross-team Collaboration",

    // Project: SAI-MCN
    "project.saimcn.role": "Full-Stack Engineer",
    "project.saimcn.desc": "Internal multiplatform application to automate event registrations and secure donations. Handled 2,500+ real-time registrations with strict adherence to PCI-DSS and GDPR.",
    "project.saimcn.skills.0": "Agile Delivery",
    "project.saimcn.skills.1": "Security Compliance",
    "project.saimcn.skills.2": "Problem Solving",

    // Project: Mininos UCA
    "project.mininos.role": "Software Engineer",
    "project.mininos.desc": "Centralized management platform and native Android companion application to optimize daily operations and real-time data entry for campus animal rescue initiatives.",
    "project.mininos.skills.0": "Leadership",
    "project.mininos.skills.1": "User-Centric Design",
    "project.mininos.skills.2": "Requirements Gathering",
    "project.mininos.skills.3": "Time Management",

    // Contact
    "contact.title": "Get In Touch",
    "contact.desc": "I'm currently open to new opportunities! Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!",
    "contact.email": "Email Me",
    "contact.connect": "Connect",
    "contact.linkedin": "LinkedIn Profile"
  },
  es: {
    // Navbar
    "nav.about": "Sobre Mí",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",

    // Hero
    "hero.job.0": "Ingeniero de Software",
    "hero.job.1": "Arquitecto Backend",
    "hero.job.2": "Desarrollador Full-Stack",
    "hero.job.3": "Líder Técnico",
    "hero.job.4": "Gestor de Proyectos",
    "hero.contact": "Contactar",
    "hero.projects": "Ver Proyectos",
    "hero.scroll": "Sobre Mí",

    // About Me
    "about.title": "Sobre Mí",
    "about.description": "Soy Ingeniero en Sistemas de Información con más de tres años de experiencia construyendo y liderando soluciones tecnológicas escalables. Desde la arquitectura de plataformas nacionales de salud hasta la ingeniería de ecosistemas empresariales multiplataforma, me especializo en infraestructura robusta de backend y frontends modernos.",
    "about.cv": "Descargar CV",
    "about.stack": "Mi Stack Tecnológico",
    "about.scroll": "Mis proyectos",
    "about.cv_link": "/portfolio/cv-es.pdf",

    // Projects
    "projects.title": "Proyectos Destacados",
    "projects.gallery": "Galería",
    "projects.about": "Sobre El Proyecto",
    "projects.technologies": "Tecnologías",
    "projects.skills": "Habilidades Blandas Clave",
    "projects.no_images": "No hay imágenes disponibles",
    "projects.close": "Cerrar",

    // Project: SIVIPCAN v5
    "project.sivipcan.role": "Arquitecto y Desarrollador Backend",
    "project.sivipcan.desc": "Plataforma de salud empresarial desplegada a nivel nacional en el Ministerio de Salud. Diseñada como un microservicio independiente para el monitoreo epidemiológico de pruebas de detección de cáncer.",
    "project.sivipcan.skills.0": "Liderazgo",
    "project.sivipcan.skills.1": "Arquitectura de Sistemas",
    "project.sivipcan.skills.2": "Colaboración Interfuncional",

    // Project: SAI-MCN
    "project.saimcn.role": "Ingeniero Full-Stack",
    "project.saimcn.desc": "Aplicación multiplataforma interna para automatizar registros de eventos y asegurar donaciones. Manejó más de 2,500 registros en tiempo real con estricto cumplimiento de PCI-DSS y GDPR.",
    "project.saimcn.skills.0": "Entrega Ágil",
    "project.saimcn.skills.1": "Cumplimiento de Seguridad",
    "project.saimcn.skills.2": "Resolución de Problemas",

    // Project: Mininos UCA
    "project.mininos.role": "Ingeniero de Software",
    "project.mininos.desc": "Plataforma de gestión centralizada y aplicación complementaria nativa de Android para optimizar las operaciones diarias y la entrada de datos en tiempo real para iniciativas de rescate de animales en el campus.",
    "project.mininos.skills.0": "Liderazgo",
    "project.mininos.skills.1": "Diseño Centrado en el Usuario",
    "project.mininos.skills.2": "Levantamiento de Requisitos",
    "project.mininos.skills.3": "Gestión del Tiempo",

    // Contact
    "contact.title": "Ponerse en Contacto",
    "contact.desc": "¡Actualmente estoy abierto a nuevas oportunidades! Ya sea que tengas una pregunta, una propuesta de proyecto o simplemente quieras saludar, ¡haré todo lo posible por responderte!",
    "contact.email": "Enviar Correo",
    "contact.connect": "Conectar",
    "contact.linkedin": "Perfil de LinkedIn"
  }
};

type TranslationKey = keyof typeof translations["en"];

interface LocaleContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => any;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale;
    if (savedLocale === "en" || savedLocale === "es") {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = (key: TranslationKey) => {
    return translations[locale][key] || translations["en"][key] || key;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};
