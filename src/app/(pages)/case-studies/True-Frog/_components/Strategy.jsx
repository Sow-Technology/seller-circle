import Image from "next/image";
import {
  AnimatedElement,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "@/components/AnimatedElement";

export const Strategy = () => (
  <section className="my-10 px-2">
    <AnimatedElement>
      <div className="relative w-max mx-auto mb-20">
        <h2 className="lg:text-5xl text-3xl font-extrabold mx-auto">
          Strategy
        </h2>
        <div className="h-1.5 rounded-xl mt-2 w-full bg-[#f48825]" />
      </div>
    </AnimatedElement>
    <AnimatedElement variant={fadeInUp}>
      <h3 className="lg:text-6xl text-4xl font-extrabold text-[#039BE4] text-center text-balance">
        1. Retargeting Lapsed Shoppers with Festive Incentives{" "}
      </h3>
    </AnimatedElement>
    <AnimatedElement variant={fadeInLeft} delay={0.2}>
      <h4 className="lg:text-4xl text-2xl text-[#f48825] mt-10 font-extrabold ">
        Audience Segments
      </h4>
    </AnimatedElement>
    <AnimatedElement variant={fadeInLeft} delay={0.2}>
      <div className="flex gap-4 my-10">
        <div className="h-8 w-8 aspect-square bg-gradient-to-br from-violet-700 to-purple-700 via-pink-600 rounded-full inline-flex items-center justify-center">
          <div className="h-5 w-5 bg-white rounded-full" />
        </div>
        <div>
          {" "}
          <h5 className="lg:text-4xl text-2xl font-extrabold text-slate-700">
            Cart Abandoners (Last 90 Days):
          </h5>
          <p className="text-xl lg:text-3xl font-bold text-slate-600">
            This segment included shoppers who had added TrueFrog products to
            their cart but didn’t check out. They had shown clear interest,
            making them more likely to{" "}
            <span className="text-[#039BE4] font-extrabold">
              complete a purchase
            </span>{" "}
            with the right nudge.
          </p>
        </div>
      </div>
    </AnimatedElement>
    <AnimatedElement variant={fadeInLeft} delay={0.2}>
      <div className="flex gap-4 my-10">
        <div className="h-8 w-8 aspect-square bg-gradient-to-br from-violet-700 to-purple-700 via-pink-600 rounded-full inline-flex items-center justify-center">
          <div className="h-5 w-5 bg-white rounded-full" />
        </div>
        <div>
          {" "}
          <h5 className="lg:text-4xl text-2xl font-extrabold text-slate-700">
            Past Customers (Last 365 Days but Not in Last 90 Days)
          </h5>
          <p className="text-xl lg:text-3xl font-bold text-slate-600">
            These were previous buyers who hadn't returned recently. Reaching
            out to them with{" "}
            <span className="text-[#039BE4] font-extrabold">
              special Diwali deals
            </span>{" "}
            was a great way to bring them back to TrueFrog.
          </p>
        </div>
      </div>
    </AnimatedElement>
    <AnimatedElement variant={fadeInLeft} delay={0.2}>
      <h4 className="lg:text-4xl text-2xl text-[#f48825] mt-10 font-extrabold ">
        Targeting and Incentives
      </h4>
    </AnimatedElement>
    <AnimatedElement variant={fadeInLeft} delay={0.2}>
      <div className="flex gap-4 my-10">
        <div className="h-8 w-8 aspect-square bg-gradient-to-br from-violet-700 to-purple-700 via-pink-600 rounded-full inline-flex items-center justify-center">
          <div className="h-5 w-5 bg-white rounded-full" />
        </div>
        <div>
          {" "}
          <h5 className="lg:text-4xl text-2xl font-extrabold text-slate-700">
            Cart Completion Offers:
          </h5>
          <p className="text-xl lg:text-3xl font-bold text-slate-600">
            We targeted cart abandoners with
            <span className="text-[#039BE4] font-extrabold">
              limited-time discounts
            </span>{" "}
            and{" "}
            <span className="text-[#039BE4] font-extrabold">bundle deals</span>{" "}
            , using messages likes &quot;Your Diwali Deal Awaits - Complete Your
            Purchase Today!&quot; to rekindle their interest.
          </p>
        </div>
      </div>
    </AnimatedElement>
    <AnimatedElement variant={fadeInLeft} delay={0.2}>
      <div className="flex gap-4 my-10">
        <div className="h-8 w-8 aspect-square bg-gradient-to-br from-violet-700 to-purple-700 via-pink-600 rounded-full inline-flex items-center justify-center">
          <div className="h-5 w-5 bg-white rounded-full" />
        </div>
        <div>
          {" "}
          <h5 className="lg:text-4xl text-2xl font-extrabold text-slate-700">
            Loyalty Discounts for Past Buyers:
          </h5>
          <p className="text-xl lg:text-3xl font-bold text-slate-600">
            Ads for previous customers featured messages like &quot;Celebrate
            Diwali with TrueFrog! Special Savings Just for You&quot;,{" "}
            <span className="text-[#039BE4] font-extrabold">
              emphasizing festive savings
            </span>{" "}
            as a thank-you to loyal customers.
          </p>
        </div>
      </div>
    </AnimatedElement>
    <AnimatedElement variant={fadeInLeft} delay={0.2}>
      <h4 className="lg:text-4xl text-2xl text-[#f48825] mt-10 font-extrabold ">
        Channel Strategy
      </h4>
    </AnimatedElement>
    <AnimatedElement variant={fadeInLeft} delay={0.2}>
      <div className="flex gap-4 my-10">
        <div className="h-8 w-8 aspect-square bg-gradient-to-br from-violet-700 to-purple-700 via-pink-600 rounded-full inline-flex items-center justify-center">
          <div className="h-5 w-5 bg-white rounded-full" />
        </div>
        <div>
          {" "}
          <p className="text-xl lg:text-3xl font-bold text-slate-600">
            Ads were served on Amazon-owned platforms as well as third-party
            sites, ensuring that TrueFrog stayed{" "}
            <span className="text-[#039BE4] font-extrabold"> top-of-mind</span>{" "}
          </p>
        </div>
      </div>
    </AnimatedElement>
    <AnimatedElement variant={fadeInUp}>
      <h3 className="lg:text-6xl text-4xl font-extrabold text-[#039BE4] text-center text-balance">
        2. Keyword-Based Campaigns to Capture High-Intent Shoppers
      </h3>
    </AnimatedElement>
    <AnimatedElement variant={fadeInLeft} delay={0.2}>
      <h4 className="lg:text-4xl text-2xl text-[#f48825] mt-10 font-extrabold ">
        Audience Segment
      </h4>
    </AnimatedElement>
    <AnimatedElement variant={fadeInLeft} delay={0.2}>
      <div className="flex gap-4 my-10">
        <div className="h-8 w-8 aspect-square bg-gradient-to-br from-violet-700 to-purple-700 via-pink-600 rounded-full inline-flex items-center justify-center">
          <div className="h-5 w-5 bg-white rounded-full" />
        </div>
        <div>
          {" "}
          <p className="text-xl lg:text-3xl font-bold text-slate-600">
            This approach focused on users who had interacted with{" "}
            <span className="text-[#039BE4] font-extrabold">
              {" "}
              specific keywords{" "}
            </span>{" "}
            related to curly hair care but hadn&#39;t made a purchase yet. We
            targeted keywords such as &quot;curly hair products&quot;,
            &quot;curl care&quot;, &quot;leave-in conditioner&quot;, and
            &quot;curl shampoo&quot; that resonated with TrueFrog&#39;
            offerings.
          </p>
        </div>
      </div>
    </AnimatedElement>
    <AnimatedElement variant={fadeInLeft} delay={0.2}>
      <h4 className="lg:text-4xl text-2xl text-[#f48825] mt-10 font-extrabold ">
        Targeting Strategy
      </h4>
    </AnimatedElement>
    <AnimatedElement variant={fadeInLeft} delay={0.2}>
      <div className="flex gap-4 my-10">
        <div className="h-8 w-8 aspect-square bg-gradient-to-br from-violet-700 to-purple-700 via-pink-600 rounded-full inline-flex items-center justify-center">
          <div className="h-5 w-5 bg-white rounded-full" />
        </div>
        <div>
          {" "}
          <p className="text-xl lg:text-3xl font-bold text-slate-600">
            Through Amazon DSP, we{" "}
            <span className="text-[#039BE4] font-extrabold"> retargeted </span>{" "}
            these shoppers with Diwali-themed creatives that echoed their search
            intent. Ad copies included messages like:
          </p>
          <ul className="text-lg mt-5 lg:text-2xl font-semibold text-slate-500">
            <li> - &quot;Get your curls ready this festive season&quot;</li>
            <li>
              - &quot;Diwali curls with TrueFrog - Perfect for the
              celebration&quot;
            </li>
            <li> - &quot;Nourish your curls this Diwali with TrueFrog&quot;</li>
            <li>
              - &quot;Celebrate Diwali with flawless curls - Try TrueFrog
              today!&quot;
            </li>
          </ul>
        </div>
      </div>
    </AnimatedElement>
    <AnimatedElement variant={fadeInLeft} delay={0.2}>
      <h4 className="lg:text-4xl text-2xl text-[#f48825] mt-10 font-extrabold ">
        Festive Offers
      </h4>
    </AnimatedElement>
    <AnimatedElement variant={fadeInLeft} delay={0.2}>
      <div className="flex gap-4 my-10">
        <div className="h-8 w-8 aspect-square bg-gradient-to-br from-violet-700 to-purple-700 via-pink-600 rounded-full inline-flex items-center justify-center">
          <div className="h-5 w-5 bg-white rounded-full" />
        </div>
        <div>
          {" "}
          <p className="text-xl lg:text-3xl font-bold text-slate-600">
            The ads highlighted{" "}
            <span className="text-[#039BE4] font-extrabold">
              {" "}
              limited-time Diwali promotions{" "}
            </span>{" "}
            , motivating interested shoppers to take advantageof the deals
            before the festive period ended.
          </p>
        </div>
      </div>
    </AnimatedElement>
  </section>
);
