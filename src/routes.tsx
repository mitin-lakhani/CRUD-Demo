// app/router.tsx
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { RootLayout } from "./components/layouts/RootLayout";
import { PublicLayout } from "./components/layouts/PublicLayout";
import { UserLayout } from "./components/layouts/UserLayout";
import Products from "./pages/user/Products";
// import EditUser from "./pages/user/EditUser";



const Home = lazy(() => import("@/pages/public/HomePage"));
const Login = lazy(() => import("@/pages/public/LoginPage"));
const Register = lazy(() => import("@/pages/public/RegisterPage"));
const Dashboard = lazy(() => import("@/pages/user/DashboardPage"));
const UserList = lazy(() => import("@/pages/user/UserListPage"));
// const UserForm = lazy(() => import("@/pages/user/UserFormPage"));

export const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
			{
				element: <PublicLayout />,
				children: [
					{ path: "/", element: <Home /> },
					{ path: "/login", element: <Login /> },
					{ path: "/register", element: <Register /> },
				],
			},
			{
				element: <UserLayout/>,
				children: [
					{ path: "/dashboard", element: <Dashboard /> },
					{ path: "/users", element: <UserList /> },
					// { path: "/users/new", element: <UserForm /> },
					// { path: "/users/:id", element: <UserForm /> },
					{path: '/products',element:<Products/>}
				],
			},
		],
	},
]);

