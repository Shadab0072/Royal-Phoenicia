import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { assets } from "../assets/index.js"

export default function EventBoxes() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={typeof assets.corporation === "string" ? assets.corporation : assets.corporation.src}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Scrollable Boxes */}
      <div className="relative z-10 h-screen overflow-y-scroll snap-y snap-mandatory flex flex-col items-center gap-[100vh] py-20 px-4">
        
        {/* Box 1 */}
        <div className="snap-center border border-white/40 backdrop-blur-md shadow-xl p-4 w-full max-w-md">
          <div className="bg-white p-12 m-6 border border-gray-400">
            <h3 className="text-2xl font-serif mb-4 text-center">For companies</h3>
            <p className="text-gray-600 text-sm mb-6 text-center">
              Host your formal business meetings in a unique and refreshing setting. Enjoy elegant venues, comfortable
              accommodations, and exceptional cuisine that elevate every professional gathering.
            </p>
            <div className="flex justify-center">
              <button
                className={`relative border border-gray-300 px-6 py-2 rounded-full text-gray-600 text-sm transition-all duration-300 overflow-hidden ${
                  isHovered ? "pr-10" : ""
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="relative z-10">MORE</span>
                <span
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center transition-all duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <ArrowRight size={14} />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="snap-center border border-white/40 backdrop-blur-md shadow-xl p-4 w-full max-w-md">
          <div className="bg-white p-12 m-6 border border-gray-400">
            <h3 className="text-2xl font-serif mb-4 text-center">Family gatherings</h3>
            <p className="text-gray-600 text-sm mb-6 text-center">
              We know how much your event means to you—be it a jubilee, anniversary, or wedding, we’re here to make
              every detail count with elegance, care, and unforgettable experiences tailored just for you.
            </p>
            <div className="flex justify-center">
              <button
                className={`relative border border-gray-300 px-6 py-2 rounded-full text-gray-600 text-sm transition-all duration-300 overflow-hidden ${
                  isHovered ? "pr-10" : ""
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="relative z-10">MORE</span>
                <span
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center transition-all duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <ArrowRight size={14} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
