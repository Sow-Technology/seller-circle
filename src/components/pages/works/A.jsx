"use client";
import WorkCard from "@/components/cards/WorkCard";
import { motion } from "framer-motion";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const apparel = [
  "/images/work/a/Apparel/1.png",
  "/images/work/a/Apparel/2.jpeg",
  "/images/work/a/Apparel/3.jpeg",
  "/images/work/a/Apparel/4.jpeg",
  "/images/work/a/Apparel/5.jpeg",
  "/images/work/a/Apparel/6.png",
  "/images/work/a/Apparel/7.png",
  "/images/work/a/Apparel/8.png",
  "/images/work/a/Apparel/9.png",
  "/images/work/a/Apparel/10.jpeg",
  "/images/work/a/Apparel/11.png",
  "/images/work/a/Apparel/12.png",
  "/images/work/a/Apparel/13.jpeg",
];
const consumable = [
  "/images/work/a/Consumable/1.png",
  "/images/work/a/Consumable/2.jpeg",
  "/images/work/a/Consumable/3.jpeg",
  "/images/work/a/Consumable/4.jpeg",
  "/images/work/a/Consumable/5.png",
  "/images/work/a/Consumable/6.png",
  "/images/work/a/Consumable/7.jpeg",
  "/images/work/a/Consumable/8.jpeg",
  "/images/work/a/Consumable/9.jpeg",
  "/images/work/a/Consumable/10.png",
  "/images/work/a/Consumable/11.jpeg",
  "/images/work/a/Consumable/12.png",
  "/images/work/a/Consumable/13.png",
  "/images/work/a/Consumable/14.png",
  "/images/work/a/Consumable/15.png",
  "/images/work/a/Consumable/16.png",
  "/images/work/a/Consumable/17.jpeg",
  "/images/work/a/Consumable/18.jpeg",
  "/images/work/a/Consumable/19.png",
  "/images/work/a/Consumable/20.png",
  "/images/work/a/Consumable/21.png",
  "/images/work/a/Consumable/22.png",
  "/images/work/a/Consumable/23.png",
  "/images/work/a/Consumable/24.png",
  "/images/work/a/Consumable/25.png",
  "/images/work/a/Consumable/26.jpeg",
];
const beauty = [
  "/images/work/a/Beauty/1.jpeg",
  "/images/work/a/Beauty/2.jpeg",
  "/images/work/a/Beauty/3.png",
  "/images/work/a/Beauty/4.png",
  "/images/work/a/Beauty/5.jpeg",
  "/images/work/a/Beauty/6.jpeg",
  "/images/work/a/Beauty/7.png",
  "/images/work/a/Beauty/8.png",
  "/images/work/a/Beauty/9.png",
  "/images/work/a/Beauty/10.jpeg",
  "/images/work/a/Beauty/11.jpeg",
  "/images/work/a/Beauty/12.png",
  "/images/work/a/Beauty/13.jpeg",
];
const home = [
  "/images/work/a/Home/1.jpeg",
  "/images/work/a/Home/2.png",
  "/images/work/a/Home/3.png",
  "/images/work/a/Home/4.png",
  "/images/work/a/Home/5.png",
  "/images/work/a/Home/6.png",
  "/images/work/a/Home/7.png",
  "/images/work/a/Home/8.jpeg",
  "/images/work/a/Home/9.png",
  "/images/work/a/Home/10.png",
  "/images/work/a/Home/11.png",
  "/images/work/a/Home/12.png",
  "/images/work/a/Home/13.png",
  "/images/work/a/Home/14.jpeg",
  "/images/work/a/Home/15.png",
  "/images/work/a/Home/16.png",
  "/images/work/a/Home/17.png",
  "/images/work/a/Home/18.png",
  "/images/work/a/Home/19.jpeg",
  "/images/work/a/Home/20.png",
  "/images/work/a/Home/21.png",
];
const others = [
  "/images/work/a/others/1.png",
  "/images/work/a/others/2.jpeg",
  "/images/work/a/others/3.jpeg",
  "/images/work/a/others/4.png",
  "/images/work/a/others/5.png",
  "/images/work/a/others/6.jpeg",
  "/images/work/a/others/7.png",
  "/images/work/a/others/8.png",
  "/images/work/a/others/9.png",
  "/images/work/a/others/10.jpeg",
  "/images/work/a/others/11.png",
  "/images/work/a/others/12.png",
  "/images/work/a/others/13.png",
  "/images/work/a/others/14.png",
  "/images/work/a/others/15.png",
  "/images/work/a/others/16.png",
  "/images/work/a/others/17.png",
  "/images/work/a/others/18.jpeg",
  "/images/work/a/others/19.jpeg",
  "/images/work/a/others/20.png",
  "/images/work/a/others/21.png",
];

const games = [
  "/images/work/a/Games/1.png",
  "/images/work/a/Games/2.png",
  "/images/work/a/Games/3.png",
  "/images/work/a/Games/4.png",
  "/images/work/a/Games/5.jpeg",
  "/images/work/a/Games/6.png",
  "/images/work/a/Games/7.png",
  "/images/work/a/Games/8.png",
  "/images/work/a/Games/9.png",
];

const pets = [
  "/images/work/a/Pets/1.png",
  "/images/work/a/Pets/2.png",
  "/images/work/a/Pets/3.jpeg",
  "/images/work/a/Pets/4.jpeg",
  "/images/work/a/Pets/5.png",
  "/images/work/a/Pets/6.jpeg",
];

const A = () => {
  return (
    <div className="flex flex-col gap-10 my-20">
      {" "}
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="font-extrabold text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
      >
        A+ Content
      </motion.h3>
      <Tabs defaultValue="apparel" className="">
        <TabsList>
          <TabsTrigger value="apparel">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className=" hover:text-white py-1 "
            >
              Apparel and Fashion
            </motion.div>
          </TabsTrigger>

          <TabsTrigger value="beauty">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="w-[130px] 
              hover:text-white py-1"
            >
              Beauty
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
          <TabsTrigger value="games">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className=" hover:text-white py-1"
            >
              Games and Education{" "}
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
          <TabsTrigger value="others">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="w-[130px] hover:text-white py-1"
            >
              Others
            </motion.div>
          </TabsTrigger>

          <TabsTrigger value="pets">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="w-[130px] hover:text-white py-1"
            >
              Pets
            </motion.div>
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="apparel"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center "
        >
          {apparel.map((image, index) => (
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
          value="consumable"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center "
        >
          {consumable.map((image, index) => (
            <WorkCard src={image} key={index} />
          ))}{" "}
        </TabsContent>
        <TabsContent
          value="games"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center "
        >
          {games.map((image, index) => (
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
          value="others"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center "
        >
          {others.map((image, index) => (
            <WorkCard src={image} key={index} />
          ))}{" "}
        </TabsContent>

        <TabsContent
          value="pets"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center  "
        >
          {pets.map((image, index) => (
            <WorkCard src={image} key={index} />
          ))}{" "}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default A;
