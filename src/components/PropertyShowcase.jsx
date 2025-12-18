import React, { useState } from "react";
import { Heart, ArrowUpRight, MapPin, Calendar, Star } from "lucide-react";
import { motion } from "motion/react";

const PropertyShowcase = () => {
  const [favorites, setFavorites] = useState({});
  const [activeCategory, setActiveCategory] = useState("Residential");

  const allProjects = {
    Residential: [
      {
        id: 1,
        category: "Residential",
        projectName: "DLF The Camellias",
        tagline: "Ultra-luxury residences on Golf Course Road",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        rating: 4.9,
        reviews: 620,
        configuration: "4/5/6 BHK",
        microMarket: "Golf Course Road",
        status: "Ready to Move",
        price: "On Request",
        builder: "DLF Limited",
        location: "Sector 42, Gurugram",
      },
      {
        id: 2,
        category: "Residential",
        projectName: "Godrej Woods",
        tagline: "Urban forest theme with modern lifestyle amenities",
        image:
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        rating: 4.6,
        reviews: 284,
        configuration: "2/3/4 BHK",
        microMarket: "Noida Expressway",
        status: "Under Construction",
        price: "On Request",
        builder: "Godrej Properties",
        location: "Sector 43, Noida",
        featured: true,
      },
      {
        id: 3,
        category: "Residential",
        projectName: "Brigade Panorama",
        tagline: "Family-friendly community with landscaped open spaces",
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        rating: 4.7,
        reviews: 267,
        configuration: "2/3 BHK",
        microMarket: "Mysore Road Corridor",
        status: "Ready to Move",
        price: "On Request",
        builder: "Brigade Group",
        location: "Bangalore",
      },
    ],

    Commercial: [
      {
        id: 4,
        category: "Commercial",
        projectName: "Prestige Tech Park",
        tagline: "Grade-A office ecosystem with premium facilities",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        rating: 4.8,
        reviews: 410,
        configuration: "Office Spaces",
        microMarket: "Outer Ring Road / Whitefield belt",
        status: "Operational",
        price: "On Request",
        builder: "Prestige Group",
        location: "Bangalore",
      },
      {
        id: 5,
        category: "Commercial",
        projectName: "DLF Cyber City",
        tagline: "Landmark business district with strong connectivity",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        rating: 4.7,
        reviews: 900,
        configuration: "Office / Retail",
        microMarket: "Cyber City",
        status: "Operational",
        price: "On Request",
        builder: "DLF Limited",
        location: "Gurugram",
        featured: true,
      },
      {
        id: 6,
        category: "Commercial",
        projectName: "Oberoi Commerz",
        tagline: "Corporate offices with modern business infrastructure",
        image:
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
        rating: 4.6,
        reviews: 312,
        configuration: "Office Spaces",
        microMarket: "Goregaon (East)",
        status: "Operational",
        price: "On Request",
        builder: "Oberoi Realty",
        location: "Mumbai",
      },
    ],

    "Coming Soon": [
      {
        id: 7,
        category: "Coming Soon",
        projectName: "Lodha New Launch (Pre-Launch)",
        tagline: "Upcoming premium residences with curated amenities",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
        rating: 4.6,
        reviews: 120,
        configuration: "2/3/4 BHK",
        microMarket: "Central Mumbai",
        status: "Pre-Launch",
        price: "On Request",
        builder: "Lodha (Macrotech Developers)",
        location: "Mumbai",
      },
      {
        id: 8,
        category: "Coming Soon",
        projectName: "Sobha New Launch (Pre-Launch)",
        tagline: "Upcoming homes with premium finishes & planning",
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
        rating: 4.7,
        reviews: 98,
        configuration: "3/4 BHK",
        microMarket: "Sarjapur / ORR corridor",
        status: "Pre-Launch",
        price: "On Request",
        builder: "Sobha Limited",
        location: "Bangalore",
        featured: true,
      },
      {
        id: 9,
        category: "Coming Soon",
        projectName: "Godrej New Launch (Pre-Launch)",
        tagline: "Upcoming project designed for smart urban living",
        image:
          "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h==600&fit=crop",
        rating: 4.5,
        reviews: 76,
        configuration: "2/3 BHK",
        microMarket: "Hinjewadi / West Pune",
        status: "Pre-Launch",
        price: "On Request",
        builder: "Godrej Properties",
        location: "Pune",
      },
    ],

    Luxury: [
      {
        id: 10,
        category: "Luxury",
        projectName: "DLF The Aralias",
        tagline: "High-end living near Golf Course Road",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        rating: 4.8,
        reviews: 210,
        configuration: "4/5 BHK",
        microMarket: "DLF5 / Golf Course Road",
        status: "Ready to Move",
        price: "On Request",
        builder: "DLF Limited",
        location: "Gurugram",
      },
      {
        id: 11,
        category: "Luxury",
        projectName: "Oberoi Sky City",
        tagline: "Premium residences with strong city connectivity",
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        rating: 4.7,
        reviews: 155,
        configuration: "3/4 BHK",
        microMarket: "Borivali (East)",
        status: "Ready / Nearing Possession",
        price: "On Request",
        builder: "Oberoi Realty",
        location: "Mumbai",
        featured: true,
      },
      {
        id: 12,
        category: "Luxury",
        projectName: "Lodha Park",
        tagline: "Luxury residences with large open green spaces",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
        rating: 4.7,
        reviews: 190,
        configuration: "2/3/4 BHK",
        microMarket: "Worli / Lower Parel belt",
        status: "Ready / Under Construction (Phase-wise)",
        price: "On Request",
        builder: "Lodha (Macrotech Developers)",
        location: "Mumbai",
      },
    ],

    Investment: [
      {
        id: 13,
        category: "Investment",
        projectName: "DLF Downtown",
        tagline: "Institutional-grade office destination for businesses",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        rating: 4.6,
        reviews: 140,
        configuration: "Office Spaces",
        microMarket: "IT/Business corridor",
        status: "Operational / Leasing",
        price: "On Request",
        builder: "DLF Limited",
        location: "Chennai",
      },
      {
        id: 14,
        category: "Investment",
        projectName: "Prestige Commercial (Business District)",
        tagline: "High-demand office asset in a prime corridor",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        rating: 4.6,
        reviews: 178,
        configuration: "Office / Retail",
        microMarket: "Central business belt",
        status: "Operational",
        price: "On Request",
        builder: "Prestige Group",
        location: "Hyderabad",
        featured: true,
      },
      {
        id: 15,
        category: "Investment",
        projectName: "Brigade Gateway (Mixed-use)",
        tagline: "Integrated township-style mixed-use development",
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
        rating: 4.5,
        reviews: 156,
        configuration: "Mixed-use (Resi/Office/Retail)",
        microMarket: "Rajajinagar",
        status: "Operational",
        price: "On Request",
        builder: "Brigade Group",
        location: "Bangalore",
      },
    ],

    Exclusive: [
      {
        id: 16,
        category: "Exclusive",
        projectName: "Prestige Exclusive Residences",
        tagline: "Limited inventory premium homes with curated amenities",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        rating: 4.7,
        reviews: 67,
        configuration: "3/4 BHK",
        microMarket: "Prime city micro-market",
        status: "Limited Units",
        price: "On Request",
        builder: "Prestige Group",
        location: "Bangalore",
      },
      {
        id: 17,
        category: "Exclusive",
        projectName: "Godrej Signature Homes",
        tagline: "Boutique living with strong brand assurance",
        image:
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        rating: 4.6,
        reviews: 112,
        configuration: "2/3 BHK",
        microMarket: "Well-connected residential pocket",
        status: "Limited Units",
        price: "On Request",
        builder: "Godrej Properties",
        location: "NCR",
        featured: true,
      },
      {
        id: 18,
        category: "Exclusive",
        projectName: "Oberoi Exclusive Collection",
        tagline: "Premium residences with high-quality planning",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
        rating: 4.7,
        reviews: 89,
        configuration: "3/4 BHK",
        microMarket: "Prime residential belt",
        status: "Limited Units",
        price: "On Request",
        builder: "Oberoi Realty",
        location: "Mumbai",
      },
    ],
  };

  const projects = allProjects[activeCategory] || [];

  const categoryCounts = {
    Residential: 12,
    Commercial: 8,
    "Coming Soon": 5,
    Luxury: 6,
    Investment: 9,
    Exclusive: 7,
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <motion.div
      className="min-h-screen pt-8 sm:pt-14 lg:pt-20 bg-white px-4 sm:px-4 lg:px-0 font-display"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-[1350px] mx-auto">
        {/* Header */}
        <div className="mb-5 sm:mb-8">
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-black mb-3 sm:mb-4">
            Featured Projects in India
          </h1>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              "Residential",
              "Commercial",
              "Coming Soon",
              "Luxury",
              "Investment",
              "Exclusive",
            ].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-red-600 text-white shadow-lg hover:bg-red-700"
                    : "bg-white text-black hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {category}
                <span className="ml-1.5 sm:ml-2 text-[10px] sm:text-xs opacity-70">
                  {categoryCounts[category]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`bg-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl hover:shadow-red-600/20 transition-all duration-300 border-2 border-transparent hover:border-red-600 ${
                index === 1 ? "md:col-span-1 lg:row-span-2" : ""
              }`}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="p-4 sm:p-5">
                {/* Title Section */}
                <div className="mb-3 sm:mb-4">
                  <div className="flex items-start justify-between mb-1.5 sm:mb-2 gap-2">
                    <h3 className="text-base sm:text-xl font-bold text-black flex-1 leading-snug">
                      {project.projectName}
                    </h3>
                    <button className="p-0" aria-label="Open project">
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 hover:text-red-700" />
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Image Section */}
                <div className="relative rounded-2xl overflow-hidden mb-3 sm:mb-4">
                  {project.featured && (
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                      <div className="bg-white/95 backdrop-blur-sm rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1.5 shadow-lg">
                        <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-red-600 text-red-600" />
                        <span className="text-xs sm:text-sm font-semibold text-black">
                          {project.reviews} Reviews
                        </span>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => toggleFavorite(project.id)}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-9 sm:h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                    aria-label="Toggle favorite"
                  >
                    <Heart
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${
                        favorites[project.id]
                          ? "fill-red-600 text-red-600"
                          : "text-black"
                      }`}
                    />
                  </button>

                  <img
                    src={project.image}
                    alt={project.projectName}
                    className={`w-full object-cover ${
                      index === 1 ? "h-72 sm:h-96" : "h-52 sm:h-64"
                    }`}
                  />

                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-red-600 backdrop-blur-sm text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    {project.category}
                  </div>

                  {project.featured && (
                    <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 left-3 sm:left-4">
                      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 sm:p-4 shadow-xl">
                        <div className="text-center mb-2.5 sm:mb-3">
                          <div className="text-xs sm:text-sm text-gray-600 font-medium">
                            Starting from
                          </div>
                          <div className="text-2xl sm:text-3xl font-bold text-red-600">
                            ₹{project.price}
                          </div>
                        </div>

                        <div className="bg-black text-white rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-center gap-2">
                          <img
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                              project.builder
                            )}&background=random`}
                            alt={project.builder}
                            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full"
                          />
                          <span className="text-xs sm:text-sm font-medium">
                            By {project.builder}
                          </span>
                        </div>

                        <div className="mt-2.5 sm:mt-3 flex items-center gap-2 text-xs sm:text-sm text-gray-700 justify-center">
                          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600" />
                          <span>{project.location}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {!project.featured && (
                    <button
                      className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                      aria-label="Favorite"
                    >
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                    </button>
                  )}
                </div>

                {/* Details Section (non-featured) */}
                {!project.featured && (
                  <>
                    <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
                      <div className="flex items-center gap-1 bg-red-50 px-2 py-1 rounded-lg border border-red-200">
                        <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-red-600 text-red-600" />
                        <span className="text-xs sm:text-sm font-semibold text-black">
                          {project.rating}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700">
                        {project.reviews} reviews
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-200 gap-3">
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-black mb-1">
                          {project.configuration}
                        </div>

                        <div className="flex flex-col gap-1 text-[11px] sm:text-xs text-gray-700">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-red-600" />
                            <span>{project.microMarket}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-red-600" />
                            <span>{project.status}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-[11px] sm:text-xs text-gray-600 mb-1">
                          Starting price
                        </div>
                        <div className="text-xl sm:text-2xl font-bold text-red-600 leading-tight">
                          ₹{project.price}
                        </div>
                        <div className="mt-1 text-[11px] sm:text-xs text-gray-700">
                          By {project.builder}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyShowcase;
