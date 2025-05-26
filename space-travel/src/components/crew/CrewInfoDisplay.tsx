import CrewMemberDisplay from "./CrewMemberDisplay";
import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";

type CrewInfoDisplay = {
  slug?: string;
};

const links = [
  { id: 1, src: "/crew" },
  { id: 2, src: "/crew/mark-shuttleworth" },
  { id: 3, src: "/crew/victor-glover" },
  { id: 4, src: "/crew/anousheh-ansari" },
];

import data from "@/lib/content.json";
import CrewMemberDescription from "./CrewMemberDescription";

export default function CrewInfoDisplay({ slug }: CrewInfoDisplay) {
  const { crew } = data;

  const crewMemberName = slug
    ?.split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  const memberRole = !slug
    ? crew[0].role
    : crew.find((item) => item.name === crewMemberName)?.role;

  const linkEl = links.map(({ id, src }) => {
    return (
      <li key={id}>
        <Link href={src}>
          <div
            className={cn(
              "bg-primary size-3 lg:size-4 rounded-full hover:bg-primary hover:opacity-100",
              src.includes(slug!) || (!slug && src === "/crew")
                ? "bg-primary"
                : "opacity-20"
            )}
          />
        </Link>
      </li>
    );
  });

  return (
    <div className="flex flex-col h-full gap-0 lg:flex-row lg:gap-8 lg:[792px]">
      <div className="relative flex flex-col items-start justify-center flex-1 h-full gap-10 py-10 mx-auto lg:mx-0 lg:py-0 max-w-[400px] lg:max-w-screen-lg">
        <div className="flex flex-col items-center gap-6 lg:items-start">
          <h2 className="flex flex-col gap-4 text-5xl text-left uppercase font-title lg:text-center ">
            <span className="text-2xl text-center text-accentColor lg:text-left">
              {!slug ? "Commander" : memberRole}
            </span>
            <span className="text-center lg:text-left">
              {!slug ? "Douglas Hurley" : crewMemberName}
            </span>
          </h2>
          <CrewMemberDescription crewMemberName={crewMemberName} />
        </div>
        <nav className="absolute -translate-x-1/2 bottom-1 lg:translate-x-0 lg:left-0 left-1/2">
          <ul className="flex gap-4 lg:gap-10">{linkEl}</ul>
        </nav>
      </div>
      <CrewMemberDisplay crewMemberName={crewMemberName} />
    </div>
  );
}
