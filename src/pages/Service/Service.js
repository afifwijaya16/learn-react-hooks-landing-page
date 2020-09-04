import React from "react";
import { homeObjThree } from "./Data";
import HeroSection from "../../components/HeroSection";
function Service() {
  return (
    <div>
      <HeroSection {...homeObjThree} />
    </div>
  );
}

export default Service;
