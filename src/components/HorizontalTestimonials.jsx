import { useEffect } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { reviews } from "@/lib/data";
import { ReviewCard } from "./sections/CustomerMarquee";

const HorizontalTestimonials = () => {
  useEffect(() => {
    const keenSlider = new KeenSlider(
      "#keen-slider",
      {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 1.5,
              spacing: 32,
            },
          },
        },
      },
      []
    );

    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");
    const keenSliderPreviousDesktop = document.getElementById(
      "keen-slider-previous-desktop"
    );
    const keenSliderNextDesktop = document.getElementById(
      "keen-slider-next-desktop"
    );

    keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
    keenSliderNext.addEventListener("click", () => keenSlider.next());
    keenSliderPreviousDesktop.addEventListener("click", () =>
      keenSlider.prev()
    );
    keenSliderNextDesktop.addEventListener("click", () => keenSlider.next());

    // Cleanup function to remove event listeners
    return () => {
      keenSliderPrevious.removeEventListener("click", () => keenSlider.prev());
      keenSliderNext.removeEventListener("click", () => keenSlider.next());
      keenSliderPreviousDesktop.removeEventListener("click", () =>
        keenSlider.prev()
      );
      keenSliderNextDesktop.removeEventListener("click", () =>
        keenSlider.next()
      );
    };
  }, []);

  return (
    <section className="bg-gray-50 my-20">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What our customers say
            </h2>
            <p className="mt-4 text-gray-700">
              Discover the experiences and stories from our satisfied customers.
              Their feedback fuels our passion and commitment to delivering
              exceptional service every day.
            </p>
            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous-desktop"
                className="rounded-full border border-background p-3 text-background transition hover:bg-background hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                aria-label="Next slide"
                id="keen-slider-next-desktop"
                className="rounded-full border border-background p-3 text-background transition hover:bg-background hover:text-white"
              >
                <svg
                  className="size-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div id="keen-slider" className="keen-slider">
              {/* Repeat this block for multiple slides */}
              {reviews.map((review, idx) => (
                <ReviewCard
                  {...review}
                  key={idx}
                  className="keen-slider__slide"
                />
              ))}
              {/* Add more slides here */}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden mt-8 flex justify-center gap-4">
        <button
          aria-label="Previous slide"
          id="keen-slider-previous"
          className="rounded-full border border-background p-3 text-background transition hover:bg-background hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 rtl:rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          aria-label="Next slide"
          id="keen-slider-next"
          className="rounded-full border border-background p-3 text-background transition hover:bg-background hover:text-white"
        >
          <svg
            className="size-5 rtl:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HorizontalTestimonials;
