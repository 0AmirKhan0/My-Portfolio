import ContactCard from "@/components/cards/Contact";
import Heading from "@/components/heading/Heading";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import { FaPhoneVolume, FaProjectDiagram, FaUser } from "react-icons/fa";
import { MdEmail, MdSubject } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

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
          <div className="lg:col-span-2 bg-secondary-background border border-border rounded-lg space-y-6 relative overflow-hidden py-5 px-[25px] shadow-md">
            <div className="flex flex-col lg:flex-row justify-between mb-8 gap-8">
              <Input type="text" placeholder="Full Name" icon={<FaUser />} />
              <Input
                type="email"
                placeholder="Email Address"
                icon={<MdEmail />}
              />
            </div>
            <div className="flex justify-between mb-8 gap-8">
              <Input type="text" placeholder="Subject" icon={<MdSubject />} />
            </div>
            {/* multiple select wrapper */}
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="font-bold text-lg">
                  What services are you in need for?
                </h1>
                <div className="flex flex-wrap items-center justify-between mb-4 gap-8">
                  {/* services */}
                </div>
              </div>
            </div>
            {/* multiple select wrapper */}
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="font-bold text-lg">What is your budget ?</h1>
                <div className="flex flex-wrap items-center justify-between mb-4 gap-8">
                  {/* budget options */}
                </div>
              </div>
            </div>
            {/* textarea message */}

            <TextArea
              placeholder="Tell us about your project"
              icon={<FaProjectDiagram />}
            />
            <div className="w-full flex justify-end">
              <Button className="!w-44 !py-3 !text-xl">
                <span>Send</span>
                <SiMinutemailer />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
