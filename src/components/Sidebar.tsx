import { useSignals } from "@preact/signals-react/runtime";
import { isSidebarOpen } from "../signals";
export const Sidebar = () => {
	useSignals();

	return (
		<aside
			className={`bg-background border-r border-border w-64 ${
				isSidebarOpen.value ? "block" : "hidden"
			}`}
		></aside>
	);
};
