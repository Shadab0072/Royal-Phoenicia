import { assets } from "../assets/index.js";

const packages = [
	{
		title: "Royal Weekend Escape Package",
		subtitle: "From BHD 250 / Per person / 3 Night",
		season: "All season",
		image: assets.weakend_1,
	},
	{
		title: "Family Fun Staycation",
		subtitle: "From BHD 150 / 4 person / 2 Night",
		season: "All season",
		image: assets.weakend_2,
	},
	{
		title: "Luxury Business Suite",
		subtitle: "From BHD 300 / Per person / 2 Night",
		season: "All season",
		image: assets.weakend_3,
	},
];

export default function StayPackages() {
	return (
		<section className="bg-[#f8f3eb] py-36 min-h-screen flex flex-col items-center">
			<h1 className="text-6xl font-serif text-center mb-20 md:mb-36">
				Stay Packages
			</h1>

			<div
				className="flex gap-8 md:gap-12 overflow-x-auto scroll-smooth pb-8 px-2 md:px-8 w-full max-w-7xl"
				style={{ scrollSnapType: "x mandatory" }}
				onWheel={(e) => {
					const container = e.currentTarget;
					if (e.deltaY !== 0) {
						container.scrollLeft += e.deltaY;
					}
				}}
			>
				{packages.map((item, index) => (
					<div
						key={index}
						className="w-[90vw] md:w-[400px] lg:w-[500px] h-[500px] relative flex-shrink-0 rounded-2xl shadow-xl bg-white border border-gray-200 hover:scale-105 transition-transform duration-300"
						style={{ scrollSnapAlign: "start" }}
					>
						<div className="group w-full h-full overflow-hidden relative rounded-2xl">
							{/* Background Image */}
							<img
								src={
									typeof item.image === "string"
										? item.image
										: item.image.src
								}
								alt={item.title}
								className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
							/>

							{/* Overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end items-center text-center px-6 py-10 text-white z-10 gap-4">
								<span className="text-xs md:text-sm font-semibold tracking-widest uppercase opacity-80">
									{item.season}
								</span>
								<h3 className="text-2xl md:text-3xl font-serif font-bold leading-snug drop-shadow-lg">
									{item.title}
								</h3>
								<p className="text-base md:text-lg font-light opacity-90">
									{item.subtitle}
								</p>

								<div className="flex gap-4 mt-6">
									<button className="border border-white text-black px-6 py-2 text-sm rounded-full cursor-pointer bg-gray-200 hover:scale-105 backdrop-blur-xl transition-all duration-300 font-semibold shadow-md">
										MORE
									</button>
									<button className="border border-white p-2 rounded-full hover:scale-110 backdrop-blur-xl cursor-pointer transition-all duration-300 bg-white/80 shadow-md">
										<img
											src={
												typeof assets.bagIcon === "string"
													? assets.bagIcon
													: assets.bagIcon.src
											}
											className="w-4"
											alt=""
										/>
									</button>
								</div>
							</div>

							{/* White Border */}
							<div className="absolute inset-0 border-2 border-white opacity-80 z-0 pointer-events-none rounded-2xl" />
						</div>
					</div>
				))}
			</div>

			{/* Hide scrollbar */}
			<style>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
		</section>
	);
}
