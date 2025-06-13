
import React from "react";

const features = [
  {
    imgSrc: "/Trust.png",
    title: "Trust & Accuracy",
    description:
      "Advanced AI algorithms ensure reliable detection of fake reviews",
    gradient: "bg-gradient-to-b from-[#F0FDFA] to-[#CCFBF1]",
  },
  {
    imgSrc: "/Fast.png",
    title: "Fast Analysis",
    description: "Get instant insights on review authenticity in seconds.",
    gradient: "bg-gradient-to-b from-[#FEFCE8] to-[#FEF9C3]",
  },
  {
    imgSrc: "/User.png",
    title: "User-Friendly",
    description: "Simple interface designed for both consumers and businesses.",
    gradient: "bg-gradient-to-b from-[#EFF6FF] to-[#DBEAFE]",
  },
];

const AboutUs = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background: "linear-gradient(to bottom right, #ECFEFF, #D1FAE5)",
      }}
    >
      <div className="max-w-7xl w-full flex flex-col items-center justify-center gap-12 py-16">
        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-700 to-teal-400 bg-clip-text text-transparent mb-4">
            About us
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            We're on a mission to help consumers make informed decisions by
            identifying authentic product reviews using cutting-edge AI
            technology.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.gradient} w-full max-w-[360px] rounded-[20px] shadow-[0_6px_24px_rgba(0,0,0,0.05)] 
                transform transition-all duration-300 ease-in-out 
                hover:scale-105 hover:shadow-[0_12px_32px_rgba(13,148,136,0.3)]
                flex flex-col items-center text-center px-6 py-8`}
            >
              <img
                src={feature.imgSrc}
                alt={feature.title}
                className="w-22 h-22 object-contain mb-6"
              />
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
