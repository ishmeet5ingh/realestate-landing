// src/components/Hero.jsx
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  UserGroupIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import SearchBar from "./SearchBar";

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

  // Background carousel
  const slides = ["/real.webp", "/real2.webp"];
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setActive((i) => (i + 1) % slides.length);

  // Auto-switch slides
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

      {/* Left Arrow */}
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

      {/* Right Arrow */}
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

      {/* Mobile overlay for readability */}
      <div className="absolute inset-0 sm:hidden bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

      {/* Light overlay on larger screens */}
      <div className="hidden sm:block absolute inset-0 bg-white/10" />

      {/* Main Content - vertically centered on mobile, top-aligned on sm+ */}
      <div className="absolute top-1/2 -translate-y-1/2 sm:top-[25%] sm:translate-y-0 left-0 right-0">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <motion.div
            className="max-w-3xl text-left relative z-10"
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

            {/* Search Bar */}
            <motion.div variants={item} className="mt-6 sm:mt-8">
              <SearchBar />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom 3 cards (half inside hero, half below) */}
      <div className="hidden md:block">
        <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 z-20">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
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
