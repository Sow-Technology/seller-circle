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
        By harnessing Amazon Marketing Cloud's audience solutions, SellerCircle
        crafted a strategic Diwali campaign that brought back interested
        shoppers, encouraged loyal customers to return, and attracted new users
        searching for curly hair care products. With a mix of{" "}
        <span className="font-[900] text-[#039BE4]">timely discounts</span>,{" "}
        <span className="font-[900] text-[#039BE4]">festive creatives</span>,
        and{" "}
        <span className="font-[900] text-[#039BE4]">targeted messaging</span>,
        TrueFrog achieved exceptional results and strengthened brand recall
        during one of India's most important shopping seasons.
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
