import { useEffect, useState } from "react";
import UserFormPage from "./UserFormPage";
import UserTable from "./UserTablePage";
import type { IUser } from "@/utils/types";
import axios from "axios";
import { toast } from "sonner";
// import axios from "axios";
// import { resolveElements } from "framer-motion";
// import { toast } from "sonner";




// top to bottom read execution
const UserListPage: React.FC = () => {
  const [editingUser, setEditingUser] = useState<IUser | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState<IUser[]>([]);

  // Load users from localStorage
  useEffect(() => {
    fetchUsers();


    // // load user localstorage
    // const storedUsers = localStorage.getItem("users");
    // console.log(storedUsers);
    // if (storedUsers) {
    //   setUsers(JSON.parse(storedUsers));
    // }
  }, []);

  const fetchUsers = async () =>{
    try{
        const token = localStorage.getItem("authtoken");
        const response = await axios.get("http://localhost:5000/api/users",{
          headers:{
            Authorization:`Bearer ${token}`
          }
        });
        setUsers(response.data);
    }catch(error:any){
      toast.error(error.response?.data?.message);
    }
  }

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
    <div className="h-full   p-6 ">
      <div className="max-w-2xs md:max-w-5xl mx-auto rounded-xl shadow-lg p-6">
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
              className="bg-green-900 text-white px-3 py-1 cursor-pointer rounded hover:bg-green-700"
            >
              Add User
            </button>
          </div>
        )}
        {/* User table */}
        <UserTable onEdit={ handleEdit}
         users={users}
          setUsers={setUsers}
         />
      </div>
    </div>
  );
};

export default UserListPage;
