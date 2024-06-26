import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "@/components/LiIcon";

const Details = ({ year, text, t1, t2, t3, t4, id, month }) => {
  const ref = useRef(null);
  const visible = id % 2;
  return (
    <li
      ref={ref}
      className="my-8 w-[60%] lg:w-[80%] mx-auto flex flex-col lg:flex-row justify-between gap-5 lg:gap-2i0"
    >
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="lg:block hidden text-right ml-10"
      >
        <h3
          className={`captalize font-[900] text-5xl max-sm:text-xl text-background text-right  ${
            visible ? " lg:visible" : "lg:invisible"
          }`}
        >
          {year}
        </h3>

        <div className={`${!visible ? " lg:visible" : "lg:invisible"}`}>
          <h3 className="captalize text-[#303f5b] font-[800] text-5xl max-sm:text">
            {month}
          </h3>
          <p
            className={`font-medium w-full text-base md:text-xl mt-5 text-[#303f5b]  ${
              !visible ? " lg:visible" : "lg:invisible"
            }`}
          >
            {text}
          </p>
          {t1 && (
            <ul
              className={`font-medium w-full text-base md:text-xl mt-5 list-disc text-right text-[#303f5b] ${
                !visible ? " lg:visible" : "lg:invisible"
              }`}
            >
              <li>{t1}</li>
              <li>{t2}</li>
              <li>{t3}</li>
              {t4 && <li>{t4}</li>}
            </ul>
          )}
        </div>
      </motion.div>
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="lg:ml-10"
      >
        <h3
          className={`captalize font-[900] text-5xl max-sm:text-xl text-background  ${
            !visible ? " lg:visible" : "lg:invisible"
          }`}
        >
          {year}
        </h3>

        <div className={`${visible ? " lg:visible" : "lg:invisible"}`}>
          {" "}
          <h3 className="captalize text-[#303f5b] font-[800] text-5xl max-sm:text">
            {month}
          </h3>
          <p
            className={`font-medium w-full text-base md:text-xl mt-5 text-[#303f5b] ${
              visible ? " lg:visible" : "lg:invisible"
            }`}
          >
            {text}
          </p>
          {t1 && (
            <ul
              className={`font-medium w-full text-base md:text-xl mt-5 list-disc text-[#303f5b]  ${
                visible ? " lg:visible" : "lg:invisible"
              }`}
            >
              <li>{t1}</li>
              <li>{t2}</li>
              <li>{t3}</li>
              {t4 && <li>{t4}</li>}
            </ul>
          )}
        </div>
      </motion.div>
    </li>
  );
};

const OurStory = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-10 mx-auto max-w-6xl lg:ml-20 ">
      <div
        ref={ref}
        className="w-[75%] mx-auto relative xs:!w-[130%] md:!w-full lg:w-[90%] md:-ml-[10%]"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[34px] top-0 w-[5px] h-full bg-[#272727] rounded-2xl origin-top  max-md:w-[2px] max-md:left-[36px] lg:left-1/2 lg:ml-9 xs:!left-[20px]"
        />
        <ul className="w-full flex-col flex items-start justify-between ml-4 xs:ml-2">
          <Details
            year="2016"
            text="Started Consulting Amazon Initiative on Training online sellers"
            id="1"
          />
          <Details
            year="2017"
            month="JANUARY"
            text="Started Consulting and On-boarding for Amazon India with a Team of 10 Specialists"
            id="2"
          />
          <Details
            year=""
            month="SEPTEMBER "
            text="Incorporated AJ Digi Media Private Limited"
            id="2"
          />
          <Details
            year=""
            month="DECEMBER "
            text="Awarded Rising Star of the Year for Seller Management by Amazon"
            id="4"
          />
          <Details
            year="2018"
            month="JANUARY"
            text="Expanded Catalogue as a service, Expanded Onboarding Engagement with Amazon with a Team of 20 Specialists"
            id="5"
          />
          <Details
            year=""
            month="DECEMBER"
            text="Awarded Most Valuable for Onboarding Amazon India"
            id="5"
          />
          <Details
            year="2019"
            month="JANUARY"
            text="Awarded Best High-Value Seller Management by Amazon"
            id="6"
          />
          <Details
            year=""
            month="August"
            text="Awarded Partner of the Year for Advertising Management by Amazon Service Provider Network (SPN)"
            id="6"
          />
          <Details
            year=""
            month="September"
            text="Expanded Operations in 2 States"
            id="6"
          />
          <Details
            year="2020"
            month="March"
            text="Expanded Operation with Amazon Global Selling and Started Enabling sellers to sell from India to other Global Marketplaces"
            id="10"
          />
          <Details
            year=""
            month="December"
            text="Started Creative Design Services"
            id="11"
          />
          <Details
            year="2021"
            month="January"
            text="Expanded Total Team of 40 Trained Specialists"
            id="12"
          />
          <Details
            year=""
            month="June"
            t1="Amazon Gold Partner Award"
            t2="Amazon High GMS Award"
            t3="Amazon Reinstatement Champion Award"
            id="12"
          />
          <Details
            year="2022"
            t1="100+ D2C Growth and Full-service management"
            t2="500 Brand Stores Created on Amazon"
            t3="30,000 A+ Catalogue creations"
            id="14"
          />
          <Details
            year="2023"
            t1="E4M Awards 2023 Winner, Best use of Mobile to Drive Sales"
            t2="E4M Awards 2023 Winner, Best PPC Campaign"
            t3="Amazon Ads Catalyst Winner for Q1, Q2, Q3 & Q4"
            t4="$100 Mn Advertising Spend managed"
            id="15"
          />
        </ul>
      </div>
    </div>
  );
};

export default OurStory;
