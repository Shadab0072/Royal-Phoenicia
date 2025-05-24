import { assets } from "../assets/index.js";

export default function CorporateEvents() {
  return (
    <section className="relative h-[400px] md:h-[600px] overflow-hidden min-h-[60vh] md:min-h-screen">
      <div className="absolute inset-0 p-4 md:p-12">
        <img
          src={
            typeof assets.hotelManagement === "string"
              ? assets.hotelManagement
              : assets.hotelManagement.src
          }
          alt="Corporate Events"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Outer white box */}
        <div className="bg-white p-2 md:p-4 px-2 md:px-4 max-w-xs md:max-w-md shadow-md">
          {/* Inner border box */}
          <div className="border border-gray-400 p-4 md:p-16">
            <p className="text-base md:text-lg text-gray-600 font-serif mb-2 md:mb-4 text-center">
              Favorite Hotel
            </p>
            <p className="text-base md:text-lg text-gray-600 font-serif mb-2 md:mb-4 text-center">
              Business and Event Spaces
            </p>
            <p className="text-base md:text-lg text-gray-600 font-serif mb-2 md:mb-4 text-center">
              Diverse Dining Options
            </p>
            <p className="text-base md:text-lg text-gray-600 font-serif mb-2 md:mb-4 text-center">
              Multiple Swimming Pools
            </p>
            <p className="text-base md:text-lg text-gray-600 font-serif mb-2 md:mb-4 text-center">
              Family-Friendly Amenities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}