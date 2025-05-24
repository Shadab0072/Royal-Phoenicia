import { useState } from "react";
import { assets } from "../assets/index.js";

const amenities = [
	{
		id: 1,
		title: "Fitness",
		subtitle: "Center",
		image: assets.gym,
		description:
			"For those looking to maintain their fitness routine while traveling, the hotel offers a well-equipped fitness center.",
	},
	{
		id: 2,
		title: "On-Site",
		subtitle: "Dining",
		image: assets.meal,
		description:
			"The hotel features an on-site restaurant serving a variety of cuisines, diverse dining experiences without leaving the premises.",
	},
	{
		id: 3,
		title: "Wellness Center",
		subtitle: "& Spa",
		image: assets.massage,
		description:
			"Guests can unwind with various spa services, including full-body massages, steam rooms, and other spa facilities.",
	},
];

export default function Amenities() {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<section className="flex h-[700px] w-full overflow-hidden relative bg-white">
			<div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
				<div className="w-[60px] text-center border border-white p-4">
					<span className="text-xl text-white font-light">III</span>
				</div>
			</div>

			{amenities.map((amenity, index) => (
				<div
					key={index}
					className={`relative h-full transition-all duration-700 ease-in-out overflow-hidden ${
						hoveredIndex === null
							? "w-1/3"
							: hoveredIndex === index
							? "w-[50%]"
							: "w-[25%]"
					}`}
					onMouseEnter={() => setHoveredIndex(index)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					{/* Background Image */}
					<div
						className="absolute inset-0 bg-cover bg-center transition-transform duration-1500 ease-in-out scale-100"
						style={{
							backgroundImage: `url(${
								typeof amenity.image === "string"
									? amenity.image
									: amenity.image.src
							})`,
							transform:
								hoveredIndex === index ? "scale(1.1)" : "scale(1)",
						}}
					>
						<div className="absolute inset-0 bg-black/40"></div>
					</div>

					{/* Text Content */}
					<div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6 z-10">
						<h2 className="text-5xl font-serif">{amenity.title}</h2>
						<h1 className="text-6xl font-serif">{amenity.subtitle}</h1>

						{hoveredIndex === index && (
							<p className="mt-4 text-sm md:text-base max-w-xs p-4 rounded-md transition-opacity duration-500">
								{amenity.description}
							</p>
						)}
					</div>
				</div>
			))}

			{/* Optional Button in Center */}
			<div className="absolute inset-x-0 bottom-4 md:bottom-10 flex justify-center">
				<button className="bg-white text-black px-6 py-3 rounded-full cursor-pointer shadow-md font-medium hover:bg-gray-200 transition">
					Spa & Wellness
				</button>
			</div>
		</section>
	);
}
