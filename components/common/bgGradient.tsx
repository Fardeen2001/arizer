import { cn } from "@/lib/utils";
import React from "react";

const BgGradient = ({ className }: { className?: string }) => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-32"
    >
      <div
        style={{
          clipPath: `polygon(
              50% 0%,
              61% 35%,
              98% 35%,
              68% 57%,
              79% 91%,
              50% 70%,
              21% 91%,
              32% 57%,
              2% 35%,
              39% 35%
            )`,
        }}
        className={cn(
          "absolute left-[calc(50%-11rem)] aspect-[1155/678] w-[36.1875rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-br from-emerald-200 via-teal-500 to-cyan-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72rem]",
          className
        )}
      />
    </div>
  );
};

export default BgGradient;
