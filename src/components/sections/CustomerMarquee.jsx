import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  BiChevronDown,
  BiChevronUp,
  BiChevronsUp,
  BiPause,
  BiPlay,
} from "react-icons/bi";
import { reviews } from "@/lib/data";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative min-h-40 min-w-[150px] lg:min-w-[280px] max-w-[500px] cursor-pointer overflow-hidden rounded-xl border p-4 drop-shadow-sm",
        // light styles
        "border-gray-950/[.1] bg-[#F7F7F7] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        <Image
          className="rounded-full grayscale"
          width="114"
          height="85"
          alt=""
          src={img}
        />
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const CustomerMaqrquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isForward, setIsForward] = useState(false);
  const [isBackward, setIsBackward] = useState(false);
  const marqueeRef = useRef(null);
  const secondMarqueeRef = useRef(null);
  const moveMarquee = (ref, distance) => {
    if (ref.current) {
      ref.current.style.transform = `translateY(${distance}px)`;
    }
  };

  const handleMoveForward = () => {
    if (marqueeRef.current) {
      const currentTransform = marqueeRef.current.style.transform;
      const currentY = currentTransform
        ? parseInt(currentTransform.split("(")[1])
        : 0;
      moveMarquee(marqueeRef, currentY - 100);
    }

    if (secondMarqueeRef.current) {
      const currentTransform = secondMarqueeRef.current.style.transform;
      const currentY = currentTransform
        ? parseInt(currentTransform.split("(")[1])
        : 0;
      moveMarquee(secondMarqueeRef, currentY - 100);
    }
  };

  const handleMoveBackward = () => {
    if (marqueeRef.current) {
      const currentTransform = marqueeRef.current.style.transform;
      const currentY = currentTransform
        ? parseInt(currentTransform.split("(")[1])
        : 0;
      moveMarquee(marqueeRef, currentY + 100);
    }

    if (secondMarqueeRef.current) {
      const currentTransform = secondMarqueeRef.current.style.transform;
      const currentY = currentTransform
        ? parseInt(currentTransform.split("(")[1])
        : 0;
      moveMarquee(secondMarqueeRef, currentY + 100);
    }
  };

  return (
    <div className="relative flex h-[600px] flex-row items-center justify-center overflow-hidden rounded-lg   sm:px-20 ">
      <div ref={marqueeRef} className="marquee-wrapper">
        <Marquee
          pause={isPaused}
          pauseOnHover
          vertical
          reverse
          className="[--duration:20s]"
        >
          {firstRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
      </div>
      <div ref={secondMarqueeRef} className="marquee-wrapper">
        <Marquee
          pause={isPaused}
          vertical
          pauseOnHover
          className="[--duration:20s]"
        >
          {secondRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
      </div>
      <div className="p-2 border rounded-xl md:block hidden border-gray-400/50 shadow-md">
        <div className="text-2xl cursor-pointer" onClick={handleMoveForward}>
          <BiChevronUp />
        </div>

        <div
          className="text-2xl cursor-pointer"
          onClick={() => setIsPaused(!isPaused)}
        >
          {isPaused ? <BiPlay /> : <BiPause />}
        </div>
        <div className="text-2xl cursor-pointer" onClick={handleMoveBackward}>
          <BiChevronDown />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
};

export default CustomerMaqrquee;
