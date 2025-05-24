import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
  className?: string;
};

export default function Main({ children, className }: MainProps) {
  return (
    <main
      className={cn(
        "z-0 w-screen flex-1 pt-[136px] bg-[url('/home/background-home-desktop.jpg')] bg-cover flex justify-center items-center",
        className
      )}
    >
      {children}
    </main>
  );
}
