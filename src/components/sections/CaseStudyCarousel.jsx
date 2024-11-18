import Slider from "react-slick";
import { caseStudies } from "@/lib/data";
import BlogCard from "../cards/BlogCard";
import { AnimatedElement } from "../AnimatedElement";

const CaseStudyCarousel = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 2, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time between transitions
    responsive: [
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-50 my-20">
      <AnimatedElement>
        <div className="relative w-full gap-10 mx-auto mb-10 flex items-center justify-between z-10">
          <div className="h-1.5 rounded-xl w-full bg-[#039BE4]" />
          <h2 className="lg:text-3xl text-xl text-center font-extrabold mx-auto w-full">
            Read other Case Studies
          </h2>
          <div className="h-1.5 rounded-xl w-full bg-[#039BE4]" />
        </div>
      </AnimatedElement>
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:py-16 xl:py-24">
        <div className="grid grid-cols-1 gap-8 h-full lg:gap-16 ">
          <Slider {...settings} className="h-full">
            {caseStudies.map((item, idx) => (
              <div key={idx} className="px-2 h-full ">
                <BlogCard data={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCarousel;
