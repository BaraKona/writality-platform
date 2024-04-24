import { IconCornerDownRight, IconFileDescription } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

export const ScriptListItem = ({
	name,
	path,
	currentPath,
	level,
}: {
	name: string;
	path: string;
	currentPath: string;
	level: number;
}) => {
	return (
		<Link
			to={"file/" + name}
			search={{
				path,
			}}
			className={`flex gap-2 group rounded cursor-default ${
				name === currentPath
					? "bg-matteBlack hover:bg-matteBlack text-background"
					: ""
			}`}
		>
			<div
				className={`flex items-center gap-2 py-1 px-1 ${name === currentPath ? "!text-background" : "text-textLight group-hover:text-matteBlack"}`}
			>
				{level == 0 ? (
					<IconFileDescription size={16} stroke={1.5} className="min-w-4" />
				) : (
					<IconCornerDownRight size={16} stroke={2} className="min-w-4 -mt-1" />
				)}

				<p className={`text-xs font-medium`}>{name.split(".")[0]}</p>
			</div>
		</Link>
	);
};
