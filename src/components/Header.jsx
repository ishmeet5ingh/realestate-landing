import React, { useState, useEffect } from "react";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "NEW LAUNCH", href: "#new-launch" },
  { label: "RESIDENTIAL", href: "#residential" },
  { label: "COMMERCIAL", href: "#commercial" },
  { label: "GALLERY", href: "#gallery" },
  { label: "CONTACT US", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all font-display duration-300 ${
        scrolled || open ? "bg-white shadow-lg" : "bg-transparent"
      }`}
      style={{
        fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="w-full px-4 sm:px-6 lg:px-28">
        {/* Top nav row */}
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled || open ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 transition-colors duration-300 text-black"
            aria-label="SH Property"
          >
            <div
              className={`flex items-center gap-2 py-10 transition-all duration-300 ${
                scrolled || open ? "scale-90" : "scale-100"
              }`}
            >
              <img
                src="/infratechlogo.png"
                alt="infratechlogoy"
                className="h-24 w-auto py-2"
              />
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-all duration-300 hover:text-red-600 text-black`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button – white when not scrolled, black after scroll */}
          <button
            className={`md:hidden text-sm font-medium tracking-wide transition-colors duration-300 ${
              scrolled || open ? "text-black" : "text-white"
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden pb-4 animate-fadeIn">
            <div className="flex flex-col gap-2 text-sm font-medium tracking-wide text-black">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-2 transition-colors duration-300 hover:text-red-600"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}
