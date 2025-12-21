// src/pages/HomePage.jsx
import Hero from "../components/HomeHero";
import BottomCardsMobile from "../components/BottomCardsMobile";
import StatsExperience from "../components/StatsExperience";
import ResidentialProjects from "../components/ResidentialProjects";
import TopCommercialProjects from "../components/TopCommercialProjects";
import WhyChooseUs2 from "../components/WhyChooseUs2";
import Builders from "../components/Builders";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BottomCardsMobile />
      <StatsExperience />
      <ResidentialProjects />
      <TopCommercialProjects />
      <WhyChooseUs2 />
      <Builders />
    </>
  );
}
