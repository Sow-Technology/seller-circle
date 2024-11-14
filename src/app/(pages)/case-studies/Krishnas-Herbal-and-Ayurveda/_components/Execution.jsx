import Image from "next/image";
import { AnimatedElement, fadeInLeft } from "@/components/AnimatedElement";

export const Execution = ({ marketingStrategies }) => (
  <section className="lg:my-20">
    <AnimatedElement>
      <div className="relative w-max mx-auto mb-20">
        <h2 className="lg:text-5xl text-3xl font-extrabold mx-auto">
          Execution
        </h2>
        <div className="h-1.5 rounded-xl mt-2 w-full bg-[#f48825]" />
      </div>
    </AnimatedElement>
    <div className="flex gap-4 flex-col">
      {marketingStrategies.map((item, idx) => (
        <AnimatedElement key={idx} variant={fadeInLeft} delay={idx * 0.1}>
          <div className="w-full flex gap-4 items-center p-4">
            <div className="flex items-center justify-center h-full min-w-[90px] aspect-square w-auto relative">
              <Image
                src={item.icon}
                width={60}
                height={60}
                alt={item.title}
                className="w-[50px] h-auto z-10"
              />
              <Image
                src="/case-study/5.png"
                width={120}
                height={120}
                alt={item.title}
                className="w-auto absolute inset-0 z-0 h-[90px]"
              />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold nsans text-[#f48825]">
                {item.title}
              </h3>
              <p className="text-xl font-medium text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        </AnimatedElement>
      ))}
    </div>
  </section>
);
