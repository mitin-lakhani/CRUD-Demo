import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "sonner"; 
export const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("useEffect");
    return () => {
      true;
    };
  }, [location]);
  return (
    <div className="min-h-screen bg-background text-text flex flex-col w-full">
      {/* RootLayout */}
      {/* {location.pathname === "/login" ||
			location.pathname === "/register" ? (
				<div className="w-full h-full flex items-center justify-center">
					Welcome To login/register
				</div>
			) : (
				""
			)} */}
      <Toaster position="bottom-left" richColors />
      <Outlet />
    </div>
  );
};
