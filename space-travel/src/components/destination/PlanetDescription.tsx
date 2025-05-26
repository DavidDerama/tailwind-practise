type PlanetTextProps = {
  slug?: string;
};

import data from "@/lib/content.json";

export default function PlanetDescription({ slug }: PlanetTextProps) {
  const { destinations } = data;

  const descriptionText = !slug
    ? destinations[0].description
    : destinations.find((item) => item.name.toLowerCase() === slug)
        ?.description;
  return (
    <p className="text-center text-accentColor lg:text-left">
      {descriptionText}
    </p>
  );
}
