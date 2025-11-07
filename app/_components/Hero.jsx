"use client";

import React, { useState } from "react";
import { Zap, GraduationCap, ArrowRight, BookOpen, Search } from "lucide-react";

// --- Visualization Component ---
const AiPathVisualization = () => {
  return (
    <div className="relative h-60 w-full md:w-96 p-4 perspective-1000">
      <div className="absolute inset-0 bg-indigo-500/10 rounded-xl blur-3xl opacity-50 animate-pulse-slow"></div>

      {/* Core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex flex-col items-center justify-center h-48 w-48 rounded-full bg-gray-800 shadow-2xl shadow-indigo-500/40">
          <Zap className="h-10 w-10 text-indigo-400 animate-spin-slow" />
          <span className="absolute bottom-4 text-[10px] font-semibold text-white/50 tracking-wide">
            PROCESSING KNOWLEDGE
          </span>
        </div>
      </div>

      {/* Floating dots animation */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-cyan-400"
          style={{
            top: `${20 + i * 10}%`,
            left: `${10 + i * 15}%`,
            width: "6px",
            height: "6px",
            animation: `flow 4s ease-in-out ${i * 0.4}s infinite`,
          }}
        />
      ))}

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.7; }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes flow {
          0% { opacity: 0; transform: translateY(-10px) scale(0.8); }
          50% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(10px) scale(0.8); }
        }
      `}</style>
    </div>
  );
};

// --- Hero Section ---
const HeroSection = ({ input, setInput }) => {
  const handleGenerateClick = () => {
    console.log("Generate button clicked:", input);
  };

  return (
    <section className="min-h-[88vh] flex items-center justify-center relative overflow-hidden bg-gray-950 text-white">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath fill='%232e2e3e' d='M0 0h20v20H0zM20 20h20v20H20z'/%3E%3Cpath fill='%231e1e2e' d='M20 0h20v20H20zM0 20h20v20H0z'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="container mx-auto max-w-7xl px-6 py-16 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left side */}
        <div className="lg:w-[70%] text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3 flex items-center justify-center lg:justify-start">
            <GraduationCap className="w-4 h-4 mr-2" />
            The Future of Learning
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="text-white ">AI Course Generator</span>
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500">
              Custom Learning Paths
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
            Build your own AI-powered roadmap to mastery. Get a personalized
            learning path tailored to your goals, pace, and experience — powered
            by intelligent algorithms designed to help you grow faster.
          </p>

          {/* Input and button */}
          <div className="mt-8">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="e.g., Become a full-stack developer in 3 months"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleGenerateClick()}
                className="w-full p-4 pl-12 pr-40 bg-gray-800 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              />
              <button
                onClick={handleGenerateClick}
                className="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-5 rounded-lg flex items-center transition-colors"
              >
                Generate Path <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <AiPathVisualization />
        </div>
      </div>
    </section>
  );
};

// --- Main Component ---
const Hero = () => {
  const [courseInput, setCourseInput] = useState("");

  return (
    <div className="font-sans  bg-gray-50 dark:bg-gray-900">
      <HeroSection input={courseInput} setInput={setCourseInput} />

      {/* Placeholder for future content */}
      {/* <main className="container mx-auto max-w-7xl px-4 py-8">
        <div className="text-center text-gray-600 dark:text-gray-400 p-12 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <BookOpen className="w-10 h-10 mx-auto mb-3 text-indigo-500" />
          <p>Generated learning paths will appear here!</p>
        </div>
      </main> */}
    </div>
  );
};

export default Hero;
