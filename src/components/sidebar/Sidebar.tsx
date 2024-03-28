import { useSignals } from "@preact/signals-react/runtime";
import { isSidebarOpen } from "../../signals";
import { TopNav } from "./TopNav";
import { SideNav } from "./SideNav";

export const Sidebar = () => {
	useSignals();

	return (
		<aside
			className={`bg-background border-r border-border w-64 p-2 ${
				isSidebarOpen.value ? "block" : "hidden"
			}`}
		>
			<section className="flex h-full grow">
				<SideNav />
				<TopNav />
			</section>
		</aside>
	);
};
