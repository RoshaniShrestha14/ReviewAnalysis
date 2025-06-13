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
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background:
          // "linear-gradient(90deg, #DBEAFE 0%, #D6EFFA 31%, #D3F3F7 50%, #CCFBF1 100%)",
          "linear-gradient(90deg, #CCFBF1 0%, #D3F3F7 41%, #D6EFFA 50%, #DBEAFE 100%)",
        color: "#1E293B", // Slate-800 equivalent for text
      }}
    >
      <div className="max-w-7xl w-full flex flex-col items-center justify-center gap-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#0E3F83] to-[#030E1D] bg-clip-text text-transparent mb-3">
          How It works
        </h2>
        <p className="text-lg md:text-xl font-medium mb-12 max-w-3xl mx-auto">
          Analyzing reviews is simple with our three-step process.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center max-w-[250px]">
                {/* Number Circle */}
                <div className="bg-[#1E3A8A] text-white font-semibold w-12 h-12 flex items-center justify-center rounded-full text-lg mb-3">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-700">{step.description}</p>
              </div>

              {/* Arrow between steps (desktop only) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:flex flex-col justify-center items-center px-6">
                  <span className="text-5xl font-extrabold text-[#0E3F83]">
                    →
                  </span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
