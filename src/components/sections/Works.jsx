"use client";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Works = () => {
  const pathname = usePathname();
  return (
    <div className="mx-auto max-w-7xl flex flex-col my-20">
      {" "}
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-4xl lg:text-6xl text-center my-14"
      >
        Check Our <span className="text-[#039BE4]">Works</span>
      </motion.h2>
      {pathname == "/works" ? (
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="a">
              {" "}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="w-[130px] hover:text-white py-1"
              >
                A+
              </motion.div>
            </TabsTrigger>
            <TabsTrigger value="story">
              {" "}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="w-[130px] hover:text-white py-1"
              >
                BRAND STORY
              </motion.div>
            </TabsTrigger>
            <TabsTrigger value="video">
              {" "}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="w-[130px] hover:text-white py-1"
              >
                BRAND VIDEO
              </motion.div>
            </TabsTrigger>
            <TabsTrigger value="store">
              {" "}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="w-[130px] hover:text-white py-1"
              >
                BRAND STORE
              </motion.div>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="a">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="story">Change your password here.</TabsContent>
          <TabsContent value="store">Change your password here.</TabsContent>
          <TabsContent value="video">Change your password here.</TabsContent>
        </Tabs>
      ) : (
        <div className="flex flex-wrap items-center gap-7 justify-center">
          <Link href="/works">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button variant="cta" className="w-[150px] text-center">
                A+
              </Button>
            </motion.div>
          </Link>
          <Link href="/works">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button variant="cta" className="w-[150px] text-center">
                BRAND STORY
              </Button>
            </motion.div>
          </Link>
          <Link href="/works">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button variant="cta" className="w-[150px] text-center">
                BRAND VIDEO
              </Button>
            </motion.div>
          </Link>{" "}
          <Link href="/works">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button variant="cta" className="w-[150px] text-center">
                BRAND STORE
              </Button>
            </motion.div>
          </Link>{" "}
        </div>
      )}
    </div>
  );
};

export default Works;
