import { Link, useNavigate } from "react-router-dom";
import { useAppState } from "@/utils/useAppState";
import ThemeButton from "../ui/ThemeButton";
import logo from "@/assets/logo.png";

const Sidebar = () => {
  const [{ user }, dispatch] = useAppState();
  const navigate = useNavigate();



  const logout = () => {
    dispatch({ user: null });
    localStorage.removeItem("authtoken");
    
    navigate("/login");
  };

  return (
    <div className="bg-background text-text border-b font-semibold border-gray-300 h-[calc(100dvh)] flex flex-col items-center gap-10">
      <div className="p-4 w-full flex justify-between">
        <img
          className="object-center h-full w-1/3 rounded-full border"
          src={logo}
          alt="logo"
        />
        <ThemeButton />
      </div>
      <div className="w-full h-full px-4 flex gap-4 items-start justify-between flex-col">
        <div className="flex flex-col gap-8">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/users">Users</Link>
          <Link to="/products">Products</Link>
          <Link to="/profile">ViewProfile</Link>
        </div>
        <div className="mb-4">
          <Link to="#" onClick={() => logout()}>
            Logout (<span>{user?.name}</span>)
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
