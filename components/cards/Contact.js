import Button from "../ui/Button";

export default function ContactCard({ title, icon, text, btnText }) {
  return (
    <div className="bg-primary-background border border-border rounded-lg relative overflow-hidden py-5 pl-[25px] shadow-md ">
      <div className="z-20 flex flex-col gap-8 justify-between items-start ">
        {/* header */}
        <div className="flex items-center gap-x-2">
          <span className="bg-white w-8 h-8 grid rounded-lg place-items-center">
            {icon}
          </span>
          <h1>{title}</h1>
        </div>
        {/* body */}
        <div>
          <h2 className="font-bold text-2xl">{text}</h2>
        </div>
        <Button className="!w-24">{btnText}</Button>
      </div>
    </div>
  );
}
