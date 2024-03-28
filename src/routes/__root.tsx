import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import AppWrapper from "../components/AppWrapper";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export const Route = createRootRoute({
	component: () => (
		<MantineProvider>
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
		</MantineProvider>
	),
});
