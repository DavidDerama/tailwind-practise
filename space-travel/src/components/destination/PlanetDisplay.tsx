import data from "@/lib/content.json";
import Image from "next/image";

type PlanetDisplayProps = {
  slug?: string;
};

export default function PlanetDisplay({ slug }: PlanetDisplayProps) {
  const { destinations } = data;

  const imageSrc = !slug
    ? destinations[0].images.webp
    : destinations.find((item) => item.name.toLowerCase() === slug)?.images
        .webp;

  return (
    <div className="flex items-center justify-center py-8 lg:py-0">
      <div className="relative size-60 lg:size-96">
        <Image
          alt="Moon"
          width={445}
          height={445}
          src={imageSrc!}
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
