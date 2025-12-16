// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/HomeHero";
import WhyChooseUs from "./components/WhyChooseUs";
import PropertyShowcase from "./components/PropertyShowcase";
import ResidentialProjects from "./components/ResidentialProjects";
import TopCommercialProjects from "./components/TopCommercialProjects";
import ContactUs from "./components/ContactUs";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <PropertyShowcase/>
        <WhyChooseUs />
        <ResidentialProjects />
        <TopCommercialProjects/>
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
