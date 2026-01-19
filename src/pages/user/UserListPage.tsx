import { useEffect, useState } from "react";
import UserFormPage from "./UserFormPage";
import UserTable from "./UserTable";
import type { IUser } from "@/utils/types";

// top to bottom read execution
const UserListPage: React.FC = () => {
	const [editingUser, setEditingUser] = useState<IUser | null>(null);
	const [showForm, setShowForm] = useState(false);
	const [users, setUsers] = useState<IUser[]>([]);

	// Load users from localStorage
	useEffect(() => {
		const storedUsers = localStorage.getItem("users");
		console.log(storedUsers);
		if (storedUsers) {
			setUsers(JSON.parse(storedUsers));
		}
	}, []);

	// handle button click
	const handleEdit = (user: IUser) => {
		setEditingUser(user);
	};
	// Update user

	// Cancel form
	const handleClose = () => {
		setShowForm(false);
		setEditingUser(null);	
	};
	return (
		<div className="h-full  p-6 bg-linear-to-r from-indigo-500 to-purple-200">
			<div className="max-w-5xl mx-auto rounded-xl shadow-lg p-6 bg-white">
				<h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
					User Management
				</h1>
				{/* Form */}
				{(showForm || editingUser) && (
					<UserFormPage
						user={editingUser}
						close={handleClose}
						users={users}
						setUsers={setUsers}
					/>
				)}
				{/* Add button */}
				{!showForm && !editingUser && (
					<div className="mb-4 text-right">
						<button
							onClick={() => setShowForm(true)}
							className="bg-green-900 text-white px-3 py-1 rounded hover:bg-green-700"
						>
							Add User
						</button>
					</div>
				)}
				{/* User table */}
				<UserTable
					onEdit={handleEdit}
					users={users}
					setUsers={setUsers}
				/>
			</div>
		</div>
	);
};

export default UserListPage;
