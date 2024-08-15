"use client";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import WaterWaveWrapper from "@/components/visualEffects/WaterWaveWrapper";

import { IoHome } from "react-icons/io5";
import { FaArrowRight, FaUser } from "react-icons/fa";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import Profile from "@/components/ui/Profile";
import FancyButton from "@/components/ui/FancyButton";
import LiveClock from "@/components/ui/LiveClock";

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => (
        <div className="w-full p-10">
          <div className="max-w-2xl mx-auto">
            <Card title="Ui Components">
              <div className="grid grid-cols-4">
                <Button>Basic button</Button>
                <Button>
                  <IoHome />
                  Basic button
                </Button>
                <Button isIcon>
                  <FaUser />
                </Button>
                <Button link="https://google.com">Google</Button>
              </div>
              <Input type="text" placeholder="Full Name" />
              <Input type="text" placeholder="Full Name" icon={<FaUser />} />
              <TextArea placeholder="Full Name" icon={<FaUser />} />
              <Profile />
              <div className="w-[350px]">
                <FancyButton text="Talk to me" icon={<FaArrowRight />} />
              </div>
              <LiveClock timeZone="Iran/Kerman" />
            </Card>
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  );
}
