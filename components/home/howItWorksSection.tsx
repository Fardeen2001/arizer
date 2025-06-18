import { BrainCircuit, FileOutput, FileText, MoveRight } from "lucide-react";
import React, { ReactNode } from "react";
type Step = {
  icon: ReactNode;
  label: string;
  description: string;
};
const steps: Step[] = [
  {
    icon: <FileText size={64} strokeWidth={1.5} />,
    label: "Upload your PDF",
    description:
      "Drag and drop your PDF file or click to select it from your device.",
  },
  {
    icon: <BrainCircuit size={64} strokeWidth={1.5} />,
    label: "AI Analysis",
    description:
      "Our Advanced AI processes and analyzes your document instantly.",
  },
  {
    icon: <FileOutput size={64} strokeWidth={1.5} />,
    label: "Get Your Summary",
    description: "Receive a clear, concise summary of your document.",
  },
];
const HowItWorksSection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      {" "}
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="text-center mb-16">
          <h2 className="font-bold text-xl uppercase mb-4 text-rose-500">
            How it works
          </h2>
          <h3 className="font-bold text-3xl max-w-2xl mx-auto">
            Transform any PDF into an easy-to-digest summary in three simple
            steps
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {steps?.map((step, index) => (
            <div className="relative flex items-stretch" key={index}>
              <StepItem {...step} />
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <MoveRight
                    size={32}
                    strokeWidth={1}
                    className="text-rose-400"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
const StepItem = ({ icon, label, description }: Step) => {
  return (
    <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10 hover:border-rose-500/5 transition-colors group w-full">
      <div className="flex flex-col h-full gap-4">
        <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-2xl bg-linear-to-r from-rose-500/10 to-transparent group-hover:from-rose-500/20 transition-colors">
          <div className="text-rose-500">{icon}</div>
        </div>
        <div className="flex flex-col flex-1 justify-between">
          <h4 className="text-center font-bold text-xl">{label}</h4>
          <p className="text-center text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};
