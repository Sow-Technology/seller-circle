import Link from "next/link";
import Image from "next/image";
import { AnimatedElement, fadeInUp } from "@/components/AnimatedElement";

export const Conclusion = () => (
  <section className="lg:my-20 relative p-2">
    <AnimatedElement>
      <div className="relative w-full gap-10 mx-auto mb-10 flex items-center justify-between z-10">
        <div className="h-1.5 rounded-xl w-full bg-[#039BE4]" />
        <h2 className="lg:text-5xl text-3xl font-extrabold mx-auto">
          Conclusion
        </h2>
        <div className="h-1.5 rounded-xl w-full bg-[#039BE4]" />
      </div>
    </AnimatedElement>
    <AnimatedElement variant={fadeInUp} delay={0.2}>
      <p className="text-slate-700 font-bold lg:text-3xl text-xl lg:leading-[50px] my-10 z-10 relative">
        SellerCircle&#39;s integrated approach using AMC, DSP, and AMS enabled
        Vooki to capture the festive season&#39;s potential by{" "}
        <span className="font-[900] text-[#039BE4]">
          boosting brand visibility
        </span>
        ,{" "}
        <span className="font-[900] text-[#039BE4]">
          driving new customer acquisition
        </span>
        , and{" "}
        <span className="font-[900] text-[#039BE4]">
          achieving substantial sales growth
        </span>{" "}
        . With audience insights, touchpoint-based targeting, impactful video
        ads, and engaging festive offers, Vooki emerged as a strong player in
        the eco-friendly cleaning space, meeting and exceeding campaign
        objectives with exceptional results.
      </p>
    </AnimatedElement>
    <AnimatedElement variant={fadeInUp} delay={0.4}>
      <div className="flex items-center justify-around relative z-10">
        <div className="flex gap-2 items-center">
          <Image src="/case-study/29.png" alt="" width={50} height={50} />
          <Link href="/" className="lg:text-2xl font-semibold text-slate-700">
            https://sellercircle.in/
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <Image src="/case-study/30.png" alt="" width={50} height={50} />
          <Link
            href="mailto:contact@sellercircle.in"
            className="lg:text-2xl font-semibold text-slate-700"
          >
            contact@sellercircle.in
          </Link>
        </div>
      </div>
    </AnimatedElement>
    <div className="bg-[url('/images/weare.webp')] bg-center bg-cover opacity-10 absolute inset-0 z-0" />
  </section>
);
