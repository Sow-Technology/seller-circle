import Image from "next/image";
import { AnimatedElement, fadeInUp } from "@/components/AnimatedElement";

export const Challenges = ({ challenges }) => (
  <section className="my-20 w-full">
    <AnimatedElement>
      <h2 className="text-5xl font-extrabold text-center text-blue-950 mb-5">
        Challenges
      </h2>
    </AnimatedElement>
    <div className="flex-col flex w-full">
      {challenges.map((item, idx) => (
        <AnimatedElement key={idx} delay={idx * 0.1}>
          <div className="w-full py-10">
            <div className="px-5 max-md:ml-5 shad w-full group flex flex-row shadow-lg gap-0 py-10 -mt-10">
              <div className="flex p-2 min-w-[80px] max-w-[130px] py-[30px] ml-4 bg-[#039BE4] items-center justify-center !rounded-[30px_30px_100px_100px] relative h-2/3 -mt-7 z-10">
                <Image
                  src={item.icon}
                  width={200}
                  height={200}
                  alt=""
                  className="h-[80px] w-auto aspect-auto"
                />
                <div className="bg-[#039BE4] h-[20px] w-[70px] top-0 left-10 absolute -right-[11px] -z-10 rounded-r-full" />
                <div className="bg-[#066EA0] top-0 left-[80px] h-[20px] w-[40px] absolute -z-5 rounded-[21px_21px_0_0]" />
              </div>
              <div className="z-10 lg:px-10 px-4">
                <h2 className="font-[900] text-2xl text-left mt-5 lg:h-[50px] text-[#039BE4]">
                  {item.title}
                </h2>
                <div className="overflow-hidden text-ellipsis">
                  <p className="text-left font-semibold text-slate-700 mt-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>
      ))}
    </div>
  </section>
);
