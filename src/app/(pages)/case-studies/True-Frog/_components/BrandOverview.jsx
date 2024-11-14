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
              src="/images/brands/1.png"
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
          TrueFrog, a fast-growing beauty brand, specializes in curly hair care
          products made with clean, eco-friendly ingredients. With the Diwali
          shopping season approaching, TrueFrog joined forces with SellerCircle
          to boost sales and reduce cart abandonment by targeting the right
          audiences with timely, festive offers.
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
