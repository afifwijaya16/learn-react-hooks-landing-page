import React from "react";
import HeroSection from "../../components/HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";
import Pricing from "../../components/Pricing";
function HomePage() {
  return (
    <div>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <Pricing />
      <HeroSection {...homeObjTwo} />
    </div>
  );
}

export default HomePage;
