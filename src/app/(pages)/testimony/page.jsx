"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HorizontalVideos from "@/components/HorizontalVideos";

const TestimonyPage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="pt-16 pb-4 text-center px-6 flex flex-col items-center">
          <p className="text-sm font-semibold uppercase text-[#039BE4] tracking-[0.2em]">
            Resources
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-gray-900">
            Customer Testimony Videos
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Browse a curated set of client stories and campaign reels. Press play on any card to watch on-demand.
          </p>
        </section>
        <HorizontalVideos />
      </main>
      <Footer />
    </>
  );
};

export default TestimonyPage;
