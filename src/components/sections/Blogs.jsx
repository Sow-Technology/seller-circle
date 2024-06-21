import React from "react";
import BlogCard from "../cards/BlogCard";
import BlogCard2 from "../cards/BlogCard2";
import { blogs } from "@/lib/data";
import BlogCard3 from "../cards/BlogCard3";
import { motion } from "framer-motion";
const Blogs = () => {
  return (
    <div className="mx-auto max-w-7xl lg:px-20 px-8 flex-col flex  gap-5 my-20">
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-4xl lg:text-6xl text-center my-14"
      >
        Check Our <span className="text-[#039BE4]">Blogs</span>
      </motion.h2>
      <div className="flex flex-row flex-wrap gap-3">
        {blogs.map((blog, index) => (
          <div className="lg:max-w-[48%] w-full" key={index}>
            {" "}
            <BlogCard data={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
