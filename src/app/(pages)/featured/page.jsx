"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const videos = [
    {
        id: "jTznNm7khck",
        title: "Video 1",
    },
    {
        id: "3oXGsMFOxfM",
        title: "Video 2",
    },
    {
        id: "j8Xx5AUXU0w",
        title: "Video 3",
    },
];

const FeaturedPage = () => {
    return (
        <>
            <Navbar />
            <main className="bg-white min-h-screen">
                <section className="pt-24 pb-12 px-6 flex flex-col items-center text-center">
                    <p className="text-sm font-semibold uppercase text-[#039BE4] tracking-[0.2em]">
                        Resources
                    </p>
                    <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-gray-900">
                        Featured on Amazon
                    </h1>
                    <p className="mt-4 max-w-2xl text-gray-600">
                        Watch our featured videos and success stories.
                    </p>
                </section>

                <section className="max-w-7xl mx-auto px-6 pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.map((video) => (
                            <div key={video.id} className="bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="aspect-video w-full">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${video.id}`}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="border-0"
                                    ></iframe>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default FeaturedPage;
