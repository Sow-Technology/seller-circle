"use client";

import Link from "next/link";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const faqs = [
  {
    id: 1,
    question: "What is A+ Content and why is it important?",
    answer:
      "A+ Content enhances your product listings with high-quality visuals and detailed descriptions, helping to improve conversion rates and provide a better shopping experience.",
  },
  {
    id: 2,
    question: "How does Brand Story Creation benefit my business?",
    answer:
      "Brand Story Creation builds a strong connection with your audience by communicating your brand’s values and mission, making your brand more memorable and engaging.",
  },
  {
    id: 3,
    question: "What does Brand Store Design include?",
    answer:
      "Brand Store Design involves creating a customized storefront on Amazon with engaging layouts, intuitive navigation, and consistent branding to enhance the shopping experience.",
  },
  {
    id: 4,
    question: "Why are Catalog and Product Display Designs important?",
    answer:
      "Effective Catalog and Product Display Designs improve product visibility, provide clear information, and create a seamless user experience, which can lead to higher engagement and sales.",
  },
  {
    id: 5,
    question: "What types of videos do you produce for brands and ads?",
    answer:
      "We produce high-quality brand and ad videos that are engaging and tailored to convey your brand’s message effectively, helping to boost engagement and drive conversions.",
  },
];

export default function FAQ() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 pt-24 sm:pt-32 lg:px-8 lg:pt-40 w-auto bg-white">
        <div className="mx-auto max-w-4xl divide-y divide-neutral-900/10 dark:divide-white/30">
          <div className="text-center">
            <h2 className="text-4xl font-bold leading-tight tracking-wide text-neutral-900 xl:text-5xl dark:text-neutral-50">
              FAQs
            </h2>
          </div>

          <dl className="mt-24 space-y-6 divide-y divide-neutral-900/10 dark:divide-white/30">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.id} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className="flex w-full max-w-[90vw] items-start justify-between text-left text-neutral-900 dark:text-neutral-200">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400">
                        {faq.answer}
                      </p>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function PlusIcon(props) {
  return (
    <svg viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}

function MinusIcon(props) {
  return (
    <svg viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
    </svg>
  );
}
