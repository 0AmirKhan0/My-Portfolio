import MeCard from "@/components/cards/Me";
import ResumeCard from "@/components/cards/Resume";
import Heading from "@/components/heading/Heading";
import Card from "@/components/ui/Card";

export default function AboutSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="02" title_1="About" title_2="Me" />
      <div className="space-y-4 py-8">
        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          {/* me card */}
          <MeCard />
          <ResumeCard />

          <Card title="Background">Background</Card>
          <Card title="Gallery" className="2xl:hidden">
            Gallery
          </Card>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <div className="space-y-4">
            <Card title="Instructor">Instructor</Card>
            <Card title="Certifications">Certifications</Card>
          </div>
          <div className="space-y-4">
            <Card title="Stack">Stack</Card>
            <Card title="Expriance">Expriance</Card>
            <Card title="Education">Education</Card>
          </div>
          <div className="hidden 2xl:flex">
            <Card title="Gallery">Gallery</Card>
          </div>
        </div>
      </div>
    </div>
  );
}
