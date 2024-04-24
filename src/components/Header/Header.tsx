import { Center } from "./Center";
import { RightSide } from "./Right";
export const Header = () => {
	return (
		<div
			data-tauri-drag-region
			className="flex items-center text-slate-600 w-full p-1"
		>
			<Center />
			<RightSide />
		</div>
	);
};
