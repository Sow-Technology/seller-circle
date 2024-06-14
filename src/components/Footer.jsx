import Image from "next/image";
import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import { RiPinterestFill } from "react-icons/ri";
import '../styles.css';
const Footer = () => {
  return (
    <div className="bg-background">
      {" "}
      <div className="mx-auto lg:px-20 px-8 max-w-7xl   py-5">
        <div className="flex flex-wrap max-lg:items-center max-lg:justify-center gap-5">
          <div className="lg:w-[55%] text-white font-bold flex-row p-5 flex lg:text-3xl text-xl bg-[#0BADFA] items-center justify-center drop-shadow-xl rounded-[19px]">
            <Image
              src="/images/1.svg"
              alt=""
              width={230}
              height={160}
              className="max-lg:w-[150px] max-lg:h-[120px]"
            />
            Top 1%: A testament to our continued performance.
          </div>
          <div className="lg:w-[40%] flex items-center justify-center">
            <Image src="/logo.svg" alt="" width={400} height={200} />
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
        
          <div className="flex flex-row lg:flex-row items-center justify-center w-full lg:w-auto">
          <div className="basis-1/2 h-[80%] w-[600px] p-4 bg-[#0ea5e9] flex-auto text-white font-bold flex custom-shadow shadow-lg rounded-[19px]  responsive-box m-2">
          <div className="flex flex-col">
          <div className=" basis-1/6  text-white flex-col flex text-3xl">
            Our Contacts
          </div>
         <div className="basis-1/6 text-white flex-col flex text-sm">
               Give us a call or drop by anytime, we endeavor to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
           </div>
           <div className="basis-1/6.5 text-white flex-col flex text-base ">
               <div className="text-white flex-row flex text-base ">
               {/* <Image src="/images/globe.png" alt="" height={30} width={30} class="mr-2"/> */}
               <div className="mr-2 my-1"><FaMapLocationDot /></div>
               OUR ADDRESS:
              </div> 
           </div>
           <div className="basis-1/6 text-white flex-col flex text-sm">
               304,2nd floor, 7th Main Rd,HBBR Layout 1st Block,HBBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043
           </div>
           <div className="basis-1/7 text-white flex-col flex text-sm">
           
           <div className="text-white flex-row flex text-base ">
           <div className="mr-2 my-1"><BiMailSend /></div>
           OUR MAILBOX:
           </div>
           </div>
           <div className="basis-1/6 text-white flex-col flex text-sm">
               contact@sellercircle.in
           </div>
           <div className="basis-1/7 text-white flex-col flex text-sm">
           <div className="text-white flex-row flex text-base ">
           <div className="mr-2 my-1"><BsFillTelephoneInboundFill /></div>
           OUR PHONE:
           </div>
           </div>
           <div className="basis-1/6 text-white flex-col flex text-base">
               +91 080 4168 8315
           </div>
           </div>
           </div>
          <div className="basis-1/2 h-[90%] w-[600px] p-4 bg-[#0BADFA]-500 text-center text-white responsive-box m-2">
          <div className="flex flex-row justify-items-start mb-2">
             <div className="basis-1/2 mr-4">
             <div className="flex flex-wrap flex-col ">
              <div className="basis-1/2 text-2xl mb-2">
               Services
             </div>
             <div className="basis-1/2  text-base mb-2">
               Training
             </div>
             <div className="basis-1/2  text-base mb-2">
               Cataloging
             </div>
             <div className="basis-1/2 text-base mb-2">
               Advertising Management
             </div>
             <div className="basis-1/2 text-base mb-2">
               Account Management
             </div>
             <div className="basis-1/2 text-base mb-2">
               EBC
             </div>
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
              <div className="basis-1/3 text-2xl mb-2">
                Quick Links
              </div>
              <div className="basis-1/3 text-base mb-2">
                About Us
              </div>
              <div className="basis-1/3 text-base mb-2">
                Our Services
              </div>
              <div className="basis-1/3 text-base mb-2">
                Careers
              </div>
              <div className="basis-1/3 text-base mb-2">
                Contact Us
              </div>
              <div className="basis-1/3 text-base mb-2">
                Pricing
              </div>
             </div>
             </div>
            
            </div>
            <div className="flex  flex-row">
             <div className="basis-1/2">
            <div className="basis-1/4  flex flex-wrap flex-col">
              <div className="basis-1/4 text-2xl mb-2">
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
          </div>
          
          </div>
          <div className="h-0.5 w-full bg-white opacity-50 my-8"></div>
          <div className="flex flex-wrap flex-row">
            <div className="basis-2/3">
             <div className="flex flex-wrap flex-row justify-center">
               <div className="text-white text-xs my-2">
                 Copyright &copy; 2020 Seller Circle. All Rights Reserved.
               </div>
             </div>
            </div>
            <div className="basis-1/3">
             <div className="flex flex-wrap flex-row">
                <div className="basis-1/5">
                <div className="text-white flex-row flex text-base mr-1">
                 
                      <div className="mr-1 my-1"><AiOutlineLinkedin /></div>
                      <div className="h-0.5">Linkedin</div>
                  
                  </div>
                </div>
                <div className="basis-1/5">
                <div className="text-white flex-row flex text-base mr-1">
                 
                      <div className="mr-1 my-1"><AiOutlineInstagram /></div>
                      <div className="h-0.5">Instagram</div>
                  
                  </div>
                </div>
                <div className="basis-1/5">
                <div className="text-white flex-row flex text-base mr-1 ">
                 
                      <div className="mr-1 my-1"><MdOutlineFacebook /></div>
                      <div className="h-0.5">Facebook</div>
                  
                  </div>
                </div>
                <div className="basis-1/5">
                <div className="text-white flex-row flex text-base mr-1">
                 
                      <div className="mr-1 my-1"><RiPinterestFill /></div>
                      <div className="h-0.5">Pinterest</div>
                  
                  </div>
                </div>
             </div>
            </div>
          </div>
</div>
        </div>
    
    
  );
};

export default Footer;
