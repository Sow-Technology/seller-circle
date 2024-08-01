import React from "react";

const NumberedDesign1 = ({ data }) => {
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
