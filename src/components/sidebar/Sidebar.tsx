import { useSignals } from "@preact/signals-react/runtime";
import { isSidebarOpen } from "../../signals";
import { ItemSectionWrapper } from "./ItemSectionWrapper";
import { useFiles } from "../../hooks/useFiles";
import { useParams } from "@tanstack/react-router";
import { FolderListItem } from "./FolderListItem";
import { ScriptListItem } from "./ScriptListItem";
import { MenuItems } from "./MenuItems";
import { AnimatePresence, motion } from "framer-motion";

export const Sidebar = () => {
	useSignals();

	const { data } = useFiles();

	// @ts-expect-error - path will be defined
	const { name } = useParams("file");

	return (
		<AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
			<motion.aside
				className="rounded-l-md relative overflow-y-auto bg-backgroundHover"
				animate={isSidebarOpen.value ? "open" : "closed"}
				initial={false}
				variants={{
					open: { opacity: 1, width: 265, display: "block", padding: 8 },
					closed: { opacity: 1, width: 0, display: "none", padding: 0 },
				}}
				exit={{ opacity: 0, display: "hidden" }}
			>
				<motion.section
					className="h-full grow"
					animate={isSidebarOpen.value ? "showing" : "hidden"}
					variants={{
						showing: { opacity: 1, display: "flex" },
						hidden: {
							opacity: 0,
							display: "none",
							transition: { duration: 0 },
						},
					}}
				>
					<div className={`w-full overflow-y-auto grow flex flex-col `}>
						<MenuItems />
						<ItemSectionWrapper>
							<div className="flex flex-col gap-0.5 mt-2 flex-grow overflow-y-auto">
								{data?.map((file, index) => (
									<>
										{file.extension === "folder" && (
											<FolderListItem
												files={file.children}
												key={index}
												name={file.filename}
												level={0}
												id={file.filename + index + 0}
												currentPath={name}
											/>
										)}
										{file.extension === "json" && (
											<ScriptListItem
												currentPath={name}
												key={index}
												name={file.filename}
												path={file.path}
												level={0}
											/>
										)}
									</>
								))}

								{data?.length === 0 && (
									<p className="text-xs text-center text-text">
										Fresh starts are always good. Create a new file to get
										started.
									</p>
								)}
							</div>
						</ItemSectionWrapper>
					</div>
				</motion.section>
			</motion.aside>
		</AnimatePresence>
	);
};
