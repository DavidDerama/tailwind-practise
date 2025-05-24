import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="fixed flex justify-between w-full pt-0 lg:pt-[40px] z-50 scroll-pt-[40px]">
      <Link href="../" className="mt-[24px] mx-[40px] lg:mx-[64px] mb-[24px]">
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
