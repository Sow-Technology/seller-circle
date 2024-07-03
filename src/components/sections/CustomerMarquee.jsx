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

const reviews = [
  {
    body: "Drawing on our comprehensive understanding of the Amazon landscape, we craft campaigns with precision, ensuring impactful strategies that drive success.",
    img: "/images/cm1.webp",
  },
  {
    body: "We extend sincere gratitude to SellerCircle for their invaluable partnership in amplifying our visionary journey. SellerCircle's expertise in e-commerce and deep understanding of the Amazon marketplace have played a pivotal role in our success. Their customized advertising strategy effectively addressed every stage of the buyer journey, resulting in increased visibility, engagement, and sales",
    img: "/images/cm2.webp",
  },
  {
    body: "With a strategic approach and in collaboration With SellerCircle Agency, We experienced explosive growth by harnessing the full potential of Amazon Ads' comprehensive full-funnel strategy. By effectively leveraging Amazon ads' SB (Sponsored Brands), SP (Sponsored Products), and SD (Sponsored Display), we unlocked the true power of Amazon Ads, propelling our investments to unparalleled heights. This cutting-edge feature empowered us to confidently expand our reach, accelerate growth, and establish ourselves as the undeniable category leader for several of our exceptional products.",
    img: "/images/cm3.webp",
  },
  {
    body: "Seller Circle is beyond an agency - they have been a partner in Pink Moon's journey providing end to end support right from cataloging, strategy, content and ads. Their deep understanding of Amazon has helped us scale significantly in the last 2 years.",
    img: "/images/cm4.webp",
  },
  {
    body: "We're pretty impressed with the work of Seller Circle. We onboarded them to help scale up Sadhev on Amazon. We were facing issues with ROAS while scaling up and the catalogue had to be fixed as well. The team at Seller Circle was hands-on and got the campaigns fixed within a couple Of weeks. We saw over 2X jump in ROAS since we on-boarded them. Our cataloguing issues were fixed within a month. The team at Seller Circle is available When needed and have a tried and tested method Of approach to scaling up brands. We're happy to have them as our growth partner.",
    img: "/images/cm5.webp",
  },
  {
    body: "The team at seller circle is very efficient and have a great understanding of the amazon platform which is vey crucial to achieving scale and success here.",
    img: "/images/cm6.webp",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative min-h-40 min-w-[150px] lg:min-w-[280px] max-w-[600px] cursor-pointer overflow-hidden rounded-xl border p-4 drop-shadow-sm",
        // light styles
        "border-gray-950/[.1] bg-[#F7F7F7] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        <Image
          className="rounded-full"
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
        <Marquee pauseOnHover={isPaused} vertical className="[--duration:20s]">
          {firstRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
      </div>
      <div ref={secondMarqueeRef} className="marquee-wrapper">
        <Marquee pauseOnHover={isPaused} vertical className="[--duration:20s]">
          {secondRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
      </div>
      <div className="p-2 border rounded-xl border-gray-400/50 shadow-md">
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
