import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    body: "Drawing on our comprehensive understanding of the Amazon landscape, we craft campaigns with precision, ensuring impactful strategies that drive success.",
    img: "/images/cm1.png",
  },
  {
    body: "We extend sincere gratitude to SellerCircle for their invaluable partnership in amplifying our visionary journey. SellerCircle's expertise in e-commerce and deep understanding of the Amazon marketplace have played a pivotal role in our success. Their customized advertising strategy effectively addressed every stage of the buyer journey, resulting in increased visibility, engagement, and sales",
    img: "/images/cm2.png",
  },
  {
    body: "With a strategic approach and in collaboration With SellerCircle Agency, We experienced explosive growth by harnessing the full potential of Amazon Ads' comprehensive full-funnel strategy. By effectively leveraging Amazon ads' SB (Sponsored Brands), SP (Sponsored Products), and SD (Sponsored Display), we unlocked the true power of Amazon Ads, propelling our investments to unparalleled heights. This cutting-edge feature empowered us to confidently expand our reach, accelerate growth, and establish ourselves as the undeniable category leader for several of our exceptional products.",
    img: "/images/cm3.png",
  },
  {
    body: "Seller Circle is beyond an agency - they have been a partner in Pink Moon's journey providing end to end support right from cataloging, strategy, content and ads. Their deep understanding of Amazon has helped us scale significantly in the last 2 years.",
    img: "/images/cm4.png",
  },
  {
    body: "We're pretty impressed with the work of Seller Circle. We onboarded them to help scale up Sadhev on Amazon. We were facing issues with ROAS while scaling up and the catalogue had to be fixed as well. The team at Seller Circle was hands-on and got the campaigns fixed within a couple Of weeks. We saw over 2X jump in ROAS since we on-boarded them. Our cataloguing issues were fixed within a month. The team at Seller Circle is available When needed and have a tried and tested method Of approach to scaling up brands. We're happy to have them as our growth partner.",
    img: "/images/cm5.png",
  },
  {
    body: "The team at seller circle is very efficient and have a great understanding of the amazon platform which is vey crucial to achieving scale and success here.",
    img: "/images/cm6.png",
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
  return (
    <div className="relative flex h-[600px] flex-row items-center justify-center overflow-hidden rounded-lg   sm:px-20 ">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
};

export default CustomerMaqrquee;
