import { useAppState } from "@/utils/useAppState"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/react.svg";
const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const DashboardPage = () => {
	const [{user}] = useAppState();
	const navigate = useNavigate();	
	return (
		<motion.div
	className="h-full ml-50 dashboard-theme bg-background dark:text-gray-50 p-4"
	variants={containerVariants}
	initial="hidden"
	animate="show"
>
	{/* Header */}
	<motion.div
		className="flex justify-between items-center mb-6"
		variants={cardVariants}
	>
		<h1 className="text-2xl font-bold heading-theme text-text">
			Dashboard
		</h1>
	</motion.div>

	{/* Grid */}
	<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
		{/* User Card */}
		<motion.div
			className="border bg-background text-text rounded-xl shadow-md p-6 flex flex-col items-center text-center"
			variants={cardVariants}
		>
			<img
          className="object-center h-full w-1/3 rounded-full"
          src={logo}
          alt="logo"
        />
			<h2 className="text-xl font-semibold">{user?.name}</h2>

			<button
				onClick={() => navigate("/profile")}
				className="mt-4 bg-indigo-600 text-white px-4 py-2 cursor-pointer rounded-lg hover:bg-indigo-700 transition"
			>
				View Profile
			</button>
		</motion.div>

		{/* Details Board */}
		<motion.div
			className="md:col-span-2 bg-background text-text rounded-xl shadow-md p-6 border"
			variants={cardVariants}
		>
			<h3 className="text-lg font-semibold mb-4">
				User Information
			</h3>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{[
					["Full Name", user?.name],
					["Email", user?.email],
					["Status", user?.status],
				].map(([label, value]) => (
					<motion.div
						key={label}
						className="bg-background text-text p-4 rounded-lg font-bold"
						variants={cardVariants}
					>
						<p className="text-sm mb-3">{label}</p>
						<p className="font-medium">{value}</p>
					</motion.div>
				))}
			</div>
		</motion.div>
	</div>
</motion.div>

	);
};

export default DashboardPage;
