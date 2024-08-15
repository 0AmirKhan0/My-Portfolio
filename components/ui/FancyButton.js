export default function FancyButton({ icon, text }) {
  return (
    <a className="fancy-btn">
      <div className="group  bg-black hover:bg-transparent text-primary-foreground hover:text-black rounded-[108em] py-[1vw] px-[2vw] flex items-center font-bold gap-2 text-3xl cursor-pointer transition-all duration-75">
        <span>{text}</span>
        <span className="group-hover:translate-x-[.75vw] transition-transform duration-100">
          {icon}
        </span>
      </div>
    </a>
  );
}
