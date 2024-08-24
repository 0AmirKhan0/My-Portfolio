import { HeadingAnimatedSvg } from "@/components/heading/HeadingAnimatedSvg";
import Image from "next/image";
import Link from "next/link";
import ShadeImg from "@/public/assets/images/background/card-shade.jpg";

export default function MenuCard() {
  return (
    <div className="w-full h-auto gap-10 bg-[#1e36ea] rounded-[10px] flex flex-col justify-between items-start relative overflow-hidden pt-10 px-[25px] pb-5 shadow-md">
      {/* header */}
      <div className="w-full relative">
        <p className="uppercase text-start font-bold text-white text-2xl">
          Who is Amir Khan?
        </p>
      </div>
      {/* menu */}
      <div className="z-40 w-full flex flex-col gap-y-[5px] justify-center items-start relative">
        {myLinks.map((link, i) => (
          <Link
            href={link.link}
            key={i}
            className="text-[#fdf823] uppercase font-bold text-[6vw] lg:text-[5vw] leading-[85%] transition-colors duration-75 text-start hover:text-white"
          >
            {link.title}
          </Link>
        ))}
      </div>
      {/* image shade */}
      <Image
        src={ShadeImg}
        alt="card shade image"
        className="block w-full h-full absolute inset-0 mix-blend-overlay"
      />
    </div>
  );
}

const myLinks = [
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Background",
    link: "#about",
  },
  {
    title: "EXPERIENCE",
    link: "#about",
  },
  {
    title: "TECH STACK",
    link: "#about",
  },
  {
    title: "GALLERY",
    link: "#about",
  },
];
