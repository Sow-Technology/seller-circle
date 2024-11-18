import {
  AnimatedElement,
  fadeInLeft,
  fadeInRight,
} from "@/components/AnimatedElement";
import Image from "next/image";

export const Results = ({ resultsData }) => (
  <section className=" relative">
    <AnimatedElement>
      <div className="relative w-full gap-10 mx-auto mb-10 flex items-center justify-between">
        <div className="h-1.5 rounded-xl w-full bg-[#f48825]" />
        <h2 className="lg:text-5xl text-3xl font-extrabold mx-auto">Results</h2>
        <div className="h-1.5 rounded-xl w-full bg-[#f48825]" />
      </div>
    </AnimatedElement>
    {/* <div>
      <h3 className="lg:text-2xl font-bold text-slate-600 text-lg text-center">
        The targeted festive campaign produced significant results for Vooki,
        aligning closely with the primary objectives:
      </h3>
    </div> */}
    <div className="p-5 w-full flex flex-col justify-between gap-5 relative py-10 z-10">
      {resultsData.map((item, index) => (
        <AnimatedElement
          key={index}
          variant={index % 2 === 0 ? fadeInLeft : fadeInRight}
          className="z-10"
          delay={index * 0.1}
        >
          <div
            className={`mb-5 w-[80%] ${
              index % 2 === 0 ? "text-left" : "text-right ml-auto"
            }`}
          >
            <h3 className="lg:text-4xl text-2xl text-black font-extrabold">
              {item.heading}
            </h3>
            <p className="text-slate-700 lg:text-2xl text-lg font-bold">
              {item.description}
            </p>
          </div>
        </AnimatedElement>
      ))}
      <div className="bg-[url('/images/weare.webp')] bg-center bg-cover opacity-10 absolute inset-0 z-0" />
    </div>
  </section>
);
