import React, { useEffect, useMemo, useRef, useState } from "react";
import { MapPin, Building2, ArrowUpRight, Briefcase, Ruler, BadgeCheck } from "lucide-react";

const TopCommercialProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollerRef = useRef(null);

  const projects = [
    {
      id: 1,
      name: "DLF Cyber City",
      city: "Gurugram",
      micromarket: "Cyber City",
      type: "Office / Retail",
      status: "Operational",
      area: "1.5M+ sq.ft (approx.)",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
      highlight: "Grade-A assets & connectivity",
    },
    {
      id: 2,
      name: "Prestige Tech Park",
      city: "Bangalore",
      micromarket: "ORR / Whitefield belt",
      type: "Office Spaces",
      status: "Operational",
      area: "Large campus",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
      highlight: "Corporate ecosystem campus",
    },
    {
      id: 3,
      name: "Oberoi Commerz",
      city: "Mumbai",
      micromarket: "Goregaon (East)",
      type: "Office Spaces",
      status: "Operational",
      area: "Premium towers",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop",
      highlight: "Modern office infrastructure",
    },
    {
      id: 4,
      name: "DLF Downtown",
      city: "Chennai",
      micromarket: "IT / Business corridor",
      type: "Office Spaces",
      status: "Leasing",
      area: "Institutional-grade",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&h=800&fit=crop",
      highlight: "High-demand office destination",
    },
  ];

  // Snap math: card min width + gap (keep in sync with classes)
  const CARD = useMemo(() => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1024;
    if (w < 640) return { width: 280, gap: 12 };
    if (w < 1024) return { width: 320, gap: 16 };
    return { width: 360, gap: 20 };
  }, []);
  const CARD_WIDTH = CARD.width + CARD.gap;

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => setCurrentIndex(Math.round(el.scrollLeft / CARD_WIDTH));
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, [CARD_WIDTH]);

  return (
    <section className="bg-white text-black py-10 sm:py-14 lg:py-16 font-display overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-black/5 border border-black/10 rounded-full px-3 py-1.5 text-[11px] sm:text-xs">
              <Briefcase className="w-4 h-4 text-red-600" />
              <span className="tracking-wide text-black/80">COMMERCIAL PICKS</span>
            </div>

            <h2 className="mt-3 text-xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
              Top Commercial Projects
            </h2>

            <p className="mt-2 text-sm sm:text-base text-black/70 max-w-xl">
              Office, retail and mixed-use assets designed for strong visibility, access and long-term demand.
            </p>
          </div>

          {/* KPI strip: light cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full lg:w-auto">
            <div className="rounded-2xl bg-black/5 border border-black/10 p-3 sm:p-4">
              <div className="text-[11px] sm:text-xs text-black/60">Focus</div>
              <div className="text-sm sm:text-base font-semibold">Business hubs</div>
            </div>
            <div className="rounded-2xl bg-black/5 border border-black/10 p-3 sm:p-4">
              <div className="text-[11px] sm:text-xs text-black/60">Assets</div>
              <div className="text-sm sm:text-base font-semibold">Grade-A</div>
            </div>
            <div className="rounded-2xl bg-black/5 border border-black/10 p-3 sm:p-4">
              <div className="text-[11px] sm:text-xs text-black/60">Status</div>
              <div className="text-sm sm:text-base font-semibold">Operational</div>
            </div>
          </div>
        </div>

        {/* Horizontal snap scroller */}
        <div className="mt-6 sm:mt-8">
          <div
            ref={scrollerRef}
            className="flex gap-3 sm:gap-4 lg:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((p) => (
              <article
                key={p.id}
                className="snap-start min-w-[280px] sm:min-w-[320px] lg:min-w-[360px]
                           rounded-3xl overflow-hidden border border-black/10 bg-white
                           hover:shadow-xl hover:shadow-red-600/10 transition-all"
              >
                {/* Image header */}
                <div className="relative h-44 sm:h-48 lg:h-52">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute top-3 left-3 inline-flex items-center gap-2 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-[11px] sm:text-xs border border-black/10">
                    <Building2 className="w-4 h-4 text-red-600" />
                    <span className="text-black/80">{p.type}</span>
                  </div>

                  <div className="absolute top-3 right-3 inline-flex items-center gap-2 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-[11px] sm:text-xs border border-black/10">
                    <BadgeCheck className="w-4 h-4 text-red-600" />
                    <span className="text-black/80">{p.status}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                      {p.name}
                    </h3>
                    <div className="mt-1 flex items-center gap-2 text-xs sm:text-sm text-white/90">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span>
                        {p.city} • {p.micromarket}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
                    {p.highlight}
                  </p>

                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-black/70">
                      <Ruler className="w-4 h-4 text-black/50" />
                      <span>{p.area}</span>
                    </div>

                    <button
                      className="inline-flex items-center gap-2 rounded-full bg-red-600 hover:bg-red-700 transition-colors px-3.5 py-2 text-xs sm:text-sm font-semibold text-white"
                      aria-label={`Explore ${p.name}`}
                    >
                      Explore
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = scrollerRef.current;
                  if (el) el.scrollTo({ left: i * CARD_WIDTH, behavior: "smooth" });
                }}
                className={`rounded-full transition-all ${
                  i === currentIndex
                    ? "w-7 sm:w-8 h-1.5 sm:h-2 bg-red-600"
                    : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-black/20 hover:bg-black/30"
                }`}
                aria-label={`Go to commercial slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TopCommercialProjects;
