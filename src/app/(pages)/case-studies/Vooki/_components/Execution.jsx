import Image from "next/image";
import {
  AnimatedElement,
  fadeInLeft,
  fadeInUp,
} from "@/components/AnimatedElement";

export const Execution = ({ marketingStrategies }) => (
  <section className="">
    <AnimatedElement>
      <div className="relative w-max mx-auto mb-5">
        <h2 className="lg:text-5xl text-3xl font-extrabold mx-auto">
          Execution
        </h2>
        <div className="h-1.5 rounded-xl mt-2 w-full bg-[#f48825]" />
      </div>
    </AnimatedElement>
    <p className="font-bold lg:text-2xl text-lg text-balance text-center my-5 max-w-5xl mx-auto">
      With the strategy in place, SellerCircle focused on timely and targeted
      execution across multiple platforms:
    </p>
    <AnimatedElement variant={fadeInUp}>
      <h3 className="lg:text-5xl text-3xl my-5 font-extrabold text-[#039BE4] text-center text-balance">
        1. AMC-Driven Custom Audiences:
      </h3>
    </AnimatedElement>
    <div className="flex gap-4 flex-col">
      {marketingStrategies[0].map((item, idx) => (
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
              <h3 className="lg:text-4xl text-2xl font-extrabold nsans text-[#f48825]">
                {item.heading}
              </h3>
              <p className="lg:text-xl text-lg font-medium text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        </AnimatedElement>
      ))}
    </div>
    <AnimatedElement variant={fadeInUp}>
      <h3 className="lg:text-5xl text-3xl my-5 font-extrabold text-[#039BE4] text-center text-balance">
        2. DSP Campaign Execution:
      </h3>
    </AnimatedElement>
    <div className="flex gap-4 flex-col">
      {marketingStrategies[1].map((item, idx) => (
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
              <h3 className="lg:text-4xl text-2xl font-extrabold nsans text-[#f48825]">
                {item.heading}
              </h3>
              <p className="lg:text-xl text-lg font-medium text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        </AnimatedElement>
      ))}
    </div>{" "}
    <AnimatedElement variant={fadeInUp}>
      <h3 className="lg:text-5xl text-3xl my-5 font-extrabold text-[#039BE4] text-center text-balance">
        3. AMS Ad Placement:
      </h3>
    </AnimatedElement>
    <div className="flex gap-4 flex-col">
      {marketingStrategies[2].map((item, idx) => (
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
              <h3 className="lg:text-4xl text-2xl font-extrabold nsans text-[#f48825]">
                {item.heading}
              </h3>
              <p className="lg:text-xl text-lg font-medium text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        </AnimatedElement>
      ))}
    </div>
  </section>
);
