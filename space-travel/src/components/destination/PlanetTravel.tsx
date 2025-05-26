type PlanetTravelProps = {
  slug?: string;
};

import data from "@/lib/content.json";

export default function PlanetTravel({ slug }: PlanetTravelProps) {
  const { destinations } = data;

  const travelInfo = !slug
    ? destinations[0]
    : destinations.find((item) => item.name.toLowerCase() === slug);

  return (
    <div className="flex w-full pt-10 border-t border-[#979797]">
      <div className="flex flex-col flex-1 gap-3 text-center uppercase lg:text-left">
        <h3 className=" text-accentColor">Avg. Distance</h3>
        <p className="text-3xl font-title">{travelInfo?.distance}</p>
      </div>
      <div className="flex flex-col flex-1 gap-3 text-center uppercase lg:text-left">
        <h3 className=" text-accentColor">Est. travel time</h3>
        <p className="text-3xl font-title">{travelInfo?.travel}</p>
      </div>
    </div>
  );
}
