import {
	IconArrowsMaximize,
	IconLayoutSidebarRight,
	IconMinus,
	IconX,
} from "@tabler/icons-react";
import { appWindow } from "@tauri-apps/api/window";
import { useSignals } from "@preact/signals-react/runtime";
import { isFullscreen, isSidebarOpen } from "../signals";

export const Header = () => {
	useSignals();

	return (
		<div
			data-tauri-drag-region
			className="absolute right-3 top-0 flex gap-2 text-white w-full justify-end items-center"
		>
			<button
				className="p-1 hover:bg-gray-200/25 rounded-md"
				onClick={() => (isSidebarOpen.value = !isSidebarOpen.value)}
			>
				<IconLayoutSidebarRight size={20} />
			</button>
			<button
				onClick={() => appWindow.minimize()}
				className="rounded h-4 w-4 p-0.5 hover:bg-gray-200/25 flex items-center justify-center"
			>
				<IconMinus size={25} />
			</button>
			<button
				className="rounded h-4 w-4 p-0.5 hover:bg-gray-200/25 flex items-center justify-center"
				onClick={() =>
					appWindow.setFullscreen((isFullscreen.value = !isFullscreen.value))
				}
			>
				<IconArrowsMaximize size={10} />
			</button>
			<button
				className="rounded h-4 w-4 p-0.5 hover:bg-red-500/50 flex items-center justify-center"
				onClick={() => appWindow.close()}
			>
				<IconX size={10} />
			</button>
		</div>
	);
};
