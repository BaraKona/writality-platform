import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="p-2 grow flex w-full items-center justify-center h-full">
			Hello from !
		</div>
	);
}
