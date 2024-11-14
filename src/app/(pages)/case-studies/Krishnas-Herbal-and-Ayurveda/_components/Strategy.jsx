import Image from "next/image";
import {
  AnimatedElement,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "@/components/AnimatedElement";

export const Strategy = ({ retailData, dayparting }) => (
  <section className="my-20 px-2">
    <AnimatedElement>
      <div className="relative w-max mx-auto mb-20">
        <h2 className="lg:text-5xl text-3xl font-extrabold mx-auto">
          Strategy
        </h2>
        <div className="h-1.5 rounded-xl mt-2 w-full bg-[#f48825]" />
      </div>
    </AnimatedElement>
    <AnimatedElement variant={fadeInUp}>
      <h3 className="lg:text-6xl text-4xl font-[900] text-[#039BE4] text-center">
        AMC + DSP + SP
      </h3>
    </AnimatedElement>
    <AnimatedElement variant={fadeInLeft} delay={0.2}>
      <div className="flex gap-4 my-10">
        <div className="h-8 w-8 aspect-square bg-gradient-to-br from-violet-700 to-purple-700 via-pink-600 rounded-full inline-flex items-center justify-center">
          <div className="h-5 w-5 bg-white rounded-full" />
        </div>
        <p className="text-xl lg:text-3xl font-bold text-slate-600">
          SellerCircle developed custom AMC queries to analyze{" "}
          <span className="text-[#f48825] font-extrabold">
            SP ad interactions
          </span>
          , identifying how targets perform for each ASIN. This insight refined
          placements and boosted{" "}
          <span className="text-[#f48825] font-extrabold">
            {" "}
            campaign results{" "}
          </span>{" "}
          for Hero ASINs.
        </p>
      </div>
    </AnimatedElement>
    <AnimatedElement variant={scaleIn} delay={0.4}>
      <Image
        src="/case-study/14.png"
        alt=""
        width={1000}
        height={400}
        className="mx-auto lg:h-[300px] h-[200px] w-auto aspect-auto"
      />
    </AnimatedElement>
    <AnimatedElement variant={fadeInUp} delay={0.6}>
      <h3 className="lg:text-4xl text-2xl font-[900] text-[#039BE4] text-center mt-10">
        "Achieving retail success through a fully optimized Brand Store &
        premium A+ content."
      </h3>
    </AnimatedElement>
    {retailData.map((item, idx) => (
      <AnimatedElement key={idx} variant={fadeInLeft} delay={0.8 + idx * 0.1}>
        <div className="flex gap-4 my-5">
          <div className="h-8 w-8 aspect-square bg-gradient-to-br from-violet-700 to-purple-700 via-pink-600 rounded-full inline-flex items-center justify-center">
            <div className="h-5 w-5 bg-white rounded-full" />
          </div>
          <p className="text-xl lg:text-3xl font-bold text-slate-600">{item}</p>
        </div>
      </AnimatedElement>
    ))}
    <AnimatedElement variant={fadeInUp} delay={1}>
      <div className="flex items-center justify-between gap-5 my-10">
        <Image
          src="/case-study/15.png"
          width={3000}
          alt=""
          height={3000}
          className="w-[100px] lg:w-1/4"
        />
        <Image
          src="/case-study/16.png"
          width={3000}
          alt=""
          height={3000}
          className="w-[100px] lg:w-1/4"
        />
        <Image
          src="/case-study/17.png"
          width={3000}
          alt=""
          height={3000}
          className="w-[100px] lg:w-1/4"
        />
      </div>
    </AnimatedElement>
    <AnimatedElement variant={fadeInUp} delay={1.2}>
      <h3 className="lg:text-6xl text-4xl font-[900] text-[#039BE4] text-center my-10 mt-20">
        Product Scaling & Hero Product Strategy
      </h3>
    </AnimatedElement>
    <AnimatedElement variant={fadeInLeft} delay={1.4}>
      <div className="flex gap-4 my-20">
        <div className="h-8 w-8 aspect-square bg-gradient-to-br from-violet-700 to-purple-700 via-pink-600 rounded-full inline-flex items-center justify-center">
          <div className="h-5 w-5 bg-white rounded-full" />
        </div>
        <p className="text-xl lg:text-3xl font-bold text-slate-600">
          Using insights from{" "}
          <span className="font-extrabold text-[#f48825]"> AMC + SP </span>,
          SellerCircle identified top-performing targets for the Hero ASIN,
          increasing placements and refining campaign focus. This strategic
          shift amplified{" "}
          <span className="font-extrabold text-[#f48825]"> visibility </span>{" "}
          and{" "}
          <span className="font-extrabold text-[#f48825]">
            optimized ad spend
          </span>
          , driving stronger results for the Hero ASIN.
        </p>
      </div>
    </AnimatedElement>
    <AnimatedElement variant={scaleIn} delay={1.6}>
      <Image
        src="/case-study/18.png"
        alt=""
        width={1000}
        height={400}
        className="mx-auto my-10 lg:h-[300px] h-[200px] w-auto aspect-auto"
      />
    </AnimatedElement>
    <AnimatedElement variant={fadeInUp} delay={1.8}>
      <h3 className="lg:text-4xl text-2xl font-[900] text-[#039BE4] text-center mt-10">
        Dayparting with Amazon Marketing Stream
      </h3>
    </AnimatedElement>
    {dayparting.map((item, idx) => (
      <AnimatedElement key={idx} variant={fadeInLeft} delay={2 + idx * 0.1}>
        <div className="flex gap-4 my-5">
          <div className="h-8 w-8 aspect-square bg-gradient-to-br from-violet-700 to-purple-700 via-pink-600 rounded-full inline-flex items-center justify-center">
            <div className="h-5 w-5 bg-white rounded-full" />
          </div>
          <p className="text-xl lg:text-3xl font-bold text-slate-600">{item}</p>
        </div>
      </AnimatedElement>
    ))}
    <AnimatedElement variant={scaleIn} delay={2.2}>
      <Image
        src="/case-study/19.png"
        alt=""
        width={1000}
        height={400}
        className="mx-auto my-10 h-[350px] w-auto"
      />
    </AnimatedElement>
  </section>
);
