"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import Audit from "@/components/forms/Audit";
import { BorderBeam } from "@/components/ui/border-beam";
import ContactForm from "@/components/forms/ContactForm";
import Services from "@/components/sections/about/Services";
import Image from "next/image";
const Page = () => {
  return (
    <>
      <Navbar />
      <div className="w-full  bg-white  bg-grid-black/[0.05] relative flex items-center justify-center ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="max-w-7xl mx-auto mb-20 z-[39] w-full">
          {/* <motion.div
            className=""
            initial={{ x: "500px", opacity: 0 }}
            animate={{ x: "0", opacity: 100 }}
            transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
          >
            <Image
              src="/images/banners/contact.jpg"
              width="1280"
              height="1280"
              alt=""
              className="w-full max-lg:p-5 rounded-xl "
            />
          </motion.div> */}

          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto mt-7"
          >
            Let&#39;S CHAT
          </motion.h3>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase text-balance w-auto"
          >
            No one-size-fits-all here,{" "}
            <span className="text-[#039BE4]">only tailored strategies.  </span>
          </motion.h2>
          <div className="mx-auto flex lg:flex-row flex-col-reverse flex-wrap  items-center justify-center gap-16">
            <div className="lg:w-[45%]">
              {" "}
              <motion.h2
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                viewport={{ once: true }}
                className="nunito font-extrabold text-2xl lg:text-3xl max-w-5xl mx-auto text-center my-7  text-wrap"
              >
                We drive brand success through our expert knowledge and constant
                pursuit of excellence {/* </span> */}
              </motion.h2>
              <div className="w-full px-4 ">
                <div className="mb-12  lg:mb-0">
                  <div className="mb-8 flex w-full ">
                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-cyan-500/30 text-primary sm:h-[70px] sm:max-w-[70px]">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-xl font-bold text-dark ">
                        Our Location
                      </h4>
                      <p className="text-base text-body-color text-balance">
                        304, 2nd floor, 7th Main Rd, HRBR Layout 1st Block, HRBR
                        Layout, Kalyan Nagar, Bengaluru, Karnataka 560043
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex w-full max-w-[370px]">
                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-cyan-500/30 text-primary sm:h-[70px] sm:max-w-[70px]">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_941_17577)">
                          <path
                            d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
                            fill="currentColor"
                          />
                          <path
                            d="M29.3 14.25C28.7 14.25 28.25 13.8 28.2 13.2C27.8 8.15003 23.65 4.10003 18.55 3.75003C17.95 3.70003 17.45 3.20003 17.5 2.55003C17.55 1.95003 18.05 1.45003 18.7 1.50003C24.9 1.90003 29.95 6.80003 30.45 13C30.5 13.6 30.05 14.15 29.4 14.2C29.4 14.25 29.35 14.25 29.3 14.25Z"
                            fill="currentColor"
                          />
                          <path
                            d="M24.35 14.7002C23.8 14.7002 23.3 14.3002 23.25 13.7002C22.95 11.0002 20.85 8.90018 18.15 8.55018C17.55 8.50018 17.1 7.90018 17.15 7.30018C17.2 6.70018 17.8 6.25018 18.4 6.30018C22.15 6.75018 25.05 9.65018 25.5 13.4002C25.55 14.0002 25.15 14.5502 24.5 14.6502C24.4 14.7002 24.35 14.7002 24.35 14.7002Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_941_17577">
                            <rect width="32" height="32" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-xl font-bold text-dark ">
                        Phone Number
                      </h4>
                      <p className="text-base text-body-color ">
                        +91 080 4168 8315
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex w-full max-w-[370px]">
                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-cyan-500/30 text-primary sm:h-[70px] sm:max-w-[70px]">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-xl font-bold text-dark ">
                        Email Address
                      </h4>
                      <p className="text-base text-body-color ">
                        contact@sellercircle.in
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[45%] p-5">
              <motion.h2
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                viewport={{ once: true }}
                className="nunito font-extrabold text-2xl lg:text-3xl max-w-5xl mx-auto text-center my-7  text-wrap"
              >
                Fill out the form below, and we&#39;ll get back to you soon
              </motion.h2>
              {/* <ContactForm /> */}
              <Audit />
            </div>
          </div>
          <div className="w-full p-20 flex max-sm:max-w-[300px] items-center  justify-center  mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5077.125716430933!2d77.63824153494029!3d13.016819484828028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17c2a05035e5%3A0xe96d55c4d7489f26!2sAJ%20Digi%20Media%20Private%20Limited%20(Seller%20Circle)!5e0!3m2!1sen!2sin!4v1718807011204!5m2!1sen!2sin"
              width="600"
              height="450"
              // style="border:0;"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Services />
      <Footer />
    </>
  );
};

export default Page;
