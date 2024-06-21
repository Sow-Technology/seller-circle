import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "@/components/LiIcon";

const Details = ({ year, text, t1, t2, t3, t4 }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 w-[60%]  mx-auto flex flex-col items-center justify-between gap-5"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="captalize font-[900] text-5xl max-sm:text-xl ">
          {year}
        </h3>

        <p className="font-medium w-full text-base md:text-3xl mt-5">{text}</p>
        {t1 && (
          <ul className="font-medium w-full text-base md:text-3xl mt-5 list-disc">
            <li>{t1}</li>
            <li>{t2}</li>
            <li>{t3}</li>
            <li>{t4}</li>
          </ul>
        )}
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
    <div className="my-10 mx-auto max-w-4xl lg:ml-20">
      <div
        ref={ref}
        className="w-[75%] mx-auto relative xs:!w-[130%] md:!w-full lg:w-[90%] md:-ml-[10%]"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[34px] top-0 w-[5px] h-full bg-dark origin-top  max-md:w-[2px] max-md:left-[36px] xs:!left-[20px]"
        />
        <ul className="w-full flex-col flex items-start justify-between ml-4 xs:ml-2">
          <Details
            year="2016"
            text="Started Consulting Amazon Initiative on Training online sellers"
          />
          <Details
            year="JANUARY 2017"
            text="Started Consulting and On-boarding for Amazon India with a Team of 10 Specialists"
          />
          <Details
            year="SEPTEMBER 2017"
            text="Incorporated AJ Digi Media Private Limited"
          />
          <Details
            year="DECEMBER 2017"
            text="Awarded Rising Star of the Year for Seller Management by Amazon"
          />
          <Details
            year="JANUARY 2018"
            text="Expanded Catalogue as a service, Expanded Onboarding Engagement with Amazon with a Team of 20 Specialists"
          />
          <Details
            year="DECEMBER 2018"
            text="Awarded Most Valuable for Onboarding Amazon India"
          />
          <Details
            year="JANUARY 2019"
            text="Awarded Best High-Value Seller Management by Amazon"
          />
          <Details
            year="August 2019"
            text="Awarded Partner of the Year for Advertising Management by Amazon Service Provider Network (SPN)"
          />
          <Details
            year="September 2019"
            text="Expanded Operations in 2 States"
          />
          <Details
            year="March 2020"
            text="Expanded Operation with Amazon Global Selling and Started Enabling sellers to sell from India to other Global Marketplaces"
          />
          <Details
            year="December 2020"
            text="Started Creative Design Services"
          />
          <Details
            year="January 2021"
            text="Expanded Total Team of 40 Trained Specialists"
          />
          <Details
            year="June 2021"
            t1="Amazon Gold Partner Award"
            t2=" Amazon High GMS Award"
            t3="Amazon Reinstatement Champion Award"
          />
          <Details
            year="2022"
            t1="100+ D2C Growth and Full-service management"
            t2="500 Brand Stores Created on Amazon"
            t3="30,000 A+ Catalogue creations"
          />
          <Details
            year="2023"
            t1="E4M Awards 2023 Winner, Best use of Mobile to Drive Sales"
            t2="E4M Awards 2023 Winner, Best PPC Campaign"
            t3="Amazon Ads Catalyst Winner for Q1, Q2, Q3 & Q4"
            t4="$100 Mn Advertising Spend managed"
          />
        </ul>
      </div>
    </div>
  );
};

export default OurStory;
