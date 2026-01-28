import React, { useState } from "react";
import ConfirmDialog from "@/components/ui/ShowDialog";
import { toast } from "sonner";
import type { IUser } from "@/utils/types";
import { useAppState } from "@/utils/useAppState";
// import EditUser from "./EditUser";

type UserTableProps = {
  onEdit: (user: IUser) => void;
  users: IUser[];
  setUsers: (users: IUser[]) => void;
  isLoggedInUser: (user: IUser) => boolean;
};
const UserTable: React.FC<UserTableProps> = ({ onEdit, users, setUsers, isLoggedInUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const[{user}]= useAppState();
  console.log("useApp data console",user);


  const handleDeleteUser = () => {
    if (!currentUser) return;
    // console.log(currentUser);

    const updatedUsers = users.filter(
      (user) => user.email !== currentUser.email,
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    toast.success("User deleted successfully");
  };
  return (
    <div className="overflow-x-auto font-bold">
      <table className="w-full border bg  rounded-lg overflow-hidden text-center">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="p-3">Id</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody className="heading-theme text-text">
          {users.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center p-4 text-gray-500">
                No users found
              </td>
            </tr>
          ) : (
            users.map((item,index) => (
              <tr
                key={item.id}
                className="border-b"
              >
                <td className="p-3 text-center">{index + 1}</td>
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.email}</td>
                <td className="p-3 text-center flex justify-center gap-2">
                  {user?.email !== item.email && (
                    <>
                  <button
                    onClick={() => {
                      onEdit(item);
                    }}
                    className="bg-amber-700 px-3 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setCurrentUser(item);
                      setIsOpen(true);
                    }} className="bg-indigo-500 px-2 py-2 rounded-md font-bold">
                    Delete
                  </button>
                  </>
                  )}
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
