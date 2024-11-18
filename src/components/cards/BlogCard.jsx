import Link from "next/link";
import React from "react";

const BlogCard = ({ data }) => {
  return (
    <article className="flex bg-white transition hover:shadow-xl shadow-2xl border-background border h-full  ">
      <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          dateTime="2022-10-10"
          className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
        >
          <span>{data.year}</span>
          <span className="w-px flex-1 bg-gray-900/10"></span>
          <span>{data.date}</span>
        </time>
      </div>

      <div className="hidden sm:block sm:basis-56 object-cover">
        <img
          alt=""
          src={data.imageUrl}
          className="aspect-square h-full w-full object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          {data.category && (
            <div className="bg-background rounded-full px-10 py-2 text-white font-medium w-max mb-2">
              {data.category}
            </div>
          )}
          <Link href={data.link || "#"}>
            <h3 className="font-bold lg:text-2xl uppercase text-gray-900">
              {data.title}
            </h3>
          </Link>

          {data.description && (
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
              {data.description}
            </p>
          )}
          <div className="mt-5 text-neutral-700">
            {" "}
            {data.client && (
              <div className="text-lg">
                <span className="text-background">◆</span>{" "}
                <span className="font-semibold text-gray-950">Client: </span>
                {data.client}
              </div>
            )}
            {data.services && (
              <div className="text-lg">
                <span className="text-background">◆</span>{" "}
                <span className="font-semibold text-gray-950 ">Services: </span>
                {data.services}
              </div>
            )}
            {data.marketplace && (
              <div className="text-lg">
                <span className="text-background">◆</span>{" "}
                <span className="font-semibold text-gray-950 ">
                  Marketplace:{" "}
                </span>
                {data.marketplace}
              </div>
            )}
          </div>
        </div>

        <div className="sm:flex sm:items-end sm:justify-end">
          <Link
            href={data.link || "#"}
            className="block bg-background px-5 py-3 text-center text-xs font-bold uppercase text-slate-100 transition"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
