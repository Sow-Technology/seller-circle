import Image from "next/image";
import {
  AnimatedElement,
  fadeInLeft,
  fadeInRight,
} from "@/components/AnimatedElement";
import { cn } from "@/lib/utils";

export const Objectives = ({ data }) => (
  <section className="my-20">
    <AnimatedElement>
      <div className="relative w-max mx-auto mb-20">
        <h2 className="lg:text-5xl text-3xl font-extrabold mx-auto">
          Objectives
        </h2>
        <div className="h-1.5 rounded-xl mt-2 w-full bg-[#f48825]" />
      </div>
    </AnimatedElement>
    <div className="flex flex-wrap items-center justify-between">
      {data.map((item, idx) => (
        <AnimatedElement
          key={idx}
          delay={idx * 0.1}
          variant={idx % 2 === 0 ? fadeInLeft : fadeInRight}
          className={cn(
            "lg:w-1/2 w-full flex gap-4 items-center p-4",
            idx % 2 == 1 && "flex-row-reverse justify-end"
          )}
        >
          {/* <div> */}
          <div className="flex items-center justify-center h-full min-w-[70px] aspect-square w-auto relative">
            <Image
              src={item.icon}
              width={50}
              height={50}
              alt={item.heading}
              className="w-[40px] h-auto z-10"
            />
            <Image
              src="/case-study/5.png"
              width={70}
              height={70}
              alt={item.heading}
              className="w-auto absolute inset-0 z-0 h-[70px]"
            />
          </div>
          <div className={idx % 2 == 1 && "text-right"}>
            <h3 className={cn("text-2xl font-extrabold nsans ")}>
              {item.heading}
            </h3>
            <p className="text-lg font-medium text-gray-600">
              {item.description}
            </p>
          </div>
          {/* </div> */}
        </AnimatedElement>
      ))}
    </div>
  </section>
);
