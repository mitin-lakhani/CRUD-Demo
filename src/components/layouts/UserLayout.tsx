import { Navigate, Outlet } from "react-router-dom";
import { useAppState } from "@/utils/useAppState";
import Sidebar from "../common/Sidebar";


// this is protected routes userLayouts
export const UserLayout = () => {
	const token = localStorage.getItem("authtoken");
	const [{user} ] = useAppState();
	if(!user){
		return user;
	}
	if(!token){
		return <Navigate to="/login" replace />;
	}
	return (
		<div className="flex  w-full">
			<div className="w-50 fixed ">
				<Sidebar/>
			</div>
			<div className="w-[calc(100%)] ">	
				<Outlet />
			</div>
		</div>
	);
};
