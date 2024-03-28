import { Center } from "./Center";
import { LeftSide } from "./LeftSide";

export const Header = () => {
	return (
		<div
			data-tauri-drag-region
			className="h-8 flex items-center text-slate-600 w-full"
		>
			<LeftSide />
			<Center />
		</div>
	);
};
