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
			className={`flex gap-2 hover:text-background rounded ${
				name === currentPath
					? "bg-matteBlack hover:bg-matteBlack text-background"
					: "hover:bg-matteBlack/90"
			}`}
		>
			<div className="flex items-center gap-2 py-1 px-2 cursor-pointer">
				<IconScript size={16} stroke={1.5} className="min-w-4" />
				<p className="text-xs font-semibold">{name.split(".")[0]}</p>
			</div>
		</Link>
	);
};
