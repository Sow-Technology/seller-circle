import Image from "next/image";
import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import { RiPinterestFill } from "react-icons/ri";
import "../styles.css";
import Audit from "./forms/Audit";
const Footer = () => {
  return (
    <div className="bg-background">
      {" "}
      <div className="mx-auto lg:px-20 px-8 max-w-7xl   py-5">
        <div className="flex flex-wrap max-lg:items-center max-lg:justify-center justify-between gap-5">
          <div className="lg:w-[50%] text-white font-bold flex-row lg:p-5 p-3 flex lg:text-2xl text-xs bg-[#0BADFA] items-center justify-center drop-shadow-xl rounded-[19px] gap-2 lg:gap-4">
            <Image
              src="/images/1.svg"
              alt=""
              width={180}
              height={140}
              className="max-lg:w-[110px] max-lg:h-[80px]"
            />
            Top 1%: A testament to our continued performance.
          </div>
          <div className="lg:w-[40%] flex items-center justify-center">
            <Image src="/logo.svg" alt="" width={350} height={200} />
          </div>
        </div>
        <div className="h-0.5 w-full bg-white opacity-50 my-5"></div>
        {/* <div className="flex flex-wrap max-lg:items-center max-lg:justify-center gap-5">
          <div className="lg:w-[55%] text-white font-bold flex-row p-5 flex text-3xl bg-[#0BADFA] items-center justify-center drop-shadow-xl rounded-[19px]">
            <Image src="/images/1.svg" alt="" width={230} height={160} />
            Top 1%: A testament to our continued performance.
          </div>
          <div className="lg:w-[40%] flex items-center justify-center">
            <Image src="/logo.svg" alt="" width={400} height={200} />
          </div>
        </div> */}
        <div className="flex flex-wrap max-lg:items-center max-lg:justify-center gap-5">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full lg:w-auto gap-8">
            <div className="lg:w-[60%]">
              {" "}
              <Audit />
            </div>
            <div className=" h-[90%] p-4 bg-[#0BADFA]-500 text-left text-white responsive-box m-2">
              <div className="flex flex-row flex-wrap justify-between gap-5 mb-2">
                <div className=" mr-4">
                  <div className="flex flex-wrap flex-col ">
                    <div className="basis-1/2 text-3xl font-bold mb-2">
                      Services
                    </div>
                    <div className="basis-1/2  text-base mb-2">Training</div>
                    <div className="basis-1/2  text-base mb-2">Cataloging</div>
                    <div className="basis-1/2 text-base mb-2">
                      Advertising Management
                    </div>
                    <div className="basis-1/2 text-base mb-2">
                      Account Management
                    </div>
                    <div className="basis-1/2 text-base mb-2">EBC</div>
                    <div className="basis-1/2 text-base mb-2">
                      Brand Store Creation
                    </div>
                    <div className="basis-1/2 text-base mb-2">
                      Seller Reinstatement Services
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex  flex-wrap flex-col">
                    <div className="basis-1/3 text-3xl font-bold mb-2">
                      Quick Links
                    </div>
                    <div className="basis-1/3 text-base mb-2">About Us</div>
                    <div className="basis-1/3 text-base mb-2">Our Services</div>
                    <div className="basis-1/3 text-base mb-2">Careers</div>
                    <div className="basis-1/3 text-base mb-2">Contact Us</div>
                    <div className="basis-1/3 text-base mb-2">Pricing</div>
                  </div>
                </div>
                <div className="flex w-auto  flex-row">
                  <div className="">
                    <div className="basis-1/4  flex flex-wrap flex-col">
                      <div className="basis-1/4 text-3xl font-bold mb-2">
                        More
                      </div>
                      <div className="basis-1/4 text-base mb-2">
                        Terms & Conditions
                      </div>
                      <div className="basis-1/4 text-base mb-2">
                        Privacy Policy
                      </div>
                      <div className="basis-1/4 text-base mb-2">
                        EBC Example
                      </div>
                      <div className="basis-1/4 text-base mb-2">
                        Brand Stores Examples
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 min-w-[300px]">
                <div className="  text-white text-center w-full flex-col font-bold flex text-3xl">
                  Our Contacts
                </div>
                <div className=" text-white flex-col flex text-sm">
                  Give us a call or drop by anytime, we endeavor to answer all
                  enquiries within 24 hours on business days. We will be happy
                  to answer your questions.
                </div>

                <div className="flex flex-row flex-wrap">
                  <div className="flex flex-col lg:w-[30%] gap-5">
                    {" "}
                    <div className="">
                      <div className=" text-white flex-col justify-center flex text-sm">
                        <div className="text-white flex-row items-center flex text-base gap-3  font-bold">
                          <div className=" text-2xl">
                            <BiMailSend />
                          </div>
                          OUR MAILBOX:
                        </div>
                      </div>
                      <div className=" text-white flex-col flex text-base">
                        contact@sellercircle.in
                      </div>
                    </div>
                    <div className="">
                      <div className=" text-white flex-col flex text-sm font-bold">
                        <div className="text-white flex-row gap-3 flex text-base ">
                          <div className=" text-lg">
                            <BsFillTelephoneInboundFill />
                          </div>
                          OUR PHONE:
                        </div>
                      </div>
                      <div className=" text-white flex-col flex text-base">
                        +91 080 4168 8315
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap flex-row lg:gap-10 gap-5 max-lg:mt-5 lg:w-[65%] lg:items-center items-start lg:justify-center justify-start">
                    <div className="">
                      <div className="text-white flex-row items-center justify-center flex text-base mr-1 gap-2">
                        <div className=" text-3xl">
                          <AiOutlineLinkedin />
                        </div>
                        <div className="">Linkedin</div>
                      </div>
                    </div>
                    <div className="">
                      <div className="text-white flex-row items-center justify-center flex text-base mr-1 gap-2">
                        {" "}
                        <div className="text-3xl">
                          <AiOutlineInstagram />
                        </div>
                        <div className="">Instagram</div>
                      </div>
                    </div>
                    <div className="">
                      <div className="text-white flex-row items-center justify-center flex text-base mr-1 gap-2">
                        {" "}
                        <div className="text-3xl">
                          <MdOutlineFacebook />
                        </div>
                        <div className="">Facebook</div>
                      </div>
                    </div>
                    <div className="">
                      <div className="text-white flex-row items-center justify-center flex text-base mr-1 gap-2">
                        {" "}
                        <div className=" text-3xl">
                          <RiPinterestFill />
                        </div>
                        <div className="">Pinterest</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0.5 w-full bg-white opacity-50 my-8"></div>
        <div className="flex flex-wrap flex-row items-center justify-center">
          <div className="">
            <div className="flex flex-wrap flex-row justify-center">
              <div className="text-white text-xs my-2">
                Copyright &copy; 2020 Seller Circle. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
