// src/components/BottomCardsMobile.jsx
import React from "react";
import {
  UserGroupIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline"; // [web:41]

export default function BottomCardsMobile() {
  return (
    <div className="block md:hidden px-4 pb-10">
      <div className="mx-auto max-w-md">
        <div className="grid grid-cols-1 gap-3">
          {/* Card 1 */}
          <div className="bg-white rounded-sm shadow-xl border border-gray-100 px-5 py-6 min-h-[135px] flex items-center">
            <div className="flex items-center justify-start gap-4 w-full">
              <UserGroupIcon className="h-12 w-12 text-red-400 opacity-90 shrink-0" aria-hidden="true" />
              <div className="text-left">
                <div className="text-base font-medium text-gray-800 uppercase tracking-wide">
                  Customer Centric
                </div>
                <div className="mt-2 text-sm font-medium text-gray-500 leading-relaxed">
                  Your Goals, Our priority
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-sm shadow-xl border border-gray-100 px-5 py-6 min-h-[135px] flex items-center">
            <div className="flex items-center justify-start gap-4 w-full">
              <ArrowTrendingUpIcon className="h-12 w-12 text-red-400 opacity-90 shrink-0" aria-hidden="true" />
              <div className="text-left">
                <div className="text-base font-medium text-gray-800 uppercase tracking-wide">
                  Growth Potential
                </div>
                <div className="mt-2 text-sm font-medium text-gray-500 leading-relaxed">
                  High growth, Yield and designed to maximise future value
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-sm shadow-xl border border-gray-100 px-5 py-6 min-h-[135px] flex items-center">
            <div className="flex items-center justify-start gap-4 w-full">
              <ShieldCheckIcon className="h-12 w-12 text-red-400 opacity-90 shrink-0" aria-hidden="true" />
              <div className="text-left">
                <div className="text-base font-medium text-gray-800 uppercase tracking-wide">
                  Rera registered
                </div>
                <div className="mt-2 text-sm font-medium text-gray-500 leading-relaxed">
                  Verified compliance and documentation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
