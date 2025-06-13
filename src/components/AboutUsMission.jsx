import React from "react";

const AboutUsMission = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-16"
      style={{
        background:
          "linear-gradient(90deg, #F0FDFA 0%, #E6FFFA 50%, #CCFBF1 100%)",
      }}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Our Mission Box - Bigger + stronger shadow */}
        <div
          className="rounded-[20px] px-8 py-10 shadow-[0_10px_30px_rgba(0,0,0,0.15)]
           transform transition-all duration-300 ease-in-out 
                     hover:scale-105 hover:shadow-[0_12px_32px_rgba(13,148,136,0.3)] 
                     flex flex-col px-8 py-10"
          style={{ backgroundColor: "#E6FFFA", marginLeft: "60px" }}
        >
          <h2 className="text-3xl font-bold mb-6 text-teal-700">Our Mission</h2>
          <p className="text-gray-800 mb-5 text-lg leading-relaxed">
            In today's digital marketplace, fake reviews are undermining
            consumer trust and distorting purchasing decisions. We believe
            everyone deserves access to authentic, reliable product feedback.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Our analyzer combines natural language processing, machine learning,
            and sentiment analysis to create a powerful tool that helps
            distinguish genuine reviews from fabricated ones, empowering smarter
            purchasing decisions.
          </p>
        </div>

        {/* What We Do Box - Bigger + consistent style */}
        <div
          className="w-full max-w-[480px] rounded-[20px] shadow-[0_6px_24px_rgba(0,0,0,0.08)] 
                     transform transition-all duration-300 ease-in-out 
                     hover:scale-105 hover:shadow-[0_12px_32px_rgba(13,148,136,0.3)] 
                     flex flex-col items-center text-center px-8 py-10 bg-white mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-teal-700">What We Do</h2>
          <ul className="text-gray-800 list-disc list-inside space-y-4 text-left text-lg ">
            <li>
              Detect and filter out fake reviews using advanced AI algorithms
            </li>
            <li>
              Deliver fast and accurate review authenticity analysis in seconds
            </li>
            <li>
              Provide deep sentiment insights to understand customer experiences
            </li>
            <li>Help brands build credibility and strengthen customer trust</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUsMission;
