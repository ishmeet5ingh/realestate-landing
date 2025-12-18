import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState("Residential");
  const tabs = ["Residential", "Commercial"];

  // Conditional placeholder text
  const placeholder =
    activeTab === "Residential"
      ? "Search by locality, builder, or project name"
      : "Search by office park, retail space, or location";

  return (
    <div className="w-full max-w-2xl">
      {/* Tabs - responsive sizing */}
      <div className="flex items-center gap-2 sm:gap-3 py-1.5 sm:py-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-colors ${
              activeTab === tab
                ? "bg-red-600 text-white"
                : "bg-white/90 text-gray-700 hover:bg-white border border-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search Input - responsive sizing */}
      <div className="relative bg-white rounded-lg shadow-lg">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full pl-4 pr-14 py-3 sm:pl-5 sm:pr-16 sm:py-4 text-xs sm:text-sm text-gray-700 placeholder-gray-500
                     border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          type="button"
          aria-label="Search"
          className="absolute right-2 top-1/2 -translate-y-1/2
                     bg-black hover:bg-gray-800 text-white p-2 sm:p-3 rounded-lg
                     transition-colors duration-200"
        >
          <MagnifyingGlassIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}
