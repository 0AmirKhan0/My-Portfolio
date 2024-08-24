import AboutSection from "@/sections/About";
import ContactSection from "@/sections/Contact";
import FeaturedSection from "@/sections/Featured";
import LandingSection from "@/sections/Landing";

export default function Home() {
  return (
    <div className="pb-8">
      <LandingSection />
      <FeaturedSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
