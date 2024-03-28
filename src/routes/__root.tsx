import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import AppWrapper from "../components/AppWrapper";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar";

export const Route = createRootRoute({
	component: () => (
		<>
			<AppWrapper>
				<Header />
				<div className="grow flex gap-px relative">
					<Sidebar />
					<div className="grow bg-background rounded p-2">
						<Outlet />
					</div>
				</div>
				<TanStackRouterDevtools />
			</AppWrapper>
		</>
	),
});
