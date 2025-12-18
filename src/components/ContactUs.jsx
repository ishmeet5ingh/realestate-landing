import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

const ContactUs = () => {
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    // Replace with your API call
    setTimeout(() => {
      setStatus({ type: "success", message: "Thanks! We’ll reach out within 24 hours." });
    }, 900);
  };

  return (
    <section id="contact" className="bg-white font-display py-10 sm:py-14 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6 mb-6 sm:mb-10">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-red-600">
              Contact
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-black leading-tight">
              Talk to a property advisor
            </h2>
            <p className="mt-2 text-sm sm:text-base text-black/70 max-w-xl">
              Share requirements for residential or commercial properties. Get verified options, pricing guidance,
              and a clear next step.
            </p>
          </div>

          <a
            href="tel:+15551234567"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white px-4 py-2.5 text-sm font-semibold hover:bg-black/90 transition"
          >
            Call now
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Left: Contact card */}
          <aside className="lg:col-span-5 rounded-3xl border border-black/10 bg-black text-white p-5 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">Get in touch</h3>
                <p className="mt-1 text-sm text-white/75 leading-relaxed">
                  Prefer WhatsApp, call, or email—responses are quick and focused.
                </p>
              </div>

              <div className="hidden sm:block rounded-2xl border border-white/10 bg-white/10 px-3 py-2">
                <div className="text-[11px] text-white/70">Response time</div>
                <div className="text-sm font-semibold">Under 24 hrs</div>
              </div>
            </div>

            {/* Info blocks */}
            <div className="mt-5 sm:mt-7 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-red-600 text-white">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70">Phone</p>
                    <a
                      href="tel:+15551234567"
                      className="text-sm font-semibold hover:text-red-500 transition"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-red-600 text-white">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70">Email</p>
                    <a
                      href="mailto:realestate@gmail.com"
                      className="text-sm font-semibold hover:text-red-500 transition break-all"
                    >
                      realestate@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-red-600 text-white">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70">Office</p>
                    <p className="text-sm font-semibold">
                      123 Premium Plaza, Downtown Business District
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-red-600 text-white">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70">Hours</p>
                    <p className="text-sm font-semibold">Mon–Sat • 10:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="mt-5 sm:mt-7 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-white/80 leading-relaxed">
                By submitting, you agree to be contacted about properties via phone/WhatsApp/email.
              </p>
            </div>
          </aside>

          {/* Right: Form */}
          <div className="lg:col-span-7 rounded-3xl border border-black/10 bg-white p-5 sm:p-7">
            <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-black mb-1.5" htmlFor="fullName">
                    Full name (required)
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    required
                    type="text"
                    autoComplete="name"
                    className="w-full rounded-xl border border-black/15 bg-white px-3.5 py-3 text-sm text-black
                               placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-red-600
                               focus:ring-offset-2 focus:ring-offset-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-black mb-1.5" htmlFor="phone">
                    Phone (required)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    required
                    type="tel"
                    autoComplete="tel"
                    className="w-full rounded-xl border border-black/15 bg-white px-3.5 py-3 text-sm text-black
                               placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-red-600
                               focus:ring-offset-2 focus:ring-offset-white"
                    placeholder="+91 / +1 ..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-black mb-1.5" htmlFor="email">
                  Email (optional)
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-xl border border-black/15 bg-white px-3.5 py-3 text-sm text-black
                             placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-red-600
                             focus:ring-offset-2 focus:ring-offset-white"
                  placeholder="name@company.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-black mb-1.5" htmlFor="lookingFor">
                    Looking for
                  </label>
                  <select
                    id="lookingFor"
                    name="lookingFor"
                    className="w-full rounded-xl border border-black/15 bg-white px-3.5 py-3 text-sm text-black
                               focus:outline-none focus:ring-2 focus:ring-red-600
                               focus:ring-offset-2 focus:ring-offset-white"
                    defaultValue="Residential"
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Investment">Investment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-black mb-1.5" htmlFor="budget">
                    Budget range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full rounded-xl border border-black/15 bg-white px-3.5 py-3 text-sm text-black
                               focus:outline-none focus:ring-2 focus:ring-red-600
                               focus:ring-offset-2 focus:ring-offset-white"
                    defaultValue="On Request"
                  >
                    <option>On Request</option>
                    <option>Under ₹50L</option>
                    <option>₹50L – ₹1Cr</option>
                    <option>₹1Cr – ₹3Cr</option>
                    <option>₹3Cr+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-black mb-1.5" htmlFor="message">
                  Requirements (required)
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-xl border border-black/15 bg-white px-3.5 py-3 text-sm text-black
                             placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-red-600
                             focus:ring-offset-2 focus:ring-offset-white resize-none"
                  placeholder="Preferred city, area, configuration, possession timeline..."
                />
                <p className="mt-1.5 text-[11px] text-black/60">
                  Add location + timeline to receive accurate options faster.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-xs text-black/60">
                  Fields marked “required” help us respond accurately.
                </p>

                <button
                  type="submit"
                  disabled={status.type === "loading"}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white
                             hover:bg-red-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status.type === "loading" ? "Sending..." : "Send message"}
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {status.type !== "idle" && (
                <div
                  className={`rounded-2xl border p-3 text-sm ${
                    status.type === "success"
                      ? "border-black/10 bg-black/5 text-black"
                      : "border-black/10 bg-black/5 text-black"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
