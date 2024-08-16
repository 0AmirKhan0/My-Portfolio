import MagneticWrapper from "@/components/visualEffects/MagneticWrapper";
import Header from "./navigation/header/Header";
import { FaArrowRight } from "react-icons/fa";
import FancyButton from "@/components/ui/FancyButton";
import LiveClock from "@/components/ui/LiveClock";

export default function LandingSection() {
  return (
    <div className="relative h-screen overflow-hidden p-8">
      {/* Header */}
      <Header />

      {/* Show magnetic fancy button on small screen and hide it on md screen */}
      <div className="absolute bottom-36 left-10 z-20 md:hidden">
        <MagneticWrapper>
          <FancyButton text="Let's talk" icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>

      {/* Live clock */}
      <div className="absolute right-10 bottom-10">
        <LiveClock timeZone="Asia/Tehran" />
      </div>
    </div>
  );
}
