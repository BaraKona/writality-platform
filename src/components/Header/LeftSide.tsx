import {
	IconArrowsMaximize,
	IconLayoutSidebar,
	IconMinus,
	IconX,
} from "@tabler/icons-react";
import { isFullscreen, isSidebarOpen } from "../../signals";
import { appWindow } from "@tauri-apps/api/window";
import { useSignals } from "@preact/signals-react/runtime";

export const LeftSide = () => {
	useSignals();
	return (
		<div className="flex gap-2 rounded-lg px-2 items-center">
			<button
				className="rounded h-4 w-4 p-0.5 bg-red-300/50 flex items-center justify-center"
				onClick={() => appWindow.close()}
			>
				<IconX size={20} stroke={1} />
			</button>
			<button
				className="rounded h-4 w-4 p-0.5 bg-gray-200/25 flex items-center justify-center"
				onClick={() =>
					appWindow.setFullscreen((isFullscreen.value = !isFullscreen.value))
				}
			>
				<IconArrowsMaximize size={20} stroke={1} />
			</button>
			<button
				onClick={() => appWindow.minimize()}
				className="rounded h-4 w-4 p-0.5 bg-gray-200/25 flex items-center justify-center"
			>
				<IconMinus size={20} stroke={1} />
			</button>
			<button
				className={`p-0.5 hover:bg-gray-200/25 rounded-md mr-1 self-center`}
				onClick={() => (isSidebarOpen.value = !isSidebarOpen.value)}
			>
				<IconLayoutSidebar size={20} stroke={1} />
			</button>
		</div>
	);
};
