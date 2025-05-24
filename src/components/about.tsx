import { assets } from "../assets/index.js";

const images = [assets.room1, assets.dining, assets.counter];

export default function AboutUs() {
  return (
    <section className="flex flex-col md:flex-row h-auto md:h-screen py-8 md:py-16 px-3 md:px-8 bg-white w-full overflow-hidden">
      {/* Scrollable Images */}
      <div className="w-full md:w-1/2 h-64 md:h-full overflow-x-auto md:overflow-y-scroll no-scrollbar flex-shrink-0">
        <div className="flex md:flex-col flex-row h-fit gap-6 md:gap-48">
          {images.map((img, index) => (
            <img
              key={index}
              src={typeof img === "string" ? img : img.src}
              alt={`About image ${index + 1}`}
              className="w-64 h-64 md:w-full md:h-screen object-cover rounded-xl md:rounded-none"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Static Text Content */}
      <div className="w-full md:w-1/2 h-auto md:h-full flex items-center px-4 md:px-16 bg-white mt-8 md:mt-0">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif mb-4">About Us</h2>
          <p className="text-gray-500 text-base md:text-lg font-bold leading-relaxed">
            Royal Phoenicia Hotel offers an array of top-tier facilities
            designed to enhance the comfort and convenience of every guest. The
            hotel features a luxurious spa and wellness center, where guests can
            indulge in soothing treatments and rejuvenating massages. For those
            seeking to maintain their fitness routine, the fully equipped gym
            provides a space for exercise, while the outdoor pool offers a
            relaxing environment to unwind.
            <br />
            <br />
            Dining at the hotel is a pleasure, with an on-site restaurant
            offering a diverse selection of cuisines in an elegant atmosphere.
            Additionally, the hotel provides business facilities, including
            meeting rooms and event spaces, ideal for corporate travelers. With
            its comprehensive range of services, Royal Phoenicia ensures an
            exceptional stay.
          </p>
        </div>
      </div>
    </section>
  );
}
