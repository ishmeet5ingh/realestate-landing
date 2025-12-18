import React from "react";
import { motion } from "motion/react";

export default function StatsExperience() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 overflow-hidden font-display">
      {/* subtle background pattern/image */}
      <div className="absolute inset-0 bg-[url('/pattern.webp')] bg-cover bg-center opacity-[0.08]" />
      {/* If you don't have pattern.webp, remove the line above or replace with your own pattern. */}

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10 lg:gap-6">
          {/* Left stats (from left) */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-10"
          >
            <div className="text-center lg:text-left">
              <div className="text-4xl sm:text-5xl font-semibold text-teal-500">
                1000+
              </div>
              <div className="mt-2 text-sm sm:text-base font-medium text-gray-600 tracking-wide">
                Clients who turned their property goals into reality with us
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="text-4xl sm:text-5xl font-semibold text-teal-500">
                1 Million
              </div>
              <div className="mt-2 text-sm sm:text-base font-medium text-gray-600 tracking-wide">
                Sqft of area sold
              </div>
            </div>
          </motion.div>

          {/* Center (stays) */}
          <div className="flex flex-col items-center justify-center text-center">
            {/* “10” with image fill (background-clip: text) */}
            <div
              className="text-[120px] sm:text-[160px] lg:text-[200px] font-extrabold leading-none"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=60)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              10
            </div>

            <div className="mt-2 text-base sm:text-lg font-semibold tracking-[0.25em] text-gray-800">
              YEARS OF EXPERIENCE
            </div>
          </div>

          {/* Right stats (from right) */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-10"
          >
            <div className="text-center lg:text-right">
              <div className="text-4xl sm:text-5xl font-semibold text-teal-500">
                30+
              </div>
              <div className="mt-2 text-sm sm:text-base font-medium text-gray-600 tracking-wide">
                Industry experts
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="text-4xl sm:text-5xl font-semibold text-teal-500">
                20+
              </div>
              <div className="mt-2 text-sm sm:text-base font-medium text-gray-600 tracking-wide">
                Renowned builder collaborations
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
