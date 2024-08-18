import { FaGithub, FaInstagram } from "react-icons/fa";
import Button from "./Button";

export default function Socials() {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {socials.map((social, i) => (
        <Button key={i} link={social.link} isIcon>
          <span className="w-7 h-7 grid place-items-center">{social.icon}</span>
        </Button>
      ))}
    </div>
  );
}

const socials = [
  {
    icon: <FaGithub className="w-4 h-4" />,
    link: "https://github.com/0AmirKhan0",
    userName: "0AmirKhan0",
  },
  {
    icon: <FaInstagram className="w-5 h-5" />,
    link: "https://www.instagram.com/amirkhanap",
    userName: "amirkhanap",
  },
];
