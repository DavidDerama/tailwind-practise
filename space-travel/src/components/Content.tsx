import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
  className?: string;
};

export default function Content({ children, className }: ContentProps) {
  return (
    <section
      className={cn(
        "w-full max-w-[1100px] mx-auto pb-10 px-10 xl:px-0 lg:h-[60vh]",
        className
      )}
    >
      {children}
    </section>
  );
}
