import { createFileRoute } from "@tanstack/react-router";
import { useFile } from "../hooks/useFile";

export const Route = createFileRoute("/file/$name")({
	component: PostComponent,
});

function PostComponent() {
	const { name } = Route.useParams();
	const { path } = Route.useSearch();

	console.log({
		name,
		path,
	});
	const { data, isLoading } = useFile(path);

	console.log({ data });

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!data) {
		return <div>File not found</div>;
	}

	return (
		<div>
			<h1>{name}</h1>
		</div>
	);
}
