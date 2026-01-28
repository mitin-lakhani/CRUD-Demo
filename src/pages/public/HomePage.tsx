const HomePage = () => {
	// const navigate = useNavigate();
	return (
		<div className="w-full">

			{/* HERO SECTION */}
			<section className="bg-background text-text">
				<div className="max-w-7xl mx-auto px-6 py-24 text-center">
					<h1 className="text-4xl md:text-6xl font-bold leading-tight">
						Manage Users Easily <br />
						<span className="text-yellow-100">Build Faster Apps</span>
					</h1>

					<p className="mt-6 text-lg md:text-xl text-text max-w-2xl mx-auto">
						A modern user management platform built with React, TypeScript,
						and Tailwind CSS. Simple. Fast. Scalable.
					</p>

					<div className="mt-10 flex justify-center gap-4 flex-wrap">
						<button className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
							Get Started
						</button>
						<button className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-700 transition">
							Learn More
						</button>
					</div>
				</div>
			</section>

			{/* FEATURES SECTION */}
			<section className="bg-gray-50 text-text py-20">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl text-text font-bold text-center mb-14">
						Why Choose Our Platform?
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-text">
						{[
							{
								title: "Fast Performance",
								desc: "Optimized React architecture ensures smooth and fast user experience.",
							},
							{
								title: "Secure Authentication",
								desc: "Built-in validation, protected routes, and secure user flow.",
							},
							{
								title: "Modern UI",
								desc: "Clean, responsive, and professional design using Tailwind CSS.",
							},
						].map((feature, index) => (
							<div
								key={index}
								className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition"
							>
								<h3 className="text-xl font-semibold mb-3">
									{feature.title}
								</h3>
								<p className="text-gray-600">{feature.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* STATS SECTION */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
						{[
							["10k+", "Active Users"],
							["99.9%", "Uptime"],
							["500+", "Projects"],
							["24/7", "Support"],
						].map(([value, label]) => (
							<div
								key={label}
								className="p-6 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition"
							>
								<h3 className="text-4xl font-bold text-indigo-600">
									{value}
								</h3>
								<p className="mt-2 text-gray-600">{label}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CALL TO ACTION */}
			<section className="bg-indigo-700 text-white py-20">
				<div className="max-w-5xl mx-auto px-6 text-center">
					<h2 className="text-3xl md:text-4xl font-bold">
						Start Building Today 🚀
					</h2>
					<p className="mt-4 text-white/90 text-lg">
						Create modern web apps with better UX and scalable architecture.
					</p>

					<button className="mt-8 bg-white text-indigo-700 px-10 py-3 rounded-lg font-semibold hover:scale-105 transition">
							Dashboard
					</button>
				</div>
			</section>

		</div>
	);
};

export default HomePage;
