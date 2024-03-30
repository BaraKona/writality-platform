import { IconFolderFilled, IconFolderOpen } from "@tabler/icons-react";
import { useLocalStorage } from "@mantine/hooks";
import { AnimatePresence, motion } from "framer-motion";

export const FolderListItem = ({
	name,
	files,
	level,
	id,
}: {
	name: string;
	files: any[];
	level: number;
	id: string;
}): JSX.Element => {
	const [open, setOpen] = useLocalStorage({
		key: `folder-${id}`,
		defaultValue: false,
	});

	const levelColour = [
		"dark:!text-[#B46FCC]",
		"dark:!text-[#E68584]",
		"dark:!text-[#6F9AED]",
		"dark:!text-[#8CCB9E]",
		"dark:!text-[#F7D66B]",
		"dark:!text-[#6BA2A8]",
		"dark:!text-[#E1AE87]",
		"dark:!text-[#A7D0C0]",
		"dark:!text-[#FFBC5C]",
		"dark:!text-[#D3A0D8]",
	];

	return (
		<div>
			<li
				className={`flex items-center w-full px-2 py-1 text-secondaryText text-sm rounded cursor-pointer group-hover:text-primaryText`}
				onClick={() => {
					setOpen(!open);
				}}
			>
				{open ? (
					<IconFolderOpen
						size={16}
						className={`${levelColour[level % levelColour.length]} min-w-4`}
					/>
				) : (
					<IconFolderFilled
						size={16}
						className={`${levelColour[level % levelColour.length]} min-w-4`}
					/>
				)}
				<span className="ml-2 w-auto truncate">{name}</span>
			</li>

			<AnimatePresence initial={true}>
				{open && (
					<motion.ul
						className="border-l border-border ml-3.5"
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
								{file.extension === "json" && <p>file.name</p>}
								{file.extension === "folder" && (
									<FolderListItem
										key={index}
										name={file.name}
										files={file.files}
										level={level + 1}
										id={file.id}
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