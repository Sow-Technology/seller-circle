import {
  AnimatedElement,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "@/components/AnimatedElement";
import Image from "next/image";

export const HeroSection = () => (
  <section>
    <AnimatedElement>
      <div className="flex items-center justify-center gap-10 pt-10 ">
        <AnimatedElement variant={fadeInLeft} className="w-[30%] h-auto">
          <Image
            src="/logo-dark.svg"
            alt=""
            width="700"
            height={700}
            className="max-h-[80px] aspect-auto w-auto h-auto"
          />
        </AnimatedElement>
        <AnimatedElement delay={0.2}>
          <span className="italic font-mono font-bold text-gray-500 text-2xl">
            x
          </span>
        </AnimatedElement>
        <AnimatedElement
          variant={fadeInRight}
          delay={0.4}
          className="w-[30%] h-auto"
        >
          <Image
            src="/images/brands/1.png"
            alt=""
            width="700"
            height={700}
            className="max-h-[110px] aspect-auto w-auto h-auto"
          />
        </AnimatedElement>
      </div>
    </AnimatedElement>
    <div className="relative min-h-[500px] pb-40 pt-20">
      <div className="bg-[url('/images/weare.webp')] bg-center bg-cover opacity-10 absolute inset-0 z-0" />
      <AnimatedElement variant={scaleIn}>
        <div className="flex flex-col items-center justify-center z-10 relative">
          <h2 className="text-[#f48825] lg:text-7xl text-5xl font-extrabold">
            90%
          </h2>
          <p className="lg:text-3xl text-xl font-bold">
            Increase in Sales over a 6 month period
          </p>
        </div>
      </AnimatedElement>
      <AnimatedElement variant={scaleIn} delay={0.2}>
        <div className="flex flex-col items-center justify-center z-10 relative">
          <h2 className="text-[#f48825] lg:text-8xl text-6xl font-extrabold">
            20%
          </h2>
          <p className="lg:text-4xl text-2xl font-bold">Reduction in ACOS</p>
        </div>
      </AnimatedElement>
      <AnimatedElement variant={scaleIn} delay={0.4}>
        <div className="flex flex-col items-center justify-center z-10 relative">
          <h2 className="text-[#f48825] lg:text-9xl text-7xl font-extrabold">
            900%
          </h2>
          <p className="lg:text-4xl text-2xl font-bold">
            Increase in NTB Orders
          </p>
        </div>
      </AnimatedElement>
      <AnimatedElement variant={fadeInLeft} delay={0.6}>
        <div className="absolute left-0 bottom-0">
          <Image
            src="/case-study/2.jpg"
            width={1000}
            height={1000}
            alt=""
            className="lg:h-[300px] h-[200px] w-auto"
          />
        </div>
      </AnimatedElement>
      <AnimatedElement variant={fadeInRight} delay={0.8}>
        <div className="absolute right-0 bottom-0">
          <Image
            src="/case-study/3.jpg"
            width={1000}
            height={1000}
            alt=""
            className="lg:h-[400px] h-[300px] w-auto"
          />
        </div>
      </AnimatedElement>
    </div>
  </section>
);
