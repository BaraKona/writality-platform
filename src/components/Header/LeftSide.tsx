import { IconArrowsMaximize, IconMinus, IconX } from "@tabler/icons-react";
import { isFullscreen, isSidebarOpen } from "../../signals";
import { appWindow } from "@tauri-apps/api/window";
import { useSignals } from "@preact/signals-react/runtime";
import { IconButtonWrapper } from "../button/IconButtonWrapper";
import dockLeft from "../../assets/dock-left.svg";

export const LeftSide = () => {
	useSignals();
	return (
		<div className="flex gap-2 rounded-lg px-2 items-center absolute left-2 top-2 z-10">
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
				className="hover:bg-matteBlack/5"
			>
				<img src={dockLeft} alt="dock right" className="w-4 h-4" />
			</IconButtonWrapper>
		</div>
	);
};
