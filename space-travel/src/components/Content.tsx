import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
  className?: string;
};

export default function Content({ children, className }: ContentProps) {
  return (
    <section
      className={cn("max-w-[1100px] mx-auto h-full mb-[128px]", className)}
    >
      {children}
    </section>
  );
}
