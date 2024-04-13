import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/analytics")({
	component: Analytics,
});

function Analytics() {
	return (
		<div className="p-2 grow flex w-full items-center text-center justify-center h-full">
			Analytics
		</div>
	);
}
