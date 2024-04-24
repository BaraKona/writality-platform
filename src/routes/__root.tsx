import { createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import AppWrapper from "../components/AppWrapper";
import "@mantine/core/styles.css";
import { useSetup } from "../hooks/useSetup";
import { Setup } from "../components/setup/Setup";
import { useEffect } from "react";
import { Shell } from "../components/Shell";
export const Route = createRootRoute({
	component: SetupApp,
});

function SetupApp() {
	const { data, isLoading } = useSetup();
	console.log(data);
	useEffect(() => {
		if (data) {
			console.log({ data });
		}
	}, [data]);

	if (isLoading) return <div>Loading...</div>;

	if (!data) return <Setup />;

	return (
		<AppWrapper>
			<Shell />
			<TanStackRouterDevtools position="bottom-right" />
		</AppWrapper>
	);
}
