import React from "react";

export default function ReminderAnalyze() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#1e1b2e] to-[#100f1c] text-white px-4 text-center">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        Ready to separate real reviews from fake ones?
      </h1>
      <p className="text-md md:text-lg mb-8 max-w-xl">
        Try our review analyzer now and get instant insights about any product
        review.
      </p>
      <button className="bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition duration-300">
        Start Analyzing
      </button>
    </div>
  );
}
