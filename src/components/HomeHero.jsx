// src/components/Hero.jsx
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  UserGroupIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline"; // [web:41]

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

  // Background carousel (repeat same image for now)
  const slides = ["/real.webp", "/real2.webp"];
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setActive((i) => (i + 1) % slides.length);

  // Optional auto-switch (comment out if you want manual only)
  useEffect(() => {
    const t = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section
      id="home"
      className="relative w-full h-screen bg-cover bg-right font-display sm:mb-28"
    >
      {/* Background crossfade layers */}
      <div className="absolute inset-0">
        {slides.map((src, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 bg-cover bg-right transition-opacity duration-700 ${
              idx === active ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="group hidden lg:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full
             bg-white/90 hover:bg-red-600 shadow-lg items-center justify-center
             transition-colors duration-200"
      >
        <ChevronLeftIcon
          className="h-6 w-6 text-gray-700 group-hover:text-white transition-colors duration-200"
          aria-hidden="true"
        />
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="group hidden lg:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full
             bg-white/90 hover:bg-red-600 shadow-lg items-center justify-center
             transition-colors duration-200"
      >
        <ChevronRightIcon
          className="h-6 w-6 text-gray-700 group-hover:text-white transition-colors duration-200"
          aria-hidden="true"
        />
      </button>

      {/* Mobile overlay for readability (disabled on sm+) */}
      <div className="absolute inset-0 sm:hidden bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

      {/* Optional: a subtle overlay on larger screens (very light) */}
      <div className="hidden sm:block absolute inset-0 bg-white/10" />

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
              Explore premium residential and commercial options with a simple,
              professional experience built around your needs.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
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
                <div className="text-lg sm:text-2xl font-medium text-white sm:text-black">
                  12k+
                </div>
                <div className="mt-1 text-[11px] sm:text-xs text-white/80 sm:text-black/70">
                  Successful closures
                </div>
              </div>
              <div className="rounded-xl bg-black/25 sm:bg-transparent p-3 sm:p-0 border border-white/15 sm:border-transparent">
                <div className="text-lg sm:text-2xl font-medium text-white sm:text-black">
                  450+
                </div>
                <div className="mt-1 text-[11px] sm:text-xs text-white/80 sm:text-black/70">
                  Trusted partners
                </div>
              </div>
              <div className="rounded-xl bg-black/25 sm:bg-transparent p-3 sm:p-0 border border-white/15 sm:border-transparent">
                <div className="text-lg sm:text-2xl font-medium text-white sm:text-black">
                  30+
                </div>
                <div className="mt-1 text-[11px] sm:text-xs text-white/80 sm:text-black/70">
                  Cities covered
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="hidden md:block">
        {/* 3 bottom cards (half inside hero, half below) */}
        <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 z-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                {/* Card 1 */}
                <div className="bg-white rounded-sm shadow-xl border border-gray-100 px-5 py-7 min-h-[165px] flex items-center">
                  <div className="flex items-center justify-center gap-4 w-full">
                    <UserGroupIcon
                      className="h-14 w-14 text-red-400 opacity-90 shrink-0"
                      aria-hidden="true"
                    />
                    <div className="text-left">
                      <div className="text-base sm:text-lg font-medium text-gray-800 uppercase tracking-wide">
                        Customer Centric
                      </div>
                      <div className="mt-2 text-sm sm:text-base font-medium text-gray-500 leading-relaxed">
                        Your Goals, Our priority
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-sm shadow-xl border border-gray-100 px-5 py-7 min-h-[165px] flex items-center">
                  <div className="flex items-center justify-center gap-4 w-full">
                    <ArrowTrendingUpIcon
                      className="h-14 w-14 text-red-400 opacity-90 shrink-0"
                      aria-hidden="true"
                    />
                    <div className="text-left">
                      <div className="text-base sm:text-lg font-medium text-gray-800 uppercase tracking-wide">
                        Growth Potential
                      </div>
                      <div className="mt-2 text-sm sm:text-base font-medium text-gray-500 leading-relaxed">
                        High growth, Yield and designed to maximise future value
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-sm shadow-xl border border-gray-100 px-5 py-7 min-h-[165px] flex items-center">
                  <div className="flex items-center justify-center gap-4 w-full">
                    <ShieldCheckIcon
                      className="h-14 w-14 text-red-400 opacity-90 shrink-0"
                      aria-hidden="true"
                    />
                    <div className="text-left">
                      <div className="text-base sm:text-lg font-medium text-gray-800 uppercase tracking-wide">
                        Rera registered
                      </div>
                      <div className="mt-2 text-sm sm:text-base font-medium text-gray-500 leading-relaxed">
                        Verified compliance and documentation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
