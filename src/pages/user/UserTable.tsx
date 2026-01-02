import React,{ useState } from "react"; 
import ConfirmDialog from "@/components/ui/ShowDialog";

type User = {
    id: number;
    name: string;
    email: string;
};

type UserTableProps = {
    users: User[];
    onEdit: (user: User) => void;
    onDelete: (email: string) => void;
};
const UserTable: React.FC<UserTableProps> = ({ users, onDelete }) => {
    const [isOpen, setIsOpen] = useState(false);

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
                            <td colSpan={4} className="text-center p-4 text-gray-500">
                                No users found
                            </td>
                        </tr>
                    ) : (
                        users.map((user, index) => (
                            <tr key={user.id} className="border-b hover:bg-gray-50 transition">
                                <td className="p-3 text-center">{index + 1}</td>
                                <td className="p-3">{user.name}</td>
                                <td className="p-3">{user.email}</td>
                                <td className="p-3 text-center flex justify-center gap-2">
                                    <button
                                          
                                        type="button"
                                        className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500 transition"
                                    >
                                    Edit
                                    </button>
                                    <button
                                        onClick={() => setIsOpen(true)}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                                    >
                                        Delete
                                        <ConfirmDialog
                                        isOpen={isOpen}
                                        title="Delete User"
                                        message="Are you sure you want to delete this user?"
                                        confirmText="Delete"
                                        cancelText="Cancel"
                                        onConfirm={() => onDelete(user.email)}
                                        onClose={() => setIsOpen(false)}
                                    />
                                    </button>
                                    
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
