import { useSignals } from "@preact/signals-react/runtime";
import { isSidebarOpen } from "../../signals";
import { TopNav } from "./TopNav";
import { SideNav } from "./SideNav";
import { useFiles } from "../../hooks/useFiles";
import { useParams } from "@tanstack/react-router";
import { FolderListItem } from "./FolderListItem";
import { ScriptListItem } from "./ScriptListItem";

export const Sidebar = () => {
	useSignals();

	const { data } = useFiles();

	console.log({ data });

	// @ts-expect-error - path will be defined
	const { name } = useParams("file");

	return (
		<aside className={`w-64 p-2 ${isSidebarOpen.value ? "block" : "hidden"}`}>
			<section className="flex h-full grow">
				<SideNav />
				<TopNav>
					<div className="flex gap-0.5 flex-col mt-2 h-[calc(100vh-6rem)] overflow-y-auto">
						{data?.map((file, index) => (
							<>
								{file.extension === "folder" && (
									// <div className="flex items-center gap-2 py-1 px-2 cursor-pointer text-gray-600 hover:bg-hover rounded">
									// 	<IconFolder size={16} stroke={1.5} />

									// 	<p className="text-xs font-semibold">{file.filename}</p>
									// </div>
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
									/>
								)}
							</>
						))}

						{data?.length === 0 && (
							<p className="text-xs text-center text-text">
								Fresh starts are always good. Create a new file to get started.
							</p>
						)}
					</div>
				</TopNav>
			</section>
		</aside>
	);
};
