export default function GastronomySection() {
  return (
    <section className="py-8 md:py-24 bg-white">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex justify-center mb-4 md:mb-12">
          <div className="w-[40px] md:w-[60px] text-center mx-auto border border-gray-500 p-2 md:p-4 mb-2 md:mb-4">
            <span className="text-lg md:text-xl text-gray-600 font-light">IV</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 mb-2">
          <div className="md:col-span-2 text-center">
            <h1 className="text-2xl md:text-4xl lg:text-7xl font-serif text-gray-800 mb-2 md:mb-6 leading-tight">
              Exceptional gastronomy served in elegant spaces.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
