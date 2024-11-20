import {
  AnimatedElement,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
} from "@/components/AnimatedElement";
import Image from "next/image";

export const HeroSection = () => (
  <section>
    <AnimatedElement>
      <div className="flex items-center justify-center gap-10  ">
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
            src="/images/brands/11.png"
            alt=""
            width="700"
            height={700}
            className="max-h-[200px] aspect-auto w-auto h-auto"
          />
        </AnimatedElement>
      </div>
    </AnimatedElement>
    <div className="relative min-h-[500px] pb-40 pt-20">
      <div className="bg-[url('/images/weare.webp')] bg-center bg-cover opacity-10 absolute inset-0 z-0" />
      <AnimatedElement variant={scaleIn}>
        <div className="flex flex-col items-center justify-center !leading-[90px] z-10 relative">
          <h1 className="text-slate-800 lg:text-5xl text-2xl text-center max-w-5xl  font-extrabold">
            How SellerCircle Drove TrueFrog&#39;s Diwali Success with targeted
          </h1>
          <h2 className=" lg:text-7xl text-5xl text-[#f48825]  font-[900]">
            AMC Audience Solutions
          </h2>
          <div className="flex items-center my-10 justify-between gap-10">
            <AnimatedElement variant={fadeInLeft}>
              <h3 className="lg:text-2xl text-lg text-neutral-900 font-extrabold">
                <span className="lg:text-5xl text-3xl text-[#039ce2] font-[900]">
                  20%{" "}
                </span>{" "}
                increase in Brand Search
              </h3>
            </AnimatedElement>
            <AnimatedElement variant={fadeInRight}>
              <h3 className="lg:text-2xl text-lg text-neutral-900 font-extrabold">
                <span className="lg:text-5xl text-3xl text-[#039ce2] font-[900]">
                  6.56%{" "}
                </span>{" "}
                ROAS Achieved
              </h3>
            </AnimatedElement>
          </div>
        </div>
      </AnimatedElement>

      <AnimatedElement variant={fadeInUp} delay={0.6}>
        <div className="w-full">
          <Image
            src="/case-study/31.png"
            width={1000}
            height={1000}
            alt=""
            className="lg:h-[360px] h-[200px] w-full z-10 relative mx-auto"
          />
        </div>
      </AnimatedElement>
    </div>
  </section>
);
