import Header from "@/components/cards/featured/Header";
import Video from "./Video";

export default function FeaturedCard({
  logo = null,
  title,
  tag,
  video,
  active,
}) {
  return (
    <div className="link w-full h-full bg-secondary-background border border-border shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2">
      {/* Header */}
      <Header title={title} tag={tag} />
      {/* Body */}
      <div className="relative flex flex-none flex-nowrap p-6 w-full items-center justify-center h-[550px] border border-border rounded-3xl">
        {/* Video */}
        <Video video={video} active={active} />
      </div>
    </div>
  );
}
