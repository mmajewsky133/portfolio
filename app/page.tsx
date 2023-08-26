import type { Metadata } from "next";
import TextTransitionAnimation from "./components/TextTransitionAnimation";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  const jobs = ["Mobile Programmer", "Software Engineer", "Backend Developer"];

  return (
    <main>
      <div className=" flex justify-center h-screen w-full bg-gradient-to-b from-black from-40% to-dark-purple to-140%">
        <div
          className="max-w-screen-xxl flex flex-col mx-8
        items-center justify-around h-full px-4 md:flex-row"
        >
          <div className="flex max-h-screen w-2/5 flex-col items-center gap-8">
            <h1 className="text-white text-7xl font-bold font-signature">
              Martin Majewsky <br /> Zelaya
            </h1>
            <div className="bg-zinc-100 flex justify-center p-4 rounded-lg w-full">
              <h1 className="text-dark-purple font-extrabold text-3xl">
                <TextTransitionAnimation list={jobs} />
              </h1>
            </div>
          </div>
          <div className="flex max-h-screen w-1/3 gap-16">
            <p className="text-white text-center text-2xl">
              I'm a passionate Backend and mobile developer student with a keen
              interest in UX/UI design for the betterment of well-established
              systems. I'm especially interested in my own growth as a
              programmer and the improvement of my abilities as a professional.
              I am open to any opportunity to lead any project to ensure the
              utmost quality.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
