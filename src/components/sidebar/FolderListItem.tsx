import { useLocalStorage } from "@mantine/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { ScriptListItem } from "./ScriptListItem";
import { FileInfo } from "../../hooks/useFiles";
import {
	IconBook2,
	IconChevronDown,
	IconChevronRight,
} from "@tabler/icons-react";

export const FolderListItem = ({
	name,
	files,
	level,
	id,
	currentPath,
}: {
	name: string;
	files: FileInfo[];
	level: number;
	id: string;
	currentPath: string;
}): JSX.Element => {
	const [open, setOpen] = useLocalStorage({
		key: `folder-${id}`,
		defaultValue: false,
	});

	return (
		<div className="flex flex-col gap-0.5">
			<li
				className={`flex items-center w-full text-xs font-medium px-1 py-1 rounded cursor-default text-textLight hover:text-matteBlack`}
			>
				<IconBook2 size={16} />

				<span className="ml-2 w-auto truncate">{name}</span>
				<button
					className="ml-auto"
					onClick={() => {
						setOpen(!open);
					}}
				>
					{open ? (
						<IconChevronDown size={14} />
					) : (
						<IconChevronRight size={14} />
					)}
				</button>
			</li>

			<AnimatePresence initial={true}>
				{open && (
					<motion.ul
						className="border-l border-border ml-3 pl-1 flex flex-col gap-0.5"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{
							duration: 0.3,
							ease: "easeInOut",
							staggerChildren: 0.1,
						}}
					>
						{files.map((file, index) => (
							<div key={index}>
								{file.extension === "json" && (
									<ScriptListItem
										key={index}
										name={file.filename}
										path={file.path}
										currentPath={currentPath}
										level={level + 1}
									/>
								)}
								{file.extension === "folder" && (
									<FolderListItem
										key={index}
										name={file.filename}
										files={file.children}
										level={level + 1}
										id={file.filename + level + index}
										currentPath={currentPath}
									/>
								)}
							</div>
						))}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
};
