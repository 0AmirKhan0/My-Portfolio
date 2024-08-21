import ContactCard from "@/components/cards/Contact";
import Heading from "@/components/heading/Heading";
import Card from "@/components/ui/Card";
import { FaPhoneVolume } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="03" title_1="Contact" title_2="Me" />
      <Card>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* contact card */}
          <div className="flex flex-col gap-8">
            <ContactCard
              title="Call us directly at"
              icon={<FaPhoneVolume className="fill-[#333] text-lg" />}
              text="034 - 31233 - 832"
              btnText="Call us"
            />
            <ContactCard
              title="Chat with us"
              icon={<MdEmail className="fill-[#333] text-lg" />}
              text="Test@email.com"
              btnText="Email us"
            />
          </div>
          {/* contact form */}
        </div>
      </Card>
    </div>
  );
}
