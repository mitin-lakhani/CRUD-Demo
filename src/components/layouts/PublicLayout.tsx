import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";

export const PublicLayout = () => (
	<main className="flex-1">
		<Header />
		<div className="flex flex-col items-center  min-h-[calc(100dvh-110px)]">
			<Outlet />
		</div>
		<Footer />
	</main>
);
