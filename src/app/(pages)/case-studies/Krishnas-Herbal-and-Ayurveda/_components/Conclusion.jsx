import Link from "next/link";
import Image from "next/image";
import { AnimatedElement, fadeInUp } from "@/components/AnimatedElement";

export const Conclusion = () => (
  <section className="lg:my-20 relative p-2">
    <AnimatedElement>
      <div className="relative w-full gap-10 mx-auto mb-10 flex items-center justify-between">
        <div className="h-1.5 rounded-xl w-full bg-[#039BE4]" />
        <h2 className="lg:text-5xl text-3xl font-extrabold mx-auto">
          Conclusion
        </h2>
        <div className="h-1.5 rounded-xl w-full bg-[#039BE4]" />
      </div>
    </AnimatedElement>
    <AnimatedElement variant={fadeInUp} delay={0.2}>
      <p className="text-slate-700 font-bold lg:text-3xl text-xl lg:leading-[50px] my-10">
        By leveraging Amazon&#39;s advanced advertising technologies,
        SellerCircle helped Krishna Ayurveda achieve exceptional growth across
        multiple fronts. From scaling new product categories and growing hero
        product&#39;s market share to optimizing ad spend and refining the
        customer journey, our holistic and data-driven strategy resulted in a{" "}
        <span className="font-[900] text-[#039BE4]">90% sales increase</span>{" "}
        and a <span className="font-[900] text-[#039BE4]">20% reduction</span>{" "}
        in ACoS and maintain a Total ROAS of 5.15 during the period. These
        successes highlight the importance of targeted, technology-driven Amazon
        advertising in driving profitable growth for brands.
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
