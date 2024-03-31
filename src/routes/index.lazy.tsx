import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="p-2 grow flex w-full items-center text-center justify-center h-full">
			Home???
		</div>
	);
}
