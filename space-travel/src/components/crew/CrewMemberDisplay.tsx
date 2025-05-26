type CrewMemberDisplayProps = {
  crewMemberName?: string;
};

import data from "@/lib/content.json";
import Image from "next/image";

export default function CrewMemberDisplay({
  crewMemberName,
}: CrewMemberDisplayProps) {
  const { crew } = data;

  const imageSrc = !crewMemberName
    ? crew[0].images.webp
    : crew.find((item) => {
        return item.name === crewMemberName;
      })?.images.webp;

  return (
    <div className="flex mt-14 min-h-[400px] lg:min-h-[460px] lg:flex-1 lg:mt-0 w-[446px] relative lg:static bottom-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0">
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
