import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import AppWrapper from "../components/AppWrapper";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/sidebar/Sidebar";
import "@mantine/core/styles.css";
import { useSetup } from "../hooks/useSetup";
import { Setup } from "../components/setup/Setup";

export const Route = createRootRoute({
	component: SetupApp,
});

function SetupApp() {
	const { data, isLoading } = useSetup();
	if (isLoading) return <div>Loading...</div>;

	if (!data) return <Setup />;

	return (
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
	);
}
