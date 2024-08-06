"use client";
import WorkCard from "@/components/cards/WorkCard";
import { motion } from "framer-motion";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const accessories = [
  "/images/work/a/Accessories/1.png",
  "/images/work/a/Accessories/2.jpeg",
  "/images/work/a/Accessories/3.jpeg",
  "/images/work/a/Accessories/4.png",
  "/images/work/a/Accessories/5.png",
  "/images/work/a/Accessories/6.png",
  "/images/work/a/Accessories/7.png",
  "/images/work/a/Accessories/8.png",
  "/images/work/a/Accessories/9.png",
  "/images/work/a/Accessories/10.jpeg",
  "/images/work/a/Accessories/11.png",
  "/images/work/a/Accessories/12.png",
  "/images/work/a/Accessories/13.png",
  "/images/work/a/Accessories/14.png",
  "/images/work/a/Accessories/15.png",
  "/images/work/a/Accessories/16.png",
  "/images/work/a/Accessories/17.jpeg",
  "/images/work/a/Accessories/18.png",
  "/images/work/a/Accessories/19.png",
];
const bathroom = [
  "/images/work/a/Bathroom/1.png",
  "/images/work/a/Bathroom/2.png",
  "/images/work/a/Bathroom/3.png",
  "/images/work/a/Bathroom/4.png",
  "/images/work/a/Bathroom/5.png",
  "/images/work/a/Bathroom/6.png",
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
const clothes = [
  "/images/work/a/Clothes/1.jpeg",
  "/images/work/a/Clothes/2.jpeg",
  "/images/work/a/Clothes/3.png",
  "/images/work/a/Clothes/4.png",
  "/images/work/a/Clothes/5.jpeg",
  "/images/work/a/Clothes/6.png",
  "/images/work/a/Clothes/7.jpeg",
];
const everyday = [
  "/images/work/a/EverydayEssentials/1.jpeg",
  "/images/work/a/EverydayEssentials/2.jpeg",
  "/images/work/a/EverydayEssentials/3.jpeg",
  "/images/work/a/EverydayEssentials/4.jpeg",
];
const fashion = [
  "/images/work/a/Fashion/1.png",
  "/images/work/a/Fashion/2.jpeg",
  "/images/work/a/Fashion/3.jpeg",
  "/images/work/a/Fashion/4.png",
  "/images/work/a/Fashion/5.png",
  "/images/work/a/Fashion/6.png",
];
const food = [
  "/images/work/a/Food/1.png",
  "/images/work/a/Food/2.jpeg",
  "/images/work/a/Food/3.jpeg",
  "/images/work/a/Food/4.png",
  "/images/work/a/Food/5.png",
  "/images/work/a/Food/6.jpeg",
  "/images/work/a/Food/7.jpeg",
  "/images/work/a/Food/8.jpeg",
  "/images/work/a/Food/9.png",
  "/images/work/a/Food/10.jpeg",
  "/images/work/a/Food/11.png",
  "/images/work/a/Food/12.png",
  "/images/work/a/Food/13.png",
  "/images/work/a/Food/14.png",
  "/images/work/a/Food/15.png",
  "/images/work/a/Food/16.jpeg",
  "/images/work/a/Food/17.png",
  "/images/work/a/Food/18.png",
  "/images/work/a/Food/19.png",
  "/images/work/a/Food/20.jpeg",
  "/images/work/a/Food/21.png",
  "/images/work/a/Food/22.png",
  "/images/work/a/Food/23.png",
  "/images/work/a/Food/24.jpeg",
];
const games = ["/images/work/a/Games/1.png", "/images/work/a/Games/2.png"];
const health = ["/images/work/a/Health/1.jpeg", "/images/work/a/Health/2.jpeg"];
const homeDecor = [
  "/images/work/a/HomeDecor/1.jpeg",
  "/images/work/a/HomeDecor/2.png",
  "/images/work/a/HomeDecor/3.png",
  "/images/work/a/HomeDecor/4.jpeg",
  "/images/work/a/HomeDecor/5.png",
  "/images/work/a/HomeDecor/6.jpeg",
  "/images/work/a/HomeDecor/7.png",
  "/images/work/a/HomeDecor/8.png",
  "/images/work/a/HomeDecor/9.png",
  "/images/work/a/HomeDecor/10.png",
];
const kids = [
  "/images/work/a/KidsProducts/1.png",
  "/images/work/a/KidsProducts/2.png",
  "/images/work/a/KidsProducts/3.png",
  "/images/work/a/KidsProducts/4.jpeg",
  "/images/work/a/KidsProducts/5.png",
  "/images/work/a/KidsProducts/6.png",
  "/images/work/a/KidsProducts/7.png",
];
const kitchen = [
  "/images/work/a/Kitchenessentials/1.png",
  "/images/work/a/Kitchenessentials/2.png",
  "/images/work/a/Kitchenessentials/3.png",
  "/images/work/a/Kitchenessentials/4.jpeg",
  "/images/work/a/Kitchenessentials/5.png",
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
      <Tabs defaultValue="accessories" className="">
        <TabsList>
          <TabsTrigger value="accessories">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="w-[130px] hover:text-white py-1"
            >
              Accessories
            </motion.div>
          </TabsTrigger>
          <TabsTrigger value="bathroom">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="w-[130px] hover:text-white py-1"
            >
              Bathroom
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
          <TabsTrigger value="clothes">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="w-[130px] hover:text-white py-1"
            >
              Clothes
            </motion.div>
          </TabsTrigger>
          <TabsTrigger value="everyday">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className=" hover:text-white py-1"
            >
              Everyday Essentials
            </motion.div>
          </TabsTrigger>
          <TabsTrigger value="fashion">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="w-[130px] hover:text-white py-1"
            >
              Fashion
            </motion.div>
          </TabsTrigger>
          <TabsTrigger value="food">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="w-[130px] hover:text-white py-1"
            >
              Food
            </motion.div>
          </TabsTrigger>
          <TabsTrigger value="games">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="w-[130px] hover:text-white py-1"
            >
              Games
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
              Home Decor
            </motion.div>
          </TabsTrigger>
          <TabsTrigger value="kids">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="w-[130px] hover:text-white py-1"
            >
              Kids Products
            </motion.div>
          </TabsTrigger>
          <TabsTrigger value="kitchen">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="w-[150px] hover:text-white py-1"
            >
              Kitchen Essentials
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
          value="accessories"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center "
        >
          {accessories.map((image, index) => (
            <WorkCard src={image} key={index} />
          ))}{" "}
        </TabsContent>
        <TabsContent
          value="bathroom"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center "
        >
          {bathroom.map((image, index) => (
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
          value="clothes"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center "
        >
          {clothes.map((image, index) => (
            <WorkCard src={image} key={index} />
          ))}{" "}
        </TabsContent>
        <TabsContent
          value="everyday"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center "
        >
          {everyday.map((image, index) => (
            <WorkCard src={image} key={index} />
          ))}{" "}
        </TabsContent>
        <TabsContent
          value="fashion"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center "
        >
          {fashion.map((image, index) => (
            <WorkCard src={image} key={index} />
          ))}{" "}
        </TabsContent>
        <TabsContent
          value="food"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center "
        >
          {food.map((image, index) => (
            <WorkCard src={image} key={index} />
          ))}{" "}
        </TabsContent>
        <TabsContent
          value="games"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center  "
        >
          {games.map((image, index) => (
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
        <TabsContent
          value="home"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center  "
        >
          {homeDecor.map((image, index) => (
            <WorkCard src={image} key={index} />
          ))}{" "}
        </TabsContent>{" "}
        <TabsContent
          value="kids"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center  "
        >
          {kids.map((image, index) => (
            <WorkCard src={image} key={index} />
          ))}{" "}
        </TabsContent>
        <TabsContent
          value="kitchen"
          className="flex flex-row flex-wrap gap-14 my-10 items-center justify-center  "
        >
          {kitchen.map((image, index) => (
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
