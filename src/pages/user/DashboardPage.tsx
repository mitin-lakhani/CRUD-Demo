// import { useEffect, useState } from "react";

import { useAppState } from "@/utils/useAppState";



const DashboardPage = () => {	
	const user = {
		UserName: "Mitin Patel",
		// role: "Frontend Developer",
		email: "mitin@gmail.com",
		// location: "India",
		// status: "Active",
	};
	
	return (
		<div className="h-full  bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 transition-colors">
			
			{/* Header */}
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold">Dashboard</h1>

			</div>

			{/* Grid */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				
				{/* User Card */}
				<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
					<img
						src="src/assets/logo.png"
						className="w-24 h-24 rounded-full mb-4"
						alt="user"
					/>
					<h2 className="text-xl font-semibold">{user.UserName}</h2>
					{/* <p className="text-gray-500 dark:text-gray-400">{user.role}</p> */}

					{/* <span className="mt-3 px-3 py-1 rounded-full text-sm bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
						{user.status}
					</span> */}

					<button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
						View Profile
					</button>
				</div>

				{/* Details Board */}
				<div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
					<h3 className="text-lg font-semibold mb-4">User Information</h3>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{[
							["Full Name", user.UserName],
							["Email", user.email],
							// ["Role", user.role],
							// ["Location", user.location],
						].map(([label, value]) => (
							<div
								key={label}
								className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
							>
								<p className="text-sm text-gray-500 dark:text-gray-300">
									{label}
								</p>
								<p className="font-medium">{value}</p>
							</div>
						))}
					</div>
				</div>

			</div>
		</div>
	);
};

export default DashboardPage;
