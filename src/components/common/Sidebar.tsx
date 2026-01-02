import { Link} from "react-router-dom";
import { useAppState } from "@/utils/useAppState";

const Sidebar = () => {
	// const navigate = useNavigate();
	const [{ user }, dispatch] = useAppState();

	const logout = () => {
		dispatch({ user: null });
	};

	return (
		<div className="bg-gray-900 border-b text-white font-bold  border-gray-300  h-full flex flex-col items-center gap-10">
			<div className="p-4 w-full flex justify-start ">
				<img className="object-center h-full w-1/3 rounded-full border " src="src/assets/logo.png" alt="" />
			</div>
			<div className="w-full h-full px-4 flex gap-4 items-start flex-col">
				<Link to="/dashboard">Dashboard</Link>
				<Link to="/users">Users</Link>
				<Link to="#" onClick={() => logout()}>
					Logout (<span>{user?.name}</span>)
				</Link>
				<Link to='/products'>Products</Link>
			</div>
		</div>
	);
};
export default Sidebar;
