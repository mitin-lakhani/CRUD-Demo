import { Link} from "react-router-dom";
import { useAppState } from "@/utils/useAppState";

const Sidebar = () => {
	// const navigate = useNavigate();
	const [{ user }, dispatch] = useAppState();

	const logout = () => {
		dispatch({ user: null });
	};

	return (
		<div className="bg-gray-900 border-b text-white font-semibold  border-gray-300  h-203 flex flex-col items-center gap-10">
			<div className="p-4 w-full flex justify-start ">
				<img className="object-center h-full w-1/3 rounded-full border " src="src/assets/logo.png" alt="" />
			</div>
			<div className="w-full h-full px-4 flex gap-4 items-start justify-between
			 flex-col">
				<div className="flex flex-col gap-8">
					<Link to="/dashboard">Dashboard</Link>
				<Link to="/users">Users</Link>
				<Link to='/products'>Products</Link>
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
