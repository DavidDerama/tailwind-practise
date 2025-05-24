type PlanetTextProps = {
  slug?: string;
};

import data from "@/lib/content.json";

export default function PlanetDescription({ slug }: PlanetTextProps) {
  const contentData = data.destinations;

  const descriptionText = !slug
    ? contentData[0].description
    : contentData.find((item) => item.name.toLowerCase() === slug)?.description;
  return (
    <p className="text-center text-accentBackground lg:text-left">
      {descriptionText}
    </p>
  );
}
