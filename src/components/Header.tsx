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
			className="absolute right-2 h-10 top-0 flex gap-2 text-white w-full justify-end items-center"
		>
			<button
				className="p-0.5 hover:bg-gray-200/25 rounded-md"
				onClick={() => (isSidebarOpen.value = !isSidebarOpen.value)}
			>
				<IconLayoutSidebarRight size={20} stroke={1} />
			</button>
			{isSidebarOpen.value && (
				<>
					<button
						onClick={() => appWindow.minimize()}
						className="rounded h-4 w-4 p-0.5 hover:bg-gray-200/25 flex items-center justify-center"
					>
						<IconMinus size={20} stroke={1} />
					</button>
					<button
						className="rounded h-4 w-4 p-0.5 hover:bg-gray-200/25 flex items-center justify-center"
						onClick={() =>
							appWindow.setFullscreen(
								(isFullscreen.value = !isFullscreen.value)
							)
						}
					>
						<IconArrowsMaximize size={20} stroke={1} />
					</button>
					<button
						className="rounded h-4 w-4 p-0.5 hover:bg-red-500/50 flex items-center justify-center"
						onClick={() => appWindow.close()}
					>
						<IconX size={20} stroke={1} />
					</button>
				</>
			)}
		</div>
	);
};
