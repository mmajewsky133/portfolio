import Navbar from "./components/Navbar";
import LavalampBackground from "./components/LavalampBackground";
import ".components/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "%s - Martin Majewsky Portfolio",
  description: "Proyects Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LavalampBackground />
        <Navbar />
        <div className="relative z-0 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
