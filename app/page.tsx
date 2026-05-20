import type { Metadata } from "next";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export const metadata: Metadata = {
  title: "Martin Majewsky Zelaya | Portfolio",
};

export default function Home() {
  return (
    <main className="bg-transparent text-white overflow-hidden">
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
}