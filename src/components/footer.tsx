export default function Footer() {
  return (
    <footer className="text-white bg-[#2f6483] min-h-[60vh] md:min-h-screen">
      <div className="group flex flex-col md:flex-row transition-all duration-1000 ease-in-out items-center md:items-stretch justify-center md:justify-between">
        {/* Left Side */}
        <div className="flex-1 w-full flex flex-col items-center md:items-start p-4 md:p-10 lg:p-16 h-auto md:h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 transition-all duration-1000 ease-in-out group-hover:md:flex-[0.6] gap-6 md:gap-0 w-full">
            <div className="space-y-4 md:space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-xl md:text-3xl font-semibold hover:scale-105 transition-all duration-900">Rooms</h3>
              <h3 className="text-xl md:text-3xl font-semibold hover:scale-105 transition-all duration-900">Wellness</h3>
              <h3 className="text-xl md:text-3xl font-semibold hover:scale-105 transition-all duration-900">Gastro</h3>
              <h3 className="text-xl md:text-3xl font-semibold hover:scale-105 transition-all duration-900">Hotel</h3>
              <h3 className="text-xl md:text-3xl font-semibold hover:scale-105 transition-all duration-900">Events</h3>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-lg md:text-2xl font-serif mb-2 md:mb-4">More about rooms</h4>
              <ul className="space-y-1 md:space-y-2 text-white/70 text-xs md:text-base">
                <li className="transition-colors duration-300 hover:text-white">120 comfortable rooms</li>
                <li className="transition-colors duration-300 hover:text-white">Dinings</li>
                <li className="transition-colors duration-300 hover:text-white">Packages</li>
                <li className="transition-colors duration-300 hover:text-white">Pools</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-[#0e3b5d] flex-1 w-full flex flex-col items-center justify-center text-center p-4 md:p-10 lg:p-16 h-auto md:h-screen transition-all duration-1000 ease-in-out group-hover:md:flex-[0.4]">
          <div className="mb-4 md:mb-6 w-full flex flex-col items-center">
            <div className="relative w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4">
              <div className="absolute inset-0 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white font-serif text-xs md:text-sm">ROYAL</span>
              </div>
            </div>
            <h3 className="text-lg md:text-2xl font-serif mb-1">Wellness & Pools</h3>
            <h4 className="text-lg md:text-2xl font-serif mb-4 md:mb-6">Hotel Royal Phoenicia</h4>
            <div className="text-xs md:text-sm space-y-1 mb-4 md:mb-6">
              <p>Building 1288</p>
              <p>Road 3931, Block 339</p>
              <p>Umm Al Hasam – Manama</p>
              <p>Bahrain</p>
            </div>
            <div className="space-y-1 md:space-y-2 mb-4 md:mb-6">
              <p>+973 1730 7307</p>
              <p>info@royalphoeniciahotel.com</p>
              <p className="cursor-pointer underline underline-offset-4">Contacts →</p>
            </div>
            <div className="flex justify-center gap-2 md:gap-4 w-full">
              {/* Instagram */}
              <a href="#" className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white flex items-center justify-center hover:scale-110 transition-transform">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white flex items-center justify-center hover:scale-110 transition-transform">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              {/* YouTube */}
              <a href="#" className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white flex items-center justify-center hover:scale-110 transition-transform">
                <span className="sr-only">YouTube</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
