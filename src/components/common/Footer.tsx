const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300 w-full">
			<div className="max-w-7xl mx-auto px-6 py-16">
				
				{/* TOP SECTION */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-10">
					
					{/* BRAND */}
					<div>
						<h2 className="text-2xl font-bold text-white mb-4">
							MyApp
						</h2>
						<p className="text-sm leading-relaxed text-gray-400">
							A modern user management platform built with React,
							TypeScript, and Tailwind CSS. Designed for performance
							and scalability.
						</p>
					</div>

					{/* LINKS */}
					<div>
						<h3 className="text-lg font-semibold text-white mb-4">
							Quick Links
						</h3>
						<ul className="space-y-2">
							{["Home", "Dashboard", "Login", "Register"].map(link => (
								<li
									key={link}
									className="hover:text-white transition cursor-pointer"
								>
									{link}
								</li>
							))}
						</ul>
					</div>

					{/* RESOURCES */}
					<div>
						<h3 className="text-lg font-semibold text-white mb-4">
							Resources
						</h3>
						<ul className="space-y-2">
							{["Docs", "API", "Support", "Privacy Policy"].map(item => (
								<li
									key={item}
									className="hover:text-white transition cursor-pointer"
								>
									{item}
								</li>
							))}
						</ul>
					</div>

					{/* NEWSLETTER */}
					<div>
						<h3 className="text-lg font-semibold text-white mb-4">
							Subscribe
						</h3>
						<p className="text-sm text-gray-400 mb-3">
							Get product updates and announcements.
						</p>
						<div className="flex gap-2">
							<input
								type="email"
								placeholder="Email address"
								className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
							/>
							<button className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-700 transition">
								Join
							</button>
						</div>
					</div>

				</div>

				{/* DIVIDER */}
				<div className="border-t border-gray-700 my-10" />

				{/* BOTTOM SECTION */}
				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					
					<p className="text-sm text-gray-400">
						© {new Date().getFullYear()} MyApp. All rights reserved.
					</p>

					{/* SOCIAL ICONS */}
					<div className="flex gap-4">
						{["GitHub", "LinkedIn", "Twitter"].map(social => (
							<div
								key={social}
								className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 transition cursor-pointer"
								title={social}
							>
								<span className="text-sm">{social[0]}</span>
							</div>
						))}
					</div>
				</div>

			</div>
		</footer>
	);
};

export default Footer;
