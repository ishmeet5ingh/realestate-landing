import React from "react";

export default function Builders() {
  const builders = [
    { name: "OMAXE", logo: "/builders/OMAXE.png" },
    { name: "BIRLA", logo: "/builders/BIRLA.png" },
    { name: "Ganga", logo: "/builders/ganga.png" },
    { name: "Hero Homes", logo: "/builders/hero-homes.png" },
    { name: "M3M", logo: "/builders/M3M.png" },
    { name: "Max", logo: "/builders/max.png" },
    { name: "Pyramid", logo: "/builders/pyramid.jpg" },
    { name: "Shapoorji", logo: "/builders/Shapoorji.png" },
    { name: "Signature", logo: "/builders/signature.png" },
    { name: "SMWRTWORLD", logo: "/builders/SMWRTWORLD.png" },
    { name: "SPJ", logo: "/builders/spj.png" },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 font-display overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
            Builders we are working with
          </h2>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent to-gray-400" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rotate-45 border border-gray-400" />
              <div className="w-2 h-2 rounded-full bg-gray-400" />
              <div className="w-2 h-2 rotate-45 border border-gray-400" />
            </div>
            <div className="h-px w-20 sm:w-32 bg-gradient-to-l from-transparent to-gray-400" />
          </div>
        </div>

        {/* Infinite scroll container */}
        <div className="relative">
          {/* Scrolling wrapper - reduced gap */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll gap-4 sm:gap-6 lg:gap-8">
              {/* First set of logos */}
              {builders.map((builder, idx) => (
                <div
                  key={`logo-1-${idx}`}
                  className="flex items-center justify-center flex-shrink-0 w-32 sm:w-40 lg:w-48 h-20 sm:h-24 p-4"
                >
                  <img
                    src={builder.logo}
                    alt={builder.name}
                    className="max-w-full max-h-full object-contain transition-all"
                  />
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {builders.map((builder, idx) => (
                <div
                  key={`logo-2-${idx}`}
                  className="flex items-center justify-center flex-shrink-0 w-32 sm:w-40 lg:w-48 h-20 sm:h-24 p-4"
                >
                  <img
                    src={builder.logo}
                    alt={builder.name}
                    className="max-w-full max-h-full object-contain  transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
