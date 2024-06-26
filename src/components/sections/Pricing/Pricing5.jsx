"use client";
import React from "react";
export default function Pricing5() {
  const checkIcon = (
    <svg
      className="w-5 h-5 mx-auto text-zinc-600"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" />
    </svg>
  );
  const minusIcon = (
    <svg
      className="w-5 h-5 mx-auto text-gray-500"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" />
    </svg>
  );

  const plans = [
    {
      name: "BASIC",
      price: "₹1499",
      per: "2 Hours session",
    },
    {
      name: "ADVANCED",
      price: "₹4999",
      per: "5 Hours session split in 3 days",
    },
  ];

  const tables = [
    {
      label: "Features",
      label_icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
      items: [
        {
          name: "Details",
          BASIC:
            "Learn the basics of selling on Amazon and navigating Seller Central. Service providers offer in-person training on topics such as what you can sell, referral fees and other Amazon charges, and how to set up a seller account, create product listings, manage orders, create reports, manage inventory, and understand payments. Learn best practices for managing customer reviews, and the pros and cons of shipping products yourself versus using Fulfillment by Amazon (FBA). Helpful for newly launched sellers.",
          DETAILED:
            "Gain insight on how to improve sales on Amazon. This training module is more beneficial for a seller who has been on Seller Central for two to three months and who wants to learn more advanced tips and tricks to expand business and increase revenue. Service providers offer in-person training on how to optimize pricing automatically to win the Buy Box, run Lightning Deals and other promotions, increase search relevance of product listings by adding keywords in the descriptions, run Sponsored Product campaigns to boost impressions of your listings, and use business reports to design business strategy.",
        },
      ],
    },
  ];

  const [selectedPlan, setSelectedPlan] = React.useState(plans[0].name);

  return (
    <section className="py-14 max-w-screen-xl mx-auto text-[#171717] relative white">
      <div className="">
        <div className="mt-16">
          <div className="sticky top-12 py-6 border-b bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] bg-white dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-xl">
            <div className="max-w-screen-xl mx-auto ">
              <ul className="ml-auto  gap-x-6 px-4 md:px-8 hidden bg-white lg:flex lg:min-w-[800px] lg:max-w-[1050px]">
                {plans.map((item, idx) => (
                  <li key={idx} className={`space-y-4 w-full  bg-white z-10`}>
                    <div className="flex items-center justify-between bg-white">
                      <span className="text-gray-700 font-bold bg-white lg:block hidden">
                        {item.name}
                      </span>
                      <div className="relative lg:hidden ">
                        <svg
                          className="w-5 h-5 text-gray-500 absolute right-0 inset-y-0 my-auto"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <select
                          value="Switch plan"
                          className="bg-transparent appearance-none outline-none px-8 cursor-pointer"
                          onChange={(e) => setSelectedPlan(e.target.value)}
                        >
                          <option disabled selected>
                            Switch plan
                          </option>
                          {plans.map((option, idx) => (
                            <option key={idx}>{option.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="text-background text-3xl font-semibold lg:block hidden">
                      {item.price ? (
                        <>
                          {item.price}

                          <span className="text-base text-[#171717] font-normal">
                            {item.per}
                          </span>
                        </>
                      ) : (
                        <>
                          {" "}
                          undefined{" "}
                          <span className="text-base text-[#171717] font-normal">
                            /mo
                          </span>
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="ml-auto items-end justify-end flex lg:hidden bg-white ">
                {plans.map(
                  (item, idx) =>
                    selectedPlan == item.name && (
                      <li
                        key={idx}
                        className={`space-y-4  justify-self-end self-end w-max  bg-white z-10`}
                      >
                        <>
                          <div className="flex items-center justify-between flex-col">
                            <div className="relative lg:hidden ">
                              <svg
                                className="w-5 h-5 text-gray-500 absolute right-0 inset-y-0 my-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <select
                                value="Switch plan"
                                className="bg-transparent appearance-none outline-none px-8 cursor-pointer"
                                onChange={(e) =>
                                  setSelectedPlan(e.target.value)
                                }
                              >
                                <option disabled selected>
                                  Switch plan
                                </option>
                                {plans.map((option, idx) => (
                                  <option key={idx}>{option.name}</option>
                                ))}
                              </select>
                            </div>
                            <div className="text-background text-3xl font-semibold">
                              {item.price}{" "}
                              <span className="text-base text-[#171717] font-normal">
                                {item.per}
                              </span>
                            </div>
                          </div>
                          <div className="text-[#171717] text-3xl font-semibold lg:block hidden">
                            undefined{" "}
                            <span className="text-xl text-[#171717] font-normal">
                              /mo
                            </span>
                          </div>
                        </>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto mt-10 space-y-4 px-4 overflow-auto md:overflow-visible md:px-8">
            {tables.map((table, idx) => (
              <table key={idx} className="w-full table-auto text-sm text-left">
                <thead className="text-[#171717] font-medium border-b">
                  <tr>
                    <th className="z-20 top-14 py-6 lg:sticky">
                      <div className="flex items-center gap-x-3">
                        <div className="w-12 h-12 text-zinc-600 rounded-full border flex items-center justify-center">
                          {table.label_icon}
                        </div>
                        <h4 className="text-[#171717] text-xl font-medium">
                          {table.label}
                        </h4>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[#171717] divide-y">
                  {table.items.map((item, idx) => {
                    return (
                      <>
                        <tr key={idx}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {item.name}
                          </td>

                          <td className="text-center w-[250px]  px-6 py-4 whitespace-nowrap hidden lg:max-w-[400px] lg:w-auto  text-balance lg:table-cell">
                            {item.BASIC}
                          </td>
                          <td className="text-center w-[250px] lg:max-w-[400px] lg:w-auto px-6 py-4 whitespace-nowrap hidden  text-balance lg:table-cell">
                            {item.DETAILED}
                          </td>

                          <td className="text-center w-[250px]  px-6 py-4 whitespace-nowrap lg:hidden">
                            {item[selectedPlan]}
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
