import React from "react";
import BlogCard from "../cards/BlogCard";
import BlogCard2 from "../cards/BlogCard2";
import { blogs } from "@/lib/data";
import BlogCard3 from "../cards/BlogCard3";
const Blogs = () => {
  return (
    <div className="mx-auto max-w-7xl lg:px-20 px-8 flex-col flex  gap-5 ">
      <BlogCard data={blogs[0]} />
      <BlogCard3 data={blogs[0]} />
      <BlogCard2 data={blogs[0]} />
      <div className="flex flex-row">
        {" "}
        <BlogCard data={blogs[0]} /> <BlogCard data={blogs[0]} />
      </div>
      <div className="flex flex-row gap-3">
        {" "}
        <BlogCard2 data={blogs[0]} /> <BlogCard2 data={blogs[0]} />
        <BlogCard2 data={blogs[0]} />
      </div>
    </div>
  );
};

export default Blogs;
