import React from "react";
import { Phone, Mail, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white font-display">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Get in Touch */}
          <div>
            <h3 className="text-base sm:text-xl font-bold mb-4 sm:mb-6">Get in touch</h3>

            <div className="space-y-3 sm:space-y-4 text-white/70 text-sm sm:text-base">
              <p className="leading-relaxed text-xs sm:text-sm">
                123 Premium Plaza, Suite 456,
                <br />
                Downtown Business District
                <br />
                Metropolitan City, State 12345
              </p>

              <div className="flex items-center gap-3 pt-2 sm:pt-4">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                <a href="tel:+15551234567" className="hover:text-red-600 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                <a href="mailto:realestate@gmail.com" className="hover:text-red-600 transition-colors">
                  realestate@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-xl font-bold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2.5 sm:space-y-3 text-white/70 text-sm">
              <li>
                <a href="#home" className="hover:text-red-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-red-600 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-red-600 transition-colors">
                  Blog/ News
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-600 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h3 className="text-base sm:text-xl font-bold mb-4 sm:mb-6">Properties</h3>
            <ul className="space-y-2.5 sm:space-y-3 text-white/70 text-sm">
              <li>
                <a href="#commercial" className="hover:text-red-600 transition-colors">
                  Commercial Projects
                </a>
              </li>
              <li>
                <a href="#residential" className="hover:text-red-600 transition-colors">
                  Residential Projects
                </a>
              </li>
              <li>
                <a href="#coming-soon" className="hover:text-red-600 transition-colors">
                  Coming Soon
                </a>
              </li>
              <li>
                <a href="#plots" className="hover:text-red-600 transition-colors">
                  Plots
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-base sm:text-xl font-bold mb-4 sm:mb-6">Follow us</h3>

            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <a
                href="#"
                className="flex items-center gap-3 text-white/70 hover:text-red-600 transition-colors group"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="tracking-wide">INSTAGRAM</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 text-white/70 hover:text-red-600 transition-colors group"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="tracking-wide">FACEBOOK</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 text-white/70 hover:text-red-600 transition-colors group"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <span className="tracking-wide">X (TWITTER)</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 text-white/70 hover:text-red-600 transition-colors group"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="tracking-wide">LINKEDIN</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 text-white/70 hover:text-red-600 transition-colors group"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="tracking-wide">YOUTUBE</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-xs sm:text-sm text-white/60">
            <p>© 2025 All rights reserved by Realestate</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 md:gap-6">
              <a href="#privacy" className="hover:text-red-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-red-600 transition-colors">
                Terms & Conditions
              </a>
              <a href="#disclaimer" className="hover:text-red-600 transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Buttons (mobile friendly) */}
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 flex flex-col gap-3 sm:gap-4 z-50">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/15551234567"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-white/90 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          {/* Kept monochrome (black/white) for your brand palette */}
          <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-black" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-white/90 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
          aria-label="Scroll to top"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 sm:w-6 sm:h-6 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
