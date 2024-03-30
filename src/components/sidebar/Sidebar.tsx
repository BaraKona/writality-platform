import { useSignals } from "@preact/signals-react/runtime";
import { isSidebarOpen } from "../../signals";
import { TopNav } from "./TopNav";
import { SideNav } from "./SideNav";
import { useFiles } from "../../hooks/useFiles";

export const Sidebar = () => {
	useSignals();

	const { data, isLoading } = useFiles();

	console.log(data);
	return (
		<aside
			className={`bg-background border-r border-border w-64 p-2 ${
				isSidebarOpen.value ? "block" : "hidden"
			}`}
		>
			<section className="flex h-full grow">
				<SideNav />
				<TopNav>
					<div className="flex gap-2 flex-col items-center">
						{!isLoading && data?.length === 0 ? (
							<p className="text-center text-gray-500">
								No files found. Click the button below to create a new file.
							</p>
						) : null}

						{!isLoading && data?.length > 0 ? (
							<>
								{data.map((file) => (
									<button
										key={file.id}
										className="w-full text-left px-2 py-1 rounded-lg hover:bg-gray-200/25"
									>
										{file.filename}
									</button>
								))}
							</>
						) : null}
					</div>
				</TopNav>
			</section>
		</aside>
	);
};
