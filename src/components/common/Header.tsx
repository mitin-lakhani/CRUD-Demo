import { Link } from "react-router-dom";
import { useAppState } from "@/utils/useAppState";
import ThemeButton from "../ui/ThemeButton";

const Header = () => {
  const [{ user }, dispatch] = useAppState();

  const logout = () => {
    dispatch({ user: null });
  };
  return (
    <div  className=" border-b  w-full">
      <nav className="from-indigo-100 to-gray-400 container   mx-auto flex justify-between items-center w-300 py-4">
        <Link to="/" className="font-bold text-2xl text-text">
          Mitin Patel
        </Link>
        <div className="flex gap-4 items-center">
          <Link
            to="/"
            className="font-bold text-1xl text-text hover:text-red-500 transition duration-1000 ease-in-out"
          >
            Home
          </Link>
          {user ? (
            <>
              {" "}
              <Link
                to="/dashboard"
                className="font-bold text-1xl text-text hover:text-red-500 transition duration-1000 ease-in-out"
              >
                Dashboard
              </Link>
              <Link
                to="/"
                onClick={() => logout()}
                className="font-bold text-1xl text-text hover:text-red-500 transition duration-1000 ease-in-out"
              >
                {" "}
                Logout{" "}
              </Link>
              <div>{user.name}</div>{" "}
            </>
          ) : (
            <>
              {" "}
              <Link
                to="/login"
                className="font-bold text-1xl text-text  hover:text-red-500 transition duration-1000 ease-in-out"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="font-bold text-1xl text-text  hover:text-red-500 transition duration-1000 ease-in-out"
              >
                Register
              </Link>
            </>
          )}
          <ThemeButton/>
       
        </div>
      </nav>
    </div>
  );
};
export default Header;
