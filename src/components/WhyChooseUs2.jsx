import React from "react";
import {
  CheckBadgeIcon,
  HandRaisedIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  ScaleIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const items = [
  {
    no: "1",
    title: "Expert Market Knowledge",
    desc: "We bring deep local market expertise to help you make the right property decisions—facts, not guesses.",
    Icon: ChartBarIcon,
  },
  {
    no: "2",
    title: "Client‑First Approach",
    desc: "We listen to your requirements and suggest only genuine options that match your needs—no pushy sales.",
    Icon: UserGroupIcon,
  },
  {
    no: "3",
    title: "After‑Sales Relationship",
    desc: "We assist with possession support, resale, leasing, and future investments—beyond just closing a deal.",
    Icon: HandRaisedIcon,
  },
  {
    no: "4",
    title: "Wide Property Portfolio",
    desc: "Residential | Commercial | Industrial | Investment Properties — verified listings across prime locations.",
    Icon: BuildingOffice2Icon,
  },
  {
    no: "5",
    title: "End‑to‑End Support",
    desc: "From site visits to legal assistance, documentation, and possession—we handle everything end‑to‑end.",
    Icon: ScaleIcon,
  },
  {
    no: "6",
    title: "Verified & Due‑Diligence Checked Properties",
    desc: "Every property is legally and technically verified so you invest with complete confidence and peace of mind.",
    Icon: CheckBadgeIcon,
  },
];

export default function WhyChooseUs2() {
  return (
    <section className="w-full bg-white py-10 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
            Why Choose Us
          </h2>

          {/* simple divider */}
          <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 sm:gap-3">
            <span className="h-px w-16 sm:w-24 bg-gray-300" />
            <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-gray-400" />
            <span className="h-px w-16 sm:w-24 bg-gray-300" />
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 sm:mt-12 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-y-10 gap-x-6 sm:gap-x-10">
          {items.map(({ no, title, desc, Icon }) => (
            <div key={no} className="flex items-start gap-3 sm:gap-5">
              {/* icon badge */}
              <div className="shrink-0">
                <div className="h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32 rounded-full bg-gray-50 shadow-md flex items-center justify-center">
                  <Icon className="h-10 w-10 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-red-400" aria-hidden="true" />
                </div>
              </div>

              {/* text */}
              <div className="pt-1">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">{title}</h3>

                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                  {desc}
                </p>

                <div className="mt-3 sm:mt-6 h-px w-full bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
