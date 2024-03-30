import { useSignals } from "@preact/signals-react/runtime";
import { isSidebarOpen } from "../../signals";
import { TopNav } from "./TopNav";
import { SideNav } from "./SideNav";
import { useFiles } from "../../hooks/useFiles";
import { IconFolder, IconScript } from "@tabler/icons-react";
import { Link, useParams } from "@tanstack/react-router";

export const Sidebar = () => {
	useSignals();

	const { data } = useFiles();

	console.log({ data });

	const { name } = useParams("file") as { name: string };

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
							<>
								{file.extension === "folder" && (
									<div className="flex items-center gap-2 py-1 px-2 cursor-pointer text-gray-600 hover:bg-hover rounded">
										<IconFolder size={16} stroke={1.5} />

										<p className="text-xs font-semibold">{file.filename}</p>
									</div>
								)}
								{file.extension === "json" && (
									<Link
										to={"file/" + file.filename}
										search={{
											path: file.path,
										}}
										key={index}
										className={`flex gap-2 hover:bg-hover rounded ${
											name === file.filename ? "bg-hover" : ""
										}`}
									>
										<div className="flex items-center gap-2 py-1 px-2 cursor-pointer text-gray-600">
											<IconScript size={16} stroke={1.5} />
											<p className="text-xs font-semibold">{file.filename}</p>
										</div>
									</Link>
								)}
							</>
						))}
					</div>
				</TopNav>
			</section>
		</aside>
	);
};
