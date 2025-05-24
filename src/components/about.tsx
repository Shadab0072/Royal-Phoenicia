import { assets } from "../assets/index.js";

const images = [assets.room1, assets.dining, assets.counter];

export default function AboutUs() {
  return (
    <section className="flex h-screen py-8 md:py-16 px-3 md:px-8 bg-white w-full overflow-hidden">
      {/* Scrollable Images */}
      <div className="w-1/2 h-full overflow-y-scroll no-scrollbar">
        <div className="flex flex-col h-fit gap-48">
          {images.map((img, index) => (
            <img
              key={index}
              src={typeof img === "string" ? img : img.src}
              alt={`About image ${index + 1}`}
              className="w-full h-screen object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Static Text Content */}
      <div className="w-1/2 h-full flex items-center px-16 bg-white">
        <div className="max-w-xl">
          <h2 className="text-4xl font-serif mb-4">About Us</h2>
          <p className="text-gray-500 text-lg font-bold leading-relaxed">
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
