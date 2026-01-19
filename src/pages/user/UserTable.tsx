import React, {useState } from "react";
import ConfirmDialog from "@/components/ui/ShowDialog";
import { toast } from "sonner";
import type { IUser } from "@/utils/types";
// import EditUser from "./EditUser";

type UserTableProps = {
	onEdit: (user: IUser) => void;
	users: IUser[];
	setUsers: (users: IUser[]) => void;
};
const UserTable: React.FC<UserTableProps> = ({ onEdit, users, setUsers }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [currentUser, setCurrentUser] = useState<IUser | null>(null);

	// Delete user
	const handleDeleteUser = () => {
		if (!currentUser) return;
		const updatedUsers = users.filter(
			(user) => user.email !== currentUser.email
		);
		setUsers(updatedUsers);
		localStorage.setItem("users", JSON.stringify(updatedUsers));

		toast.success("User deleted successfully");
	};
	return (
		<div className="overflow-x-auto font-bold">
			<table className="w-full border rounded-lg overflow-hidden text-center">
				<thead className="bg-indigo-600 text-white">
					<tr>
						<th className="p-3">Id</th>
						<th className="p-3">Name</th>
						<th className="p-3">Email</th>
						<th className="p-3">Actions</th>
					</tr>
				</thead>
				<tbody className="text-black">
					{users.length === 0 ? (
						<tr>
							<td
								colSpan={4}
								className="text-center p-4 text-gray-500"
							>
								No users found
							</td>
						</tr>
					) : (
						users.map((user, index) => (
							<tr
								key={user.id}
								className="border-b hover:bg-gray-50 transition"
							>
								<td className="p-3 text-center">{index + 1}</td>
								<td className="p-3">{user.name}</td>
								<td className="p-3">{user.email}</td>
								<td className="p-3 text-center flex justify-center gap-2">
									<button
										onClick={() => {
											onEdit(user);
										}}
										type="button"
										className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500 transition"
									>
										Edit
									</button>
									<button
										onClick={() => {
											setCurrentUser(user);
											setIsOpen(true);
										}}
										className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
									>
										Delete
									</button>
								</td>
							</tr>
						))
					)}
				</tbody>
			</table>
			<div className="mt-4 text-right font-semibold text-indigo-600">
				Total Users: {users.length}
			</div>

			<ConfirmDialog
				isOpen={isOpen}
				title="Delete User"
				message="Are you sure you want to delete this user?"
				confirmText="Delete"
				cancelText="Cancel"
				onConfirm={() => handleDeleteUser()}
				onClose={() => setIsOpen(false)}
			/>
		</div>
	);
};

export default UserTable;
