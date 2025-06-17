import {
  FaLightbulb,
  FaPaintBrush,
  FaUsers,
  FaHandsHelping,
} from "react-icons/fa";
import { GiSparkles } from "react-icons/gi";

const learnItems = [
  {
    icon: <FaLightbulb className="text-yellow-400" />,
    title: "Age-Specific Lesson Planning",
    description:
      "Craft yoga sessions tailored for different age groups (2–16 years).",
    color: "from-yellow-50 to-amber-100 border-yellow-200",
  },
  {
    icon: <FaPaintBrush className="text-pink-500" />,
    title: "Creative Story-Based Themes",
    description:
      "Learn how to integrate play, imagination, and yoga seamlessly.",
    color: "from-rose-50 to-pink-100 border-pink-200",
  },
  {
    icon: <FaUsers className="text-purple-500" />,
    title: "Group Management",
    description: "Handle small & large kids groups with confidence and fun.",
    color: "from-purple-50 to-violet-100 border-purple-200",
  },
  {
    icon: <FaHandsHelping className="text-teal-500" />,
    title: "Discipline & Engagement",
    description: "Techniques to maintain focus and discipline in a joyful way.",
    color: "from-cyan-50 to-teal-100 border-teal-200",
  },
];

export default function WhatYouLearn() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      {/* Decorative Floating Blobs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-100 opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-pink-200 opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute inset-0 pointer-events-none z-0">
        <GiSparkles className="absolute top-12 left-12 text-pink-300 text-3xl animate-spin-slow" />
        <GiSparkles className="absolute bottom-12 right-20 text-yellow-300 text-xl animate-bounce" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <span className="inline-block mb-4 text-pink-700 bg-pink-100 px-4 py-1 rounded-full text-sm font-medium shadow">
          🎯 What You'll Master
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
          Elevate Your{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
            Teaching Journey
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Explore the creative, playful, and structured elements that make kids
          yoga unforgettable.
        </p>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {learnItems.map((item, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl border shadow-xl hover:scale-[1.025] transition-all relative overflow-hidden`}
            >
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-md">
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <div className="absolute bottom-4 right-6 text-xs text-gray-400 font-semibold">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Rating Progress or Badge */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-yellow-100 text-yellow-700 text-sm px-4 py-2 rounded-full font-semibold shadow-sm mb-2">
            ⭐ Rated 4.9/5 by 120+ Educators
          </div>
          <p className="text-sm text-gray-500 mb-6">
            1000+ kids benefited from these training modules
          </p>

          {/* CTA Button */}
        </div>
      </div>
    </section>
  );
}
