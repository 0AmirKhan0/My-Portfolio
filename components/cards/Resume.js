import Image from "next/image";
import Card from "../ui/Card";
import SignatureImg from "@/public/assets/images/signature/signature-1.png";
import Button from "../ui/Button";

import { FaDownload } from "react-icons/fa";
import Socials from "../ui/Socials";

export default function ResumeCard() {
  return (
    <Card className="md:h-full">
      <p className="text-lg font-medium text-primary-foreground">
        Front-End Developer and Aspiring Web Wizard I&apos;m a passionate
        Front-End Developer and student, currently diving deep into the world of
        React and Next.js. With 2 years of hands-on experience in crafting
        user-friendly and dynamic web interfaces, I&apos;m all about turning
        design visions into pixel-perfect realities. As I continue to learn and
        grow in the field, I&apos;m not just coding—I&apos;m honing my craft,
        exploring new technologies, and preparing to bring innovative solutions
        to the web. My journey in web development has been filled with
        responsive designs, interactive components, and a relentless pursuit of
        excellence. Whether it&apos;s through mastering new frameworks or
        building exciting projects, I&apos;m dedicated to making the web a more
        intuitive and beautiful place, one line of code at a time.
      </p>
      {/* signature */}
      <div className="flex justify-center">
        <Image src={SignatureImg} alt="Amir khan signature" />
      </div>
      {/* social and resume btn */}
      <div className="flex items-center justify-between ">
        {/* social */}
        <Socials />
        <Button>
          <FaDownload />
          <span>Resume</span>
        </Button>
      </div>
    </Card>
  );
}
