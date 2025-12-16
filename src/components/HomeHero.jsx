// src/components/Hero.jsx
import React from "react";
import { motion } from "motion/react";

export default function Hero() {
  const container = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen bg-cover bg-right font-display overflow-hidden"
      style={{ backgroundImage: "url(/real.webp)" }}
    >
      {/* Mobile overlay for readability (disabled on sm+) */}
      <div className="absolute inset-0 sm:hidden bg-gradient-to-t from-black/90 via-black/60 to-black/30" /> {/* [web:155][web:133] */}

      {/* Optional: a subtle overlay on larger screens (very light) */}
      <div className="hidden sm:block absolute inset-0 bg-white/10" /> {/* [web:133] */}

      <div className="absolute top-[18%] sm:top-[20%] left-0 right-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <motion.div
            className="max-w-xl text-left relative z-10"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={item}
              className="text-xs sm:text-sm font-medium tracking-wide text-red-500 sm:text-red-600"
            >
              Trusted Real Estate Partner
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-2 sm:mt-3 text-2xl sm:text-5xl lg:text-6xl font-medium tracking-tight
                         text-white sm:text-black leading-tight"
            >
              Find the perfect <br className="hidden sm:block" />
              space for life & work
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 sm:mt-4 text-xs sm:text-base leading-relaxed
                         text-white/85 sm:text-black/70"
            >
              Explore premium residential and commercial options with a simple, professional experience built around
              your needs.
            </motion.p>

            <motion.div variants={item} className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href="#residential"
                className="inline-flex items-center rounded-md bg-red-600 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium text-white transition hover:bg-red-700"
              >
                View Residential
              </a>

              <a
                href="#commercial"
                className="inline-flex items-center rounded-md border border-white/25 sm:border-red-200
                           bg-black/20 sm:bg-white/70 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium
                           text-white sm:text-red-700 transition hover:bg-black/30 sm:hover:bg-white"
              >
                Explore Commercial
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-5 sm:mt-6 flex flex-wrap gap-x-5 sm:gap-x-6 gap-y-2 text-xs sm:text-sm
                         text-white/85 sm:text-black/70"
            >
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-600" />
                Verified projects
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-600" />
                Prime locations
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-600" />
                Transparent process
              </span>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-6 max-w-md"
            >
              <div className="rounded-xl bg-black/25 sm:bg-transparent p-3 sm:p-0 border border-white/15 sm:border-transparent">
                <div className="text-lg sm:text-2xl font-medium text-white sm:text-black">12k+</div>
                <div className="mt-1 text-[11px] sm:text-xs text-white/80 sm:text-black/70">
                  Successful closures
                </div>
              </div>
              <div className="rounded-xl bg-black/25 sm:bg-transparent p-3 sm:p-0 border border-white/15 sm:border-transparent">
                <div className="text-lg sm:text-2xl font-medium text-white sm:text-black">450+</div>
                <div className="mt-1 text-[11px] sm:text-xs text-white/80 sm:text-black/70">
                  Trusted partners
                </div>
              </div>
              <div className="rounded-xl bg-black/25 sm:bg-transparent p-3 sm:p-0 border border-white/15 sm:border-transparent">
                <div className="text-lg sm:text-2xl font-medium text-white sm:text-black">30+</div>
                <div className="mt-1 text-[11px] sm:text-xs text-white/80 sm:text-black/70">
                  Cities covered
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
