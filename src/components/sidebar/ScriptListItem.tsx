import { IconScript } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

export const ScriptListItem = ({
	name,
	path,
	currentPath,
}: {
	name: string;
	path: string;
	currentPath: string;
}) => {
	return (
		<Link
			to={"file/" + name}
			search={{
				path,
			}}
			className={`flex gap-2 hover:bg-hover rounded ${
				name === currentPath ? "bg-hover" : ""
			}`}
		>
			<div className="flex items-center gap-2 py-1 px-2 cursor-pointer text-gray-600">
				<IconScript size={16} stroke={1.5} />
				<p className="text-xs font-semibold">{name}</p>
			</div>
		</Link>
	);
};
