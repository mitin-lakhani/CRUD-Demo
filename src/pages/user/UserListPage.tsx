import { useEffect, useState } from "react";
import UserFormPage from "./UserFormPage";
import UserTable from "./UserTablePage";
import type { IUser } from "@/utils/types";


// top to bottom read execution
const UserListPage: React.FC = () => {
  const [editingUser, setEditingUser] = useState<IUser | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState<IUser[]>([]);
  
  
  const loggedUser:IUser | null = JSON.parse(localStorage.getItem("loggedUser")||"null");

  // helper function

  const isLoggedInUser = (user:IUser) =>{
    return loggedUser?.email === user.email;
  }

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

  // Cancel form
  const handleClose = () => {
    setShowForm(false);
    setEditingUser(null);
  };
  return (
    <div className="h-full  p-6 ">
      <div className="max-w-5xl mx-auto rounded-xl shadow-lg p-6 users-theme ">
        <h1 className="text-3xl font-bold text-center mb-6  text-indigo-600">
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
        <UserTable onEdit={handleEdit}
         users={users}
          setUsers={setUsers}
          isLoggedInUser ={isLoggedInUser}
          
          />
      </div>
    </div>
  );
};

export default UserListPage;
