import { appWindow } from "@tauri-apps/api/window";
import { IconButtonWrapper } from "../button/IconButtonWrapper";
import { IconMinus, IconX } from "@tabler/icons-react";

export const Navbar = () => {
	return (
		<nav className="flex">
			<div className="flex gap-2 rounded-lg px-2 items-center">
				<IconButtonWrapper
					name="Exit"
					className="rounded h-4 w-4 p-0.5 bg-red-300/50 flex items-center justify-center z-10"
					onClick={() => appWindow.close()}
				>
					<IconX size={20} stroke={1} />
				</IconButtonWrapper>

				<IconButtonWrapper
					name="Minimize"
					onClick={() => appWindow.minimize()}
					className="rounded h-4 w-4 p-0.5 bg-gray-200/25 flex items-center justify-center z-10"
				>
					<IconMinus size={20} stroke={1} />
				</IconButtonWrapper>
			</div>
		</nav>
	);
};
