import { Link } from "react-router-dom";
import { useAppState } from "@/utils/useAppState";
import ThemeButton from "../ui/ThemeButton";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [{ user }, dispatch] = useAppState();
  const [open, setOpen] = useState(false);

  const logout = () => {
    dispatch({ user: null });
    setOpen(false);
  };

  return (
    <header className="border-b bg-background w-full">
      <nav className="mx-auto flex items-center justify-between px-4 py-4 max-w-7xl">
        
        {/* Logo */}
        <Link
          to="/"
          className="font-bold text-2xl text-text"
          onClick={() => setOpen(false)}
        >
          Mitin Patel
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 items-center text-text">
          <Link className="font-bold hover:text-red-500" to="/">Home</Link>
          {user ? (
            <>
              <Link className="font-bold hover:text-red-500" to="/dashboard">
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="font-bold hover:text-red-500 cursor-pointer"
              >
                Logout
              </button>
              <span className="text-sm">{user.name}</span>
            </>
          ) : (
            <>
              <Link className="font-bold hover:text-red-500" to="/login">
                Login
              </Link>
              <Link className="font-bold hover:text-red-500" to="/register">
                Register
              </Link>
            </>
          )}

          <ThemeButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-text"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-text">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>

          {user ? (
            <>
              <Link onClick={() => setOpen(false)} to="/dashboard">
                Dashboard
              </Link>
              <button onClick={logout}>Logout</button>
              <span className="text-sm">{user.name}</span>
            </>
          ) : (
            <>
              <Link onClick={() => setOpen(false)} to="/login">
                Login
              </Link>
              <Link onClick={() => setOpen(false)} to="/register">
                Register
              </Link>
            </>
          )}

         <button className="absolute top-20 right-3"><ThemeButton /></button>
        </div>
      )}
    </header>
  );
};

export default Header;
