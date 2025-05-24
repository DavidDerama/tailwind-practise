import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="fixed flex justify-between w-full pt-[40px] z-50">
      <Link href="../" className="pt-[24px] pl-[64px] pb-[24px]">
        <div className="relative size-12">
          <Image
            src="/shared/logo.svg"
            width={48}
            height={48}
            alt="Website Logo"
            className="absolute inset-0 object-cover w-full h-full rounded-lg"
          />
        </div>
      </Link>
      <Nav />
    </header>
  );
}
