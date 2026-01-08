import { useEffect, useState } from "react";
import { toast } from "sonner";
import UserFormPage from "./UserFormPage";
import UserTable from "./UserTable";

// props parent component thi child component to pass data
type User = {
  id: number;
  name: string;
  email: string;
};
// top to bottom read execution 
const UserListPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  // Load users from localStorage
  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    console.log(storedUsers);
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);
  // Input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // (...) to copy the values array,object
  };
  
  // Add user
  const handleAddUser = () => {
    const newUser: User = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    toast.success("User added successfully");

    setFormData({ name: "", email: "" });
    setShowForm(false);
  };
// handle button click
  const handleEdit = (user: User) => {
    setEditingUser(user);
  };
  // Update user
  const handleEditUser = () => {
    if (!editingUser) return;
    const updatedUsers = users.map((user) =>
      user.id === editingUser.id ? { ...user, ...formData } : user
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setFormData({ name: "", email: "" });
    setShowForm(false);
    toast.success("User updated successfully");
    setEditingUser(null);
  };

  // Delete user
  const handleDeleteUser = (email: string) => {
    const updatedUsers = users.filter((user) => user.email !== email);

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    toast.success("User deleted successfully");
  };

  // Cancel form
  const handleCancel = () => {
    setShowForm(false);
    setEditingUser(null);
    setFormData({ name: "", email: "" });
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
            title={editingUser ? "Edit User" : "Add User"}
            formData={formData}
            onChange={handleChange}
            onSubmit={editingUser ? handleEditUser : handleAddUser}
            onCancel={handleCancel} />
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
          users={users}
          onEdit={handleEdit} 
          onDelete={handleDeleteUser}
        />
        <div className="mt-4 text-right font-semibold text-indigo-600">
          Total Users: {users.length}
        </div>
      </div>
    </div>
  );
};

export default UserListPage;
