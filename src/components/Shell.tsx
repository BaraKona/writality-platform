import { FC } from "react";
import { Sidebar } from "./sidebar/Sidebar";
import { Outlet } from "@tanstack/react-router";
import { Header } from "./Header/Header";

export const Shell: FC = () => {
	return (
		<main className="w-full grow flex relative">
			<Sidebar />
			<section className="grow w-full h-full flex flex-col">
				<Header />
				<Outlet />
			</section>
		</main>
	);
};
