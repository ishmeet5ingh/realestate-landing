import React from "react";
import { motion } from "motion/react";

const items = [
  {
    title: "Expert Market Intelligence",
    desc: "Deep neighborhood insights and real-time pricing guidance to help you make confident decisions.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 sm:h-6 sm:w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 21s-7-4.35-7-11a7 7 0 0 1 14 0c0 6.65-7 11-7 11z" />
        <path d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
      </svg>
    ),
  },
  {
    title: "Verified Premium Projects",
    desc: "Every project is reviewed through quality checks to ensure authenticity and save your time.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 sm:h-6 sm:w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "End-to-End Transparency",
    desc: "Clear documentation, pricing guidance, and timelines from first call to final handover.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 sm:h-6 sm:w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M9 12h6" />
        <path d="M9 16h6" />
        <path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
  {
    title: "Dedicated Support Team",
    desc: "Personal advisors available throughout your journey to answer questions and resolve concerns promptly.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 sm:h-6 sm:w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Legal & Financial Assistance",
    desc: "Support with documentation, loan coordination, and legal verification for hassle-free transactions.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 sm:h-6 sm:w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Smart Project Matching",
    desc: "Personalized filters to match you with the right project based on location, budget, and timeline.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 sm:h-6 sm:w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v6" />
        <path d="M8 11h6" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const enter = {
    initial: { opacity: 0, y: 18 },
    inView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <section id="why-choose-us" className="bg-white py-10 sm:py-14 lg:py-16 font-display">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-4 lg:px-0">
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
          {/* Heading Section */}
          <motion.div
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6"
            initial={enter.initial}
            whileInView={enter.inView}
            viewport={enter.viewport}
            transition={enter.transition}
          >
            <div className="max-w-2xl">
              <p className="text-xl sm:text-3xl lg:text-4xl font-semibold tracking-wider uppercase text-red-600 mb-2 sm:mb-3">
                Why Choose Us
              </p>

              {/* Fixed: your original was text-sm; now it scales better */}
              <h2 className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-black leading-tight">
                Excellence in Every Transaction
              </h2>
            </div>

            <p className="max-w-xl text-sm sm:text-base text-gray-700 leading-relaxed lg:text-right">
              We combine industry expertise with cutting-edge technology to deliver an unmatched real estate
              experience.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            initial={enter.initial}
            whileInView={enter.inView}
            viewport={enter.viewport}
            transition={{ ...enter.transition, duration: 0.65 }}
          >
            {items.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border-2 border-gray-200 bg-white p-4 sm:p-6 hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-300"
              >
                <div className="flex flex-col gap-3 sm:gap-4">
                  {/* Icon */}
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-red-50 text-red-600 ring-2 ring-red-100 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-black mb-1.5 sm:mb-2 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-gray-200 group-hover:bg-red-600 transition-colors" />

                  {/* Learn More Link */}
                  <button className="text-xs sm:text-sm font-semibold text-red-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn more
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
