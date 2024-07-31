import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaCalendarCheck, FaLaptopCode } from "react-icons/fa6";
import { MdAssignment } from "react-icons/md";
const data = [
  {
    title: "Consultation",
    desc: "We begin with a thorough consultation to understand your brand, products, and goals.",
    icon: <FaChalkboardTeacher />,
    color: "#6A1B9A",
  },
  {
    title: "Design Proposal",
    desc: "Our team creates a design proposal tailored to your needs, including layout, visuals, and SEO strategy.",
    icon: <MdAssignment />,
    color: "#26A69A",
  },
  {
    title: "Development",
    desc: "Once approved, we develop your store using Amazon’s Store Builder tools, ensuring a professional and cohesive design.",
    icon: <FaLaptopCode />,
    color: "#FBBB3B",
  },
  {
    title: "Review and Launch",
    desc: "We review the store with you, make any necessary adjustments, and launch your brand new Amazon Store.",
    icon: <FaCalendarCheck />,
    color: "#42A5F5",
  },
];
const NumberedDesign1 = () => {
  return (
    <div>
      {" "}
      <div className=" w-auto mx-auto p-6">
        <div className="space-y-6">
          {/* Step 1 */}
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center  text-white w-[80%] ml-5  rounded-r-full "
              style={{ backgroundColor: item.color }}
            >
              <div
                className="text-4xl p-4 -m-10 bg-white font-bold mr-4 "
                style={{ color: item.color }}
              >
                {index + 1}
              </div>
              <div
                className="p-4 rounded-r-full "
                style={{ backgroundColor: item.color }}
              >
                <div className="font-bold text-xl">{item.title}</div>
                <p className="text-slate-50">{item.desc}</p>
              </div>
              <div
                className="ml-auto text-2xl p-4 border-white border-[12px] -m-12 rounded-full"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumberedDesign1;
