import React from "react";
import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white font-display">
      {/* Background Image - Full Visibility */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Footer Content with Semi-transparent Container */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 ">
        {/* Semi-transparent dark overlay container */}
        <div className="bg-black/70 backdrop-blur-sm rounded-lg p-8 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 lg:divide-x lg:divide-white/20">
            {/* Company Info */}
            <div className="lg:px-6">
              <div className="mb-6">
                <img
                  src="/infratechlogo.png"
                  alt="Roots Infratech"
                  className="h-28 w-auto"
                />
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Roots Infratech is a trusted real estate partner in Gurugram,
                specializing in premium commercial and residential properties.
                We provide clients with the perfect investment opportunities
                backed by transparent processes and excellent service.
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:px-6">
              <h3 className="text-xl font-bold mb-6 tracking-wider">
                QUICK LINKS
              </h3>
              <ul className="space-y-3 text-white/80 text-sm">
                <li>
                  <a
                    href="#about"
                    className="hover:text-yellow-500 transition-colors"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-yellow-500 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#awards"
                    className="hover:text-yellow-500 transition-colors"
                  >
                    Awards & Recognition
                  </a>
                </li>
                <li>
                  <a
                    href="#career"
                    className="hover:text-yellow-500 transition-colors"
                  >
                    Career
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-yellow-500 transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-yellow-500 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className="hover:text-yellow-500 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#disclaimer"
                    className="hover:text-yellow-500 transition-colors"
                  >
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="hover:text-yellow-500 transition-colors"
                  >
                    Terms & Condition
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="lg:px-6">
              <h3 className="text-xl font-bold mb-6 tracking-wider">
                SOCIAL LINKS
              </h3>
              <ul className="space-y-3 text-white/80 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-500 transition-colors flex items-center gap-2"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-500 transition-colors flex items-center gap-2"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-500 transition-colors flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-500 transition-colors flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="lg:px-6">
              <h3 className="text-xl font-bold mb-6 tracking-wider">
                CONTACT US
              </h3>
              <div className="space-y-4 text-white/80 text-sm">
                <p className="font-semibold text-yellow-500">Roots Infratech</p>
                <p className="leading-relaxed">
                  Roots Infratech, Sohna Road
                  <br />
                  Gurgaon, Haryana 122018, IN
                </p>
                <div className="space-y-2">
                  <p>
                    <span className="text-yellow-500">Phone:</span>{" "}
                    <a
                      href="tel:+919810277378"
                      className="hover:text-yellow-500 transition-colors"
                    >
                      +91-9810xxxxxx
                    </a>
                  </p>
                  <p>
                    <span className="text-yellow-500">Email:</span>{" "}
                    <a
                      href="mailto:info@rootsinfratech.com"
                      className="hover:text-yellow-500 transition-colors"
                    >
                      info@rootsinfratech.com
                    </a>
                  </p>
                  <p>
                    <span className="text-yellow-500">Web:</span>{" "}
                    <a
                      href="https://rootsinfratech.com"
                      className="hover:text-yellow-500 transition-colors break-all"
                    >
                      rootsinfratech.com
                    </a>
                  </p>
                </div>
                <p className="text-xs text-white/60 pt-2">
                  Agent RERA (Gurgaon) - HRERA-949/2017/1154
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/20">
        <div className="bg-black/80 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex justify-center items-center text-xs sm:text-sm text-white/70">
              <p>© Copyright 2025 - Roots Infratech. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 flex flex-col gap-3 z-50">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919810277378"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-2xl hover:scale-110 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 sm:w-7 sm:h-7 text-white"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center shadow-2xl hover:scale-110 transition-all"
          aria-label="Scroll to top"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 sm:w-6 sm:h-6 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
