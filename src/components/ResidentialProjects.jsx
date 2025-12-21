import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Building2 } from "lucide-react";

const ResidentialProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Updated projects array with route paths
  const projects = [
    {
      id: 1,
      developer: "M3M",
      title: "GIC Manesar",
      image: "/residential/m3m-gic-manesar.jpeg",
      route: "/new-launch/m3m-gic-manesar",
    },
    {
      id: 2,
      developer: "AURA WORLD",
      title: "Aura World",
      image: "/residential/aura-world.jpg",
      route: null, // No route yet
    },
    {
      id: 3,
      developer: "SMARTWORLD",
      title: "Sky Arc",
      image: "/residential/smartworld-sky-arc.webp",
      route: null,
    },
    {
      id: 4,
      developer: "SMARTWORLD",
      title: "The Edition",
      image: "/residential/smartworld-the-edition.webp",
      route: null,
    },
    {
      id: 5,
      developer: "M3M",
      title: "Mansion",
      image: "/residential/m3m-mansion.webp",
      route: null,
    },
    {
      id: 6,
      developer: "SMARTWORLD",
      title: "One DXP",
      image: "/residential/oneduplexsmartworld.webp",
      route: null,
    },
  ];

  const CARD = useMemo(() => {
    const isClient = typeof window !== "undefined";
    const w = isClient ? window.innerWidth : 1024;

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
        <div className="text-center mb-4 sm:mb-8 lg:mb-10">
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

      {/* Carousel area */}
      <div className="relative w-full">
        <button
          onClick={() => scroll("left")}
          className="hidden lg:block absolute left-2 sm:left-6  top-1/2 -translate-y-1/2 z-20
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
          className="hidden lg:block absolute right-2 sm:right-6  top-1/2 -translate-y-1/2 z-20
             bg-white hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700
             text-red-600 hover:text-white p-3.5 lg:p-4 rounded-full
             shadow-xl transition-all duration-300 hover:scale-110
             border border-red-100"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content constrained */}
        <div className="max-w-7xl mx-auto lg:px-20">
          <div className="relative ">
            <div
              ref={scrollContainerRef}
              className="flex gap-3 sm:gap-4 lg:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-5 sm:pb-7 lg:pb-8 pt-5 sm:pt-10 px-4 sm:px-6"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {projects.map((project) => {
                const CardWrapper = project.route ? "a" : "div";
                const wrapperProps = project.route
                  ? { href: project.route }
                  : {};

                return (
                  <CardWrapper
                    key={project.id}
                    {...wrapperProps}
                    className="min-w-[250px] lg:min-w-[300px] group cursor-pointer block no-underline"
                  >
                    <div className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                      {/* Image */}
                      <div className="relative h-52 lg:h-64 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                        {/* Developer + title */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                          <div className="inline-flex items-center bg-teal-500/90 text-white px-4 py-2 rounded-md text-xs font-medium">
                            {project.developer}
                          </div>

                          <h3 className="mt-3 text-lg sm:text-xl lg:text-2xl font-medium text-white">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="p-4 sm:p-6 bg-gradient-to-br from-white to-red-50">
                        <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium text-sm py-2.5 px-5  rounded-xl transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-[1.02]">
                          Explore Project
                        </button>
                      </div>
                    </div>
                  </CardWrapper>
                );
              })}
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
