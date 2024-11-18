import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { caseStudies } from "@/lib/data";
import BlogCard from "../cards/BlogCard";
import Autoplay from "embla-carousel-autoplay";

const CaseStudyCarousel = () => {
  const [emblaRef, embla] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const slidesContainerRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // Adjust all slide heights to the tallest slide
  const setUniformHeights = useCallback(() => {
    if (!slidesContainerRef.current) return;
    const slides = slidesContainerRef.current.querySelectorAll(".embla__slide");

    let maxHeight = 0;

    slides.forEach((slide) => {
      slide.style.height = "auto"; // Reset height to auto before recalculating
      maxHeight = Math.max(maxHeight, slide.offsetHeight);
    });

    slides.forEach((slide) => {
      slide.style.height = `${maxHeight}px`;
    });
  }, []);

  // Sync selected index with dots
  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  // Initialize carousel and dots
  useEffect(() => {
    if (!embla) return;
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  useEffect(() => {
    setUniformHeights();
    window.addEventListener("resize", setUniformHeights);
    return () => window.removeEventListener("resize", setUniformHeights);
  }, [setUniformHeights]);

  return (
    <section className="bg-gray-50 my-20">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:py-16 xl:py-24">
        <div ref={emblaRef} className="embla overflow-hidden">
          <div ref={slidesContainerRef} className="embla__container flex px-2">
            {caseStudies.concat(caseStudies).map((item, idx) => (
              <div
                key={idx}
                className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] px-2"
              >
                <BlogCard data={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4 gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === selectedIndex
                  ? "bg-blue-500 scale-110"
                  : "bg-gray-300"
              }`}
              onClick={() => embla && embla.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCarousel;
