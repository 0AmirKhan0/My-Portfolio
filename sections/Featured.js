import FeaturedCard from "@/components/cards/FeaturedCard";
import ExpandableFeatured from "@/components/expandables/ExpandableFeatured";
import Heading from "@/components/heading/Heading";

import { FeaturedData } from "@/data/Featured";

export default function FeaturedSection() {
  const { title, tag, video } = FeaturedData[0];
  return (
    <div className="py-24 px-3 lg:px-8">
      {/* heading */}
      <Heading number="01" title_1="Featured" title_2="Work" />

      {/*Main Featured card */}
      <FeaturedCard active title={title} tag={tag} video={video} />
      <div className="mt-24 ">
        <ExpandableFeatured />
      </div>
    </div>
  );
}
