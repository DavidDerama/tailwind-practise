type CrewMemberDisplayProps = {
  crewMemberName?: string;
};

import data from "@/lib/content.json";
import Image from "next/image";

export default function CrewMemberDisplay({
  crewMemberName,
}: CrewMemberDisplayProps) {
  const contentData = data.crew;

  const imageSrc = !crewMemberName
    ? contentData[0].images.webp
    : contentData.find((item) => {
        return item.name === crewMemberName;
      })?.images.webp;

  return (
    <div className="flex mt-16 h-96 lg:h-full lg:flex-1 lg:mt-0">
      <div className="relative w-full h-full">
        <Image
          src={imageSrc!}
          width={576}
          height={602}
          alt="Crew Member"
          className="absolute inset-0 object-contain w-full h-full crew-image"
        />
      </div>
    </div>
  );
}
