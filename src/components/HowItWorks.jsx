import React from "react";

const steps = [
  {
    number: "01",
    title: "Paste Your Review",
    description:
      "Simply paste the product review that you want to analyze into our text area.",
  },
  {
    number: "02",
    title: "AI Analysis",
    description:
      "Our advanced AI model processes the review text for authenticity and sentiment.",
  },
  {
    number: "03",
    title: "Get Insights",
    description:
      "Receive detailed insights about authenticity, sentiment, and important keywords.",
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-[#0D0B1A] text-white py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">How It Works</h2>
      <p className="text-lg md:text-xl mb-12">
        Analyzing reviews is simple with our three-step process.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center md:text-left md:mx-6 max-w-[250px]">
              {/* Circle number */}
              <div className="bg-blue-600 text-white font-bold w-10 h-10 flex items-center justify-center rounded-full mb-3">
                {step.number}
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
              {/* Description */}
              <p className="text-sm text-gray-300">
                {step.description}
              </p>
            </div>

            {/* Arrow - show only between steps on md+ */}
            {index !== steps.length - 1 && (
              <div className="hidden md:flex items-center justify-center text-3xl text-gray-500">
                <span className="mx-4">→</span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
