// src/components/BottomCardsMobile.jsx
import React from "react";
import { motion } from "motion/react";
import {
  UserGroupIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function BottomCardsMobile() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="block md:hidden px-4 pb-10">
      <div className="mx-auto max-w-md">
        <div className="grid grid-cols-1 gap-3">
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-sm shadow-xl border border-gray-100 px-5 py-6 min-h-[135px] flex items-center"
          >
            <div className="flex items-center justify-start gap-4 w-full">
              <UserGroupIcon
                className="h-12 w-12 text-red-400 opacity-90 shrink-0"
                aria-hidden="true"
              />
              <div className="text-left">
                <div className="text-base font-medium text-gray-800 uppercase tracking-wide">
                  Customer Centric
                </div>
                <div className="mt-2 text-sm font-medium text-gray-500 leading-relaxed">
                  Your Goals, Our priority
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-sm shadow-xl border border-gray-100 px-5 py-6 min-h-[135px] flex items-center"
          >
            <div className="flex items-center justify-start gap-4 w-full">
              <ArrowTrendingUpIcon
                className="h-12 w-12 text-red-400 opacity-90 shrink-0"
                aria-hidden="true"
              />
              <div className="text-left">
                <div className="text-base font-medium text-gray-800 uppercase tracking-wide">
                  Growth Potential
                </div>
                <div className="mt-2 text-sm font-medium text-gray-500 leading-relaxed">
                  High growth, Yield and designed to maximise future value
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.16 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-sm shadow-xl border border-gray-100 px-5 py-6 min-h-[135px] flex items-center"
          >
            <div className="flex items-center justify-start gap-4 w-full">
              <ShieldCheckIcon
                className="h-12 w-12 text-red-400 opacity-90 shrink-0"
                aria-hidden="true"
              />
              <div className="text-left">
                <div className="text-base font-medium text-gray-800 uppercase tracking-wide">
                  Rera registered
                </div>
                <div className="mt-2 text-sm font-medium text-gray-500 leading-relaxed">
                  Verified compliance and documentation
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
