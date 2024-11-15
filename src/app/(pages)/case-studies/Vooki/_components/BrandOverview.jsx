import Image from "next/image";
import {
  AnimatedElement,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "@/components/AnimatedElement";

export const BrandOverview = () => (
  <section>
    <AnimatedElement>
      <div className="flex w-full justify-between">
        <AnimatedElement variant={fadeInLeft}>
          <div>
            <Image
              src="/images/brands/3.png"
              alt=""
              width="700"
              height={700}
              className="max-h-[100px] w-auto aspect-auto"
            />
          </div>
        </AnimatedElement>
        <AnimatedElement
          variant={fadeInRight}
          className="w-full flex flex-col justify-center items-end"
        >
          <h2 className="text-right font-extrabold lg:text-5xl text-2xl text-slate-800">
            Brand Overview
          </h2>
          <div className="w-[90%] h-1 bg-[#f48825]" />
        </AnimatedElement>
      </div>
    </AnimatedElement>
    <AnimatedElement delay={0.2}>
      <div>
        <p className="text-2xl lg:text-4xl font-bold my-20 max-w-5xl mx-auto text-center">
          Vooki, a leader in green chemistry-based cleaning supplies, offers
          effective, eco-friendly solutions for home cleaning, including kitchen
          and bathroom products. To make the most of the festive season, Vooki
          partnered with SellerCircle to drive sales, boost brand visibility,
          and capture new customers in a highly competitive market.
        </p>
      </div>
    </AnimatedElement>
    <AnimatedElement variant={scaleIn} delay={0.4}>
      <Image
        src="/case-study/4.png"
        alt=""
        width={1000}
        height={1000}
        className="w-full mx-auto object-cover -mt-20"
      />
    </AnimatedElement>
  </section>
);
