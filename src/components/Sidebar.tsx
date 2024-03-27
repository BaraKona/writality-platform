import { useSignals } from "@preact/signals-react/runtime";
import { isSidebarOpen } from "../signals";
export const Sidebar = () => {
	useSignals();

	return (
		<aside
			className={`bg-transparent ${isSidebarOpen.value ? "w-64" : "w-0"}`}
		></aside>
	);
};
