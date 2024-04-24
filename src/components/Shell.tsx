import { FC } from "react";
import { Sidebar } from "./sidebar/Sidebar";
import { Outlet } from "@tanstack/react-router";
import { Header } from "./Header/Header";
import { LeftSide } from "./Header/LeftSide";

export const Shell: FC = () => {
	return (
		<main className="w-full grow flex relative">
			<Sidebar />
			<LeftSide />
			<section className="grow w-full h-full flex flex-col">
				<Header />
				<Outlet />
			</section>
		</main>
	);
};
