import React from "react";

const features = [
  {
    icon: "✅",
    title: "Real Vs Fake Detection",
    description:
      "Advanced AI algorithms to detect fake online reviews with high accuracy.",
  },
  {
    icon: "👍",
    title: "Sentiment Analysis",
    description:
      "Identify the emotional tone of reviews as positive, negative or neutral.",
  },
  {
    icon: "🔵",
    title: "Review Scoring",
    description:
      "Get quantifiable scores that measure review authenticity and sentiment.",
  },
  {
    icon: "📊",
    title: "Aspect-Based Insights",
    description:
      "Discover sentiment trends for specific product aspects like quality or price.",
  },
];

const KeyFeatures = () => {
  return (
    <div className="w-full bg-gray-900 text-white py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3">Key Features</h2>
        <p className="text-gray-300">
          Our powerful tools help you analyze reviews and make better decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white text-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all h-full flex flex-col justify-between"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
