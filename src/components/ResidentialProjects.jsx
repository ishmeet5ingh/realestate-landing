import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Building2, Home } from "lucide-react";

const ResidentialProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Skyline Heights",
      developer: "PREMIUM ESTATES",
      location: "Downtown District",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      units: "240 Units",
      status: "Under Construction",
    },
    {
      id: 2,
      title: "Royal Residency",
      developer: "LUXURY HOMES",
      location: "Green Valley",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      units: "180 Units",
      status: "Ready to Move",
    },
    {
      id: 3,
      title: "Pearl Gardens",
      developer: "METRO BUILD",
      location: "City Center",
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&h=600&fit=crop",
      units: "320 Units",
      status: "Launching Soon",
    },
    {
      id: 4,
      title: "Azure Heights",
      developer: "SKYLINE CORP",
      location: "Riverside Avenue",
      image:
        "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800&h=600&fit=crop",
      units: "150 Units",
      status: "Under Construction",
    },
    {
      id: 5,
      title: "Grand Plaza",
      developer: "ELITE DEVELOPERS",
      location: "Business District",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop",
      units: "280 Units",
      status: "Ready to Move",
    },
  ];

  // Keep scroll math aligned with card min-width + gap at each breakpoint
  const CARD = useMemo(() => {
    const isClient = typeof window !== "undefined";
    const w = isClient ? window.innerWidth : 1024;

    // Match the JSX: min-w + gap below
    if (w < 640) return { width: 280, gap: 12 }; // mobile
    if (w < 1024) return { width: 340, gap: 16 }; // tablet
    return { width: 400, gap: 24 }; // desktop
  }, []);

  const CARD_WIDTH = CARD.width + CARD.gap;

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -CARD_WIDTH : CARD_WIDTH;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const newIndex = Math.round(container.scrollLeft / CARD_WIDTH);
      setCurrentIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [CARD_WIDTH]);

  return (
    <section className="bg-gradient-to-br from-red-50 via-white to-red-50 py-10 sm:py-14 lg:py-20 font-display overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg">
            <Building2 className="w-4 h-4" />
            <span>PREMIUM COLLECTION</span>
          </div>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mb-2 sm:mb-4">
            Top Residential Projects
          </h2>

          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-6">
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-red-600 rounded-full" />
            <div className="flex gap-1.5 sm:gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-600" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-300" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-600" />
            </div>
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-l from-transparent to-red-600 rounded-full" />
          </div>

          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Discover extraordinary living spaces crafted for modern lifestyles
          </p>
        </div>
      </div>

      {/* Carousel area (full width wrapper so arrows can sit outside 7xl) */}
      <div className="relative w-full">
        {/* Arrows hidden on small screens */}
        <button
          onClick={() => scroll("left")}
          className="hidden sm:block absolute left-2 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20
                     bg-white hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700
                     text-red-600 hover:text-white p-3.5 lg:p-4 rounded-full
                     shadow-xl transition-all duration-300 hover:scale-110
                     border border-red-100"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden sm:block absolute right-2 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20
                     bg-white hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700
                     text-red-600 hover:text-white p-3.5 lg:p-4 rounded-full
                     shadow-xl transition-all duration-300 hover:scale-110
                     border border-red-100"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content constrained */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative -mr-4 sm:-mr-6 lg:-mr-8">
            <div
              ref={scrollContainerRef}
              className="flex gap-3 sm:gap-4 lg:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-5 sm:pb-7 lg:pb-8"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="min-w-[280px] sm:min-w-[340px] lg:min-w-[400px] group cursor-pointer"
                >
                  <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative h-52 sm:h-64 lg:h-80 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                      {/* Status */}
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold shadow-lg backdrop-blur-sm">
                        {project.status}
                      </div>

                      {/* Developer */}
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 text-rose-900 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold shadow-lg backdrop-blur-sm">
                        {project.developer}
                      </div>

                      {/* Overlay content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3">
                          {project.title}
                        </h3>

                        <div className="flex items-center gap-4 sm:gap-6 text-white/90">
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span className="text-xs sm:text-sm font-medium">
                              {project.location}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span className="text-xs sm:text-sm font-medium">
                              {project.units}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="p-4 sm:p-6 bg-gradient-to-br from-white to-red-50">
                      <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold text-sm sm:text-base py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-[1.02]">
                        Explore Project
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6 lg:mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const container = scrollContainerRef.current;
                    if (container) {
                      container.scrollTo({
                        left: index * CARD_WIDTH,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-7 sm:w-8 h-1.5 sm:h-2 bg-gradient-to-r from-red-600 to-red-700"
                      : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-200 hover:bg-red-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ResidentialProjects;
