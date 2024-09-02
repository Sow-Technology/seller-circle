"use client";
import WorkCard from "@/components/cards/WorkCard";
import { motion } from "framer-motion";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const apparel = [
  "/images/work/store/Apparel/1.jpeg",
  "/images/work/store/Apparel/2.jpeg",
  "/images/work/store/Apparel/3.jpeg",
];
const accessories = [
  "/images/work/store/Accessories/1.jpeg",
  "/images/work/store/Accessories/2.jpeg",
];
const beauty = [
  "/images/work/store/Beauty/1.jpeg",
  "/images/work/store/Beauty/2.jpeg",
  "/images/work/store/Beauty/3.jpeg",
  "/images/work/store/Beauty/4.jpeg",
  "/images/work/store/Beauty/5.jpeg",
  "/images/work/store/Beauty/6.jpeg",
  "/images/work/store/Beauty/7.jpeg",
];
const home = [
  "/images/work/store/Home/1.jpeg",
  "/images/work/store/Home/2.jpeg",
  "/images/work/store/Home/3.jpeg",
  "/images/work/store/Home/4.jpeg",
  "/images/work/store/Home/0.jpeg",
];
const consumable = [
  "/images/work/store/Consumable/1.jpeg",
  "/images/work/store/Consumable/2.jpeg",
  "/images/work/store/Consumable/3.jpeg",
  "/images/work/store/Consumable/4.jpeg",
  "/images/work/store/Consumable/5.jpeg",
  "/images/work/store/Consumable/6.jpeg",
  "/images/work/store/Consumable/7.jpeg",
  "/images/work/store/Consumable/8.jpeg",
  "/images/work/store/Consumable/9.jpeg",
  "/images/work/store/Consumable/10.jpeg",
  "/images/work/store/Consumable/11.jpeg",
];

const babyProduct = [
  "/images/work/store/BabyProduct/2.jpeg",
  "/images/work/store/BabyProduct/1.jpeg",
  "/images/work/store/BabyProduct/3.jpeg",
];

const electronics = ["/images/work/store/Electronics/1.jpeg"];
const health = ["/images/work/store/Health/1.jpeg"];
const allImages = [
  ...accessories,
  ...apparel,
  ...babyProduct,
  ...beauty,
  ...home,
  ...consumable,
  ...electronics,
  ...health,
];

const Store = () => {
  return (
    <div className="flex flex-col gap-10 my-20">
      {" "}
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="font-extrabold text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
      >
        BRAND STORE
      </motion.h3>
      <Tabs defaultValue="all" className="">
        <TabsList>
          <TabsTrigger value="accessories">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className=" hover:text-white py-1 "
            >
              Accessories
            </motion.div>
          </TabsTrigger>

          <TabsTrigger value="apparel">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="w-[130px] 
              hover:text-white py-1"
            >
              Apparel
            </motion.div>
          </TabsTrigger>
          <TabsTrigger value="babyProduct">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="w-[130px] hover:text-white py-1"
            >
              Baby Product
            </motion.div>
          </TabsTrigger>
          <TabsTrigger value="beauty">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className=" hover:text-white py-1"
            >
              Beauty{" "}
            </motion.div>
          </TabsTrigger>
          <TabsTrigger value="consumable">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="w-[130px] hover:text-white py-1"
            >
              Consumable
            </motion.div>
          </TabsTrigger>
          <TabsTrigger value="electronics">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="w-[130px] hover:text-white py-1"
            >
              Electronics
            </motion.div>
          </TabsTrigger>

          <TabsTrigger value="health">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="w-[130px] hover:text-white py-1"
            >
              Health
            </motion.div>
          </TabsTrigger>
          <TabsTrigger value="home">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="w-[130px] hover:text-white py-1"
            >
              Home
            </motion.div>
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="all"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center "
        >
          {allImages.map((image, index) => (
            <WorkCard src={image} key={index} />
          ))}{" "}
        </TabsContent>
        <TabsContent
          value="accessories"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center "
        >
          {accessories.map((image, index) => (
            <WorkCard src={image} key={index} />
          ))}{" "}
        </TabsContent>

        <TabsContent
          value="apparel"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center "
        >
          {apparel.map((image, index) => (
            <WorkCard src={image} key={index} />
          ))}{" "}
        </TabsContent>
        <TabsContent
          value="babyProduct"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center "
        >
          {babyProduct.map((image, index) => (
            <WorkCard src={image} key={index} />
          ))}{" "}
        </TabsContent>
        <TabsContent
          value="beauty"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center "
        >
          {beauty.map((image, index) => (
            <WorkCard src={image} key={index} />
          ))}{" "}
        </TabsContent>
        <TabsContent
          value="home"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center "
        >
          {home.map((image, index) => (
            <WorkCard src={image} key={index} />
          ))}{" "}
        </TabsContent>
        <TabsContent
          value="consumable"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center "
        >
          {consumable.map((image, index) => (
            <WorkCard src={image} key={index} />
          ))}{" "}
        </TabsContent>

        <TabsContent
          value="electronics"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center  "
        >
          {electronics.map((image, index) => (
            <WorkCard src={image} key={index} />
          ))}{" "}
        </TabsContent>
        <TabsContent
          value="health"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center  "
        >
          {health.map((image, index) => (
            <WorkCard src={image} key={index} />
          ))}{" "}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Store;
