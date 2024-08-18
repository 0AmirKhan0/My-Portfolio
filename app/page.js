import WaterWaveWrapper from "@/components/visualEffects/WaterWaveWrapper";
import AboutSection from "@/sections/About";
import FeaturedSection from "@/sections/Featured";
import LandingSection from "@/sections/Landing";

export default function Home() {
  return (
    // <WaterWaveWrapper
    //   imageUrl=""
    //   dropRadius="3"
    //   perturbance="3"
    //   resolution="2048"
    // >

    <div className="pb-8">
      {/* <LandingSection /> */}
      {/* <FeaturedSection /> */}
      <AboutSection />
    </div>

    // </WaterWaveWrapper>
  );
}
