import React from "react";
import { homeObjThree , homeObjOne, homeObjTwo} from "./Data";
import HeroSection from "../../components/HeroSection";
import Pricing from "../../components/Pricing";

function Service() {
  return (
    <div>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <Pricing/>
      <HeroSection {...homeObjTwo} />
    </div>
  );
}

export default Service;
