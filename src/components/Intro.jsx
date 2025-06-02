import React from "react";
import { motion } from "framer-motion";

const ReviewCheckerLanding = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        background:
          "linear-gradient(126deg, rgba(30, 30, 30, 1) 35%, rgba(250, 99, 255, 1) 77%, rgba(191, 149, 51, 1) 100%)",
      }}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10 pl-20 -mt-35">
        {/* Left Section */}
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            <span className="bg-gradient-to-r from-[#A5EAF4] to-[#F674FF] bg-clip-text text-transparent">
              Check if a review is real or fake with AI
            </span>
          </h1>
          <p className="mb-6 text-gray-300">
            Identify authentic product reviews with our powerful AI sentiment
            analysis. Get accurate insights and make informed purchase
            decisions.
          </p>
          <div className="flex gap-12">
            <button
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2))",
                borderRadius: "20px",
                padding: "8px 16px",
                color: "#fff",
                fontWeight: 500,
                backdropFilter: "blur(6px)",
                boxShadow: "0 2px 6px rgba(255, 255, 255, 0.2)",
              }}
            >
              Paste a Review
            </button>

            <button
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2))",
                borderRadius: "20px",
                padding: "8px 16px",
                color: "#fff",
                fontWeight: 500,
                backdropFilter: "blur(6px)",
                boxShadow: "0 2px 6px rgba(255, 255, 255, 0.2)",
              }}
            >
              View Dashboard
            </button>
          </div>
        </div>

        {/* Right Section - Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img
            src="/illustration-review.png"
            alt="Review illustration"
            className="w-[450px] max-w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewCheckerLanding;
