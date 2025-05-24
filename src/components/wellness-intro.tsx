import { useState } from "react";
import { assets } from "../assets/index.js";

export default function WellnessIntro() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-36 flex flex-col items-center justify-center text-center min-h-screen">
      <div className="border border-gray-500 p-4 mb-8">
        <span className="text-xl text-gray-900 font-light">I</span>
      </div>

      <div className="container mx-auto px-4 max-w-3xl flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-700 mb-4 leading-relaxed">
          The stay at Wellness & pool Hotel RoyalPhoenicia means enjoying every moment.
        </h2>
        <p className="text-xl md:text-2xl font-serif text-gray-500 mb-8">
          Relax. Find inspiration. Be fascinated.
        </p>

        {/* Centered Button */}
        <div className="flex justify-center items-center">
          <button
            className={`relative px-8 py-3 rounded-full text-gray-700 transition-all duration-500 overflow-hidden flex items-center justify-center ${
              isHovered ? "border-0 w-40 h-40" : "border border-gray-600 w-40 h-20"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Hotel Text */}
            <span
              className={`absolute transition-all duration-500 text-lg font-medium ${
                isHovered ? "opacity-0 scale-90" : "opacity-100 scale-100"
              }`}
            >
              Hotel
            </span>

            {/* Arrow Image */}
            <span
              className={`absolute transition-all duration-500 ${
                isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
            >
              <img
                src={assets.button}
                alt="arrow"
                width={122}
                height={122}
                className="object-contain"
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}