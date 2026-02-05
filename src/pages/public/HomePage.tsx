const HomePage = () => {
	// const navigate = useNavigate();
	return (
		<div className="w-full">

			{/* HERO SECTION */}
			<section className="herosection bg-background">
				<div className="max-w-7xl mx-auto px-6 py-6 text-center">
					<h1 className="text-4xl heading text-text md:text-6xl font-bold leading-tight">
						Manage Users Easily <br />
						<span className="text-indigo-600 dark:text-indigo-400">Build Faster Apps</span>
					</h1>

					<p className="mt-6 text-lg md:text-xl heading text-text max-w-2xl mx-auto">
						A modern user management platform built with React, TypeScript,
						and Tailwind CSS. Simple. Fast. Scalable.
					</p>

					<div className="mt-10 flex justify-center gap-4 flex-wrap">
						<button className=" btn cursor-pointer border hover:bg-white text-text px-8 py-3 rounded-lg font-bold hover:scale-105 transition">
							Get Started
						</button>
						<button className="border cursor-pointer font-bold  text-text  px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-700 transition">
							Learn More
						</button>
					</div>
				</div>
			</section>

			{/* FEATURES SECTION */}
			<section className="bg-background text-text mt-10">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl heading  text-text font-bold text-center mb-14">
						Why Choose Our Platform?
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 px-10 gap-8 text-text">
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
								className="bg-background p-8 rounded-xl shadow-xl shadow-shadow transition"
							>
								<h3 className="text-xl font-semibold mb-3">
									{feature.title}
								</h3>
								<p className="text-text">{feature.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* STATS SECTION */}
			<section className="  py-10 sm:my-10 bg-background text-text ">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-8 text-center">
						{[
							["10k+", "Active Users"],
							["99.9%", "Uptime"],
							["500+", "Projects"],
							["24/7", "Support"],
						].map(([value, label]) => (
							<div
								key={label}
								className="p-6 rounded-xl bg-background  hover:bg-indigo-50 transition"
							>
								<h3 className="text-4xl font-bold text-text ">
									{value}
								</h3>
								<p className="mt-2 text-text text-2xl">{label}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CALL TO ACTION */}
			<section className=" py-7  bg-background text-white">
				<div className="max-w-5xl mx-auto px-6 text-center">
					<h2 className="text-3xl cta text-text md:text-4xl font-bold">
						Start Building Today 🚀
					</h2>
					<p className="mt-4 heading text-text  text-lg">
						Create modern web apps with better UX and scalable architecture.
					</p>

					<button className="mt-8 cursor-pointer border font-bold hover:bg-white text-text  px-10 py-3 rounded-lg  hover:scale-105 transition">
							Dashboard
					</button>
				</div>
			</section>

		</div>
	);
};

export default HomePage;
