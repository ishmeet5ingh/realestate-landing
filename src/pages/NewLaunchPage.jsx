// src/pages/NewLaunchM3M.jsx
import React from "react";
import {
  MapPinIcon,
  BuildingOffice2Icon,
  HomeModernIcon,
  ChartBarIcon,
  CheckBadgeIcon,
  ClockIcon,
  CurrencyRupeeIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
  CalendarIcon,
  PhoneIcon,
  DocumentTextIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

export default function NewLaunchM3M() {
  const unitLabel = "2.5 BHK @ ₹1.43 Cr*";
  const sizeRange = "~1,250 – 1,400 sq.ft.";
  const ticketSize = "₹1.43 Cr*";
  const locationLine = "Sectors 9–11, Manesar, Gurgaon";

  return (
    <div className="pt-16 sm:pt-20 pb-8 sm:pb-12 lg:pb-16 bg-white font-display">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-4 sm:mt-6 lg:mt-8">
        {/* Header section */}
        <header className="mb-4 sm:mb-6">
          <div className="flex items-start justify-between gap-3 sm:gap-4 mb-2 sm:mb-3">
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-black mb-1 sm:mb-2">
                M3M GIC Manesar
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium">
                Premium 2.5 BHK High-Rise Residences
              </p>
            </div>
            <div className="text-right shrink-0">
              <div className="text-[10px] sm:text-xs text-gray-500 mb-0.5 sm:mb-1">Starting from</div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600">
                {ticketSize}
              </div>
              <div className="text-[9px] sm:text-xs text-gray-600 mt-0.5 sm:mt-1">All-inclusive</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <MapPinIcon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
              <span>{locationLine}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <BuildingOffice2Icon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
              <span>By M3M India</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <CalendarIcon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
              <span>Possession: 2027 onwards</span>
            </div>
          </div>
        </header>

        {/* Hero image with form on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Left: Hero image */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-xl sm:shadow-2xl border border-gray-200">
              <div className="relative h-56 sm:h-72 lg:h-[500px]">
                <img
                  src="/residential/m3m-gic-manesar.jpeg"
                  alt="M3M GIC Manesar aerial township view"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Bottom info bar on image - HIDDEN on mobile */}
                <div className="hidden sm:block absolute bottom-0 left-0 right-0 px-3 sm:px-5 pb-3 sm:pb-5">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg px-2 py-2 sm:px-3 sm:py-2.5">
                      <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold tracking-wide text-gray-600 mb-0.5 sm:mb-1">
                        <HomeModernIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        CONFIGURATION
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-black">2.5 BHK</div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg px-2 py-2 sm:px-3 sm:py-2.5">
                      <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold tracking-wide text-gray-600 mb-0.5 sm:mb-1">
                        <ChartBarIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        SIZE RANGE
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-black">{sizeRange}</div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg px-2 py-2 sm:px-3 sm:py-2.5">
                      <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold tracking-wide text-gray-600 mb-0.5 sm:mb-1">
                        <CurrencyRupeeIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        TICKET SIZE
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-red-600">{ticketSize}</div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg px-2 py-2 sm:px-3 sm:py-2.5">
                      <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold tracking-wide text-gray-600 mb-0.5 sm:mb-1">
                        <ClockIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        POSSESSION
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-black">2027+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-br from-black to-gray-900 text-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 lg:p-8 lg:h-[500px] flex flex-col justify-center border border-gray-800">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1.5 sm:mb-2">
                Get Detailed Unit Information
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 lg:mb-5">
                Share your preferences and our team will curate the best
                available 2.5 BHK options with floor plans, pricing and payment
                schedules.
              </p>
              <form className="space-y-2 sm:space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 sm:py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  Request Callback
                </button>
              </form>
              <p className="text-[9px] sm:text-[10px] text-gray-400 mt-3 sm:mt-4 leading-relaxed">
                By submitting, you consent to being contacted regarding M3M GIC
                Manesar. We respect your privacy and will not share your data.
              </p>
            </div>
          </div>
        </div>

        {/* Quick stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-10">
          <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 shadow-sm p-3 sm:p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                <BuildingOffice2Icon className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-gray-600 font-medium">Township Size</div>
                <div className="text-sm sm:text-base font-bold text-black">140+ Acres</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 shadow-sm p-3 sm:p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                <UserGroupIcon className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-gray-600 font-medium">Project Type</div>
                <div className="text-sm sm:text-base font-bold text-black">Integrated City</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 shadow-sm p-3 sm:p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                <ArrowTrendingUpIcon className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-gray-600 font-medium">Investment Type</div>
                <div className="text-sm sm:text-base font-bold text-black">High Growth</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 shadow-sm p-3 sm:p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                <ShieldCheckIcon className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-gray-600 font-medium">Status</div>
                <div className="text-sm sm:text-base font-bold text-black">RERA Approved</div>
              </div>
            </div>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 ">
          {/* Left column: main content */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            {/* About project */}
            <section className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6 lg:p-8">
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-black mb-3 sm:mb-4 flex items-center gap-2">
                <BuildingOffice2Icon className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
                About M3M GIC Manesar
              </h2>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                <p>
                  M3M GIC (Gurgaon International City) Manesar is positioned as Gurugram's
                  largest integrated township spanning over 140 acres. It combines
                  high-rise residential towers, premium retail high-street, industrial
                  plots and a complete social infrastructure in one master-planned
                  ecosystem.
                </p>
                <p>
                  The residential component features contemporary high-rise apartments
                  across multiple configurations (2.5 / 3.5 / 4.5 BHK), designed for
                  end-users who value connectivity, lifestyle amenities and long-term
                  appreciation potential.
                </p>
                <p>
                  Located in Sectors 9–11 Manesar with direct access to NH-48, KMP
                  Expressway and the upcoming Dwarka Expressway, M3M GIC offers a
                  strategic position for professionals working across Gurgaon, Delhi
                  NCR and IMT Manesar industrial belt.
                </p>
              </div>
            </section>

            {/* Key highlights */}
            <section className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6 lg:p-8">
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-black mb-3 sm:mb-4 flex items-center gap-2">
                <SparklesIcon className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
                Key Project Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  {
                    icon: MapPinIcon,
                    title: "Prime Location",
                    desc: "Sectors 9–11 Manesar with NH-48 frontage",
                  },
                  {
                    icon: BuildingOffice2Icon,
                    title: "Integrated Township",
                    desc: "140+ acres mixed-use development",
                  },
                  {
                    icon: HomeModernIcon,
                    title: "High-Rise Living",
                    desc: "Modern tower architecture with podium amenities",
                  },
                  {
                    icon: UserGroupIcon,
                    title: "100+ Amenities",
                    desc: "Clubhouse, pools, sports, wellness & retail",
                  },
                  {
                    icon: ArrowTrendingUpIcon,
                    title: "Growth Corridor",
                    desc: "Part of Gurgaon's expanding industrial belt",
                  },
                  {
                    icon: ShieldCheckIcon,
                    title: "RERA Registered",
                    desc: "Fully compliant with regulatory standards",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-50 border border-gray-100"
                  >
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-black text-xs sm:text-sm">
                        {item.title}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-600 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Amenities */}
            <section className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6 lg:p-8">
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-black mb-3 sm:mb-4 lg:mb-5 flex items-center gap-2">
                <SparklesIcon className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
                World-Class Amenities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 text-xs sm:text-sm text-gray-700">
                {[
                  "Grand clubhouse with multi-purpose halls",
                  "Olympic-size swimming pool & kids' pool",
                  "State-of-the-art gymnasium & yoga studios",
                  "Indoor games: table tennis, billiards, cards room",
                  "Outdoor sports: tennis, basketball, badminton courts",
                  "Amphitheatre & mini-theatre for community events",
                  "Landscaped central greens & themed gardens",
                  "Kids' play areas with safety-first design",
                  "Senior citizen park & walking trails",
                  "Jogging & cycling tracks (2+ km)",
                  "Convenience retail & high-street shopping",
                  "24×7 security with CCTV & access control",
                  "Multi-level parking with EV charging points",
                  "Power backup & water supply systems",
                  "Smart home provisions & fiber-optic ready",
                  "Sewage treatment & rainwater harvesting",
                ].map((amenity, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 sm:gap-2">
                    <CheckBadgeIcon className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 shrink-0 mt-0.5" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Unit details */}
            <section className="bg-red-50 rounded-xl sm:rounded-2xl border border-red-200 shadow-sm p-4 sm:p-6 lg:p-8">
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-black mb-3 sm:mb-4 lg:mb-5 flex items-center gap-2">
                <HomeModernIcon className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
                2.5 BHK Unit Specifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-3 sm:gap-y-4 lg:gap-y-5">
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold text-red-700 mb-1 sm:mb-2">
                    <ChartBarIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                    CONFIGURATION
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700">
                    2 Bedrooms + 1 Multi-utility room + Living/Dining + 2–3 Toilets
                    + Balconies (as per floor plan)
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold text-red-700 mb-1 sm:mb-2">
                    <ChartBarIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                    CARPET AREA (INDICATIVE)
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700">{sizeRange}</div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold text-red-700 mb-1 sm:mb-2">
                    <SparklesIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                    FLOORING
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700">
                    Premium vitrified tiles in living/dining; wooden/laminate flooring
                    in bedrooms (as per spec)
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold text-red-700 mb-1 sm:mb-2">
                    <SparklesIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                    KITCHEN
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700">
                    Modular kitchen provision with granite/quartz counter and chimney
                    point
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold text-red-700 mb-1 sm:mb-2">
                    <SparklesIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                    BATHROOMS
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700">
                    Branded sanitary ware & CP fittings, designer tiles
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold text-red-700 mb-1 sm:mb-2">
                    <SparklesIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                    WINDOWS & DOORS
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700">
                    UPVC/aluminum windows, engineered wood doors with premium hardware
                  </div>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 lg:mt-5 pt-3 sm:pt-4 lg:pt-5 border-t border-red-200">
                <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed">
                  *All specifications are indicative and subject to final RERA approvals,
                  builder's specification sheet and may vary by tower, floor and unit.
                  Always refer to the official agreement and allotment letter.
                </p>
              </div>
            </section>

            {/* Location advantages */}
            <section className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6 lg:p-8">
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-black mb-3 sm:mb-4 lg:mb-5 flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
                Location & Connectivity
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-black text-xs sm:text-sm mb-0.5 sm:mb-1">
                      NH-48 (Delhi-Jaipur Highway)
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600">
                      Direct access to NH-48 ensuring seamless connectivity to Delhi,
                      Gurgaon and Rajasthan
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-black text-xs sm:text-sm mb-0.5 sm:mb-1">
                      KMP Expressway
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600">
                      Quick access to Kundli-Manesar-Palwal Expressway connecting
                      industrial & logistics hubs
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-black text-xs sm:text-sm mb-0.5 sm:mb-1">
                      Dwarka Expressway (Under Development)
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600">
                      Future-ready connectivity to Dwarka, IGI Airport and South Delhi
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-black text-xs sm:text-sm mb-0.5 sm:mb-1">
                      IMT Manesar & Corporate Offices
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600">
                      Proximity to major manufacturing units, MNCs and business parks
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right sidebar: sticky actions */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-4 sm:space-y-6">
              {/* Download brochure */}
              <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6">
                <h3 className="text-sm sm:text-base font-bold text-black mb-2 sm:mb-3">
                  Download Project Brochure
                </h3>
                <button className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-2.5 sm:py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm">
                  <DocumentTextIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  Get Brochure (PDF)
                </button>
              </div>

              {/* Quick info */}
              <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6">
                <h3 className="text-sm sm:text-base font-bold text-black mb-3 sm:mb-4">
                  Quick Facts
                </h3>
                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Builder</span>
                    <span className="font-semibold text-black">M3M India</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">RERA No.</span>
                    <span className="font-semibold text-black">RC/REP/xxxxx</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Launch Date</span>
                    <span className="font-semibold text-black">2024</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Possession</span>
                    <span className="font-semibold text-black">2027+</span>
                  </div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="bg-red-50 rounded-xl sm:rounded-2xl border border-red-200 p-4 sm:p-6">
                <h3 className="text-sm sm:text-base font-bold text-black mb-2 sm:mb-3 flex items-center gap-2">
                  <ShieldCheckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                  Why Buy Through Us?
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs text-gray-700">
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <CheckBadgeIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-600 shrink-0 mt-0.5" />
                    <span>Authorized channel partner</span>
                  </li>
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <CheckBadgeIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-600 shrink-0 mt-0.5" />
                    <span>Best price guarantee</span>
                  </li>
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <CheckBadgeIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-600 shrink-0 mt-0.5" />
                    <span>Dedicated relationship manager</span>
                  </li>
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <CheckBadgeIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-600 shrink-0 mt-0.5" />
                    <span>End-to-end documentation support</span>
                  </li>
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <CheckBadgeIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-600 shrink-0 mt-0.5" />
                    <span>Home loan assistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 sm:mt-10 lg:mt-12 p-4 sm:p-6 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200">
          <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed">
            <strong>Disclaimer:</strong> All information provided on this page is for
            informational purposes only. Prices, sizes, amenities, specifications and
            availability are indicative and subject to change as per the latest updates
            from the developer, RERA registration and final allotment documents. Images
            shown are for representational purposes and may not reflect actual project
            conditions. Please verify all details with official brochures, agreement copies
            and on-site visits before making any purchase decision. This page does not
            constitute an offer document and is not a substitute for legal or financial advice.
          </p>
        </div>
      </div>
    </div>
  );
}
