import { cn } from "@/lib/utils";
import PlanetDisplay from "./PlanetDisplay";
import { Link } from "next-view-transitions";
import PlanetDescription from "./PlanetDescription";
import PlanetTravel from "./PlanetTravel";

type PlanetInfoDisplayProps = {
  slug?: string;
};

const links = [
  { id: 1, label: "moon", src: "/destination" },
  { id: 2, label: "mars", src: "/destination/mars" },
  { id: 3, label: "europa", src: "/destination/europa" },
  { id: 4, label: "titan", src: "/destination/titan" },
];
export default function PlanetInfoDisplay({ slug }: PlanetInfoDisplayProps) {
  const linkEl = links.map(({ id, label, src }) => {
    return (
      <li
        key={id}
        className={cn(
          "border-b-2 border-transparent pb-3 text-accentColor hover:border-white",
          (label === slug || (!slug && label === "moon")) &&
            "border-white text-light"
        )}
      >
        <Link className="uppercase" href={src}>
          {label}
        </Link>
      </li>
    );
  });

  return (
    <div className="flex flex-col h-full gap-0 lg:flex-row lg:gap-8">
      <PlanetDisplay slug={slug} />
      <div className="flex flex-col items-start justify-center h-full gap-10 lg:px-[47px] mx-auto lg:mx-0 max-w-[500px]">
        <nav className="mx-auto lg:mx-0">
          <ul className="flex gap-8">{linkEl}</ul>
        </nav>
        <div className="flex flex-col gap-4">
          <h2 className="text-6xl text-center uppercase font-title lg:text-left">
            {slug ? slug : "moon"}
          </h2>
          <PlanetDescription slug={slug} />
          <PlanetTravel slug={slug} />
        </div>
      </div>
    </div>
  );
}
