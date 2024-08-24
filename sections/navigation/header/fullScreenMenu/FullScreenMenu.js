import { motion } from "framer-motion";
import { menuSlide } from "./Animation";
import Curve from "./Curve";
import Profile from "@/components/ui/Profile";
import NavLink from "./NavLink";
import Link from "next/link";
import MenuCard from "./MenuCard";

export default function FullScreenMenu() {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen w-full bg-black fixed top-0 right-0 text-right text-primary-foreground z-40 font-oswald"
    >
      {/* profile */}
      <div className=" relativew-full pl-[5%]">
        <div className="absolute top-8 ">
          <Profile />
        </div>
      </div>

      {/* menu and card */}
      <div className="absolute bottom-32 w-full px-[5%]">
        <div className="grid relative lg:grid-cols-[1fr,500px] grid-cols-[1fr,1fr]  gap-3">
          <div className="pl-4 flex flex-col justify-end">
            {navItems.map((item, index) => (
              <NavLink key={index} data={{ ...item, index }} />
            ))}
          </div>
          {/* menu about card */}
          <MenuCard />
        </div>
      </div>

      {/* footer links */}
      <div className="w-[95%] pl-[5%] absolute bottom-8">
        <div className="flex flex-wrap items-center justify-between uppercase text-white">
          {/* left */}
          <div className="flex items-center gap-4 ">
            <Link href="/">Legal Notice</Link>
            <Link href="/">404</Link>
            <Link href="/">Leagalstyle</Link>
          </div>
          {/* middle */}
          <div className="flex items-center gap-4 ">
            <Link href="/">Githup</Link>
            <Link href="/">Instagram</Link>
          </div>
          {/* right */}
          <div className="flex items-center gap-4 ">
            <Link href="/">&copy; 2024</Link>
          </div>
        </div>
      </div>

      {/* curve svg effect */}
      <Curve />
    </motion.div>
  );
}

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Featured",
    href: "/#featured",
  },
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];
