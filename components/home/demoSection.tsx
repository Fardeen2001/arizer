import { Pizza } from "lucide-react";
import React from "react";

const DemoSection = () => {
  return (
    <section className="relative">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath: `polygon(
              74.1% 41.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
                47.6% 58.2%,
                45.1% 34.5%,
                27.5% 75.8%,
                17.9% 100%,
                0.1% 41.1%,
                27.5% 76.9%,
                75.1% 97.5%,
                74.4% 44.1%,
              
            )`,
            }}
            className="absolute left-[calc(50%+3rem)] aspect-[1155/678] w-[36.1875rem] -translate-x-1/2 bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-20 sm:left-[calc(50%+37rem)] sm:w-[72rem]"
          />
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center justify-center rounded-2xl bg-gray-100/80 backdrop-blur-xs border border-gray-500/20 mb-4">
            <Pizza className="w-6 h-6 text-rose-500" />
          </div>
          <h3 className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6">
            Watch how Arizer transform{" "}
            <span className="bg-linear-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
              this Next.js course PDF
            </span>{" "}
            into an easy-to-read summary!
          </h3>
        </div>
        <div className="flex justify-center items-center px-2 sm:px-2 lg:px-6"></div>
      </div>
    </section>
  );
};

export default DemoSection;
