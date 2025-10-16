"use client";
import { useState } from "react";
import Link from "next/link";
import { Shield, Users, MessageCircle, CreditCard } from "lucide-react";

const featuredThreats = [
	{
		id: 1,
		title: "Personal Safety",
		description:
			"Learn how to protect your personal information and identity online",
		icon: Shield,
		color: "bg-blue-500",
	},
	{
		id: 2,
		title: "Social Media",
		description: "Stay safe while connecting with friends and sharing content",
		icon: Users,
		color: "bg-purple-500",
	},
	{
		id: 3,
		title: "WhatsApp Forwards",
		description: "Identify and handle misinformation in messaging apps",
		icon: MessageCircle,
		color: "bg-green-500",
	},
	{
		id: 4,
		title: "Online Banking",
		description: "Secure your financial transactions and banking activities",
		icon: CreditCard,
		color: "bg-red-500",
	},
];

const InformationSection = () => {
	const [selected, setSelected] = useState<number | null>(null);

	return (
		<section className="py-16 px-4 bg-gray-50">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
						Cyber Threat Information
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Explore comprehensive guides on various cyber threats and learn how to
						protect yourself in the digital world
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
					{featuredThreats.map((threat) => {
						const IconComponent = threat.icon;
						return (
							<div
								key={threat.id}
								className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
								onClick={() => setSelected(threat.id)}
								tabIndex={0}
								role="button"
								aria-label={`Learn more about ${threat.title}`}
							>
								<div className="p-6">
									<div
										className={`${threat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
									>
										<IconComponent className="w-6 h-6 text-white" />
									</div>
									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										{threat.title}
									</h3>
									<p className="text-gray-600 text-sm leading-relaxed">
										{threat.description}
									</p>
								</div>
								<div className="px-6 pb-6">
									<button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
										Learn More
									</button>
								</div>
							</div>
						);
					})}
				</div>

				{/* View All Button */}
				<div className="text-center">
					<Link href="/information">
						<button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
							View All Categories
						</button>
					</Link>
				</div>

				{/* Simple Modal for demo */}
				{selected !== null && (
					<div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
						<div className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl relative">
							<button
								className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
								onClick={() => setSelected(null)}
							>
								<span className="sr-only">Close</span>
								<svg width="24" height="24" fill="none">
									<path
										d="M6 6l12 12M6 18L18 6"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
									/>
								</svg>
							</button>
							<h3 className="text-2xl font-bold mb-4">
								{
									featuredThreats.find((t) => t.id === selected)?.title
								}
							</h3>
							<p className="text-gray-700 mb-4">
								{
									featuredThreats.find((t) => t.id === selected)
										?.description
								}
							</p>
							<div className="text-sm text-gray-500">
								More details and best practices coming soon!
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default InformationSection;