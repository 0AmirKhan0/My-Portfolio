import MagneticWrapper from "@/components/visualEffects/MagneticWrapper";
import Header from "./navigation/header/Header";
import { FaArrowRight } from "react-icons/fa";
import FancyButton from "@/components/ui/FancyButton";
import LiveClock from "@/components/ui/LiveClock";
import ScrollDown from "@/components/ui/ScrollDown";

export default function LandingSection() {
  return (
    <div className="relative h-screen overflow-auto p-8">
      {/* Header */}
      <Header />

      {/* Slogan */}
      <div className="mx-auto mt-8 leading-[14vw] lg:leading-[10vw] 2xl:leading-[9rem] font-medium h-[40rem] tracking-[-0.3rem]">
        <div className="flex flex-col h-full justify-center items-center text-primary-foreground text-[18vw] 2xl:text-[12rem] uppercase lg:text-[14vw]">
          <div>
            <span>Code</span>
          </div>
          <div>
            <span>Crafting</span>
          </div>
          <div className="flex flex-col gap-1 last:items-center">
            <span>Brilliance</span>

            <div className="w-full text-[1rem] leading-[1.4rem] tracking-[-0.02rem] flex flex-col uppercase font-normal md:justify-start px-3.5">
              <span>Empowering innovation</span>
              <span>through inspired design</span>
              <span>where challenges spark creativity</span>
              <span>and solutions redefine possibilites.</span>
            </div>
          </div>

          {/* Magnetic scroll down */}

          <MagneticWrapper className="mt-10">
            <ScrollDown />
          </MagneticWrapper>
        </div>
      </div>

      {/* Show magnetic fancy button on small screen and hide it on md screen */}
      <div className="flex justify-start m-5 z-20 md:hidden">
        <MagneticWrapper>
          <FancyButton text="Let's talk" icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>

      {/* Live clock */}
      <div className="flex justify-end">
        <LiveClock timeZone="Asia/Tehran" />
      </div>
    </div>
  );
}
