import Image from "next/image";
import React from "react";
const approchItems = [
  {
    icon: "/images/21.svg",
    text: "We begin with a thorough 30-point account audit to Delivery Methods to pinpoint improvement opportunities and areas of growth",
  },
  {
    icon: "/images/22.svg",
    text: "We tailor a strategy for Product listings, competitors data, and Amazon ads, aligning with brand goals like the buyer journey, awareness, and sales growth, aiming for effective results",
  },
  {
    icon: "/images/23.svg",
    text: "Post-strategy finalization, we kickstart account build-out, focusing on the lower end of the sales funnel and seizing missed opportunities for optimal results.",
  },
  {
    icon: "/images/24.svg",
    text: "Once the account is fully prepared for scaling, our focus shifts to optimizing, crafting new campaign strategies, and exploring expansion opportunities.",
  },
];
const Approach = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col my-20 lg:px-20 px-8">
      {" "}
      <h3 className="font-bold text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto">
        Our approach{" "}
      </h3>
      <h2 className="nunito font-extrabold text-4xl lg:text-6xl max-w-5xl mx-auto text-center my-7">
        No one-size-fits-all here,{" "}
        <span className="text-[#039BE4]">only tailored strategies.  </span>
      </h2>
      <div className="flex flex-row flex-wrap gap-16 mt-16">
        <div className="lg:max-w-[40%] min-w-[300px]">
          <div className="rounded-r-full p-10 bg-[#039BE4] text-white px-20">
            Adopting a holistic approach to your entire account, not just
            individual ads, crafting strategies for increased visibility and
            optimized search flow.
          </div>
          <div className="py-10 px-4 bg-gray-100 shadow-sm rounded-xl my-5">
            <div>
              {" "}
              <Image src="/images/17.svg" alt="" width={500} height={700} />
            </div>
          </div>
        </div>
        <div className="flex flex-row lg:max-w-[45%]">
          <div>
            <div className="w-[2px] rounded-2xl h-[90%] justify-self-center self-center bg-[#A9A8A8] mt-[20px]" />
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            {approchItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center  gap-5 flex-row font-bold relative "
              >
                <div className="absolute -left-6">
                  <Image src="/images/20.svg" alt="" height={50} width={50} />
                </div>{" "}
                <div className="  rounded-full flex items-center justify-center ml-10">
                  {" "}
                  <Image
                    src={item.icon}
                    height={100}
                    width={100}
                    alt=""
                    className="min-h-[100px] min-w-[100px]"
                  />
                </div>
                <div className="h-[70px] w-[70px] flex items-center justify-center text-6xl bg-clip-text from-[#755AFF] to-[#9B88FF] bg-gradient-to-r text-transparent font-extrabold">
                  {index + 1}
                </div>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
