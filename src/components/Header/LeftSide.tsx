import {
	IconArrowsMaximize,
	IconLayoutSidebar,
	IconMinus,
	IconX,
} from "@tabler/icons-react";
import { isFullscreen, isSidebarOpen } from "../../signals";
import { appWindow } from "@tauri-apps/api/window";
import { useSignals } from "@preact/signals-react/runtime";
import { IconButtonWrapper } from "../button/IconButtonWrapper";

export const LeftSide = () => {
	useSignals();
	return (
		<div className="flex gap-2 rounded-lg px-2 items-center">
			<IconButtonWrapper
				name="Exit"
				className="rounded h-4 w-4 p-0.5 bg-red-300/50 flex items-center justify-center"
				onClick={() => appWindow.close()}
			>
				<IconX size={20} stroke={1.5} />
			</IconButtonWrapper>
			<IconButtonWrapper
				name="Maximize"
				className="rounded h-4 w-4 p-0.5 bg-gray-200/25 flex items-center justify-center"
				onClick={() =>
					appWindow.setFullscreen((isFullscreen.value = !isFullscreen.value))
				}
			>
				<IconArrowsMaximize size={20} stroke={1.5} />
			</IconButtonWrapper>
			<IconButtonWrapper
				name="Minimize"
				onClick={() => appWindow.minimize()}
				className="rounded h-4 w-4 p-0.5 bg-gray-200/25 flex items-center justify-center"
			>
				<IconMinus size={20} stroke={1.5} />
			</IconButtonWrapper>
			<IconButtonWrapper
				name="Toggle Sidebar"
				onClick={() => (isSidebarOpen.value = !isSidebarOpen.value)}
			>
				<IconLayoutSidebar size={18} stroke={1.5} />
			</IconButtonWrapper>
		</div>
	);
};
