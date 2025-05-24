import Link from "next/link";

const links = [
  { order: "00", label: "HOME", src: "../" },
  { order: "01", label: "DESTINATION", src: "../" },
  { order: "02", label: "CREW", src: "../" },
  { order: "03", label: "TECHNOLOGY", src: "../" },
];

export default function Nav() {
  const linkEl = links.map(({ label, order, src }) => {
    return (
      <li key={order} className="min-h-[96px] flex items-center justify-center">
        <Link href={src} className="flex gap-1">
          <span>{order}</span>
          {label}
        </Link>
      </li>
    );
  });

  return (
    <nav className="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 w-[736px]">
      <ul className="px-[64px] flex gap-12">{linkEl}</ul>
    </nav>
  );
}
