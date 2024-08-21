import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function Timeline({ children }) {
  return <div className="flex flex-col gap-y-6">{children}</div>;
}

export function TimelineItem({
  date,
  title,
  subTitle,
  link = "",
  tag = "",
  isProject,
}) {
  return (
    <div className="flex flex-wrap gap-12 h-min justify-start relative">
      {/* date timeline */}
      <div
        className="h-auto flex-none break-words whitespace-pre"
        style={{ width: `${isProject ? "0" : ""}` }}
      >
        <p className="text-secondary-foreground">{date}</p>
      </div>

      {/* rightside */}
      <div
        className="flex gap-x-2"
        style={{ transform: `${isProject ? "translateX(-45deg)" : ""} ` }}
      >
        <div className="flex flex-col gap-0.5">
          {/* title */}
          <div className="text-primary-foreground break-words whitespace-pre">
            <p className="leading-6 font-medium text-sm">{title}</p>
          </div>
          {/* subtitle */}
          <div className="flex items-center gap-2">
            {link ? (
              <Link href={link} target="_blank">
                <Body link={link} tag={tag} subTitle={subTitle} />
              </Link>
            ) : (
              <Body tag={tag} subTitle={subTitle} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Body({ tag, subTitle, link }) {
  return (
    <div className="text-secondary-foreground flex items-center">
      <p className="text-sm font-normal leading-6 mt-1">{subTitle}</p>
      {link ? <FiArrowUpRight /> : null}
      {tag ? (
        <div className="ms-2 rounded-[20px] bg-white/5 py-0.5 px-1.5">
          <p className="text-[10px] font-normal text-secondary-foreground">
            {tag}
          </p>
        </div>
      ) : null}
    </div>
  );
}
