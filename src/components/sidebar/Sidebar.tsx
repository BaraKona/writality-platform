import { useSignals } from "@preact/signals-react/runtime";
import { isSidebarOpen } from "../../signals";
import { ItemSectionWrapper } from "./ItemSectionWrapper";
import { useFiles } from "../../hooks/useFiles";
import { useParams } from "@tanstack/react-router";
import { FolderListItem } from "./FolderListItem";
import { ScriptListItem } from "./ScriptListItem";
import { MenuItems } from "./MenuItems";

export const Sidebar = () => {
	useSignals();

	const { data } = useFiles();

	// @ts-expect-error - path will be defined
	const { name } = useParams("file");

	return (
		<aside
			className={`p-2 rounded-l-md relative overflow-y-auto bg-backgroundHover ${isSidebarOpen.value ? "w-64 " : "w-0 hidden"}`}
		>
			<section className="flex h-full grow">
				<div
					className={`w-full overflow-y-auto grow flex flex-col ${isSidebarOpen.value ? "block" : "hidden"}`}
				>
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
			</section>
		</aside>
	);
};
