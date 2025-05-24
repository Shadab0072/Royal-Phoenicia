import { useEffect, useState } from "react";
import { assets } from "../assets/index.js";
import Header from "./header";

const bgImages = [assets.bg_1, assets.bg_2, assets.bg_3];

export default function HeroSection() {
  const [textVisible, setTextVisible] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    setTextVisible(true);

    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image Layers */}
      {bgImages.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentBgIndex ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
        >
          <img
            src={bg}
            alt={`Background ${index + 1}`}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "absolute",
              inset: 0,
            }}
            className="animate-zoom"
          />
        </div>
      ))}
      <Header />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
        <h1
          className={`text-6xl md:text-8xl font-serif mb-4 transition-all duration-[1500ms] ${
            textVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >
          Hotel
          <br />
          Royal Phoenicia
        </h1>
        <p
          className={`text-xl transition-all duration-[1500ms] delay-500 ${
            textVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          YOUR FAVOURITE PLACE. OUR FAMILY STORY.
        </p>
      </div>
    </section>
  );
}
