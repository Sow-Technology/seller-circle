import { useEffect } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const videoSources = [
  { src: "/videos/Krishna.mp4", title: "Krishna" },
  { src: "/videos/Amrutaam.mp4", title: "Amrutaam" },
  { src: "/videos/Born_Good_1.mp4", title: "Born Good" },
  { src: "/videos/GoodNess-Vanilla.mp4", title: "GoodNess Vanilla" },
  { src: "/videos/TechnoSport_TM .mp4", title: "TechnoSport" },
];

const HorizontalVideos = () => {
  useEffect(() => {
    const slider = new KeenSlider(
      "#keen-slider-videos",
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
              perView: 1.75,
              spacing: 16,
            },
          },
        },
      },
      []
    );

    const previousButtons = [
      document.getElementById("keen-slider-videos-previous"),
      document.getElementById("keen-slider-videos-previous-desktop"),
    ].filter(Boolean);

    const nextButtons = [
      document.getElementById("keen-slider-videos-next"),
      document.getElementById("keen-slider-videos-next-desktop"),
    ].filter(Boolean);

    const handlePrev = () => slider.prev();
    const handleNext = () => slider.next();

    previousButtons.forEach((button) =>
      button.addEventListener("click", handlePrev)
    );
    nextButtons.forEach((button) => button.addEventListener("click", handleNext));

    return () => {
      previousButtons.forEach((button) =>
        button.removeEventListener("click", handlePrev)
      );
      nextButtons.forEach((button) =>
        button.removeEventListener("click", handleNext)
      );
      slider.destroy();
    };
  }, []);

  return (
    <section className="bg-gray-50 my-20">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Brand video highlights
            </h2>
            <p className="mt-4 text-gray-700">
              Explore a handful of recent campaign cuts and product reels. Press
              play on any card to watch.
            </p>
            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                id="keen-slider-videos-previous-desktop"
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
                id="keen-slider-videos-next-desktop"
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
            <div id="keen-slider-videos" className="keen-slider">
              {videoSources.map((video, idx) => (
                <div
                  key={`${video.src}-${idx}`}
                  className="keen-slider__slide flex items-center justify-center"
                >
                  <div className="w-96 h-96 overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-300">
                    <video
                      controls
                      preload="metadata"
                      className="h-full w-full object-contain"
                      title={video.title}
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden mt-8 flex justify-center gap-4">
        <button
          aria-label="Previous slide"
          id="keen-slider-videos-previous"
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
          id="keen-slider-videos-next"
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

export default HorizontalVideos;
