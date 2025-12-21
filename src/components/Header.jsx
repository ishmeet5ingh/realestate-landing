// src/components/Header.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "HOME", type: "route", to: "/" },
  { label: "ABOUT US", type: "hash", href: "#about" },
  { label: "NEW LAUNCH", type: "dropdown" },
  { label: "RESIDENTIAL", type: "hash", href: "#residential" },
  { label: "COMMERCIAL", type: "hash", href: "#commercial" },
  { label: "GALLERY", type: "hash", href: "#gallery" },
  { label: "CONTACT US", type: "hash", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false); // mobile menu
  const [scrolled, setScrolled] = useState(false);
  const [newLaunchOpen, setNewLaunchOpen] = useState(false); // desktop dropdown
  const location = useLocation();
  const newLaunchRef = useRef(null);

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

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setNewLaunchOpen(false);
  }, [location.pathname]);

  // Click outside to close NEW LAUNCH dropdown
  useEffect(() => {
    if (!newLaunchOpen) return;

    const handleClickOutside = (e) => {
      if (newLaunchRef.current && !newLaunchRef.current.contains(e.target)) {
        setNewLaunchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [newLaunchOpen]);

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
          <Link
            to="/"
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
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navItems.map((item) => {
              if (item.type === "dropdown") {
                return (
                  <div
                    key={item.label}
                    ref={newLaunchRef}
                    className="relative"
                    // hover opens, but only click-outside closes
                    onMouseEnter={() => setNewLaunchOpen(true)}
                  >
                    <button
                      type="button"
                      className="transition-all duration-300 hover:text-red-600 text-black"
                      onClick={() => setNewLaunchOpen((v) => !v)}
                    >
                      {item.label}
                    </button>

                    {newLaunchOpen && (
                      <div className="absolute left-0 mt-3 w-64 bg-white border border-gray-200 rounded-lg shadow-xl py-2">
                        <Link
                          to="/new-launch/m3m-gic-manesar"
                          className="block px-4 py-3 text-xs sm:text-sm font-semibold tracking-wide text-gray-900 hover:bg-red-50"
                        >
                          M3M GIC MANESAR
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              if (item.type === "hash") {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="transition-all duration-300 hover:text-red-600 text-black"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="transition-all duration-300 hover:text-red-600 text-black"
                >
                  {item.label}
                </Link>
              );
            })}
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
              {navItems.map((item) => {
                if (item.type === "dropdown") {
                  return (
                    <button
                      key={item.label}
                      type="button"
                      className="py-2 text-left transition-colors duration-300 hover:text-red-600"
                      onClick={() => {
                        window.location.href = "/new-launch/m3m-gic-manesar";
                      }}
                    >
                      NEW LAUNCH – M3M GIC MANESAR
                    </button>
                  );
                }

                if (item.type === "hash") {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="py-2 transition-colors duration-300 hover:text-red-600"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="py-2 transition-colors duration-300 hover:text-red-600"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
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
