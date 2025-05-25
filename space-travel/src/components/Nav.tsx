"use client";

import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

const links = [
  { order: "00", label: "HOME", src: "../", pathName: null },
  {
    order: "01",
    label: "DESTINATION",
    src: "/destination",
    pathName: "/destination",
  },
  { order: "02", label: "CREW", src: "/crew", pathName: "/crew" },
  {
    order: "03",
    label: "TECHNOLOGY",
    src: "/technology",
    pathName: "/technology",
  },
];

export default function Nav() {
  const pathname = usePathname();
  const linkEl = links.map(({ label, order, src, pathName }) => {
    return (
      <li
        key={order}
        className={cn(
          "min-h-[96px] flex items-center justify-center border-b-2 border-transparent hover:border-white",
          pathname.includes(pathName!)
            ? "border-white"
            : !pathName && pathname.length === 1 && "border-white"
        )}
      >
        <Link href={src} className="flex gap-2 tracking-[2px]">
          <span className="font-bold">{order}</span>
          {label}
        </Link>
      </li>
    );
  });

  return (
    <nav className="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 pr-[64px] pl-[117px] lg:pl-[159px]">
      <ul className="flex gap-12">{linkEl}</ul>
    </nav>
  );
}
