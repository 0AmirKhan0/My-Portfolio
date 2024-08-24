import { cn } from "@/lib/utils";

export default function ToggleButton({ open, setOpen }) {
  return (
    <button
      onClick={() => setOpen((o) => !o)}
      className="fixed right-4 top-4 m-5 z-50 w-20 h-20 rounded-full bg-[#323e56] cursor-pointer"
    >
      <div className="relative flex items-center justify-center">
        <div className="flex flex-col gap-y-2 w-[30px] transform transition-all duration-300 overflow-hidden">
          <div
            className={cn(
              "bg-white h-[2px] w-7 transform transition-all duration-300 origin-left",
              {
                "translate-x-10": open,
              }
            )}
          />
          <div
            className={cn(
              "bg-white h-[2px] w-7 rounded transform transition-all duration-300 delay-75",
              {
                "translate-x-10": open,
              }
            )}
          />
          <div
            className={cn(
              "bg-white h-[2px] w-3 rounded transform transition-all duration-300 delay-75",
              {
                "translate-x-10": open,
              }
            )}
          />
        </div>
        <div className="absolute w-[30px] transform transition-all duration-300">
          <span
            className={cn(
              "text-white text-6xl transform transition-all duration-300 font-light",
              !open && "hidden "
            )}
          >
            &times;
          </span>
        </div>
      </div>
    </button>
  );
}
