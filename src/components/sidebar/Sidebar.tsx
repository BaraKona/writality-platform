import { useSignals } from "@preact/signals-react/runtime";
import { isSidebarOpen } from "../../signals";
import { TopNav } from "./TopNav";
import { SideNav } from "./SideNav";
import { useFiles } from "../../hooks/useFiles";
import { IconFolder, IconScript } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

export const Sidebar = () => {
	useSignals();

	const { data, isLoading } = useFiles();

	return (
		<aside
			className={`bg-background border-r border-border w-64 p-2 ${
				isSidebarOpen.value ? "block" : "hidden"
			}`}
		>
			<section className="flex h-full grow">
				<SideNav />
				<TopNav>
					<div className="flex gap-0.5 flex-col mt-2">
						{data?.map((file, index) => (
							<Link
								to={"file/" + file.filename}
								search={{
									path: file.path,
								}}
								key={index}
								className="flex gap-2 hover:bg-hover rounded"
							>
								<div className="flex items-center gap-2 py-1 px-2 cursor-pointer text-gray-600">
									{file.extension === "folder" && (
										<IconFolder size={16} stroke={1} />
									)}
									{file.extension === "json" && (
										<IconScript size={16} stroke={1} />
									)}
									<p className="text-xs">{file.filename}</p>
								</div>
							</Link>
						))}
					</div>
				</TopNav>
			</section>
		</aside>
	);
};
