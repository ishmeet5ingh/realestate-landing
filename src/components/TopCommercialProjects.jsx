import React, { useEffect, useMemo, useRef, useState } from "react";
import { Briefcase, ArrowUpRight } from "lucide-react";

const TopCommercialProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollerRef = useRef(null);

  // ✅ Residential array used here (as you asked)
const projects = [
  {
    id: 1,
    developer: "OMAXE",
    title: "The Omaxe State",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=60",
  },
  {
    id: 2,
    developer: "SPJ",
    title: "Vedatam",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=60",
  },
  {
    id: 3,
    developer: "M3M",
    title: "M3M Paragon 57",
    image:
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1400&q=60",
  },
  {
    id: 4,
    developer: "M3M",
    title: "M3M Route 65",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1400&q=60",
  },
  {
    id: 5,
    developer: "M3M",
    title: "M3M Atrium 57",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=60",
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
        {/* Header row (kept same) */}
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
              Office, retail and mixed-use assets designed for strong visibility,
              access and long-term demand.
            </p>
          </div>

          {/* KPI strip (kept same) */}
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
             rounded-3xl overflow-hidden border border-black/10
             hover:shadow-xl hover:shadow-red-600/10 transition-all"
>
  {/* FULL card background */}
  <div
    className="relative h-[300px] sm:h-[320px] lg:h-[360px] bg-cover bg-center"
    style={{ backgroundImage: `url(${p.image})` }}
  >
    {/* overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/35 to-transparent" />

    {/* bottom content row */}
    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
      <div className="flex items-end justify-between gap-4">
        {/* LEFT: developer + title */}
        <div className="min-w-0">
          <div className="inline-flex items-center bg-teal-500/90 text-white px-4 py-2 rounded-md text-xs font-medium">
            {p.developer}
          </div>

          <h3 className="mt-3 text-md sm:text-lg lg:text-xl font-medium text-white truncate">
            {p.title}
          </h3>
        </div>

        {/* RIGHT: explore button */}
        <button
          className="shrink-0 inline-flex items-center gap-2 rounded-xl
                     bg-red-600 hover:bg-red-700 transition-colors
                     px-4 py-2.5 text-sm font-semibold text-white shadow-md"
          aria-label={`Explore ${p.title}`}
        >
          Explore
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
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
