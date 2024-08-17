import Header from "@/components/cards/featured/Header";

export default function FeaturedCard({ logo, title, tag, video, active }) {
  return (
    <div className="link w-full h-full bg-secondary-background border border-border shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2">
      {/* Header */}
      <Header title={title} tag={tag} />
    </div>
  );
}
