export default function GastronomySection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <div className="w-[60px] text-center mx-auto border border-gray-500 p-4 mb-4">
            <span className="text-xl text-gray-600 font-light">IV</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-2">
          <div className="md:col-span-2 text-center">
            <h1 className="text-4xl md:text-7xl font-serif text-gray-800 mb-6 leading-tight">
              Exceptional gastronomy served in elegant spaces.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
