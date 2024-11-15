import Image from "next/image";
import {
  AnimatedElement,
  fadeInLeft,
  fadeInRight,
} from "@/components/AnimatedElement";
import { cn } from "@/lib/utils";

export const Objectives = ({ data }) => (
  <section className="my-20">
    <AnimatedElement>
      <div className="relative w-max mx-auto mb-10">
        <h2 className="lg:text-5xl text-3xl font-extrabold mx-auto">
          Objectives
        </h2>
        <div className="h-1.5 rounded-xl mt-2 w-full bg-[#f48825]" />
      </div>
    </AnimatedElement>
    <h3 className="text-slate-800 lg:text-4xl text-2xl text-center mx-auto max-w-5xl text-balance  font-extrabold">
      SellerCircle aimed to achieve three main goals for Vooki during the
      festive season:
    </h3>
    <div className="flex flex-wrap items-center  w-full ">
      {data.map((item, idx) => (
        <AnimatedElement
          key={idx}
          delay={idx * 0.1}
          variant={idx % 2 === 0 ? fadeInLeft : fadeInRight}
          className={cn(
            " w-[80%] flex gap-4 items-center p-4 ",
            idx % 2 == 1 && "ml-auto flex-row-reverse "
          )}
        >
          {/* <div> */}
          <div className="flex items-center justify-center  min-w-[70px] h-max   w-auto relative ">
            <Image
              src={item.icon}
              width={500}
              height={500}
              alt={item.heading}
              className="w-[40px] lg:w-[57px] mb-2 m-auto absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  z-10 mr-4 "
            />
            <Image
              src="/case-study/5.png"
              width={700}
              height={700}
              alt={item.heading}
              className="aspect-auto absolute top-1/2 -translate-y-1/2 z-0 h-[70px]  lg:h-[110px]"
            />
          </div>
          <div className={idx % 2 == 1 && "text-right ml-auto"}>
            <h3 className={cn("text-2xl font-extrabold nsans ")}>
              {item.heading}
              <div
                className={cn(
                  "w-[40%] h-1 bg-[#f48825] rounded-3xl -mt-[21px] ml-4",
                  idx % 2 == 1 && "ml-auto mr-4"
                )}
              />
            </h3>
            <p className="text-2xl font-bold my-5 text-gray-600 ">
              {item.description}
            </p>
          </div>
          {/* </div> */}
        </AnimatedElement>
      ))}
    </div>
  </section>
);
