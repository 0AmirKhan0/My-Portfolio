import BackgroundCard from "@/components/cards/Background";
import ExperienceCard from "@/components/cards/Experience";
import MeCard from "@/components/cards/Me";
import ResumeCard from "@/components/cards/Resume";
import StackCard from "@/components/cards/Stack";
import Heading from "@/components/heading/Heading";
import Gallery from "@/components/ui/Gallery";

export default function AboutSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="02" title_1="About" title_2="Me" />
      <div className="space-y-4 py-8">
        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <MeCard />
          <ResumeCard />
          <BackgroundCard />
          <div className="2xl:hidden">
            <Gallery />
          </div>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <StackCard />
          <ExperienceCard />
          <div className="hidden 2xl:flex">
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
}
