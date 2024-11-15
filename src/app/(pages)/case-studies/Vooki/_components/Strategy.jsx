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
      <div className="relative w-max mx-auto mb-10">
        <h2 className="lg:text-5xl text-3xl font-extrabold mx-auto">
          Strategy
        </h2>
        <div className="h-1.5 rounded-xl mt-2 w-full bg-[#f48825]" />
      </div>
    </AnimatedElement>
    <h3 className="text-slate-800 lg:text-4xl text-2xl text-center   font-extrabold mb-10">
      To achieve these objectives, SellerCircle developed a multi-layered
      strategy by integrating insights and ad placements across AMC, DSP, and
      AMS channels:
    </h3>
    <AnimatedElement variant={fadeInUp}>
      <h4 className="lg:text-6xl text-4xl font-extrabold text-[#039BE4] text-center text-balance">
        Amazon Marketing Cloud (AMC)
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
            Path to Purchase Mapping:
          </h5>
          <p className="text-xl lg:text-3xl font-bold text-slate-600">
            We analyzed customer journeys to identify the primary
            <span className="text-[#f48825] font-extrabold">
              {" "}
              touchpoints{" "}
            </span>{" "}
            &<span className="text-[#f48825] font-extrabold"> stages </span> in
            the buying process. This allowed us to strategically place ads at
            each phase.{" "}
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
            Audience Segmentation Based on Touchpoints:
          </h5>
          <p className="text-xl lg:text-3xl font-bold text-slate-600">
            Leveraged the{" "}
            <span className="text-[#f48825] font-extrabold">
              path-to-purchase
            </span>{" "}
            insights to create custom audiences focused on first and second
            touchpoints, allowing us to engage shoppers with{" "}
            <span className="text-[#f48825] font-extrabold">
              targeted DSP ads
            </span>{" "}
            featuring festive offers.
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
            Keyword Optimization:
          </h5>
          <p className="text-xl lg:text-3xl font-bold text-slate-600">
            Used AMC&#39;s data to identify{" "}
            <span className="text-[#f48825] font-extrabold">
              high-performing keywords
            </span>
            , ensuring focused targeting for Sponsored Products and Sponsored
            Brand ads.
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
            Abandoned Cart Retargeting:
          </h5>
          <p className="text-xl lg:text-3xl font-bold text-slate-600">
            Targeted users who had previously abandoned Vooki products in their
            carts, encouraging re-engagement with{" "}
            <span className="text-[#f48825] font-extrabold">
              special Diwali discounts.
            </span>
          </p>
        </div>
      </div>
    </AnimatedElement>
    <AnimatedElement variant={fadeInUp}>
      <h4 className="lg:text-6xl text-4xl font-extrabold text-[#039BE4] text-center text-balance">
        DSP Campaigns
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
            Pre-Sales Lead-Up:
          </h5>
          <p className="text-xl lg:text-3xl font-bold text-slate-600">
            Launched
            <span className="text-[#f48825] font-extrabold"> DSP ads </span> 10
            days before the event, reaching in-market & category shoppers with a
            foxus on Vooki&#39;s{" "}
            <span className="text-[#f48825] font-extrabold">
              {" "}
              key cleaning products.{" "}
            </span>{" "}
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
            Competitor and Lifestyle Targeting:
          </h5>
          <p className="text-xl lg:text-3xl font-bold text-slate-600">
            Targeted{" "}
            <span className="text-[#f48825] font-extrabold">
              competitor audiences
            </span>{" "}
            and users with lifestyle preferences aligned with eco-frienfly,
            effective cleaning products.
          </p>
        </div>
      </div>
    </AnimatedElement>
    <AnimatedElement variant={fadeInUp}>
      <h4 className="lg:text-6xl text-4xl font-extrabold text-[#039BE4] text-center text-balance">
        AMS Strategy
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
            Top-of-Search Ads:
          </h5>
          <p className="text-xl lg:text-3xl font-bold text-slate-600">
            Deployed Sponsored Product (SP) and Sponsored Brand (SB) ads at the
            top of search results to secure
            <span className="text-[#f48825] font-extrabold">
              {" "}
              maximum visibility{" "}
            </span>{" "}
            and click share.
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
            Sponsored Brand Video (SBV) Ads:
          </h5>
          <p className="text-xl lg:text-3xl font-bold text-slate-600">
            Utilized SBV ads targeting high-performing keywords to demonstrate
            Vooki&#39;s product efficiency through{" "}
            <span className="text-[#f48825] font-extrabold">
              engaging video content
            </span>
            . This helped convey the effectiveness of Vooki&#39;s product &
            incresed interaction with potential customers.
          </p>
        </div>
      </div>
    </AnimatedElement>
  </section>
);
