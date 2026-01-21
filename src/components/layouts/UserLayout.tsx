import { Navigate, Outlet } from "react-router-dom";
import { useAppState } from "@/utils/useAppState";
import Sidebar from "../common/Sidebar";
// this is protected routes userLayouts
export const UserLayout = () => {
	const [state ] = useAppState();
	if(!state.user){
		return <Navigate to="/login" replace />;
	}
	return (
		<div className="flex w-full">
			<div className="w-50">
				<Sidebar/>
			</div>
			<div className="w-[calc(100%)] p-4">
				<Outlet />
			</div>
		</div>
	);
};
