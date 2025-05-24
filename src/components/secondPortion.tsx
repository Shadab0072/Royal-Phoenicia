import { useState } from "react";
import { assets } from "../assets/index.js";

const packages = [
	{
		id: 1,
		title: "Rooms",
		image: assets.room1,
	},
	{
		id: 2,
		title: "Pools",
		image: assets.pool,
	},
	{
		id: 3,
		title: "Dining",
		image: assets.dining,
	},
];

export default function SecondPortion() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<section className="min-h-screen py-36">
			<div className="container mx-auto text-center">
				<div className="w-[60px] text-center mx-auto border border-gray-500 p-4 mb-36">
					<span className="text-xl text-gray-600 font-light">II</span>
				</div>

				<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
					{packages.map((pkg, index) => (
						<div
							key={pkg.id}
							className="relative overflow-hidden group md:h-[500px] cursor-pointer bg-[#f9f5ef]"
						>
							{/* IMAGE HIDDEN INITIALLY - FADE IN ON HOVER */}
							<div
								className="absolute inset-0 bg-cover bg-center opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
								style={{
									backgroundImage: `url(${pkg.image})`,
									backgroundPosition:
										index === 0
											? "left 25%"
											: index === 1
											? "center"
											: "right 25%",
								}}
							>
								<div className="absolute inset-0 bg-black/30" />
							</div>

							{/* LEFT FADED BORDER */}
							<div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-white/40 to-transparent z-10 pointer-events-none" />

							{/* BOTTOM FADED BORDER */}
							<div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-white/40 to-transparent z-10 pointer-events-none" />

							{/* TEXT LAYER */}
							<div className="relative z-20 flex h-full items-center justify-center p-8 text-[#032540] group-hover:text-white transition-colors duration-700">
								<h1 className="text-7xl font-serif group-hover:scale-125 transform transition-transform duration-700">
									{pkg.title}
								</h1>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Centered Button */}
			<div className="flex justify-center mt-16 items-center">
				<button
					className={`relative px-8 text-gray-700 transition-all duration-500 overflow-hidden flex items-center justify-center ${
						isHovered
							? "border-0 w-40 h-40"
							: "border border-gray-600 w-40 h-15"
					}`}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					{/* Accommodation Text */}
					<span
						className={`absolute transition-all duration-500 text-lg font-medium ${
							isHovered ? "opacity-0 scale-90" : "opacity-100 scale-100"
						}`}
					>
						Accommodation
					</span>

					{/* Arrow Image */}
					<span
						className={`absolute transition-all duration-500 ${
							isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
						}`}
					>
						<img
							src={assets.button}
							alt="arrow"
							width={122}
							height={122}
							className="object-contain"
						/>
					</span>
				</button>
			</div>
		</section>
	);
}
