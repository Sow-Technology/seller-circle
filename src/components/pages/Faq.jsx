"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export default function FAQ({ faqs }) {
  return (
    <div className="w- lg:w-[1000px]">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between  lg:px-8  w-full bg-white">
        <div className="mx-auto w-full divide-y divide-neutral-900/10 dark:divide-white/30">
          <dl className="mt-12 space-y-6 divide-y  w-fulldivide-neutral-900/10 dark:divide-white/30">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.id} className="pt-6 w-full">
                {({ open }) => (
                  <>
                    <dt className="w-full">
                      <DisclosureButton className="flex w-full max-w-[90vw] items-center justify-between text-left text-neutral-900 dark:text-neutral-200">
                        <span className="text-2xl  font-bold leading-7">
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
                      {faq.answer && (
                        <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400">
                          {faq.answer}
                        </p>
                      )}
                      {faq.ul && !faq.bul && (
                        <ul className="text-base leading-7 text-neutral-600 dark:text-neutral-400 list-disc">
                          {faq.ul.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {faq.bul && (
                        <ul className="text-base leading-7 text-neutral-600 dark:text-neutral-400 list-disc">
                          {faq.bul.map((item, idx) => (
                            <li key={idx}>
                              <b>{item.b}</b> {item.desc}
                            </li>
                          ))}
                        </ul>
                      )}
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
