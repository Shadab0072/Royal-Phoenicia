import { assets } from '../assets/index.js';
import { Button } from "./ui/button";

const navLinks = ["ROOMS", "WELLNESS", "GASTRO", "HOTEL", "EVENTS", "CONTACT"];

export default function Header() {
  return (
    <header
      className={`top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out h-[160px]`}
    >
      <div className="backdrop-blur-xl border-b border-white h-full">
        <div className="flex items-center justify-between px-4 md:px-8 py-4">
          {/* Menu Button */}
          <button className="flex items-center gap-2 bg-[#032540] rounded-3xl hover:cursor-pointer text-white px-3 py-2 rounded">
            <span className="text-sm">Menu</span>
          </button>

          {/* Center Logo + Year + Stars */}
          <div className="flex items-center gap-4">
            <span className="text-gray-400 hover:text-white transition-all duration-300">
              2 0 2 2
            </span>

            {/* PNG Logo */}
            <div className="relative w-16 h-16">
              <img
                src={typeof assets.logo === 'string' ? assets.logo : assets.logo.src}
                alt="Royal Logo"
                className="object-contain rounded-full w-16 h-16"
              />
            </div>

            {/* Stars */}
            <div className="flex gap-1 text-gray-400 hover:text-white transition-all duration-300">
              {[1, 2, 3, 4].map((star) => (
                <span key={star}>★</span>
              ))}
            </div>
          </div>

          {/* Booking Button with Icons */}
          <Button className="bg-[#032540] hover:cursor-pointer text-white rounded-3xl flex items-center gap-2 px-4 py-2">
            Booking
          </Button>
        </div>

        {/* Nav Links */}
        <nav className="flex justify-center border-t  border-white">
          <ul className="flex">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="inline-block px-6 py-4 text-white text-sm hover:underline underline-offset-24 transition-all duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
