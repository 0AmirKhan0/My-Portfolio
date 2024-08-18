import Image from "next/image";
import Card from "../ui/Card";
import MyImg from "@/public/assets/images/gallery/img-2.jpg";
import { cn } from "@/lib/utils";

export default function MeCard() {
  return (
    <Card className="2xl:h-full overflow-hidden">
      <div className="w-full h-[400px] sm:h-[500px] ">
        <Image
          src={MyImg}
          alt="Amir Khan"
          className="object-cover h-full absolute inset-0 "
        />
        {/* tags */}
        <div className="absolute top-[65%] space-y-2">
          <Tag
            text="Hello universe 👋"
            className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-lg"
          />
          <Tag
            text="I'm Amir Khan"
            className="rounded-tl-lg rounded-tr-2xl rounded-br-2xl rounded-bl-lg"
          />
          <Tag
            text="Front-end developer"
            className="rounded-tl-lg rounded-tr-2xl rounded-br-2xl rounded-bl-lg"
          />
          <Tag
            text="Online instructore"
            className="rounded-tl-lg rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
          />
        </div>
      </div>
    </Card>
  );
}

function Tag({ className, text }) {
  return (
    <div className={cn("bg-black/[0.7] w-fit py-1.5 px-3 ", className)}>
      <p className="text-primary-foreground leading-[110%] font-bold">{text}</p>
    </div>
  );
}
