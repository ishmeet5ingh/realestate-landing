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
import BottomCardsMobile from "./components/BottomCardsMobile";
import StatsExperience from "./components/StatsExperience";
import WhyChooseUs2 from "./components/WhyChooseUs2";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <BottomCardsMobile />
        <StatsExperience/>
        {/* <PropertyShowcase/> */}
        {/* <WhyChooseUs /> */}/
        <ResidentialProjects />
        <TopCommercialProjects/>
        <WhyChooseUs2/>
        {/* <ContactUs /> */}
      </main>
      <Footer />
    </div>
  );
}
